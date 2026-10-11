# Urban Sight Eye Clinic LTD

A lightweight, mobile-first static website prototype built with semantic HTML, CSS and vanilla JavaScript. It has no build step, package manager, external fonts, or runtime dependencies. Open it locally or deploy the folder as a static site on Vercel.

## Project contents

```text
urban-sight-eye-clinic/
├── index.html
├── eye-tests.html
├── eyewear.html
├── optometrist.html
├── reviews.html
├── visit.html
├── contact.html
├── about-builder.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── clinic-profile-poster.webp
│   ├── eyewear-from-google-profile.webp
│   ├── karu-plaza-streetview.webp
│   └── urban-sight-mark.svg
└── README.md
```

## View locally

1. Extract the ZIP, if using the packaged copy.
2. Open `index.html` in a current browser. The pages, responsive layout, navigation and listed hours work without a server.
3. For a local HTTP preview instead, run this from the project folder:

   ```bash
   python3 -m http.server 8000
   ```

   Then open `http://localhost:8000`.

The mobile navigation, active-page indicator, current-hours status and copyright year are progressive JavaScript enhancements. Listed business hours and contact details remain in the HTML as fallbacks.

## Deploy to Vercel

### Import from a Git repository

1. Put this project folder in a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New Project** and import the repository.
3. Select **Other** as the framework preset. Leave the build command and install command empty. Set the output directory to `.` if Vercel requests one.
4. Deploy. The project is static, so no build process or server-side function is required.

### Deploy with the Vercel CLI

Install the Vercel CLI if needed, change into this folder, then run:

```bash
vercel
```

Follow the prompts and deploy the production version with:

```bash
vercel --prod
```

## Business details in this prototype

- **Business:** Urban Sight Eye Clinic LTD
- **Category:** Eye Clinics
- **Phone:** 0704 098 8546 (`tel:+2347040988546`)
- **Address:** First floor, Rosedell Plaza, opposite City College Of Education, Karu, 900101, Federal Capital Territory, Nigeria
- **Google Maps listing:** <https://www.google.com/maps/place/?q=place_id:ChIJEfslZRUPThARGuLfT70FOQU>
- **Hours shown:** Monday to Saturday, 8:00 AM to 6:00 PM; Sunday closed
- **Rating shown:** 5.0 stars from 23 Google reviews

The review excerpts and listed hours are presented as Google listing details. The eyewear page treats stock, frame selection and prices as enquiries, not a current catalogue. The optometrist page does not invent a clinician's name or credentials. Confirm any appointment, opening hours, services and frame availability with the clinic.

## Prototype notes

The clinic poster and eyewear photograph are from the clinic's Google Maps profile; the location photo is Google Maps Street View near the listed address. Confirm permission and suitability before retaining imagery in a final public launch. Use clinic-approved replacements if needed. Do not replace them with photographs of another clinic.

The **About the Builder** page and Emmanuel Agama's footer credit are included for the prototype presentation only. Remove both before the clinic's final website launch, as stated on that page. The builder enquiry links go to `https://wa.me/2348065965887` and `tel:+2348065965887`.

## Updating the prototype

- Update page content in the relevant `.html` file.
- Shared layout, colours and responsive rules are in `css/styles.css`.
- Navigation, open-hours status and copyright-year behaviour are in `js/main.js`.
- Optimised local photos and the SVG mark are in `images/`.
- Keep the supplied clinic phone, address and Google Maps URL consistent across all pages and the JSON-LD on `index.html`.
