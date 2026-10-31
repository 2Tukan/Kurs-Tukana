// Prosty skrypt: obsługa menu na telefonach i aktualny rok w stopce.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Otwórz menu' : 'Zamknij menu');
    menu.classList.toggle('is-open', !isOpen);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Otwórz menu');
    menu.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Otwórz menu');
      menu.classList.remove('is-open');
    }
  });
}
const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();
