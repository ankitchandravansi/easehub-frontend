// script.js
// Core UI + global modal helpers for EaseHub

// 👇 Backend ka base URL
const API_BASE_URL = "https://easehub-backend.onrender.com";

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (!target || target === '#') return;
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// mobile hamburger
const hamb = document.getElementById('hambBtn');
const navLinks = document.getElementById('navLinks');
if (hamb && navLinks) {
  hamb.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.right = '24px';
      navLinks.style.top = '72px';
      navLinks.style.background = 'var(--glass)';
      navLinks.style.padding = '12px';
      navLinks.style.borderRadius = '10px';
      navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
    }
  });
}

// navbar scroll effect
const navInner = document.querySelector('.nav-inner');
if (navInner) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navInner.style.transform = 'translateY(-4px)';
      navInner.style.boxShadow = '0 18px 50px rgba(12,12,12,0.12)';
    } else {
      navInner.style.transform = 'translateY(0)';
      navInner.style.boxShadow = '0 8px 30px rgba(12,12,12,0.06)';
    }
  });
}

// 🔹 Global modal refs (services.js + index.js dono use karenge)
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalPrimary = document.getElementById('modalPrimary');
const modalSecondary = document.getElementById('modalSecondary');

function showModal(title, bodyHTML, primaryText = 'OK', primaryHandler = null) {
  if (!modal) return;
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHTML;
  modalPrimary.textContent = primaryText;

  modal.classList.add('show');

  modalPrimary.onclick = () => {
    if (primaryHandler) primaryHandler();
    hideModal();
  };
  if (modalSecondary) modalSecondary.onclick = hideModal;
  if (modalClose) modalClose.onclick = hideModal;
  if (modalBackdrop) modalBackdrop.onclick = hideModal;
}

function hideModal() {
  if (!modal) return;
  modal.classList.remove('show');
}

// global expose
window.showModal = showModal;
window.hideModal = hideModal;

// testimonial auto-scroll
(function () {
  const track = document.getElementById('testiTrack');
  if (!track) return;
  let idx = 0;
  setInterval(() => {
    idx++;
    if (idx > track.children.length - 1) idx = 0;
    track.style.transition = 'transform .6s ease';
    track.style.transform = `translateX(-${idx * 280}px)`;
  }, 3200);
})();

// demo contact form submit (no backend)
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) { alert('Please fill name and email'); return; }
    alert(`Demo request sent!\nName: ${name}\nEmail: ${email}\n(We will follow up)`);
    demoForm.reset();
  });
}

// footer year
const yrEl = document.getElementById('yr');
if (yrEl) {
  yrEl.textContent = new Date().getFullYear();
}

// small fade-in on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section, .hero-left, .hero-right').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity .8s ease, transform .8s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 + (i * 120));
  });
});
