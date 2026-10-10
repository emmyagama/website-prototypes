/*
  St. Immanuel Eye Care Services
  Small enhancements for the mobile menu, Abuja opening status and footer year.
*/
(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const menuButton = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".site-nav");

  if (menuButton && siteNavigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      siteNavigation.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      siteNavigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    siteNavigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!siteNavigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) link.setAttribute("aria-current", "page");
  });

  const statusLabels = document.querySelectorAll("[data-open-status]");
  if (statusLabels.length) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const formatTime = (hour, minute = 0) => new Intl.DateTimeFormat("en-NG", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(new Date(2000, 0, 1, hour, minute));

    const updateStatus = () => {
      try {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23"
        }).formatToParts(new Date());
        const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
        const todayIndex = dayNames.indexOf(values.weekday);
        const currentMinutes = Number(values.hour) * 60 + Number(values.minute);
        const openingMinutes = 9 * 60;
        const closingMinutes = 19 * 60 + 30;
        const isOpenDay = todayIndex >= 1 && todayIndex <= 6;
        let message;
        let isOpen = false;

        if (isOpenDay && currentMinutes >= openingMinutes && currentMinutes < closingMinutes) {
          message = `Open now · Closes ${formatTime(19, 30)}`;
          isOpen = true;
        } else if (todayIndex === 0) {
          message = "Closed now · Opens Monday at 9:00 AM";
        } else if (currentMinutes < openingMinutes) {
          message = "Closed now · Opens today at 9:00 AM";
        } else if (todayIndex === 6) {
          message = "Closed now · Opens Monday at 9:00 AM";
        } else {
          message = `Closed now · Opens ${dayNames[(todayIndex + 1) % dayNames.length]} at 9:00 AM`;
        }

        statusLabels.forEach((label) => {
          label.textContent = message;
          label.classList.toggle("is-open", isOpen);
          label.dataset.open = String(isOpen);
        });
      } catch (error) {
        // Keep the listed hours fallback visible if time-zone data is unavailable.
      }
    };

    updateStatus();
    window.setInterval(updateStatus, 60 * 1000);
  }

  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = year;
  });
})();
