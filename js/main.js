(function () {
  "use strict";

  const videos = [
    {
      title: "Why GenLayer powers part of Rally’s verification layer",
      description:
        "A sharp explainer on the connection between GenLayer and Rally, breaking down why verification infrastructure matters and how the two fit together in practice.",
      category: "Web3 Explainer",
      project: "GenLayer × Rally",
      url: "https://x.com/qudezmane/status/2106639113205977230",
      duration: "Under 2 minutes",
      tint: "cyan"
    },
    {
      title: "How FUD Markets and GenLayer work together",
      description:
        "A concise breakdown of prediction markets, outcome resolution, and why GenLayer enters the conversation when a market closes and needs a trusted result.",
      category: "Educational Content",
      project: "FUD Markets",
      url: "https://x.com/qudezmane/status/2101200882507354145",
      duration: "Under 3 minutes",
      tint: "violet"
    }
  ];

  const projects = [
    {
      name: "Portfolio Website",
      label: "Personal portfolio",
      description:
        "A polished one-page portfolio designed to present my software work, visual storytelling, and Web3 content under a single professional identity without mixing the two unnecessarily.",
      details: [
        "Responsive and accessible layout across desktop, tablet, and mobile",
        "Clear navigation and section hierarchy tailored for recruiters and collaborators",
        "Modern dark editorial styling with subtle motion and focus states"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://myportfolio-rose-psi-89.vercel.app/",
      sourceUrl: "#"
    }
  ];

  const skillGroups = [
    {
      title: "Development",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "REST APIs", "PostgreSQL", "MongoDB", "Git", "GitHub", "Vercel", "Docker", "VS Code", "Linux"]
    },
    {
      title: "Creative & Storytelling",
      items: ["Video Editing", "Short-form Storytelling", "Visual Design", "Canva", "Content Strategy", "Motion Graphics"]
    },
    {
      title: "Web3 & Emerging Tech",
      items: ["Web3", "Blockchain", "GenLayer", "FUD Markets", "Rally"]
    }
  ];

  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const yearEl = document.getElementById("year");
  const revealEls = document.querySelectorAll(".reveal");
  const videoGallery = document.getElementById("video-gallery");
  const projectList = document.getElementById("project-list");
  const skillsGrid = document.getElementById("skills-grid");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function renderVideoCards() {
    if (!videoGallery) {
      return;
    }

    videoGallery.innerHTML = videos
      .map(
        (video) => `
          <article class="video-card reveal">
            <div class="video-card__thumbnail video-card__thumbnail--${video.tint}" aria-hidden="true">
              <div class="video-card__thumbnail-label">${video.category}</div>
              <div class="video-card__play" aria-hidden="true">▶</div>
              <div class="video-card__project">${video.project}</div>
            </div>
            <div class="video-card__body">
              <div class="video-card__meta">
                <span class="video-card__badge">${video.category}</span>
                <span class="video-card__time">${video.duration}</span>
              </div>
              <h3>${video.title}</h3>
              <p>${video.description}</p>
              <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="text-link">Watch video</a>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderProjects() {
    if (!projectList) {
      return;
    }

    projectList.innerHTML = projects
      .map(
        (project) => `
          <article class="project-showcase reveal">
            <div class="project-showcase__media" aria-label="${project.name} preview">
              <div class="browser-window">
                <div class="browser-window__bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="browser-window__content">
                  <div class="browser-window__line browser-window__line--long"></div>
                  <div class="browser-window__line"></div>
                  <div class="browser-window__line browser-window__line--short"></div>
                  <div class="browser-window__panel">
                    <span>Q</span>
                    <span>${project.name.split(" ")[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-showcase__content">
              <p class="project-showcase__eyebrow">${project.label}</p>
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <ul class="feature-list">
                ${project.details.map((detail) => `<li>${detail}</li>`).join("")}
              </ul>
              <div class="tag-list" aria-label="Technology stack">
                ${project.stack.map((item) => `<span>${item}</span>`).join("")}
              </div>
              <div class="project-showcase__links">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live site</a>
                ${project.sourceUrl !== "#" ? `<a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer">Source code</a>` : ""}
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderSkills() {
    if (!skillsGrid) {
      return;
    }

    skillsGrid.innerHTML = skillGroups
      .map(
        (group) => `
          <div class="skills-group reveal">
            <h3>${group.title}</h3>
            <div class="tag-list">
              ${group.items.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
        `
      )
      .join("");
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
      navLinks.forEach(function (item) {
        item.classList.toggle("active", item === link);
      });
    });
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (navMenu && navMenu.classList.contains("open") && !navMenu.contains(target) && !(navToggle && navToggle.contains(target))) {
      navMenu.classList.remove("open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  renderVideoCards();
  renderProjects();
  renderSkills();

  const revealNodes = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach(function (el) {
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

  revealNodes.forEach(function (el) {
    observer.observe(el);
  });
})();
