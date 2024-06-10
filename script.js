document.addEventListener("DOMContentLoaded", () => {
  // Matrix Rain Effect
  const canvas = document.getElementById("matrix-rain");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";

  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 30);

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Custom Cursor
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
    follower.setAttribute(
      "style",
      "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
    );
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-content", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
  gsap.from(".nav-links li", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.utils.toArray(".tech-item").forEach((item) => {
    gsap.from(item, {
      scrollTrigger: item,
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });
  });

  // Parallax Effect
  document.addEventListener("mousemove", (e) => {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });

  // Mobile Navigation
  const navIcon = document.querySelector(".nav-icon");
  const navLinks = document.querySelector(".nav-links");

  navIcon.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  // Research Timeline Animation
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });
  });

  // Team Member Hover Effect
  const teamMembers = document.querySelectorAll(".team-member");

  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", () => {
      gsap.to(member.querySelector(".member-info"), {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      });
    });

    member.addEventListener("mouseleave", () => {
      gsap.to(member.querySelector(".member-info"), {
        duration: 0.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });
    });
  });
});

// Add this to your existing JavaScript file
// Add this to your existing JavaScript file

// Gallery Lightbox
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const lightboxImage = document.createElement("img");
lightbox.appendChild(lightboxImage);

const closeLightbox = () => {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
};

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imageSource = item.querySelector("img").src;
    lightboxImage.src = imageSource;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

lightbox.addEventListener("click", closeLightbox);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-hero", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".mission-section .section-title", {
  scrollTrigger: ".mission-section .section-title",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".mission-text", {
  scrollTrigger: ".mission-text",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.2,
});
gsap.from(".research-scope .section-title", {
  scrollTrigger: ".research-scope .section-title",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".scope-text", {
  scrollTrigger: ".scope-text",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.2,
});
gsap.from(".active-projects .section-title", {
  scrollTrigger: ".active-projects .section-title",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".project-item", {
  scrollTrigger: ".project-item",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
});
gsap.from(".gallery-section .section-title", {
  scrollTrigger: ".gallery-section .section-title",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".gallery-container", {
  scrollTrigger: ".gallery-container",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".gallery-item", {
  scrollTrigger: ".gallery-item",
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.1,
});

/* research.html */
document.addEventListener("DOMContentLoaded", () => {
  // Matrix Rain Effect
  const canvas = document.getElementById("matrix-rain");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";

  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 30);

  // Responsive Header
  // Responsive Header
  const navIcon = document.querySelector(".nav-icon");
  const navLinks = document.querySelector(".nav-links");

  navIcon.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  // Set active link
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".research-hero", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from(".research-areas .section-title", {
    scrollTrigger: ".research-areas .section-title",
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from(".research-card", {
    scrollTrigger: ".research-card",
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
  });
  gsap.from(".featured-research .section-title", {
    scrollTrigger: ".featured-research .section-title",
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from(".timeline-item", {
    scrollTrigger: ".timeline-item",
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
  });
  gsap.from(".publications .section-title", {
    scrollTrigger: ".publications .section-title",
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from(".pub-item", {
    scrollTrigger: ".pub-item",
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.1,
  });

  // Custom Cursor
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
    follower.setAttribute(
      "style",
      "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
    );
  });
});


// Add this to your existing JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    // Contact Page Animations
    gsap.from('.contact-hero', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
    gsap.from('.info-item', { 
        scrollTrigger: '.info-item', 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out',
        stagger: 0.2
    });
    gsap.from('.map-container', { 
        scrollTrigger: '.map-container', 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
    });
    gsap.from('.connect-section .section-title', { 
        scrollTrigger: '.connect-section .section-title', 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
    });
    gsap.from('.section-text', { 
        scrollTrigger: '.section-text', 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out',
        delay: 0.2
    });
    gsap.from('.tag', { 
        scrollTrigger: '.tag', 
        duration: 1, 
        scale: 0.5, 
        opacity: 0, 
        ease: 'back.out(1.7)',
        stagger: 0.1
    });

    // Update the active link in the header
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});