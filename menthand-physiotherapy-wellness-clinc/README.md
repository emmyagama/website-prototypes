# Menthand Physiotherapy & Wellness Clinc

A mobile-first static website refresh prototype for Menthand Physiotherapy & Wellness Clinc in Wuye, Abuja. It uses plain HTML, CSS and vanilla JavaScript. There is no framework, package installation, build step, remote font or external image dependency.

## Preview locally

Open `index.html` directly in a browser. All page links, styles, scripts and image paths are relative to this folder.

To run a small local server from this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on Vercel

1. Push the contents of this folder to a GitHub repository.
2. Import that repository in Vercel.
3. Choose the `Other` framework preset. Leave the build command empty and set the output directory to `.`.
4. Deploy. No environment variables or server functions are required.

The Vercel CLI also works from this folder with `vercel --prod`.

## Pages and assets

- `index.html`: Home, service overview, Google reviews, Wuye location and primary CTAs
- `conditions.html`: Back pain, sports injury, stroke rehabilitation and other service enquiries
- `session.html`: What to expect and questions to ask before a physiotherapy visit
- `team.html`: Team introduction without an invented individual biography
- `reviews.html`: The three supplied Google review excerpts
- `book.html`: Call, WhatsApp, hours and booking enquiry information
- `contact.html`: Full address, Google Maps directions and nearby Street View
- `about-builder.html`: Prototype-only builder page and package details
- `css/styles.css`: Mobile-first responsive styles
- `js/main.js`: Accessible mobile navigation and footer year
- `images/`: Local optimized Google Maps photos, Street View and favicon

## Business details used

- Name: Menthand Physiotherapy & Wellness Clinc
- Category in the supplied brief: Physiotherapy clinic, Google type LocalBusiness
- Phone: 0805 559 3861
- Address: Swift plaza, Aguwan Anaekwe St, Wuye, Abuja 900108, Federal Capital Territory, Nigeria
- Google Maps place ID: `ChIJp5pzzAZ1ThARGH3nvjQeFrc`
- Google Maps profile: [View the listing](https://www.google.com/maps/place/?q=place_id:ChIJp5pzzAZ1ThARGH3nvjQeFrc)
- Rating and count shown: 5.0 stars from 11 Google reviews

The current Google Maps page shows 5.0 from 11 reviews and identifies the location as a physical therapy clinic. The supplied name, spelling and requested category are retained in this prototype.

## Hours and location update

The Google Maps profile has a blank website field. Search results also identify `menthandphysio.com` as a Menthand site using the same phone number, but its indexed contact details point to an older Apo address and its hours differ from the current Wuye brief. The direct site could not be fetched during research. This prototype is intended as a refresh direction for that clinic, updated to the Wuye address supplied by the owner. Before launch, confirm whether the new build will replace the current domain, use a new domain or serve as a separate landing page.

The Wuye Google Maps page currently renders weekday closing times as 5:00 AM and Saturday closing time as 3:00 AM. The user confirmed that the intended times for this prototype are 5:00 PM on weekdays and 3:00 PM on Saturday. Those afternoon hours are displayed, with a call or WhatsApp confirmation note. Correct the closing times in the Google Business Profile before launch so customers see consistent information.

The clinic name uses the spelling `Clinc` from the brief and Google listing. The indexed website spells it `Clinic`. Confirm the final brand spelling before publication.

## Services and clinical accuracy

The site foregrounds back pain, sports injury and stroke rehabilitation, as requested. Search-indexed information for the Menthand website also lists orthopaedic care, neurology, women's health and pediatric services. Its associated Facebook profile mentions home services, occupational therapy and speech therapy. Related services are presented as questions to ask, not guaranteed offerings at the Wuye branch. Confirm current services, provider availability and coverage directly with the clinic.

The site does not make a promise of recovery or invent a named therapist, qualifications, years of experience, package prices or appointment availability. The session guide is general information, not a diagnosis or treatment plan.

## Reviews

All three supplied review excerpts appear on the Home and Reviews pages exactly as provided. The excerpts are linked to the live Google profile. No reviewer names or additional review wording has been added.

## Images and usage

The treatment-room photo and clinic-sign photo were downloaded from the Google Maps profile for the supplied place ID. The nearby Street View image is from the Google Maps Street View image endpoint. They are stored locally as WebP files for faster mobile loading. No stock, AI or before-and-after images are used.

Confirm the right to reuse profile photos on a standalone website with the clinic before launch. The small typographic `M` mark is a prototype treatment and is not represented as an official logo. The blue and orange palette is drawn from the clinic signage visible in the Google Maps photo.

## Calls to action and future additions

- Phone links use `tel:+2348055593861`.
- WhatsApp links open a prefilled physiotherapy enquiry.
- The mobile layout keeps a call button fixed at the bottom of the screen. A floating WhatsApp button is also available.
- Google Maps links use the supplied place ID.
- No online intake form or booking engine is connected. The clinic confirms session details directly.
- The next version can add an online intake form, package pricing, a photo gallery, HMO information and an online booking engine after the clinic confirms the content.

## Prototype credit

The About the Builder page and visible footer credit are for the prototype only. Both should be removed before the final website goes live, as stated on the builder page.

The builder package shown is the supplied offer: ₦150,000 one-time, including one year of domain and hosting, with full ownership and handover. The page links to Emmanuel Agama on WhatsApp.

## Design references

The design approach takes cues from:

- [Effective Physiotherapy & Fitness Clinic](https://effectivephysio.com/): prominent service cards, outcome-led messaging and patient reviews
- [Pure Physiotherapy](https://www.purephysiotherapy.co.uk/): condition-led structure and direct booking pathways
- [PhysioCraft](https://physiocraft.com/): discipline-based service organization and locally relevant rehabilitation language

The deep-blue and sand palette follows the requested clinical-athletic direction and the royal-blue and orange colors visible on the clinic sign. Local images, system fonts and plain static files keep the site light for Nigerian mobile data conditions.
