// Scroll animation
const items = document.querySelectorAll('.ani');

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

items.forEach(el => obs.observe(el));

// Active link highlight
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100;
  document.querySelectorAll(".nav-link").forEach(link => {
    let href = link.getAttribute("href");
    if (!href || href === "#" || !href.startsWith("#")) return;
    let sec = document.querySelector(href);
    if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
      document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
