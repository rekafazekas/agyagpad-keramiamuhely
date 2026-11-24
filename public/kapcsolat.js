const dates = new Map([
  ["kostolo", [
    ["2026-11-28", "2026. november 28., szombat, 10:00–13:00"],
    ["2026-12-05", "2026. december 5., szombat, 10:00–13:00"]
  ]],
  ["harom-alkalom", [
    ["2027-01-12", "2027. január 12., 19. és 26., 18:00–20:30"]
  ]],
  ["negy-hetes-kurzus", [
    ["2027-01-14", "2027. január 14., 21., 28. és február 4., 18:00–20:30"]
  ]]
]);
const form = document.querySelector("#contact-form");
const topic = document.querySelector("#topic");
const courseDate = document.querySelector("#course-date");
const query = new URLSearchParams(location.search);

function showField(selector, visible) {
  const field = form.querySelector(selector);
  field.parentElement.hidden = !visible;
  field.disabled = !visible;
}

function updateForm(preferredDate) {
  const sessions = dates.get(topic.value) || [];
  const course = sessions.length > 0;
  const team = topic.value === "csapatepito";
  const voucher = topic.value === "utalvany";
  showField("#course-date", course);
  showField("#team-time", team);
  showField("#group-size", course || team);
  const groupSize = form.querySelector("#group-size");
  if (team) groupSize.removeAttribute("max");
  else groupSize.max = "6";
  const message = form.querySelector("#message");
  document.querySelector("#name-label").textContent = team ? "Kapcsolattartó neve" : "Neved";
  document.querySelector("#size-label").textContent = team ? "Összesen hány fővel terveztek?" : "Hányan jöttök?";
  message.placeholder = voucher
    ? "Melyik tanfolyamot adnád ajándékba, és milyen név kerüljön az utalványra?"
    : topic.value === "keramia" ? "Milyen darabot keresel, mire használnád?" : "Írd meg, ha van kérdésed vagy kérésed!";
  courseDate.replaceChildren();
  if (sessions.length > 1) courseDate.add(new Option("Válassz időpontot", ""));
  for (const [value, label] of sessions) courseDate.add(new Option(label, value));
  if (sessions.some(([date]) => date === preferredDate)) courseDate.value = preferredDate;
}

const requestedTopic = query.get("program") || query.get("tema");
if (Array.from(topic.options).some(option => option.value === requestedTopic)) topic.value = requestedTopic;
updateForm(query.get("idopont"));
const submitButton = form.querySelector('button[type="submit"]');
const controls = [...form.querySelectorAll(".form-group input, .form-group select, .form-group textarea")];
const touched = new Set();
const hints = new Map();
let sending = false;
for (const field of controls) {
  const hint = document.createElement("small");
  hint.id = field.id + "-feedback";
  hint.className = "field-feedback";
  field.parentElement.append(hint);
  field.setAttribute("aria-describedby", hint.id);
  hints.set(field, hint);
}

function fieldError(field) {
  if (field.type === "checkbox") return field.checked ? "" : "A küldéshez fogadd el az adatkezelési tájékoztatót.";
  const value = field.value.trim();
  if (field.validity.badInput) return "Egész számot adj meg.";
  if (!value) {
    if (!field.required) return "";
    if (field === topic) return "Válaszd ki, miben segíthetek.";
    if (field === courseDate) return "Válassz egy meghirdetett időpontot.";
    return "Töltsd ki ezt a mezőt.";
  }
  if (field.id === "contact-name" && !/^(?=.*\p{L})[\p{L}\p{M}\p{Pd} .'’ʼ·]+$/u.test(value)) {
    return "Betűkkel add meg a neved. Szóközt, kötőjelet és aposztrófot is használhatsz.";
  }
  if (field.id === "email" && (field.validity.typeMismatch || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))) {
    return "Ilyen formában add meg az e-mail-címed: anna@example.com.";
  }
  if (field.id === "group-size" && !field.validity.valid) {
    return field.max ? "Adj meg egy egész számot 1 és 6 között." : "Legalább 1 főt adj meg, egész számmal.";
  }
  if (field.id === "team-time" && !/[\p{L}\p{N}]/u.test(value)) return "Írd be a tervezett napot vagy időszakot.";
  if (field.id === "message" && !/[\p{L}\p{N}]/u.test(value)) return "Írd le röviden a kérésedet.";
  return "";
}

function validateForm() {
  let invalidCount = 0;
  for (const field of controls) {
    const error = field.disabled ? "" : fieldError(field);
    if (error) invalidCount++;
    const filled = field.type === "checkbox" ? field.checked : Boolean(field.value.trim());
    const show = !field.disabled && (filled || (touched.has(field) && Boolean(error)));
    const state = show ? (error ? "invalid" : "valid") : "";
    field.dataset.state = state;
    field.setAttribute("aria-invalid", String(state === "invalid"));
    hints.get(field).textContent = show ? (error || "✓ Rendben") : "";
  }
  submitButton.disabled = sending || invalidCount > 0;
  submitButton.textContent = sending ? "Küldés folyamatban…" : "Üzenet küldése";
  return invalidCount === 0;
}

function onFieldEdit(event) {
  if (!hints.has(event.target)) return;
  touched.add(event.target);
  validateForm();
}
topic.addEventListener("change", () => updateForm());
for (const event of ["input", "change", "focusout"]) form.addEventListener(event, onFieldEdit);
window.addEventListener("pageshow", () => { sending = false; validateForm(); });
form.noValidate = true;
validateForm();
form.hidden = false;

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (sending) return;
  controls.forEach(field => touched.add(field));
  if (!validateForm()) {
    form.querySelector('[aria-invalid="true"]').focus();
    return;
  }
  sending = true;
  validateForm();
  const fields = new URLSearchParams(new FormData(form));
  fields.set("form-name", form.name);
  let destination = "/sikertelen-kuldes.html";
  try {
    const response = await fetch("/", { method: "POST", body: fields });
    if (response.ok) destination = form.action;
  } catch {
    // A megszakadt kapcsolat esetén is a hibaoldal következik.
  }
  location.assign(destination);
});
