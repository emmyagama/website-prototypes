# Crystal Palace Dental Care | Website Prototype

A complete, mobile-first static website for **Crystal Palace Dental Care**, a dental clinic at Emmanuel Plaza, Plot 228 P.O.W. Mafemi Crescent, Utako, Abuja, Nigeria.

Built with pure HTML, CSS and vanilla JavaScript. No frameworks, no build step, no dependencies. Deploy anywhere that serves static files.

---

## What's inside

```
crystal-palace-dental-care/
├── index.html            Home: hero, Google rating + reviews, WhatsApp strip, services, why us, location
├── services.html         All treatments with WhatsApp booking links
├── clinic.html           About the clinic, real photo gallery, first-visit steps, hygiene, map
├── reviews.html          Google rating summary + real patient reviews
├── visit.html            Opening hours, full address, Google Map, directions
├── contact.html          Call / WhatsApp cards + booking form that opens WhatsApp pre-filled
├── about-builder.html    About the Builder page (prototype only, remove before going live)
├── css/
│   └── style.css         All styles, mobile-first, organised in numbered sections
├── js/
│   └── main.js           Mobile nav, open/closed status, hours highlight, booking form, year
├── images/               Real clinic photos from the Google Business Profile (WebP + JPEG)
└── README.md             This file
```

## Key facts used (please verify before going live)

| Item | Value |
| --- | --- |
| Business name | Crystal Palace Dental Care |
| Address | Emmanuel Plaza, Plot 228 P.O.W. Mafemi Cres, Municipal, Abuja 900108, FCT, Nigeria (Utako) |
| Phone | 0916 000 7626 (`tel:+2349160007626`, WhatsApp: `https://wa.me/2349160007626`) |
| Google rating | 4.5 stars from 46 reviews |
| Hours | Mon to Thu and Sat 9:00 AM to 6:00 PM, Fri 9:30 AM to 6:00 PM, Sun closed |
| Google Maps | <https://www.google.com/maps/place/?q=place_id:ChIJswStibB1ThAR24kd291K8a4> |
| Place ID | `ChIJswStibB1ThAR24kd291K8a4` |

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
6. (Optional) Add your own domain in the project settings, e.g. `crystalpalacedentalcare.com.ng`.

No configuration file is needed. `index.html` at the root is served automatically.

## Customisation checklist

- [ ] Replace the phone number `0916 000 7626` / `+2349160007626` everywhere if it changes (search the `.html` files for `2349160007626` and `0916 000 7626`).
- [ ] Update the WhatsApp number in the same way (`wa.me/2349160007626`).
- [ ] Update opening hours in `visit.html`, the footer of every page, `js/main.js` (the `SCHEDULE` object) and the JSON-LD block in `index.html`.
- [ ] Swap photos in `images/` (keep the same file names, or update the references). WebP + JPEG pairs are used via `<picture>`; keep both formats when replacing.
- [ ] Update the canonical URL and JSON-LD `url` in `index.html` to your real domain.
- [ ] **Delete `about-builder.html` and remove the `.credit-strip` block from the footer of every page before the site goes live.** Both are part of this prototype only.

## Features

- Mobile-first, fully responsive layout
- Sticky header with click-to-call and WhatsApp buttons, plus a sticky call/WhatsApp bar on mobile
- Live "Open now / Closed" badge computed from the clinic's opening hours (West Africa Time)
- Google rating (4.5, 46 reviews) and real review snippets shown high on the homepage
- Real photos pulled from the clinic's Google Business Profile, served as optimised WebP with JPEG fallback
- "Book on WhatsApp in 30 seconds" strip and a booking form that opens WhatsApp with a pre-filled message
- Google Maps embed and directions link on the Visit and Clinic pages
- Semantic HTML, skip link, ARIA labels, keyboard-friendly navigation
- Basic SEO: meta descriptions, Open Graph tags and JSON-LD `Dentist` structured data

## Credits

Website prototype by **Emmanuel Agama** (+234 806 596 5887, WhatsApp welcome). This credit and the About the Builder page are removed from the final live website.

Photos: real clinic photos from the Crystal Palace Dental Care Google Business Profile.
