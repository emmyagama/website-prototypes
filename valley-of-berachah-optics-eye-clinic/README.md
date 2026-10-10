# Valley of Berachah Optics - Eye Clinic website

A mobile-first, lightweight static website prototype for Valley of Berachah Optics - Eye Clinic in Phase 4, Kubwa, Abuja. It uses plain HTML, CSS and vanilla JavaScript. There is no package installation, build step or framework dependency.

## Project contents

```text
valley-of-berachah-optics-eye-clinic/
├── index.html
├── eye-tests.html
├── eyewear.html
├── optometrist.html
├── reviews.html
├── visit.html
├── contact.html
├── about-builder.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── valley-eye-mark.svg
    ├── clinic-sign-from-google-profile.webp
    ├── frames-from-google-profile.webp
    └── shaffik-plaza-streetview.webp
```

## Open locally

1. Extract the ZIP file.
2. Open `valley-of-berachah-optics-eye-clinic/index.html` in a browser.
3. For a local server preview, open a terminal in the project folder and run:

   ```bash
   python3 -m http.server 8000
   ```

4. Visit `http://localhost:8000`.

All local assets use relative paths. The site does not need a network connection to render its core layout, text, local images or styles. Phone, WhatsApp and Google Maps links need an internet connection or a supported device app.

## Deploy to Vercel

### Git import

1. Push the contents of this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, choose **Add New Project** and import the repository.
3. Select **Other** or **No Framework Preset**.
4. Leave the build command and output directory empty. The root `index.html` is the homepage and there is no build step.
5. Deploy the project. Add a custom domain in Vercel settings when one is ready.

### Vercel CLI

From this project folder, run:

```bash
vercel
```

Follow the CLI prompts to deploy the static files.

## Business facts and content notes

- Business: Valley of Berachah Optics - Eye Clinic
- Category used in the prototype: Eye Clinics
- Phone: 0805 418 5132
- Address: Phase 4, Plot 40, shaffik plaza, cadastral zone 07, 05 Gado Nasko Rd, Kubwa, Abuja 901101, Federal Capital Territory, Nigeria
- Landmark: Phase 4, Shaffik Plaza, opposite Federal House Court on Gado Nasko Road
- Hours shown: Monday to Friday, 8:00 AM to 6:00 PM; Saturday, 10:00 AM to 4:00 PM; Sunday closed
- Google Maps listing: https://www.google.com/maps/place/?q=place_id:ChIJX1ZQExfZTRARRsXKcsDnuCU
- Rating displayed: 4.8 from 32 Google reviews, matching the live Maps listing checked for this prototype on 10 October 2026. The brief originally supplied 4.9 from 28. The current listing was checked again and the site uses the live value selected for this prototype.

The service links use question wording because a complete clinical menu is not published. Visitors are invited to confirm availability and appointment details. Frame photos are examples from the clinic's Google profile, not a live inventory feed.

## Image sources

The clinic sign and eyewear photos were downloaded from the Valley of Berachah Optics Google Maps profile. The plaza exterior photo is a Google Maps Street View image near the listed location. These assets were converted to WebP for the prototype and are displayed with a brief source credit on relevant pages. The logo mark is a local SVG drawn for this prototype using the purple optical branding visible in the clinic photo. No unrelated stock hero images are used.

## Before launch

The About the Builder page and linked footer credit are included for this prototype only. Remove `about-builder.html` and the builder credit from the production website before launch. Confirm the rating, hours, business details, service availability, frame stock and WhatsApp links with the clinic immediately before publishing. The current rating is a static value and does not update automatically.
