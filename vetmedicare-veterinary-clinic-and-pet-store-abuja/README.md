# Vetmedicare veterinary clinic and pet store

A lightweight, mobile-first static website prototype for Vetmedicare in Asokoro, Abuja. It uses plain HTML, CSS and vanilla JavaScript. There is no framework, package installation, build step, external font or remote image dependency.

## Pages included

- `index.html`: Home, service overview and contact shortcuts
- `services.html`: Veterinary, grooming, pet store and ambulatory service information
- `home-visits.html`: Home visit enquiries and location coverage checks
- `pet-store.html`: Pet store information and stock enquiry
- `reviews.html`: Supplied Google review snippets and current rating
- `visit.html`: Address, phone, hours and Google Maps directions
- `urgent-help.html`: Direct call and WhatsApp steps for urgent concerns
- `about-builder.html`: Prototype-only About the Builder page
- `404.html`: A simple missing-page route

Shared styles are in `css/styles.css`, the small navigation and footer script is in `js/main.js`, and the locally optimised Google Maps profile photos are in `images/`.

## Preview locally

1. Extract the project folder.
2. Open `index.html` in a browser. Pages, styles and images work offline. Phone, Google Maps and WhatsApp links need an internet connection and the relevant app or browser support.
3. For a local web-server preview, open a terminal in this folder and run:

   ```sh
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`. On Windows, `py -m http.server 8000` can be used instead.

## Deploy to Vercel

This is a static site and needs no build command.

1. Put the contents of this folder in a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, select **Add New Project** and import the repository.
3. Use the folder containing `index.html` as the project root. If the repository contains only this site, leave the root at the repository root.
4. Choose **Other** or no framework preset. Leave the build command blank. Use `.` as the output directory if Vercel requests one.
5. Deploy. Vercel will serve the `.html` pages and their relative `css/`, `js/` and `images/` files.

## Research and verification notes

- The Google Maps profile for place ID `ChIJTRCrSh4LThARY_lfojMwI9k` showed **5.0 from 28 reviews**, the Asokoro address, phone `+234 705 557 7174`, Monday to Saturday hours of **09:00 to 17:00**, and Sunday closed when checked on 11 October 2026. The prototype uses these live Maps values. A third-party directory displayed a different review count, so the site follows the direct Maps profile.
- The exact business address used on the site is **2 Oliver Tambo St, Asokoro, Abuja 900231, Federal Capital Territory, Nigeria**. Directions open the supplied Google Maps place link.
- The Maps profile page displayed an empty website field. Search also surfaced an indexed Vetmedicare website at `https://vetmedicare.com.ng/` with the same Asokoro address and primary phone. The user selected a redesign direction informed by that source. Direct retrieval of the domain was unavailable during this build, so confirm domain ownership, current content and any redirect or replacement plan before deployment.
- The indexed Vetmedicare site also lists a second number, `+234 814 324 9313`. This prototype intentionally uses the requested primary number, `0705 557 7174`, for all calls and WhatsApp links. Confirm whether the secondary number should be published before launch.
- Published Vetmedicare information surfaced during research lists pet wellness, clinical and surgical care, grooming and spa, a stocked pet department, ambulatory service, pet travel permits, pest control, and emergency or critical care during normal business hours. The prototype keeps urgent-care wording within listed hours and does not claim a 24-hour response.
- Home service is mentioned in Vetmedicare's published information and a Google review. The website does not invent a coverage map, response time or fee. Visitors are asked to confirm their area and visit details directly.
- The pet store image is from the supplied Google Maps profile. It illustrates a product photo on the listing, not a live stock guarantee. Visitors are asked to check current items and prices before travelling.
- The three supplied Google review excerpts are reproduced verbatim on `reviews.html`. The overall rating is shown separately as 5.0 from 28 reviews.
- The Google Maps category view showed “Emergency veterinarian service.” Customer-facing copy uses “veterinary clinic” and the homepage uses `VeterinaryCare` structured data. This prototype does not imply overnight emergency response.
- The hero and pet store images are locally optimised photos from the supplied Google Maps profile. No unrelated stock photography is used.

The visual direction uses soft greens and warm neutrals inspired by the clinic photo. Reference patterns include the Abuja pet and vet service grouping from Pets n Vets Essentials, clear service choices and appointment actions from Banfield, and a calm, pet-owner-first tone from PDSA.

## Prototype-only builder page

`about-builder.html` includes the supplied Emmanuel Agama copy, the **₦150,000 one-time package**, and a WhatsApp link to **+234 806 596 5887**. This page and its footer credit are prototype-only. Remove them from the final public website as described on the page.

Before launch, have the business confirm hours, current services, home-visit coverage, pet store stock, primary and secondary contacts, and whether this prototype will replace or redirect the existing domain. This prototype is not a veterinary triage service or an after-hours response guarantee.
