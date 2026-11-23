const header = document.querySelector("body > header");
const bar = header.querySelector(".bar");
const mainNav = bar.querySelector("nav");
const menuToggle = document.createElement("button");
mainNav.id = "fo-menu";
menuToggle.type = "button";
menuToggle.className = "menu-toggle";
menuToggle.setAttribute("aria-controls", mainNav.id);
const menuIcon = document.createElement("span");
menuIcon.setAttribute("aria-hidden", "true");
menuToggle.append(menuIcon);

function setMenuOpen(open) {
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Menü bezárása" : "Menü megnyitása");
  menuIcon.textContent = open ? "×" : "☰";
}

setMenuOpen(false);
mainNav.before(menuToggle);
bar.classList.add("has-menu");
menuToggle.addEventListener("click", () => setMenuOpen(!mainNav.classList.contains("open")));
mainNav.addEventListener("click", event => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mainNav.classList.contains("open")) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
matchMedia("(max-width: 800px)").addEventListener("change", () => setMenuOpen(false));

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 32);
}

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("pageshow", syncHeader);
syncHeader();

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove("pending");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: .07 });
  for (const section of document.querySelectorAll("main > section:not(:first-child)")) {
    if (section.getBoundingClientRect().top >= window.innerHeight) {
      section.classList.add("pending");
      observer.observe(section);
    }
  }
}
