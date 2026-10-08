# Radiant Smile Dental Clinic | Website Prototype

A complete, mobile-first static website for **Radiant Smile Dental Clinic**, a dental clinic at Metta Mall, Arab Rd, Kubwa 901101, Federal Capital Territory, Nigeria.

Built with pure HTML, CSS and vanilla JavaScript. No frameworks, no build step, no dependencies. Deploy anywhere that serves static files.

---

## What's inside

```
radiant-smile-dental-clinic/
├── index.html            Home: hero, 4.9 Google rating, reviews, WhatsApp strip, services, emergency CTA, why us, HMO teaser, location
├── services.html         Eight treatments with WhatsApp booking links (no prices)
├── clinic.html           The clinic, gallery, real braces photo, first-visit steps, hygiene, map
├── reviews.html          Google rating summary and the three featured patient reviews
├── visit.html            Opening hours, full address, Google Map, directions
├── contact.html          Call / WhatsApp / visit cards and a booking form that opens WhatsApp pre-filled
├── about-builder.html    About the Builder page (prototype only, remove before going live)
├── css/
│   └── style.css         All styles, mobile-first, organised in numbered sections (clinical blue palette)
├── js/
│   └── main.js           Mobile nav, open/closed status, hours highlight, booking form, year
├── images/               Clinic photos, WebP + JPEG pairs (see "Photos" below)
└── README.md             This file
```

## Key facts used (please verify before going live)

| Item | Value |
| --- | --- |
| Business name | Radiant Smile Dental Clinic |
| Address | Metta Mall, Arab Rd, Kubwa 901101, Federal Capital Territory, Nigeria |
| Phone | 0916 519 6388 (`tel:+2349165196388`, WhatsApp: `https://wa.me/2349165196388`) |
| Google rating | 4.9 stars from 22 reviews |
| Hours | Mon to Fri 7:00 AM to 6:30 PM, Sat 7:00 AM to 6:00 PM, Sun closed |
| Google Maps | <https://www.google.com/maps/place/?q=place_id:ChIJ88FYcQDZTRARimBf0RvQhQw> |
| Place ID | `ChIJ88FYcQDZTRARimBf0RvQhQw` |
| Plus code | 588C+RG, Kubwa |

**Items to confirm with the clinic:**

- **Sunday hours.** The brief lists Monday to Saturday only, so the site shows Sunday as closed. If the clinic opens on Sundays, update `visit.html`, `contact.html`, the footer of every page, `js/main.js` (the `SCHEDULE` object) and the JSON-LD block in `index.html`.
- **Rating count.** The brief asks for 4.9 from 22 reviews, and the site shows exactly that. The live Google listing shows a different review count at the time of research, so re-check it before launch.
- **Suite FF13.** The directions copy says to ask for Suite FF13 inside Metta Mall. This comes from the clinic's own website, not from the Google listing.
- **HMO partners.** Leadway HMO, Crown Jewel HMO and AXA Mansard HMO are listed as in the clinic's own website. The site asks visitors to confirm coverage with the clinic.
- **Services.** Root canal, extraction, fillings, braces, veneers, whitening, scaling and polishing, and jaw fracture repair come from the clinic's own website. The site does not show prices.

## How to run locally

1. Open `index.html` directly in any browser, or
2. Serve the folder with any static server, for example:

```bash
# Python 3
python3 -m http.server 8000

# or Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## How to deploy on Vercel (free)

1. Push this folder to a GitHub repository (keep the folder contents at the repo root, or keep the folder and set it as the root directory).
2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New Project**.
3. Import your GitHub repository.
4. Leave the framework preset on **Other** (it is a static site, no build step needed).
5. Click **Deploy**. Vercel gives you a live `*.vercel.app` URL in under a minute.
6. (Optional) Add your own domain in the project settings, for example `radiantsmiledentalclinic.com.ng`.

No configuration file is needed. `index.html` at the root is served automatically.

## Customisation checklist

- [ ] Replace the phone number `0916 519 6388` / `+2349165196388` everywhere if it changes (search the `.html` files for `2349165196388` and `0916 519 6388`).
- [ ] Update the WhatsApp number in the same way (`wa.me/2349165196388`).
- [ ] Update opening hours in `visit.html`, `contact.html`, the footer of every page, `js/main.js` (the `SCHEDULE` object) and the JSON-LD block in `index.html`.
- [ ] Swap photos in `images/` (keep the same file names, or update the references). WebP + JPEG pairs are used via `<picture>`; keep both formats when replacing.
- [ ] Update the canonical URL and JSON-LD `url` in `index.html` and the canonical tags on each page to your real domain.
- [ ] **Delete `about-builder.html` and remove the `.credit-strip` block from the footer of every page before the site goes live.** Both are part of this prototype only.

## Features

- Mobile-first, fully responsive layout
- Sticky header with click-to-call and WhatsApp buttons, plus a sticky call and WhatsApp bar on mobile
- Live "Open now / Closed" badge computed from the clinic's opening hours (West Africa Time)
- Google rating (4.9, 22 reviews, with a 90% fifth star) and three verbatim reviews shown high on the homepage
- "Book on WhatsApp in 30 seconds" strip and a booking form that opens WhatsApp with a pre-filled message
- Emergency CTA (in-pain call guidance) on the home, services and contact pages
- HMO teaser on the homepage, ready to become a full HMO list page
- Google Maps embed and directions link on the Visit and Clinic pages
- Semantic HTML, skip link, ARIA labels, keyboard-friendly navigation
- Basic SEO: meta descriptions, Open Graph tags and JSON-LD `Dentist` structured data

## Photos

- `treatment-room.jpg` (hero) is a **real photo** of the clinic's treatment room, from the Google Business Profile. It shows no people.
- `results-braces.jpg` is a **real photo** from the Google Business Profile of a patient during braces treatment. It carries the clinic's own watermark.
- `reception.jpg`, `consultation.jpg` and `sterilisation.jpg` are professional placeholder images (AI-generated, on-brand blue). Replace them with real photos of the clinic when available, especially a photo of the doctor.

All images are served as optimised WebP with a JPEG fallback.

## Upgrade path

The site is a brochure site with room to grow:

- **Gallery:** add more photos to `clinic.html`.
- **Menu and price list:** add a page once the clinic agrees the prices to publish.
- **HMO list:** turn the homepage HMO teaser into a full page.
- **Booking engine:** replace the WhatsApp form with an online booking tool when the clinic is ready.

## Credits

Website prototype by **Emmanuel Agama** (+234 806 596 5887, WhatsApp welcome). This credit and the About the Builder page are removed from the final live website.
