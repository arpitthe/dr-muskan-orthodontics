export function scrollToSection(sectionId: string, offset = 80, value?: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  
  const lenis = window.globalLenis;
  if (lenis) {
    lenis.scrollTo(top, { duration: 1.2 });
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }

  if (value) {
    window.dispatchEvent(new CustomEvent("scrollToSectionTriggered", {
      detail: { sectionId, value }
    }));
  }
}
