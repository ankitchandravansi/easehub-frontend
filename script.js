// script.js
// Core UI + global modal helpers for EaseHub

// NOTE:
// ✅ API_BASE_URL ab sirf services.js me hai
// ❌ Yaha dobara declare mat karna

// -----------------------------------------------------
// 1) Smooth scroll for internal anchors
// -----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (!target || target === '#') return;
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// -----------------------------------------------------
// 2) Mobile hamburger menu
// -----------------------------------------------------
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

// -----------------------------------------------------
// 3) Navbar scroll effect
// -----------------------------------------------------
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

// -----------------------------------------------------
// 4) Global generic modal (for Details / Demo etc.)
// -----------------------------------------------------
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

// -----------------------------------------------------
// 5) Testimonials auto-scroll
// -----------------------------------------------------
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

// -----------------------------------------------------
// 6) Demo contact form submit (no backend)
// -----------------------------------------------------
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
      alert('Please fill name and email');
      return;
    }
    alert(`Demo request sent!\nName: ${name}\nEmail: ${email}\n(We will follow up)`);
    demoForm.reset();
  });
}

// -----------------------------------------------------
// 7) Footer year
// -----------------------------------------------------
const yrEl = document.getElementById('yr');
if (yrEl) {
  yrEl.textContent = new Date().getFullYear();
}

// -----------------------------------------------------
// 8) Auth modal + fade-in animations (after DOM ready)
// -----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 8.1) Small fade-in on load
  document.querySelectorAll('.section, .hero-left, .hero-right').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity .8s ease, transform .8s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 + (i * 120));
  });

  // 8.2) AUTH MODAL LOGIC (Login / Signup)

  // Buttons jaha se login modal open hoga
  const signInButtons = document.querySelectorAll(
    "[data-easehub='open-auth-modal']"
  );

  // Auth modal elements (alag hai generic modal se)
  const authModal = document.getElementById('authModal');
  const authOverlay = document.getElementById('authOverlay');
  const closeAuthButtons = document.querySelectorAll(
    "[data-easehub='close-auth-modal']"
  );

  const loginTabBtn = document.getElementById('loginTabBtn');
  const signupTabBtn = document.getElementById('signupTabBtn');

  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  const loginSection = document.getElementById('loginSection');
  const signupSection = document.getElementById('signupSection');

  const loginErrorBox = document.getElementById('loginError');
  const signupErrorBox = document.getElementById('signupError');

  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  const signupSubmitBtn = document.getElementById('signupSubmitBtn');

  function openAuthModal() {
    if (!authModal) return;
    authModal.classList.add('eh-modal--open');
    if (authOverlay) authOverlay.classList.add('eh-overlay--open');
  }

  function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove('eh-modal--open');
    if (authOverlay) authOverlay.classList.remove('eh-overlay--open');
    // Errors clear
    if (loginErrorBox) {
      loginErrorBox.textContent = '';
      loginErrorBox.style.display = 'none';
    }
    if (signupErrorBox) {
      signupErrorBox.textContent = '';
      signupErrorBox.style.display = 'none';
    }
  }

  function showLogin() {
    if (loginSection) loginSection.style.display = 'block';
    if (signupSection) signupSection.style.display = 'none';
    if (loginTabBtn) loginTabBtn.classList.add('active-tab');
    if (signupTabBtn) signupTabBtn.classList.remove('active-tab');
  }

  function showSignup() {
    if (loginSection) loginSection.style.display = 'none';
    if (signupSection) signupSection.style.display = 'block';
    if (loginTabBtn) loginTabBtn.classList.remove('active-tab');
    if (signupTabBtn) signupTabBtn.classList.add('active-tab');
  }

  function setLoading(button, isLoading) {
    if (!button) return;
    if (isLoading) {
      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = 'Please wait...';
    } else {
      button.disabled = false;
      if (button.dataset.originalText) {
        button.textContent = button.dataset.originalText;
      }
    }
  }

  function setError(box, message) {
    if (!box) return;
    box.textContent = message || '';
    box.style.display = message ? 'block' : 'none';
  }

  // Open auth modal from any "Sign In" button
  signInButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showLogin();
      openAuthModal();
    });
  });

  // Close auth modal
  closeAuthButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAuthModal();
    });
  });

  if (authOverlay) {
    authOverlay.addEventListener('click', () => {
      closeAuthModal();
    });
  }

  // ESC key se close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAuthModal();
  });

  // Tabs switch
  if (loginTabBtn) {
    loginTabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showLogin();
    });
  }

  if (signupTabBtn) {
    signupTabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSignup();
    });
  }

  // ---------- LOGIN SUBMIT ----------
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!window.easehubApi || !window.easehubApi.login) {
        alert('Auth system not loaded properly. Please refresh.');
        return;
      }

      const email = loginForm.querySelector('#loginEmail')?.value.trim();
      const password = loginForm.querySelector('#loginPassword')?.value.trim();

      if (!email || !password) {
        setError(loginErrorBox, 'Please enter email and password.');
        return;
      }

      setError(loginErrorBox, '');
      setLoading(loginSubmitBtn, true);

      try {
        const res = await window.easehubApi.login({ email, password });
        console.log('Login success:', res);
        setLoading(loginSubmitBtn, false);
        alert('Logged in successfully ✅');
        closeAuthModal();

        // TODO: yaha baad me UI update (user name, profile, etc.)
      } catch (err) {
        console.error('Login error:', err);
        setLoading(loginSubmitBtn, false);
        setError(
          loginErrorBox,
          err?.message || 'Login failed. Please try again.'
        );
      }
    });
  }

  // ---------- SIGNUP SUBMIT ----------
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!window.easehubApi || !window.easehubApi.register) {
        alert('Auth system not loaded properly. Please refresh.');
        return;
      }

      const name = signupForm.querySelector('#signupName')?.value.trim();
      const email = signupForm.querySelector('#signupEmail')?.value.trim();
      const password = signupForm.querySelector('#signupPassword')?.value.trim();

      if (!name || !email || !password) {
        setError(signupErrorBox, 'Please fill all fields.');
        return;
      }

      setError(signupErrorBox, '');
      setLoading(signupSubmitBtn, true);

      try {
        const res = await window.easehubApi.register({ name, email, password });
        console.log('Signup success:', res);
        setLoading(signupSubmitBtn, false);
        alert('Account created successfully ✅. You can now log in.');
        showLogin();
      } catch (err) {
        console.error('Signup error:', err);
        setLoading(signupSubmitBtn, false);
        setError(
          signupErrorBox,
          err?.message || 'Signup failed. Please try again.'
        );
      }
    });
  }

  // Default state: login tab
  showLogin();
});
