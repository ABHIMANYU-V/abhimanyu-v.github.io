/* =========================
   ABHIMANYU PORTFOLIO JS
========================= */

document.addEventListener("DOMContentLoaded", () => {
  // Init scroll animations
  if (window.AOS) {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 60
    });
  }

  // Terminal typing animation
  const terminal = document.getElementById("terminalText");

  if (terminal) {
    const fullText = terminal.innerText;
    terminal.innerText = "";

    let i = 0;

    const type = () => {
      if (i < fullText.length) {
        terminal.innerText += fullText.charAt(i);
        i++;
        setTimeout(type, 14);
      }
    };

    setTimeout(type, 400);
  }

  // Active nav highlight
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const activateNav = () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", activateNav);
  activateNav();

  // Navbar glass effect on scroll
  const header = document.querySelector(".header");

  const navScroll = () => {
    if (window.scrollY > 20) {
      header.style.background = "rgba(6,7,11,.82)";
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
      header.style.background = "rgba(6,7,11,.65)";
      header.style.boxShadow = "none";
    }
  };

  window.addEventListener("scroll", navScroll);
  navScroll();

  // Metric cards hover glow
  const metricCards = document.querySelectorAll(".metric-card");

  metricCards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(94,234,212,.12),
          rgba(255,255,255,.03) 40%
        )
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "var(--card)";
    });
  });

  // Profile card subtle floating effect
  const profileCard = document.querySelector(".profile-card");

  if (profileCard) {
    window.addEventListener("mousemove", e => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;

      profileCard.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;
    });

    window.addEventListener("mouseleave", () => {
      profileCard.style.transform =
        "rotateY(0deg) rotateX(0deg)";
    });
  }

  // Number pulse effect
  const counters = document.querySelectorAll(".metric-card h3");

  counters.forEach(counter => {
    counter.addEventListener("mouseenter", () => {
      counter.style.transform = "scale(1.08)";
      counter.style.transition = ".25s ease";
    });

    counter.addEventListener("mouseleave", () => {
      counter.style.transform = "scale(1)";
    });
  });

  // Smooth reveal for project cards
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 20px 50px rgba(94,234,212,.12)";
      card.style.borderColor = "rgba(94,234,212,.25)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
      card.style.borderColor = "rgba(255,255,255,.08)";
    });
  });

  // Copy email helper
  const emailLink = document.querySelector('a[href^="mailto:"]');

  if (emailLink) {
    emailLink.addEventListener("click", async e => {
      const email = "iamabhimanyu38@gmail.com";

      try {
        await navigator.clipboard.writeText(email);
        console.log("Email copied:", email);
      } catch (err) {
        console.log("Clipboard unavailable");
      }
    });
  }

  // Console signature
  console.log(`
╔══════════════════════════════════════╗
║      ABHIMANYU V PORTFOLIO           ║
║  Java Backend Engineer               ║
║  Spring | Kafka | Redis | RabbitMQ  ║
╚══════════════════════════════════════╝
  `);
});
