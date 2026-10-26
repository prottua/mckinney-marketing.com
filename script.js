(() => {
  const dialog = document.getElementById('contact-dialog');
  const closeButton = document.querySelector('.dialog-close');
  const form = document.getElementById('contact-form');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  function openContact(event) {
    if (event) event.preventDefault();
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.classList.add('dialog-open');
    }
  }
  function closeContact() {
    if (dialog && dialog.open) dialog.close();
    document.body.classList.remove('dialog-open');
  }

  document.querySelectorAll('[data-open-contact]').forEach((control) => {
    control.addEventListener('click', openContact);
  });
  if (closeButton) closeButton.addEventListener('click', closeContact);
  if (dialog) {
    dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeContact();
    });
  }
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  // The form is intentionally a front-end placeholder until the approved Kwiga widget is embedded.
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const slot = document.getElementById('kwiga-embed-slot');
      if (!slot) return;
      let message = slot.querySelector('.form-message');
      if (!message) {
        message = document.createElement('p');
        message.className = 'form-message';
        message.setAttribute('role', 'status');
        form.appendChild(message);
      }
      message.textContent = 'This form preview is ready for your Kwiga widget. Connect the widget before publishing so enquiries are securely sent to your CRM.';
    });
  }
})();
