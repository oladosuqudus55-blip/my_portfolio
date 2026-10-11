(function () {
  "use strict";

  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function onScroll() {
    header.classList.toggle("header--scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", function () {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });

  const revealEls = document.querySelectorAll(
    ".section__title, .about, .project-card, .skills__group, .contact__text, .btn--large, .contact__social"
  );

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
