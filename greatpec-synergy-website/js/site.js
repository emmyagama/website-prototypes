/* Lightweight progressive enhancement for navigation, catalogue filters and the load chooser. */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');

  if (menuButton && siteNav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      siteNav.classList.toggle('is-open', !isOpen);
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  // Combine the brand and use-case chips on the catalogue page.
  const productCards = [...document.querySelectorAll('.catalogue-grid .product-card')];
  if (productCards.length) {
    let activeBrand = 'all';
    let activeJob = 'all';
    const count = document.querySelector('#filter-count');
    const emptyMessage = document.querySelector('#no-results');

    const applyFilters = () => {
      let visible = 0;
      productCards.forEach((card) => {
        const brandMatch = activeBrand === 'all' || card.dataset.brand === activeBrand;
        const jobs = (card.dataset.jobs || '').split(/\s+/).filter(Boolean);
        const jobMatch = activeJob === 'all' || jobs.includes(activeJob);
        const show = brandMatch && jobMatch;
        card.classList.toggle('filter-hidden', !show);
        if (show) visible += 1;
      });
      if (count) count.textContent = `${visible} ${visible === 1 ? 'model' : 'models'}`;
      if (emptyMessage) emptyMessage.classList.toggle('is-visible', visible === 0);
    };

    document.querySelectorAll('[data-filter-brand]').forEach((button) => {
      button.addEventListener('click', () => {
        activeBrand = button.dataset.filterBrand;
        document.querySelectorAll('[data-filter-brand]').forEach((item) => {
          item.setAttribute('aria-pressed', String(item === button));
        });
        applyFilters();
      });
    });

    document.querySelectorAll('[data-filter-job]').forEach((button) => {
      button.addEventListener('click', () => {
        activeJob = button.dataset.filterJob;
        document.querySelectorAll('[data-filter-job]').forEach((item) => {
          item.setAttribute('aria-pressed', String(item === button));
        });
        applyFilters();
      });
    });

    applyFilters();
  }

  // A shortlist, not a runtime calculator. It avoids promising hours without real load data.
  const chooser = document.querySelector('#load-chooser');
  if (chooser) {
    const choices = {
      network: {
        title: 'Router, laptop and phones',
        copy: 'Start by comparing compact units for low-wattage devices. The RIVER 2, RIVER 2 Max and BLUETTI EB3A are useful models to discuss, depending on how long you need backup.',
        models: ['EcoFlow RIVER 2', 'EcoFlow RIVER 2 Max', 'BLUETTI EB3A']
      },
      work: {
        title: 'Wi-Fi, decoder, lights and laptops',
        copy: 'A work setup needs both enough stored energy and enough AC output. Compare the RIVER 2 Pro, RIVER 3 Max Plus and DELTA 2 against your combined appliance watts.',
        models: ['EcoFlow RIVER 2 Pro', 'EcoFlow RIVER 3 Max Plus', 'EcoFlow DELTA 2']
      },
      fridge: {
        title: 'Fridge and home essentials',
        copy: 'The DELTA 2 is a sensible first model to check for a carefully sized fridge load. For more stored energy, ask about the BLUETTI EP500 Pro. Fridge startup surge matters.',
        models: ['EcoFlow DELTA 2', 'BLUETTI EP500 Pro']
      },
      shop: {
        title: 'Small shop or tools',
        copy: 'Tools and shop equipment can have a high startup draw. Start with the BLUETTI EP500 Pro for a larger backup plan, then compare your equipment labels and total running watts.',
        models: ['BLUETTI EP500 Pro', 'EcoFlow DELTA 2']
      }
    };

    const resultTitle = document.querySelector('#result-title');
    const resultCopy = document.querySelector('#result-copy');
    const resultModels = document.querySelector('#result-models');
    const resultMessage = document.querySelector('#result-message');
    const duration = document.querySelector('#backup-duration');

    const updateChooser = () => {
      const selected = chooser.querySelector('input[name="load"]:checked');
      if (!selected) return;
      const choice = choices[selected.value] || choices.network;
      const durationLabel = duration ? duration.options[duration.selectedIndex].text : 'Not sure yet';

      if (resultTitle) resultTitle.textContent = choice.title;
      if (resultCopy) resultCopy.textContent = choice.copy;
      if (resultModels) {
        resultModels.replaceChildren(...choice.models.map((model) => {
          const item = document.createElement('li');
          item.textContent = model;
          return item;
        }));
      }
      if (resultMessage) {
        const message = `Hello Greatpec Synergy, I need backup for ${choice.title.toLowerCase()} for ${durationLabel.toLowerCase()}. Please help check the right size, today's price and stock.`;
        resultMessage.href = `https://wa.me/2348028622318?text=${encodeURIComponent(message)}`;
      }
    };

    chooser.addEventListener('change', updateChooser);
    updateChooser();
  }

  // Keep the copyright year current without adding a dependency.
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
