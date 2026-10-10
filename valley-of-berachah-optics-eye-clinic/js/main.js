/* Small progressive enhancements for the static Valley of Berachah website. */
(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const opening = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(opening));
      menuButton.setAttribute("aria-label", opening ? "Close navigation menu" : "Open navigation menu");
      navigation.classList.toggle("is-open", opening);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) link.setAttribute("aria-current", "page");
  });

  const statusNodes = document.querySelectorAll("[data-open-status]");
  if (statusNodes.length) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const openByDay = {
      Monday: [8 * 60, 18 * 60],
      Tuesday: [8 * 60, 18 * 60],
      Wednesday: [8 * 60, 18 * 60],
      Thursday: [8 * 60, 18 * 60],
      Friday: [8 * 60, 18 * 60],
      Saturday: [10 * 60, 16 * 60]
    };
    const timeLabel = (hour, minute = 0) => new Intl.DateTimeFormat("en-NG", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(new Date(2020, 0, 1, hour, minute));

    const updateStatus = () => {
      try {
        const pieces = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23"
        }).formatToParts(new Date());
        const parts = Object.fromEntries(pieces.map(({ type, value }) => [type, value]));
        const day = parts.weekday;
        const minuteNow = Number(parts.hour) * 60 + Number(parts.minute);
        const today = openByDay[day];
        let message;
        let open = false;

        if (!today) {
          message = "Closed today · Opens Monday at 8:00 AM";
        } else if (minuteNow >= today[0] && minuteNow < today[1]) {
          message = `Open now · Closes at ${timeLabel(Math.floor(today[1] / 60), today[1] % 60)}`;
          open = true;
        } else if (minuteNow < today[0]) {
          message = `Closed now · Opens today at ${timeLabel(Math.floor(today[0] / 60), today[0] % 60)}`;
        } else if (day === "Saturday") {
          message = "Closed now · Opens Monday at 8:00 AM";
        } else {
          const nextDay = dayNames[(dayNames.indexOf(day) + 1) % dayNames.length];
          message = `Closed now · Opens ${nextDay} at 8:00 AM`;
        }

        statusNodes.forEach((node) => {
          node.textContent = message;
          node.classList.toggle("is-open", open);
          node.dataset.open = String(open);
        });
      } catch (error) {
        // The listed-hours fallback remains visible if time-zone data is unavailable.
      }
    };

    updateStatus();
    window.setInterval(updateStatus, 60 * 1000);
  }

  const thisYear = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = thisYear;
  });
})();
