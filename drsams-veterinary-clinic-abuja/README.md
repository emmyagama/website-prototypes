# DrSam's Veterinary Clinic, Abuja

A lightweight, mobile-first static website prototype for DrSam's Veterinary Clinic in Jikwoyi Phase 1, Abuja. Built with plain HTML, CSS and vanilla JavaScript. No build step, frontend framework, external font or third-party JavaScript is required.

## Preview locally

1. Extract the ZIP file.
2. Open a terminal in the `drsams-veterinary-clinic-abuja` folder.
3. Start a local static web server:

   ```bash
   python3 -m http.server 8000
   ```

4. Visit `http://localhost:8000` in a browser. Stop the server with `Ctrl+C`.

You can open `index.html` directly for a quick look, but a local server is recommended so page routing and the Google Maps embed behave as expected.

## Deploy to Vercel

### GitHub and Vercel dashboard

1. Create a GitHub repository and upload the contents of this project folder. Keep `index.html`, `css/`, `js/` and `images/` at the repository root.
2. In Vercel, choose **Add New Project** and import the repository.
3. Set the framework preset to **Other**. This is a static site, so leave the install and build command empty.
4. Set the output directory to `.` if Vercel asks for one. If you committed the enclosing folder instead of its contents, set the Vercel Root Directory to `drsams-veterinary-clinic-abuja`.
5. Deploy. Vercel serves `index.html` at the project URL and recognises `404.html` as the not-found page.
6. For a custom domain, add it in **Project Settings > Domains** and follow Vercel's DNS instructions.

### Vercel CLI

From the project folder, install and sign in to the Vercel CLI if needed, then run:

```bash
vercel
```

Follow the prompts, selecting the current folder as the project root and **Other** as the framework. For a production deployment, run:

```bash
vercel --prod
```

There is no compile or build command.

## Pages

- `index.html`: home, verified location details and contact paths
- `services.html`: a cautious enquiry page because the public listing does not publish a detailed treatment menu
- `mobile-visits.html`: home-visit enquiry only; no mobile service or coverage is promised
- `pet-supplies.html`: product-availability enquiry only; no shop, catalogue or stock is promised
- `reviews.html`: the supplied Google review excerpts and rating
- `visit.html`: full address, daily hours, contact links and Google Maps directions
- `urgent-help.html`: call-first urgent contact guidance with no after-hours response promise
- `about-builder.html`: prototype-only builder information, to be removed before the final clinic website goes live
- `404.html`: custom not-found page

## Details to verify before launch

Business information in the prototype follows the supplied Google Maps listing details:

- Business: **DrSam's Veterinary Clinic, Abuja**
- Category: Veterinarians
- Phone: `0806 159 7708`
- Address: `Suite 6&7 Bu-kazah Plaza By Cherry Field Jikwoyi Phase 1, Abuja 900110, Federal Capital Territory, Nigeria`
- Rating: **4.8★ from 32 Google reviews**
- Listed hours: every day, `07:00 to 19:00`

Please confirm the clinic's phone, address, opening hours and Google rating before publishing, and call ahead for current availability and public-holiday hours. The listing does not verify a detailed treatment menu, home visits, service areas, a pet shop or product stock. The related pages therefore invite enquiries only. They do not state that these services or products are available.

The review page uses the three supplied excerpts. The second excerpt is intentionally shown only up to the text supplied for this prototype. Do not append a guessed ending or attribute new review details without confirming the original.

## Photos and third-party content

The locally stored pet images were saved from photos displayed on the clinic's Google Maps profile and resized to WebP for this prototype. Before the public launch, confirm the clinic has permission to reuse each photo on its own website. Replace any image the business does not own or have permission to publish. Alt text describes the visible image and does not treat Google photo categories as proof of a treatment or service.

The Google Maps iframe and external links require an internet connection. A direct Google Maps link is available if the embedded map does not load. No Google fonts, stock-photo URLs or remote JavaScript are required.

## Prototype-only builder credit

The About the Builder page describes Emmanuel Agama's package at **₦150,000 one-time** and links to `https://wa.me/2348065965887`. The visible builder credit appears in each page footer by design. Both the credit and `about-builder.html` are prototype-only. Remove the credit links and page before the final clinic website is handed over, as the page itself explains.

## Technical notes

- All pages share `css/styles.css` and `js/main.js`.
- Contact buttons use click-to-call, WhatsApp and Google Maps links. There is no booking engine, contact form, stock system, backend or message monitoring guarantee.
- The navigation supports keyboard use and a responsive mobile menu. Reduced-motion preferences are respected.
- Structured local-business data on the homepage repeats the supplied address, telephone and listed hours. Review stars are displayed for visitors but no review aggregate schema is included.
