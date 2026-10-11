# Florida Eye Clinic

A mobile-first static website prototype for Florida Eye Clinic in Wuse, Abuja. It uses semantic HTML, CSS and vanilla JavaScript only. There is no package manager, build step, external font, or runtime dependency.

## Project structure

```text
florida-eye-clinic/
├── index.html
├── eye-tests.html
├── optical.html
├── team.html
├── reviews.html
├── visit.html
├── contact.html
├── about-builder.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── florida-eye-clinic-mark.png
│   ├── google-profile-frames-black.webp
│   ├── google-profile-frames-wire.webp
│   ├── clinic-eye-exam-closeup.webp
│   ├── clinic-equipment-exam.webp
│   ├── clinic-refractor-exam.webp
│   └── wuse-fair-trade-street-view.webp
└── README.md
```

## Open locally

1. Extract the ZIP folder.
2. Open `index.html` in a current browser. Local pages, styles and images work without a server.
3. For an HTTP preview, open a terminal in this folder and run:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

JavaScript adds the mobile navigation, current-page indicator and copyright year. The website has no forms or external service dependency. Call, WhatsApp, email and Maps links open the visitor's chosen apps or website.

## Deploy to Vercel

### Import from GitHub

1. Put this folder in a Git repository and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, select **Add New Project** and import the repository.
3. Choose **Other** as the framework preset. Leave the install and build commands empty. If prompted for an output directory, use `.`.
4. Deploy. The project is plain static HTML, so it needs no build process or server-side function.

### Vercel CLI

Install the Vercel CLI if needed, change into this folder and run:

```bash
vercel
vercel --prod
```

## Business details used

- **Business name:** Florida Eye Clinic
- **Category:** Eye Clinics
- **Primary phone:** 0803 844 9400 (`tel:+2348038449400`)
- **Address:** 22 Kigoma St, Wuse, Abuja 904101, Federal Capital Territory, Nigeria
- **Directions:** <https://www.google.com/maps/place/?q=place_id:ChIJmRyotm4LThAR9NukmO1Tlxw>
- **Google rating shown:** 5.0 stars from 17 reviews
- **Location cues:** Fair Trade Complex, opposite New Golden Hotel, off NAFDAC/FRSC Headquarters, Wuse Zone 7

The phone, address, rating, review count, profile photos and missing Google hours and website fields were checked against the supplied Google Maps Place ID. The direct profile link is above. Google Maps currently shows 5.0 from 17 reviews, no opening hours, and no website link.

## Research and accuracy notes

- A live clinic website was also found at <https://www.fecnigeria.com/>. The Google profile does not link to it, but it publishes optical services, an appointment page, team descriptions and an email contact. Confirm whether this prototype is intended as a refresh, a replacement or a separate landing page before launch.
- The official clinic contact page lists Monday to Friday, 8:00 AM to 6:00 PM, and Saturdays, 10:00 AM to 2:00 PM. The Google profile itself has no published hours and some public directories disagree. The visit page clearly attributes this schedule to the clinic's official site and asks visitors to call **0803 844 9400** before travelling. Sunday is left as not listed.
- The clinic website lists comprehensive eye examinations, pediatric eye care, ocular disease and glaucoma management, contact lenses, refractive services, dry eye management, myopia control and ophthalmic surgery enquiries. The prototype asks visitors to confirm service and clinician availability at the Wuse location.
- On-site Kodak eyeglass production with same-day service is included from the supplied prototype brief. The optical page asks visitors to confirm timing and prescription eligibility rather than promising every order will be ready the same day.
- The eyewear images are photos on Florida Eye Clinic's Google Maps profile. The clinic logo and examination photos come from its official website. The street view is Google Maps imagery near the listed address. Confirm usage rights and owner approval before public launch; retain the truthful captions or replace assets only with clinic-approved imagery.
- The 5.0 rating, 17-review count and quoted review excerpts are displayed without reviewer names. Review content is not converted into a LocalBusiness aggregate-rating claim in the structured data.
- No HMO acceptance, current inventory, clinician rota or Sunday opening time is claimed.

## Design references

- [Aster Smiles](https://astersmilesng.com/): clear appointment-first hierarchy and visible booking prompts.
- [Spec-Savers South Africa](https://www.specsavers.co.za/): eye-test booking and optical browsing patterns. No unverified retail feature from that site is presented as a Florida Eye Clinic service.
- [Lifebridge Diagnostics](https://lifebridgediagnostics.com/): concise Abuja contact and location cues.

The Florida Eye Clinic's own navy and teal logo informed the colour palette. Images, styles and scripts are local so the site remains lightweight and readable on Nigerian mobile connections.

## Prototype-only builder credit

`about-builder.html` and the Emmanuel Agama footer credit are included for the prototype presentation. Both must be removed from the final clinic website before launch, as stated on the builder page. Builder links use WhatsApp at <https://wa.me/2348065965887> and a click-to-call link at `tel:+2348065965887`.
