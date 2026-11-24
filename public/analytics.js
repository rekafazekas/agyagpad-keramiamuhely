(() => {
  const id = "G-5P18TLPN2D";
  const disable = "ga-disable-" + id;
  window[disable] = true;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  const adsDenied = {
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied"
  };
  gtag("consent", "default", { ...adsDenied, analytics_storage: "denied" });

  let started = false;
  function syncConsent() {
    const consent = window.getCkyConsent?.();
    const allowed = consent?.isUserActionCompleted === true && consent.categories?.analytics === true;
    window[disable] = !allowed;
    if (!allowed) {
      for (const name of ["_ga", "_ga_5P18TLPN2D"]) {
        document.cookie = name + "=; Max-Age=0; Path=/";
      }
      if (started) {
        started = false;
        gtag("consent", "update", { ...adsDenied, analytics_storage: "denied" });
        location.reload();
      }
      return;
    }
    if (started) return;
    started = true;
    gtag("consent", "update", { ...adsDenied, analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("config", id, {
      cookie_domain: "none", allow_google_signals: false, allow_ad_personalization_signals: false
    });
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.append(tag);
  }

  // CookieYes renders the notice and the preference centre asynchronously.
  const purpose = "Engedélyezed, hogy a Google Analytics 4 statisztikai sütikkel mérje, mely oldalakat látogatod meg és hogyan használod a weboldalt? A választásodat a lábléc Sütibeállítások gombjával bármikor módosíthatod.";
  function updateNotice() {
    for (const selector of [".cky-notice-des", ".cky-preference-content-wrapper"]) {
      const container = document.querySelector(selector);
      if (!container) continue;
      const description = container.querySelector("p") || container;
      if (description.textContent !== purpose) description.textContent = purpose;
    }
  }
  new MutationObserver(updateNotice).observe(document.body, { childList: true, subtree: true });
  updateNotice();
  document.addEventListener("cookieyes_consent_update", syncConsent);
  document.addEventListener("cookieyes_banner_load", syncConsent);
  window.addEventListener("pageshow", syncConsent);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) syncConsent();
  });
  syncConsent();
})();
