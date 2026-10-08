# Plus dental clinic | Website Prototype

A complete, mobile-first static website for **Plus dental clinic**, a dental clinic at Shop C4, Bolien mall, Mpape 901101, Federal Capital Territory, Abuja, Nigeria.

Built with pure HTML, CSS and vanilla JavaScript. No frameworks, no build step, no dependencies. Deploy anywhere that serves static files.

---

## What's inside

```
plus-dental-clinic/
├── index.html            Home: hero, Google rating + reviews, WhatsApp strip, services, emergency CTA, why us, location
├── services.html         All treatments with WhatsApp booking links
├── clinic.html           About the clinic (Dr. Ishaku and the team), photo gallery, first-visit steps, hygiene, map
├── reviews.html          Google rating summary + real patient reviews
├── visit.html            Opening hours (7 days), full address, Google Map, directions
├── contact.html          Call / WhatsApp cards + booking form that opens WhatsApp pre-filled
├── about-builder.html    About the Builder page (prototype only, remove before going live)
├── css/
│   └── style.css         All styles, mobile-first, organised in numbered sections (navy + teal palette)
├── js/
│   └── main.js           Mobile nav, open/closed status, hours highlight, booking form, year
├── images/               Clinic photos, WebP + JPEG pairs (see "Photos" below)
└── README.md             This file
```

## Key facts used (please verify before going live)

| Item | Value |
| --- | --- |
| Business name | Plus dental clinic |
| Address | Shop C4, Bolien mall, Mpape 901101, Federal Capital Territory, Nigeria (Mpape, Abuja) |
| Phone | 0906 883 7639 (`tel:+2349068837639`, WhatsApp: `https://wa.me/2349068837639`) |
| Google rating | 4.9 stars from 40 reviews |
| Hours | Mon to Fri 9:00 AM to 7:00 PM, Sat 9:00 AM to 8:00 PM, Sun 12:00 PM to 6:00 PM (open 7 days a week) |
| Google Maps | <https://www.google.com/maps/place/?q=place_id:ChIJvQcPlCXhTRARpmXqV0dbTFM> |
| Place ID | `ChIJvQcPlCXhTRARpmXqV0dbTFM` |
| Plus code | 4FGR+PF, Mpape, Nigeria |

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
6. (Optional) Add your own domain in the project settings, e.g. `plusdentalclinic.com.ng`.

No configuration file is needed. `index.html` at the root is served automatically.

## Customisation checklist

- [ ] Replace the phone number `0906 883 7639` / `+2349068837639` everywhere if it changes (search the `.html` files for `2349068837639` and `0906 883 7639`).
- [ ] Update the WhatsApp number in the same way (`wa.me/2349068837639`).
- [ ] Update opening hours in `visit.html`, the footer of every page, `js/main.js` (the `SCHEDULE` object) and the JSON-LD block in `index.html`.
- [ ] Swap photos in `images/` (keep the same file names, or update the references). WebP + JPEG pairs are used via `<picture>`; keep both formats when replacing.
- [ ] Update the canonical URL and JSON-LD `url` in `index.html` to your real domain.
- [ ] **Delete `about-builder.html` and remove the `.credit-strip` block from the footer of every page before the site goes live.** Both are part of this prototype only.

## Features

- Mobile-first, fully responsive layout
- Sticky header with click-to-call and WhatsApp buttons, plus a sticky call/WhatsApp bar on mobile
- Live "Open now / Closed" badge computed from the clinic's opening hours (West Africa Time, 7-day schedule)
- Google rating (4.9, 40 reviews) and real review snippets shown high on the homepage
- "Book on WhatsApp in 30 seconds" strip and a booking form that opens WhatsApp with a pre-filled message
- Emergency CTA (in-pain call guidance) on the home and services pages
- Google Maps embed and directions link on the Visit and Clinic pages
- Semantic HTML, skip link, ARIA labels, keyboard-friendly navigation
- Basic SEO: meta descriptions, Open Graph tags and JSON-LD `Dentist` structured data

## Photos

- `hero-waiting.jpg` and `waiting-area.jpg` are **real photos** of the clinic's waiting area, pulled from the clinic's Google Business Profile.
- `reception.jpg`, `treatment-room.jpg`, `sterilisation.jpg` and `consultation.jpg` are professional placeholder images (AI-generated, on-brand navy and teal) to be replaced with real photos of the clinic.

All images are served as optimised WebP with a JPEG fallback.

## Credits

Website prototype by **Emmanuel Agama** (+234 806 596 5887, WhatsApp welcome). This credit and the About the Builder page are removed from the final live website.
