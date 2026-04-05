/* Project: Rico Portfolio | Version: v0.6.0 | Updated: 2026-04-05 */

/* ============================================================
   DAFTAR ISI (TABLE OF CONTENTS)
   1. IntersectionObserver — Deteksi section aktif & update nav sidebar
   2. Mobile Nav — Hamburger toggle & tutup otomatis
   3. Portfolio Filter — Tampil/sembunyikan kartu dengan grid fade animation
   4. Smooth Scroll — Klik link anchor dengan offset untuk mobile navbar
   5. Footer — Isi tahun otomatis
   6. Dark / Light Mode Toggle
   7. Back to Top Button
   8. Contact Form (Formspree)
   9. AOS Scroll Animations
============================================================ */


/* ============================================================
   1. INTERSECTIONOBSERVER — ACTIVE SECTION DETECTION
   Memantau section mana yang sedang terlihat di layar,
   lalu update tampilan link nav sidebar secara otomatis.
   Lebih efisien dibanding scroll event karena browser
   yang mengatur perhitungannya (bukan main thread JS).
============================================================ */

/* Ambil semua link navigasi sidebar */
const navLinks = document.querySelectorAll('.nav-link');

/**
 * setActiveNav — Tandai link nav sebagai aktif berdasarkan id section
 * @param {string} sectionId — id dari section yang sedang terlihat
 */
function setActiveNav(sectionId) {
  navLinks.forEach(link => {
    /* data-section pada tiap link harus cocok dengan id section-nya */
    const isActive = link.dataset.section === sectionId;
    link.classList.toggle('active', isActive);
  });
}

/* Konfigurasi IntersectionObserver:
   rootMargin: '-20% 0px -70% 0px'
   → section dianggap "aktif" saat posisinya di antara 20% dan 70% dari atas layar
   Ini memberikan rasa natural saat user scroll — link berubah tepat di tengah layar */
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  },
  { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
);

/* Pantau semua section yang memiliki atribut id */
document.querySelectorAll('section[id]').forEach(section => {
  sectionObserver.observe(section);
});

/* Set nav aktif awal: "about" saat halaman pertama dibuka */
setActiveNav('about');


/* ============================================================
   2. MOBILE NAV — HAMBURGER TOGGLE
   Buka/tutup drawer menu saat tombol hamburger diklik.
   Kunci scroll body agar tidak scroll di belakang menu.
============================================================ */

const hamburger    = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileNav    = document.getElementById('mobileNav');

if (hamburger && mobileDrawer) {

  /* Fungsi helper: tutup drawer dan kembalikan state ke default */
  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; /* Lepas kunci scroll */
  }

  /* Toggle drawer saat tombol hamburger diklik */
  hamburger.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    /* Kunci scroll body saat menu terbuka */
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Tutup drawer saat salah satu link di dalamnya diklik */
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* Tutup drawer saat klik di luar area navbar dan drawer */
  document.addEventListener('click', (e) => {
    const clickedOutsideNav    = !mobileNav.contains(e.target);
    const clickedOutsideDrawer = !mobileDrawer.contains(e.target);
    if (mobileDrawer.classList.contains('open') && clickedOutsideNav && clickedOutsideDrawer) {
      closeDrawer();
    }
  });

}


/* ============================================================
   3. PORTFOLIO FILTER
   Saat tombol filter diklik, sembunyikan kartu yang tidak cocok
   dengan kategori yang dipilih menggunakan class .hidden.
============================================================ */

const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const projectGrid  = document.querySelector('.project-grid');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    /* Pindahkan class .active ke tombol yang diklik */
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    /* Nilai filter: "all", "qa", atau "pm" */
    const filter = btn.dataset.filter;

    /* Fade-out grid sebentar, lalu update kartu, lalu fade-in kembali */
    if (projectGrid) projectGrid.classList.add('filter-transitioning');

    setTimeout(() => {
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
      if (projectGrid) projectGrid.classList.remove('filter-transitioning');
    }, 200);

  });
});


/* ============================================================
   4. SMOOTH SCROLL DENGAN OFFSET
   Saat link anchor diklik, scroll dengan offset agar konten
   tidak tertutup mobile navbar (56px tinggi navbar).
   CSS scroll-behavior: smooth sudah ditangani browser modern,
   tapi kita tambahkan offset manual untuk mobile.
============================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    /* FIX: Langsung tandai nav aktif saat link diklik.
       Mengatasi bug Contact → Skills karena IntersectionObserver
       rootMargin terlalu agresif untuk section pendek di ujung halaman. */
    const sectionId = targetId.replace('#', '');
    if (sectionId) setActiveNav(sectionId);

    /* Hitung offset: 70px di mobile (ada navbar atas), 0 di desktop */
    const isMobile = window.innerWidth <= 768;
    const offset   = isMobile ? 70 : 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});


/* ============================================================
   5. FOOTER — TAHUN OTOMATIS
   Mengisi elemen #year dengan tahun sekarang agar tidak perlu
   update manual setiap tahun baru.
============================================================ */

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* ============================================================
   6. DARK / LIGHT MODE TOGGLE
   Simpan preferensi user di localStorage.
   Tambahkan/hapus data-theme="dark" di <html>.
============================================================ */

const themeToggle = document.getElementById('themeToggle');
const htmlEl      = document.documentElement;

/* Terapkan tema tersimpan saat halaman dimuat */
if (localStorage.getItem('theme') === 'dark') {
  htmlEl.setAttribute('data-theme', 'dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    if (isDark) {
      htmlEl.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}


/* ============================================================
   7. BACK TO TOP BUTTON
   Muncul saat scroll > 300px. Klik → smooth scroll ke atas.
============================================================ */

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNav('about');   /* Tandai nav aktif kembali ke About */
  });
}


/* ============================================================
   8. CONTACT FORM — Formspree
   Submit async, tampilkan pesan sukses/gagal tanpa reload.
   Ganti action URL form di HTML dengan endpoint Formspree kamu.
============================================================ */

const contactForm   = document.getElementById('contactForm');
const formStatus    = document.getElementById('form-status');
const formSubmitBtn = document.getElementById('form-submit');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* Cegah double-submit */
    if (formSubmitBtn) {
      formSubmitBtn.disabled = true;
      formSubmitBtn.textContent = 'Sending...';
    }
    formStatus.textContent = '';
    formStatus.className   = 'form-status';

    try {
      const res = await fetch(contactForm.action, {
        method:  'POST',
        body:    new FormData(contactForm),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        formStatus.textContent = 'Message sent! I will get back to you soon.';
        formStatus.className   = 'form-status success';
        contactForm.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        formStatus.textContent = data.error || 'Oops! Something went wrong. Please try again.';
        formStatus.className   = 'form-status error';
      }
    } catch {
      formStatus.textContent = 'Oops! Network error. Please check your connection.';
      formStatus.className   = 'form-status error';
    } finally {
      if (formSubmitBtn) {
        formSubmitBtn.disabled    = false;
        formSubmitBtn.textContent = 'Send Message';
      }
    }
  });
}


/* ============================================================
   9. AOS — ANIMATE ON SCROLL
   Tambahkan data-aos ke elemen secara programatik agar
   tidak perlu edit banyak tempat di HTML.
   Library dimuat via CDN di index.html.
============================================================ */

function initScrollAnimations() {
  /* Kartu experience: fade-up */
  document.querySelectorAll('.tl-card-col').forEach((el) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-duration', '550');
  });

  /* Kartu proyek: fade-up, stagger per kolom (kiri=0, kanan=120ms) */
  document.querySelectorAll('.project-card').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', String((i % 2) * 120));
    el.setAttribute('data-aos-duration', '550');
  });

  /* Baris skill: fade-up bertahap */
  document.querySelectorAll('.skill-row').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', String(i * 60));
    el.setAttribute('data-aos-duration', '500');
  });

  /* Stat cards: fade-up bertahap */
  document.querySelectorAll('.stat-card').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', String(i * 100));
    el.setAttribute('data-aos-duration', '500');
  });

  /* Section headings: fade-up */
  document.querySelectorAll('.section-heading').forEach((el) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-duration', '500');
  });

  /* Contact cards: fade-up */
  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', String(i * 80));
    el.setAttribute('data-aos-duration', '500');
  });

  /* Inisialisasi AOS setelah semua atribut terpasang */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing:   'ease-out',
      once:     true,          /* Animasi hanya sekali */
      offset:   60,
      disable:  window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }
}

/* Jalankan setelah DOM sepenuhnya siap */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
