/* =============================================
   KICKS KENYA — Main JavaScript
   ============================================= */

// ---- Dark Mode Toggle ----
(function () {
  const toggle = document.getElementById('darkModeToggle');
  const saved = localStorage.getItem('kicks-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggle) toggle.textContent = '☀ Light';
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('kicks-theme', 'light');
        toggle.textContent = '☾ Dark';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('kicks-theme', 'dark');
        toggle.textContent = '☀ Light';
      }
    });
  }
})();

// ---- Back to top ----
(function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ---- Product Filter (shop.html) ----
function initProductFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-item');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter || card.dataset.brand === filter;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.style.animation = 'fadeIn 0.3s ease';
        }
      });

      // Update count
      const visible = [...cards].filter(c => c.style.display !== 'none').length;
      const countEl = document.getElementById('productCount');
      if (countEl) countEl.textContent = visible + ' shoes found';
    });
  });
}

// ---- Price range filter ----
function initPriceFilter() {
  const slider = document.getElementById('priceRange');
  const display = document.getElementById('priceDisplay');
  const cards = document.querySelectorAll('.product-item');
  if (!slider) return;

  slider.addEventListener('input', () => {
    const max = parseInt(slider.value);
    display.textContent = 'KES ' + max.toLocaleString();
    cards.forEach(card => {
      const price = parseInt(card.dataset.price || '999999');
      card.style.display = price <= max ? '' : 'none';
    });
    const visible = [...cards].filter(c => c.style.display !== 'none').length;
    const countEl = document.getElementById('productCount');
    if (countEl) countEl.textContent = visible + ' shoes found';
  });
}

// ---- Size selector (product detail) ----
function initSizeSelector() {
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

// ---- Contact Form Validation ----
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Name
    const name = document.getElementById('contactName');
    const nameErr = document.getElementById('nameError');
    if (!name.value.trim() || name.value.trim().length < 2) {
      nameErr.classList.add('show');
      name.classList.add('is-invalid');
      valid = false;
    } else {
      nameErr.classList.remove('show');
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
    }

    // Email
    const email = document.getElementById('contactEmail');
    const emailErr = document.getElementById('emailError');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.value.trim())) {
      emailErr.classList.add('show');
      email.classList.add('is-invalid');
      valid = false;
    } else {
      emailErr.classList.remove('show');
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // Phone (optional but validate format if provided)
    const phone = document.getElementById('contactPhone');
    const phoneErr = document.getElementById('phoneError');
    if (phone && phone.value.trim()) {
      const phoneRe = /^(\+254|07|01)\d{8,9}$/;
      if (!phoneRe.test(phone.value.trim().replace(/\s/g, ''))) {
        phoneErr.classList.add('show');
        phone.classList.add('is-invalid');
        valid = false;
      } else {
        phoneErr.classList.remove('show');
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
      }
    }

    // Message
    const msg = document.getElementById('contactMessage');
    const msgErr = document.getElementById('messageError');
    if (!msg.value.trim() || msg.value.trim().length < 10) {
      msgErr.classList.add('show');
      msg.classList.add('is-invalid');
      valid = false;
    } else {
      msgErr.classList.remove('show');
      msg.classList.remove('is-invalid');
      msg.classList.add('is-valid');
    }

    if (valid) {
      const successEl = document.getElementById('formSuccess');
      if (successEl) {
        successEl.style.display = 'block';
        form.reset();
        form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        setTimeout(() => { successEl.style.display = 'none'; }, 5000);
      }
    }
  });
}

// ---- Image gallery (product detail) ----
function initGallery() {
  const thumbs = document.querySelectorAll('.thumb-img');
  const mainImg = document.getElementById('mainProductImg');
  if (!thumbs.length || !mainImg) return;
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.textContent = thumb.dataset.emoji || mainImg.textContent;
    });
  });
}

// ---- Quantity selector ----
function initQty() {
  const minus = document.getElementById('qtyMinus');
  const plus = document.getElementById('qtyPlus');
  const qty = document.getElementById('qtyVal');
  if (!minus || !plus || !qty) return;
  minus.addEventListener('click', () => {
    const v = parseInt(qty.textContent);
    if (v > 1) qty.textContent = v - 1;
  });
  plus.addEventListener('click', () => {
    const v = parseInt(qty.textContent);
    if (v < 10) qty.textContent = v + 1;
  });
}

// ---- Add to cart toast ----
function initAddToCart() {
  const btn = document.getElementById('addToCartBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const size = document.querySelector('.size-btn.selected');
    if (!size) {
      alert('Please select a size first!');
      return;
    }
    const toast = document.getElementById('cartToast');
    if (toast) {
      toast.style.display = 'flex';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
  });
}

// ---- Animate on scroll ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ---- Init all ----
document.addEventListener('DOMContentLoaded', () => {
  initProductFilter();
  initPriceFilter();
  initSizeSelector();
  initContactForm();
  initGallery();
  initQty();
  initAddToCart();
  initScrollAnimations();
});

// CSS animation
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }`;
document.head.appendChild(style);
// dark mode toggle
