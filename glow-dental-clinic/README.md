# Glow Dental Clinic: website prototype

A mobile-first, brochure-style website for **Glow Dental Clinic** on Gado Nasko Road, Kubwa, Abuja. It is built with plain HTML, CSS and vanilla JavaScript, with no framework and no build step.

## What is in this folder

```
glow-dental-clinic/
├── index.html          Home: rating, reviews, emergency call, WhatsApp booking strip
├── services.html       Treatments (no prices listed)
├── clinic.html         The doctor, follow-up calls, hygiene routines, photo gallery
├── reviews.html        Google rating and patient reviews (quoted as posted)
├── visit.html          Opening hours, address, map
├── contact.html        WhatsApp booking form and direct contact
├── about-builder.html  About the Builder (prototype only, removed from the final site)
├── css/style.css       All styling (numbered sections, design tokens at the top)
├── js/main.js          Navigation, open/closed status, booking form, year
├── images/             Photos as WebP with JPEG fallbacks
└── README.md           This file
```

## Open it on your computer

Double-click `index.html`. It opens in any modern browser. The site loads Google Fonts when you are online, and falls back to the system font when you are not.

## Deploy to Vercel

1. Create a new project on [vercel.com](https://vercel.com) and choose **Import** or **Add New Project**.
2. Upload this folder, or push it to a GitHub repository first and import that repository.
3. Leave the framework preset as **Other**. There is no build command and no output directory to set.
4. Press **Deploy**. Vercel gives you a free `*.vercel.app` address straight away.
5. To use your own domain, open **Settings, Domains** in the Vercel project and follow the DNS steps shown there.

To deploy through GitHub instead, create a repository, upload the files to its root, and import it in Vercel. Every push to the main branch redeploys the site.

## Before this goes live: checklist for the clinic

- [ ] Confirm **Sunday** hours. The Google listing shows Sunday as closed, but the brief did not list Sunday. The site shows "Closed on Sundays" in `index.html`, `visit.html`, `contact.html` and the footer of every page. Also confirm public-holiday hours.
- [ ] Confirm the **treatments offered**. The services list is a standard set. Remove any treatment the clinic does not offer, in `services.html`, `index.html` and the booking form select box in `contact.html`.
- [ ] Confirm the **sterilisation and hygiene** routine described in `clinic.html`. Edit it so it matches what the clinic actually does.
- [ ] Replace the **illustrative images** (`reception.jpg`, `consultation.jpg`, `sterilisation.jpg`) with real photos of the clinic. Keep the same file names, or update the references. Keep both the JPEG and WebP versions. Do not use photos of visitors without their consent.
- [ ] Add photos of the **doctor** with their permission, once available.
- [ ] Update the **canonical URL** and the JSON-LD `url` in `index.html` to your real domain. Replace `https://glowdentalclinic.com.ng/` if it differs.
- [ ] Check the **rating and review count** (4.6 from 17 reviews) against the live Google listing before launch, and update it in `index.html`, `reviews.html`, `visit.html` and the JSON-LD block.
- [ ] Confirm the **address** wording and the map embed in `visit.html`.
- [ ] Remove `about-builder.html`, its footer link in every page, and the **credit strip** (`.credit-strip`) before the final launch. The credit strip is marked with a comment in each page.

## Where to change things

| What | Where |
| --- | --- |
| Phone number, WhatsApp number | Search for `2348036345839` and `0803 634 5839` |
| Opening hours (page text) | `visit.html`, `index.html`, `contact.html`, footer of each page |
| Opening hours (open/closed status) | `js/main.js`, the `SCHEDULE` object (Africa/Lagos time) |
| Colours | `css/style.css`, section 1 (design tokens) |
| Photos | `images/` (keep WebP and JPEG pairs) |
| Reviews | `index.html`, `reviews.html` (quoted word for word from Google) |

## Upgrade path

This is a brochure site with room to grow:

- **Gallery:** add more photos to the gallery in `clinic.html`.
- **Price or treatment menu:** add a page once the clinic is ready to publish prices.
- **HMO list:** add a page listing accepted health plans.
- **Booking engine:** replace the WhatsApp form in `contact.html` with an online booking tool.
- **Smile gallery (before and after):** only with consent from patients.

## Accessibility and performance

- Semantic HTML: header, nav, main, section, article, figure and footer, with a skip link.
- Keyboard-friendly navigation with visible focus styles.
- Images have descriptive alt text. Illustrative images say so.
- Images are sized with `width` and `height` to prevent layout shift, served as WebP with JPEG fallbacks, and lazy-loaded below the fold.
- No frameworks, no tracking scripts, and no external JavaScript except the optional Google Fonts stylesheet and the Google Maps embed on the Visit page.

## Notes on content

- The rating (4.6 from 17 Google reviews) is shown as the brief specifies, and is never rounded up.
- Review text is quoted word for word from Google, including spelling and punctuation. Reviews are shown with their real star ratings.
- The site does not list prices for dental services. Visitors are asked to call or WhatsApp for costs.
- The footer credit "Website prototype by Emmanuel Agama" appears on every page and must be removed from the final website.
