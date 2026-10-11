(function () {
  "use strict";

  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const yearEl = document.getElementById("year");
  const revealEls = document.querySelectorAll(".reveal");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (header) {
    function onScroll() {
      header.classList.toggle("header--scrolled", window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("open");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
      if (navMenu) {
        navMenu.classList.remove("open");
      }
    });
  });

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
