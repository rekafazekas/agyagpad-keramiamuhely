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
const form = document.querySelector("#demo-form");
const topic = document.querySelector("#topic");
const courseDate = document.querySelector("#course-date");
const feedback = document.querySelector("#result");
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
  message.required = voucher || topic.value === "keramia";
  document.querySelector("#name-label").textContent = team ? "Kapcsolattartó neve" : "Neved";
  document.querySelector("#size-label").textContent = team ? "Hány fővel terveztek?" : "Hányan jöttök?";
  message.placeholder = voucher
    ? "Melyik tanfolyamot adnád ajándékba, és milyen név kerüljön az utalványra?"
    : topic.value === "keramia" ? "Milyen darabot keresel, mire használnád?" : "Írd meg, ha van kérdésed vagy kérésed!";
  courseDate.replaceChildren();
  if (sessions.length > 1) courseDate.add(new Option("Válassz időpontot", ""));
  for (const [value, label] of sessions) courseDate.add(new Option(label, value));
  if (sessions.some(([date]) => date === preferredDate)) courseDate.value = preferredDate;
  feedback.textContent = "";
}

const requestedTopic = query.get("program") || query.get("tema");
if (Array.from(topic.options).some(option => option.value === requestedTopic)) topic.value = requestedTopic;
updateForm(query.get("idopont"));
topic.addEventListener("change", () => updateForm());
form.addEventListener("input", () => { feedback.textContent = ""; });
form.addEventListener("submit", event => {
  event.preventDefault();
  feedback.textContent = "A próbabeküldés sikerült. A megadott adatok a böngésződben maradtak.";
});
form.hidden = false;
