(() => {
  const id = "G-5P18TLPN2D";
  const key = "agyagpad-analytics-v1";
  const footer = document.querySelector(".footer-note");
  const settings = document.createElement("button");
  settings.type = "button";
  settings.className = "analytics-settings";
  settings.textContent = "Sütibeállítások";
  footer.append(settings);

  const panel = document.createElement("dialog");
  panel.className = "analytics-panel";
  panel.setAttribute("aria-labelledby", "analytics-heading");
  panel.innerHTML = `
    <h2 id="analytics-heading">Statisztikai sütik</h2>
    <p>Engedélyezed, hogy a Google Analytics sütikkel mérje, mely oldalakat látogatod meg? A döntésedet a láblécben bármikor módosíthatod.</p>
    <p><a href="adatkezeles.html#statisztika">Adatkezelési tájékoztató</a></p>
    <p class="analytics-state"></p>
    <div><button type="button" value="denied">Elutasítom</button>
    <button type="button" value="granted">Engedélyezem</button></div>`;
  document.body.append(panel);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag("consent", "default", {
    analytics_storage: "denied", ad_storage: "denied",
    ad_user_data: "denied", ad_personalization: "denied"
  });

  let started = false;
  let choice;
  function apply(value) {
    choice = value;
    const allowed = choice === "granted";
    window["ga-disable-" + id] = !allowed;
    if (allowed && !started) {
      started = true;
      gtag("consent", "update", { analytics_storage: "granted" });
      gtag("js", new Date());
      gtag("config", id, { cookie_domain: "none", allow_google_signals: false,
        allow_ad_personalization_signals: false });
      const tag = document.createElement("script");
      tag.async = true;
      tag.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
      document.head.append(tag);
    } else if (!allowed && started) {
      gtag("consent", "update", { analytics_storage: "denied" });
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (name === "_ga" || name === "_ga_5P18TLPN2D") {
          document.cookie = name + "=; Max-Age=0; Path=/";
        }
      }
      location.reload();
    }
    panel.querySelector(".analytics-state").textContent = allowed
      ? "Jelenlegi beállítás: engedélyezve."
      : choice === "denied" ? "Jelenlegi beállítás: elutasítva." : "";
  }
  function readChoice() {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function restore() {
    apply(readChoice());
    if (choice === "granted" || choice === "denied") panel.close();
    else if (!panel.open) panel.show();
  }
  settings.addEventListener("click", () => {
    panel.close();
    panel.showModal();
  });
  panel.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    try { localStorage.setItem(key, button.value); } catch { /* Use the choice on this page. */ }
    panel.close();
    apply(button.value);
    settings.focus({ preventScroll: true });
  });
  window.addEventListener("storage", event => {
    if (event.key === key || event.key === null) restore();
  });
  window.addEventListener("pageshow", event => { if (event.persisted) restore(); });
  restore();
})();
