# Skin Health Aesthetics & Dermatological Clinic

A mobile-first static website prototype for Skin Health Aesthetics & Dermatological Clinic in Maitama, Abuja. It uses plain HTML, CSS and vanilla JavaScript. There is no framework, package install, build step, remote font or external image dependency.

## Preview locally

Open `index.html` directly in a browser. All pages, styles, scripts and images use relative local paths.

To run a small local web server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on Vercel

1. Push the contents of this folder to a GitHub repository, preserving the project root.
2. In Vercel, import that repository.
3. Choose the `Other` framework preset. Leave the build command empty and set the output directory to `.`.
4. Deploy. No environment variables or server functions are required.

The Vercel CLI also works from this folder with `vercel --prod`.

## Pages and assets

- `index.html`: Home, clinic overview, treatment areas, reviews and location
- `treatments.html`: Acne, pigmentation and aesthetic treatment enquiries
- `dermatologist.html`: What to ask before a first consultation, without an invented clinician biography
- `reviews.html`: Three supplied Google review excerpts and the live profile link
- `book-consult.html`: Click-to-call, WhatsApp, Google Maps directions and current Maps hours
- `about-builder.html`: Prototype-only builder introduction and package information
- `css/styles.css`: Responsive, mobile-first styles
- `js/main.js`: Accessible mobile navigation and footer year
- `images/`: Local optimized WebP photos from the Google Maps profile, a nearby Street View image and the site favicon

## Business details used

- Name: Skin Health Aesthetics & Dermatological Clinic
- Category in the supplied brief: Dermatology clinic, Google type Physician
- Phone: 0812 878 1583
- Address: 3C Indus, off Euphrates Crescent, off Aguiyi Ironsi Street, Municipal, Abuja 900001, Federal Capital Territory, Nigeria
- District emphasis: Maitama, Abuja
- Google Maps place ID: `ChIJG4LDxI8LThARm-je9WnXoYU`
- Google Maps profile: [View the live listing](https://www.google.com/maps/place/?q=place_id:ChIJG4LDxI8LThARm-je9WnXoYU)
- Rating and count shown: 4.9 stars from 69 Google reviews

The live Google Maps page for the supplied place ID showed 4.9 from 69 reviews when checked on 11 October 2026. The supplied brief said 56 reviews. The current live count is used in the prototype, following confirmation. Recheck the profile before launch because ratings and counts can change.

The live English Google Maps page showed Monday 9:00 AM to 6:00 PM, Tuesday closed, Wednesday to Saturday 9:00 AM to 6:00 PM, and Sunday closed. The supplied brief listed Tuesday as open. The prototype uses the current Maps schedule, following confirmation, and tells visitors to call or WhatsApp before travelling.

The supplied brief identifies the business category as Dermatology clinic and Google type Physician. The English Google Maps page rendered the listing category as Skin care clinic during research. The website uses the requested dermatology and aesthetics description. Confirm the preferred category wording with the clinic before launch.

The Google profile showed an empty website field. This is described as a missing Google profile link, not proof that no separate website or social page exists.

## Services and clinical accuracy

The prototype foregrounds acne, pigmentation and aesthetic skin-care enquiries, as requested. Chemical peels, microneedling, Botox and fillers appear in an indexed public-profile snippet associated with the Google listing. They are phrased as items to ask about, with availability, provider, suitability and aftercare to be confirmed directly with the clinic. The site is informational and does not diagnose or promise results.

No individual clinician name, biography, credentials or appointment availability were invented. The consultation page encourages visitors to confirm who is available and what the visit includes.

## Reviews

The three review excerpts on the Home and Reviews pages preserve the supplied wording. The final excerpt ends exactly at the words provided. No completion has been invented. Reviewers are not named in the prototype.

## Images and usage

The clinic reception and exterior photos were downloaded from the Google Maps profile for the supplied place ID. The nearby Street View photo is from the Google Maps Street View image endpoint. They are stored locally as optimized WebP files so they load without a third-party image request. No random stock or before-and-after photos are used.

Please confirm the right to reuse profile photos on a standalone website with the business before launch. The clinic name is used as a typographic wordmark; the circular `SH` mark in this prototype is not represented as an official logo.

## Calls to action

- Clinic phone links use `tel:+2348128781583`.
- Clinic WhatsApp links open a prefilled skin-consult enquiry.
- The mobile layout keeps a call action fixed at the bottom of the screen and provides a floating WhatsApp button.
- Google Maps links use the supplied place ID.
- No online booking system or form is connected. The clinic confirms consultation times directly.

## Prototype credit

The About the Builder page and the visible footer credit are for the prototype only. Both should be removed before the final website goes live, as stated on the builder page.

The package presented on that page is the supplied offer: ₦150,000 one-time, including one year of domain and hosting, with full ownership and handover. The page links to Emmanuel Agama on WhatsApp.

## Design references

The visual direction takes cues from:

- [sk:n Clinics](https://www.sknclinics.co.uk/): clear treatment taxonomy and clinically grounded calls to action
- [Luxor Spa & Salon, Abuja](https://www.luxorsalonandspa.com/): warm, quiet-luxury wellness cues for the local market
- [Aster Smiles](https://astersmilesng.com/): direct local contact and appointment pathways

The cream, charcoal and deep-green palette also responds to the green Skin Health signage visible in the Google Maps clinic photos. System fonts and local images keep the prototype light for Nigerian mobile data conditions.
