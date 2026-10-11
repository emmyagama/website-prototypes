# Blooming Mobile Veterinary Clinic and PetMart

A fast, mobile-first static website prototype for the Blooming veterinary clinic and PetMart in Gudu, Abuja. Built with plain HTML, CSS and vanilla JavaScript. There is no framework, package installation, build step or external font dependency.

## Pages

- `index.html`: Homepage, trust details, quick contact and service pathways
- `services.html`: Veterinary-care enquiries and a clear note that the public profile has no detailed service menu
- `mobile-visits.html`: Mobile visit enquiries with area and availability confirmation
- `petmart.html`: PetMart stock checks without claiming specific products are available
- `reviews.html`: Current Google rating and the three supplied review excerpts
- `visit.html`: Full address, 24-hour listing, click-to-call, Google Maps directions and map embed
- `urgent-help.html`: Call-first steps and urgent WhatsApp contact
- `about-builder.html`: Prototype-only About the Builder page and package
- `404.html`: A simple missing-page route

Shared styles live in `css/styles.css`, the mobile navigation and copyright year script lives in `js/main.js`, and the locally optimised Google Maps listing photo and favicon are in `images/`.

## Preview locally

1. Extract the project folder.
2. Open `index.html` directly in a browser. The pages, styles and local image work without a server. Phone, WhatsApp, Google Maps and the embedded map need an internet connection and the relevant app or browser support.
3. To preview through a local server, open a terminal in this folder and run:

   ```sh
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`. On Windows, use `py -m http.server 8000` if `python3` is not available.

## Deploy to Vercel

This is a static site. It does not need a build command or environment variables.

1. Put the contents of this folder into a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New Project** and import the repository.
3. Set the project root to the folder containing `index.html`. If this folder is the repository root, leave the root setting unchanged.
4. Select **Other** or no framework preset. Leave the build command blank. If Vercel asks for an output directory, use `.`.
5. Deploy. Vercel serves the HTML pages and their relative `css/`, `js/` and `images/` files.

## Google profile research and launch notes

Research checked on 11 October 2026:

- Google Maps profile: [Blooming Mobile Veterinary Clinic and PetMart](https://www.google.com/maps/place/?q=place_id:ChIJW0fcIIg0TQcRb_J-8v99NCs). The profile shows a 5.0 rating from 19 reviews, phone `+234 806 066 8780`, the Gudu address and opening as 24 hours on each day. The profile page's Sunday hours were also shown as 00:00 to 23:59. The website uses this as a Google listing fact and asks customers to call to confirm that a veterinary professional is available before travelling or requesting a mobile visit.
- Exact address used on the site: **Aliyu Modibbo St, Gudu, Abuja 900104, Federal Capital Territory, Nigeria**.
- The Google Maps website field showed no website. The category shown in the Maps view was “Animal hospital”; the supplied prototype brief identifies the primary category as “Veterinarians” and the Google type as `VeterinaryCare`. The website uses the exact supplied business name and `VeterinaryCare` structured data.
- The Google profile shows a small photo collection. The locally stored WebP used in the hero is the pet photo displayed in the Google Maps photo panel. It is captioned as a listing photo and does not imply that the pictured pets are clinic patients. Please confirm permission to use the image on a public production website before launch.
- The profile does not publish a detailed service menu, mobile-visit coverage area, visit terms, PetMart catalogue or live inventory. The prototype intentionally asks customers to confirm these directly rather than inventing treatments, service areas, fees or stock.
- The three review excerpts on `reviews.html` are reproduced verbatim as supplied. The 5.0 rating and 19-review count are shown separately from the excerpts.

## Reference-site patterns used

- [Pets n Vets Essentials](https://petsnvetsessentials.com/): Abuja-specific pet products and veterinary help, clear service groupings, and prominent WhatsApp contact. The prototype uses a focused WhatsApp enquiry for the exact business rather than inventing branches or stock.
- [Banfield](https://www.banfield.com/): simple service taxonomy and clear appointment-oriented actions. The Blooming site keeps its service cards broad because the Google profile does not list treatments.
- [PDSA](https://www.pdsa.org.uk/): empathetic, helpful language for pet owners. The prototype uses a calm, practical tone and encourages a direct call when a concern is urgent.

No separate business logo asset was available in the Google profile material reviewed. The lightweight wordmark and paw-flower mark are prototype artwork and can be replaced with an approved business logo.

## About the Builder page

`about-builder.html` contains the supplied Emmanuel Agama introduction, the **₦150,000 one-time website package**, one year of hosting, and a WhatsApp CTA to **+234 806 596 5887**. The page and its footer credit are clearly marked as prototype-only and should be removed from the public site at handover.

Before launch, have Blooming confirm the 24-hour listing, phone availability, exact services, mobile visit coverage and PetMart inventory. This static prototype does not provide veterinary advice, live booking, real-time inventory or a guaranteed mobile response.
