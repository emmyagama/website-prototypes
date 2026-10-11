# Light Veterinary Mobile clinic and pet mart, Abuja

A lightweight, mobile-first static website prototype built with plain HTML, CSS and vanilla JavaScript. It has no build step, framework, package install or remote font dependency. The site can be opened locally or deployed as a static site on Vercel.

## Pages included

- `index.html`: Home, clinic overview and contact shortcuts
- `services.html`: Veterinary care, mobile services and pet mart information
- `home-visits.html`: Home visit enquiries and availability checks
- `pet-mart.html`: Pet supplies information with a stock-check prompt
- `reviews.html`: Supplied review snippets and current Google rating
- `visit.html`: Address, phone, directions and listed hours
- `urgent-help.html`: Direct call and WhatsApp steps for urgent enquiries
- `about-builder.html`: Prototype-only information about Emmanuel Agama and the website package
- `404.html`: A simple page for missing routes

Shared styles are in `css/styles.css`, the small menu and footer script is in `js/main.js`, and locally optimised Google Maps profile photos are in `images/`.

## Preview locally

1. Extract the project folder.
2. Open `index.html` in a browser. The core pages, styles and images work offline. Phone, Google Maps and WhatsApp links need an internet connection and the relevant app or browser support.
3. For a local web-server preview, open a terminal in this folder and run:

   ```sh
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`. On Windows, `py -m http.server 8000` can be used instead.

## Deploy to Vercel

This is a static site. No build command is needed.

1. Put the contents of this folder in a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, select **Add New Project** and import that repository.
3. Use the folder containing `index.html` as the project root. If this repository contains only this site, leave the root at the repository root.
4. Choose **Other** or no framework preset. Leave the build command blank. Use `.` as the output directory if Vercel requests one.
5. Deploy. Vercel will serve `index.html` and the linked `.html` pages as static files.

Keep the relative `css/`, `js/` and `images/` paths intact when uploading. This project intentionally has no external font or script dependency.

## Business details and verification notes

- Business name: **Light Veterinary Mobile clinic and pet mart, Abuja**
- Phone: **0810 381 7110**. Calls use `tel:+2348103817110`; WhatsApp uses `+2348103817110`.
- Directions use the supplied Google Maps place ID: `ChIJ9TYXQecNThARU1T4sh-P9Nw`.
- The site uses the user-confirmed current Google values of **5.0 from 83 reviews** and **open 24 hours every day**, as seen in the profile on 11 October 2026. The hours are described as the listing's hours, not a promise that a veterinary professional will respond or attend immediately. Visitors are asked to call or WhatsApp first.
- The site uses the address supplied for this prototype: **Off Abdulslami Abubakar Road, Durumi, AMAC 900110, Federal Capital Territory, Nigeria**. The live Google Maps profile currently labels the pin **Oladipo Diya St, Central area, Abuja 900110, Federal Capital Territory**. The discrepancy is disclosed on `visit.html`; confirm the address and pin with the business before public launch.
- The Maps profile currently shows the category “Animal hospital.” Customer-facing copy uses “veterinary clinic.” The homepage `VeterinaryCare` JSON-LD reflects the user-confirmed rating, review count and daily hours. No unverified service list is added.
- Home services are mentioned in a supplied Google review. The site asks visitors to confirm area coverage and availability rather than claiming a fixed service zone or arrival time.
- Pet mart photos show food, care products and accessories, but there is no verified live inventory list. The site asks customers to confirm stock, brand and price before visiting.
- The supplied review snippets are reproduced verbatim on `reviews.html`. The live rating and count are shown separately.
- The hero, pet mart and home-care images are locally optimised photos from the supplied Google Maps business profile. No unrelated stock photography is used. The supplied Street View photo is not included because it does not show a confirmed clinic entrance and the current map label differs from the address wording used in this prototype.
- No official website or social profile was verified during research.

## Prototype-only builder information

`about-builder.html` contains the supplied Emmanuel Agama copy, the **₦150,000 one-time package**, and a WhatsApp link to **+234 806 596 5887**. That page is explicitly prototype-only. Before the final public launch, remove it and the footer credits that link to it, or replace those links with a destination the business approves.

Before launch, have the business confirm the address, directions pin, availability wording, services, home-visit coverage, current pet mart inventory and final contact links. This prototype is not an emergency-response guarantee or veterinary triage service.
