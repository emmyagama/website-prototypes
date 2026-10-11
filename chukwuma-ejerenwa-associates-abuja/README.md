# Chukwuma Ejerenwa & Associates (Notary Public)

A lightweight, mobile-first static website prototype for the Wuye, Abuja law firm. Built with plain HTML, CSS and vanilla JavaScript. No frontend framework, build tool, remote font or third-party JavaScript is required.

## Preview locally

1. Extract the ZIP.
2. Open a terminal in the `chukwuma-ejerenwa-associates-abuja` folder.
3. Start a local server:

   ```bash
   python3 -m http.server 8000
   ```

4. Open `http://localhost:8000`. Stop the server with `Ctrl+C`.

The site is also plain static HTML, so `index.html` can be opened directly. A local server is recommended for the Google Maps embed and page navigation.

## Deploy to Vercel

### GitHub and Vercel dashboard

1. Create a GitHub repository and upload the contents of this project folder. Keep `index.html`, `css/`, `js/` and `images/` at the repository root.
2. In Vercel, select **Add New Project** and import the repository.
3. Choose **Other** as the framework preset. Leave the install and build commands blank.
4. Set the output directory to `.` if Vercel asks for one. If you uploaded the enclosing folder instead of its contents, set the Vercel Root Directory to `chukwuma-ejerenwa-associates-abuja`.
5. Deploy. Vercel serves `index.html` at the project root and recognises `404.html` as the custom not-found page.
6. To use a custom domain, add it under **Project Settings > Domains** and follow Vercel's DNS instructions.

### Vercel CLI

From this folder, install and sign in to the Vercel CLI if needed, then run:

```bash
vercel
```

Select the current folder as the project root and **Other** as the framework. For a production deployment, run:

```bash
vercel --prod
```

There is no build step.

## Pages

- `index.html`: home, Wuye location, verified rating, hours and contact paths
- `practice-areas.html`: enquiry guidance without claiming an unverified practice-area list
- `notary-services.html`: notary enquiry information, supported by the business name and a supplied Google review
- `the-lawyers.html`: founder-led case handling information with a clearly labelled illustrative portrait
- `for-clients.html`: separate enquiry paths for businesses and individuals or families
- `reviews.html`: the supplied review excerpts and 4.8 rating from 27 Google reviews
- `contact.html`: full address, call and WhatsApp links, Google Maps embed and listed hours
- `about-builder.html`: prototype-only builder information and the ₦150,000 one-time package
- `404.html`: custom not-found page

## Business details and launch checks

The prototype uses the following Google Maps profile information:

- Business name: **Chukwuma Ejerenwa & Associates (Notary Public)**
- Google category: **Law Firms**
- Phone: `0703 888 6019`
- Address: `Plot 547 Ameh Ebute St, Wuye, Abuja 900288, Federal Capital Territory, Nigeria`
- Google rating: **4.8★ from 27 reviews**
- Place ID: `ChIJNb0THMsLThARUC2vypU45jE`
- Google Maps profile: https://www.google.com/maps/place/?q=place_id:ChIJNb0THMsLThARUC2vypU45jE
- The Google Maps profile currently displays **Open 24 hours** on every day of the week. The supplied brief lists Sunday as `00:00 to 23:59`. The prototype follows the current Google Maps display and advises visitors to call or WhatsApp before travelling. These are listing hours only, not confirmation that a lawyer is immediately available.

Before launch, ask the firm to confirm its current address, phone, opening hours, lawyer availability, approved contact process, fees, notary requirements, and the areas of law it currently handles. The profile description says the founder personally handles cases. It does not provide a complete practice-area list, individual lawyer biographies, or a lawyer portrait. No credentials, success rates, fixed prices or guaranteed legal outcomes have been invented.

The notary page reflects the business name and a supplied Google review describing notary support for documents. It does not promise that a specific document can be notarised or state a document checklist, notary fee or appointment process. The practice-area, business and family enquiry pages are routes for asking about scope, not confirmed lists of legal services. Site copy is not legal advice and does not create a lawyer-client relationship.

## Photos and logo

The Google Maps profile provides a business photo of a building, not a lawyer portrait. That Maps-sourced photo is optimised locally as `images/google-maps-business-photo.webp`. The lawyer-page image is an AI-generated illustration of a fictional person and is captioned on the page as **not a photograph of the firm's lawyer**. Replace it with an approved, current photograph before launch if the firm wants a real lawyer portrait. Confirm the firm's right to reuse the Maps photo on its own website.

No separate business logo was available in the Google profile. The `CE` monogram is a prototype wordmark and should be approved or replaced by the firm before publication.

## Reference-site notes

The references informed structure and tone, not copied business claims:

- Lawhaven Solicitors: clear appointment calls to action, a calm trust-building introduction, practice-area cards, client feedback and contact paths.
- Osuya & Osuya Law Firm: multi-page navigation for practice areas and lawyer profiles. Its homepage could not be fetched during research, so no claims were taken from it.
- A.O. Ayeni & Associates: concise service cards, visible team profiles and direct local contact information.

The visual direction uses a restrained navy and charcoal palette, warm ivory surfaces, a serif nameplate, simple cards and editorial spacing. It intentionally avoids stock gavels and generic scales-of-justice imagery.

## Prototype details

- All pages share `css/styles.css` and `js/main.js`.
- Calls use `tel:+2347038886019`; WhatsApp opens `wa.me/2347038886019` with a matter enquiry prompt. The builder CTA goes to `wa.me/2348065965887`.
- The Google Maps iframe and external links require an internet connection. A direct Maps link remains available if the embed does not load.
- No contact form, backend, document upload, appointment booking or message-monitoring guarantee is included.
- The About the Builder page and footer credit are prototype-only. The footer link and page itself should be removed before the final firm website is published.
- Visible body and footer copy avoids em dashes as requested.
