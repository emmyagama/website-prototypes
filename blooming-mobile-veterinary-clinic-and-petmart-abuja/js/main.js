(() => {
  document.documentElement.classList.add('js');

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    navigation.classList.remove('is-open');
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1020) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
