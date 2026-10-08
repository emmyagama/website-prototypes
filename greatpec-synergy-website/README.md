# Greatpec Synergy website prototype

A lightweight, mobile-first static website for Greatpec Synergy, the portable power and home goods retailer at Shop G-36, Garki Model Market (Old Market), Garki 2, Abuja, FCT.

## What is included

- `index.html`: conversion-focused home page
- `shop.html`: filterable catalogue for the eight EcoFlow and BLUETTI models in the brief
- `size-guide.html`: interactive load-based shortlist, with WhatsApp enquiry handoff
- `visit.html`: stall address, opening hours, Google Maps search link and call-to-action
- `delivery.html`: clear delivery, payment, authenticity and warranty notes
- `about-builder.html`: prototype-only builder page requested for this pitch
- `css/styles.css`: responsive styles
- `js/site.js`: mobile navigation, catalogue filters, chooser and current year
- `images/`: locally stored, compressed product and seller-listing images

The site has no framework, package manager, remote font, server-side code or checkout. The product and size-guide buttons open WhatsApp with a pre-filled message. Product prices are intentionally omitted. Customers are asked to confirm today's price and stock on WhatsApp because both can change.

## Run locally

Open `index.html` in a browser. The pages and images use relative paths, so they work from a local folder as well as a static host. For a local web server, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` from this computer.

## Deploy on Vercel

1. Extract this folder and make `greatpec-synergy-website` the root of the Git repository.
2. Push the folder to GitHub.
3. In Vercel, import the repository.
4. Choose **Other** as the framework preset. Leave the build command blank and set the output directory to `.`.
5. Deploy. The static HTML files need no build step or environment variables.
6. In the Vercel project settings, add `greatpecsynergy.com` and follow Vercel's DNS instructions. Remove the old Parklogic parking records at the domain provider, then verify the DNS records. Vercel will provision HTTPS after the domain points correctly.

If the project is deployed under a different preview domain, update the canonical URLs and `sitemap.xml` before a permanent public launch. The canonical URLs in this prototype are set to `https://greatpecsynergy.com` because that is the domain to reconnect.

## Other static hosting

This folder can also be published as-is with GitHub Pages or another static host. Keep `index.html` at the site root so the homepage opens by default.

## Prototype facts and careful claims

- Address: Shop G-36, Garki Model Market (Old Market), Garki 2, Abuja, FCT.
- Phone: `0802 862 2318`. Calls use `tel:+2348028622318`; business enquiries use WhatsApp at `wa.me/2348028622318`.
- Listed hours: Monday to Saturday, 08:00 to 18:00.
- The product range comes from Greatpec Synergy's historic store pages and seller listings. Current availability and prices are not promised.
- The Google Maps control opens a search for the market and stall number. A verified Google Maps pin for Shop G-36 was not found, so the page says this is a search rather than a confirmed stall pin.
- Jiji seller profile details are shown as Jiji proof of life, not as a Google rating. No star rating is invented.
- Same-day Abuja delivery and payment on delivery appeared on older Greatpec shop material. The website asks customers to reconfirm both before ordering. Other-city delivery is not promised.
- Authorised EcoFlow or BLUETTI dealer status is not confirmed. The website makes no authorisation claim and encourages serial and warranty checks.
- The "About the Builder" page and its footer credit are for this prototype only and should be removed before the final business site goes live.

## Image notes

The main product images are compressed manufacturer product-page packshots. Two smaller photos are from Greatpec Synergy's public Jiji product listings and are labelled as listing images, not stall photos. Before a public launch, confirm permission for the images or replace them with owner-supplied, approved photos. No 2022 cosmetics-template images are used.

The original image sources and product references checked for this prototype include:

- Greatpec Synergy store: <https://greatpecsynergy.com/>
- Greatpec Synergy Jiji seller profile: <https://jiji.ng/shop/greatpecsynergy>
- Greatpec Synergy EcoFlow RIVER 2 Max Jiji listing: <https://jiji.ng/garki-ii/power-equipments/ecoflow-power-station-solar-generator-river-2-max-wavwTMbBsgLtJHE2LIKnGG1N.html>
- EcoFlow Nigeria product pages: <https://ng.ecoflow.com/>
- EcoFlow RIVER 3 Plus and Max Plus product gallery: <https://ng.ecoflow.com/products/river-3-plus-portable-power-station>
- BLUETTI Nigeria product pages: <https://ng.bluettipower.com/>
- Reference shop layout: <https://detopsyelectricalshop.com/ecoflow-nigeria/>
- Google Maps market search: <https://www.google.com/maps/search/?api=1&query=Garki+Model+Market+Old+Market+Garki+2+Abuja>

## Before final handover

1. Confirm today's product list, prices, inventory, hours, delivery and payment methods with Peter.
2. Replace or approve the product and Jiji listing images.
3. Confirm the warranty and serial-number process with Greatpec and the manufacturers.
4. Add a verified Google Business Profile pin if the owner creates one.
5. Reconnect `greatpecsynergy.com` to Vercel and check HTTPS on both the root and `www` hostnames.
6. Remove `about-builder.html` and the prototype credit after approval and handover.
