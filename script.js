const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));



const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
document.querySelectorAll('.image-launch').forEach(btn => {
  btn.addEventListener('click', () => {
    modalImage.src = btn.dataset.image;
    modalImage.alt = btn.dataset.title || 'Project artwork';
    modalTitle.textContent = btn.dataset.title || 'Project artwork';
    imageModal.showModal();
    document.body.classList.add('modal-open');
  });
});
function closeImage(){
  imageModal.close();
  document.body.classList.remove('modal-open');
}
imageModal.querySelector('.modal-close').addEventListener('click', closeImage);
imageModal.addEventListener('click', e => { if (e.target === imageModal) closeImage(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (imageModal.open) closeImage();
  }
});


// Footer: always return to the absolute top of the page.
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (history.replaceState) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  });
}


// Brand/logo: always return to the absolute top of the page.
const brandHome = document.getElementById('brand-home');
if (brandHome) {
  brandHome.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (history.replaceState) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  });
}
