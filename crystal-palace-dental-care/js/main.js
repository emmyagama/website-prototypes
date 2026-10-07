/* ==========================================================================
   Crystal Palace Dental Care | prototype scripts
   Plain JavaScript only. Handles:
   1. Mobile navigation toggle
   2. Header shadow on scroll
   3. Live "open now / closed" status (Africa/Lagos time, UTC+1)
   4. Highlighting today's row in the opening-hours table
   5. WhatsApp booking form (builds a pre-filled wa.me message)
   6. Footer year
   ========================================================================== */
(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     1. Mobile navigation toggle
     -------------------------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the panel after tapping a link (mobile)
    mainNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Header shadow on scroll
     -------------------------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------------------------------------------------
     3. Live open / closed status
     Opening hours (Africa/Lagos, UTC+1, no daylight saving):
     Mon to Thu: 09:00 to 18:00 | Fri: 09:30 to 18:00 | Sat: 09:00 to 18:00 | Sun: closed
     -------------------------------------------------------------------------- */
  var SCHEDULE = {
    0: null,        // Sunday
    1: [9, 18],     // Monday
    2: [9, 18],     // Tuesday
    3: [9, 18],     // Wednesday
    4: [9, 18],     // Thursday
    5: [9.5, 18],   // Friday
    6: [9, 18]      // Saturday
  };
  var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Convert the visitor's clock to West Africa Time (WAT = UTC+1)
  function lagosNow() {
    var now = new Date();
    var utcMillis = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcMillis + 60 * 60000);
  }

  function formatHour(hour) {
    var whole = Math.floor(hour);
    var minutes = Math.round((hour - whole) * 60);
    var suffix = whole >= 12 ? "PM" : "AM";
    var display = whole > 12 ? whole - 12 : (whole === 0 ? 12 : whole);
    return display + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + suffix;
  }

  function getStatus() {
    var now = lagosNow();
    var day = now.getDay();
    var hour = now.getHours() + now.getMinutes() / 60;
    var today = SCHEDULE[day];

    if (today && hour >= today[0] && hour < today[1]) {
      return {
        open: true,
        label: "Open now \u00B7 Closes " + formatHour(today[1])
      };
    }

    // Find the next opening time
    for (var offset = 0; offset < 8; offset++) {
      var checkDay = (day + offset) % 7;
      var slot = SCHEDULE[checkDay];
      if (!slot) continue;
      if (offset === 0 && hour < slot[0]) {
        return { open: false, label: "Closed \u00B7 Opens today at " + formatHour(slot[0]) };
      }
      if (offset > 0) {
        var dayLabel = offset === 1 ? "tomorrow" : DAY_NAMES[checkDay];
        return { open: false, label: "Closed \u00B7 Opens " + dayLabel + " at " + formatHour(slot[0]) };
      }
    }
    return { open: false, label: "Closed" };
  }

  function renderStatus() {
    var status = getStatus();
    var pills = document.querySelectorAll("[data-open-status]");
    pills.forEach(function (pill) {
      pill.classList.toggle("is-open", status.open);
      var text = pill.querySelector("[data-open-status-text]");
      if (text) text.textContent = status.label;
      else pill.textContent = status.label;
    });
  }

  if (document.querySelector("[data-open-status]")) {
    renderStatus();
    setInterval(renderStatus, 60000); // refresh every minute
  }

  /* --------------------------------------------------------------------------
     4. Highlight today's row in the opening-hours table
     -------------------------------------------------------------------------- */
  var todayRow = document.querySelector('.hours-table tr[data-day="' + lagosNow().getDay() + '"]');
  if (todayRow) todayRow.classList.add("is-today");

  /* --------------------------------------------------------------------------
     5. WhatsApp booking form
     Builds a pre-filled wa.me message and opens it in WhatsApp.
     Nothing is sent until the visitor presses "send" inside WhatsApp.
     -------------------------------------------------------------------------- */
  var form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = (form.elements["name"].value || "").trim();
      var phone = (form.elements["phone"].value || "").trim();
      var treatment = (form.elements["treatment"].value || "").trim();
      var day = (form.elements["day"].value || "").trim();
      var notes = (form.elements["notes"].value || "").trim();

      var lines = ["Hello Crystal Palace Dental Care, my name is " + (name || "not given") + "."];
      if (treatment) lines.push("I would like to book: " + treatment + ".");
      if (day) lines.push("Preferred day: " + day + ".");
      if (phone) lines.push("My phone number: " + phone + ".");
      if (notes) lines.push("Extra notes: " + notes);

      var message = lines.join(" ");
      var url = "https://wa.me/2349160007626?text=" + encodeURIComponent(message);
      window.open(url, "_blank", "noopener");
    });
  }

  /* --------------------------------------------------------------------------
     6. Footer year
     -------------------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
