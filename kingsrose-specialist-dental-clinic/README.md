# Kingsrose Specialist Dental Clinic website prototype

A lightweight, mobile-first static website for **Kingsrose Specialist Dental Clinic** in New Karu, Abuja. Built with plain HTML, CSS and vanilla JavaScript. There is no build step, dependency install or backend.

## Project files

```text
kingsrose-specialist-dental-clinic/
├── index.html              Homepage and clinic information
├── services.html            Treatment enquiry page
├── reviews.html             Google review snippets
├── visit.html               Address, listed hours and directions
├── about-builder.html       Prototype-only builder introduction
├── css/
│   └── styles.css           Responsive site styles
├── js/
│   └── main.js              Mobile menu and Africa/Lagos opening status
├── images/
│   ├── hero-consultation.webp
│   ├── google-care-photo.webp
│   ├── location-streetview.webp
│   └── kingsrose-mark.svg
└── README.md
```

## Preview locally

1. Extract the zip file.
2. Open `index.html` in a browser. The pages also work from a simple local static server.
3. Use the links in the header and footer to move between the pages.

All site styling, icons and images are local. Google Maps directions and WhatsApp links open external services and need an internet connection.

## Deploy to Vercel

### From GitHub

1. Extract the zip and upload the contents of the `kingsrose-specialist-dental-clinic` folder to a new GitHub repository. Keep `index.html` at the repository root.
2. In Vercel, choose **Add New Project** and import the repository.
3. Set the Framework Preset to **Other**. Leave the Build Command empty and set the Output Directory to `.` if Vercel asks for one.
4. Deploy. No environment variables or build command are required.

### Direct upload or CLI

The project is static. You can also upload the folder through a static deployment workflow, or run `vercel --prod` from the project root if the Vercel CLI is installed and authenticated.

## Verified business details used

- **Business:** Kingsrose Specialist Dental Clinic
- **Address:** 1st floor, Grace and Glory Plaza, shop 5 Abuja-Keffi Rd, opposite Juvacy luxury Hotel, New Karu 900101, Federal Capital Territory, Nigeria
- **Phone:** 0911 695 7905
- **Google rating:** 4.9 out of 5 from 15 reviews
- **Listed hours:** Monday to Saturday, 8:00 AM to 5:00 PM. Sunday closed.
- **Google Maps:** [Open the Kingsrose listing](https://www.google.com/maps/place/?q=place_id:ChIJx9SLV2IJThARa3q4PB5ygSU)

The opening status is calculated in the browser using the `Africa/Lagos` time zone. The full hours are also visible in the HTML for users who have JavaScript disabled.

The public Google listing does not publish a treatment menu. For that reason, treatment cards are worded as questions to ask and clearly advise visitors to confirm availability with the clinic.

## Images and attribution

- `location-streetview.webp` is a local, optimised Google Maps Street View image of the clinic location. The page labels it as Google Maps Street View.
- `google-care-photo.webp` is a local, optimised image from the clinic's Google profile. The page identifies it as a Google profile photo.
- `hero-consultation.webp` is an AI-generated illustrative consultation image. It is explicitly labelled as illustrative and not a photograph of Kingsrose clinic.
- The custom tooth and rose mark is a prototype graphic. No official business logo was supplied with the brief.

Images are stored locally in WebP format to keep page weight low. No remote font, JavaScript library or stock photo service is used.

## Before publishing as the clinic's final website

- Confirm the phone number, address and opening hours directly with the clinic.
- Confirm which services are available, then replace enquiry-only wording with the approved treatment list.
- Review the Google rating and review snippets for changes before launch.
- Replace the illustrative hero image with an approved clinic photo if one becomes available.
- Remove `about-builder.html` and the prototype credit strip from each page. These are included only for the prototype handover.
- Connect the final domain and publish using the owner's preferred business details and privacy requirements.
