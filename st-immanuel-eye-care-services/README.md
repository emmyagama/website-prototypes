# St. Immanuel Eye Care Services website

A lightweight, mobile-first static website for St. Immanuel Eye Care Services in Utako, Abuja. The site uses plain HTML, CSS and vanilla JavaScript. It has no build step, package installation or external framework dependency.

## Project files

```text
st-immanuel-eye-care-services/
├── index.html
├── eye-tests.html
├── eyewear.html
├── reviews.html
├── visit.html
├── about-builder.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── eye-care-mark.svg
    ├── google-clinician.webp
    └── zankli-streetview.webp
```

## View locally

1. Extract the ZIP file.
2. Open `st-immanuel-eye-care-services/index.html` in a browser.
3. For a local web-server preview, open a terminal in the project folder and run:

   ```bash
   python3 -m http.server 8000
   ```

4. Visit `http://localhost:8000`.

All site assets use relative paths, so the extracted folder can be opened locally. A local server is recommended for the most consistent browser behaviour.

## Deploy to Vercel

### Import with Git

1. Put the contents of this folder in a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New Project** and import the repository.
3. Choose **Other** or **No Framework Preset**.
4. Leave the build command and output directory empty. The project is plain static HTML, so there is no build step.
5. Deploy. The root `index.html` is the homepage.
6. Add a custom domain in the Vercel project settings if needed.

### Deploy with the Vercel CLI

Install and sign in to the Vercel CLI, open a terminal in this folder, then run:

```bash
vercel
```

Follow the prompts. Vercel can serve the static files directly.

## Content and business details

The public-facing business details used in this prototype are based on the supplied Google Maps listing:

- Business: St. Immanuel Eye Care Services
- Category: Eye Clinics
- Rating: 4.9 stars from 38 Google reviews
- Phone: 0909 757 6552
- Address: Zankli Hospital, 1 Ibrahim Tahir Street, Utako, Abuja 900108, Federal Capital Territory, Nigeria
- Listed hours: Monday through Saturday, 9:00 AM to 7:30 PM; Sunday closed
- Google Maps: https://www.google.com/maps/place/?q=place_id:ChIJfXvmqdsKThARarxyxOD5Ahk

The listing does not publish a complete service menu. Eye test and care links are phrased as questions so visitors can confirm availability with the clinic. Eyewear stock, styles and prices are not represented as confirmed. The cited clinician portrait is not identified by name.

Opening status is calculated in the `Africa/Lagos` time zone using the listed hours. Visitors are still encouraged to confirm hours and availability before travelling.

## Before launch

`about-builder.html` and the linked footer credit are included for this prototype only. Remove the builder page, its navigation links and footer credit from the production website before launch, as agreed. Confirm business copy, phone, hours, WhatsApp and Maps links with the clinic before publishing. The site itself makes no appointment or inventory availability guarantee.
