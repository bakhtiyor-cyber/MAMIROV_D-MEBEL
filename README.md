const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearNode = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();

    formStatus.textContent = name
      ? `Thank you, ${name}! Your inquiry has been prepared. Replace the form action with your email or CRM endpoint to send it live.`
      : 'Thank you! Your inquiry has been prepared. Replace the form action with your email or CRM endpoint to send it live.';

    contactForm.reset();
  });
}

const productButtons = document.querySelectorAll('.button-ghost');
productButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
