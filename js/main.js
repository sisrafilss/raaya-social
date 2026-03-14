// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-content');

  function closeMenu() {
    toggle.classList.remove('active');
    menu.classList.remove('active');
  }

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && 
        !menu.contains(e.target) && 
        !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});
