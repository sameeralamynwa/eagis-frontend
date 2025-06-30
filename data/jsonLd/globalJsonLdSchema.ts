import type { LocalBusiness, WithContext } from "schema-dts";

export const globalJsonLdSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Opt Flow",
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  url: "https://www.opt-flow.com",
  telephone: "+9154889441",
  address: {
    "@type": "PostalAddress",
    streetAddress: "84 South Road",
    addressLocality: "Southall",
    addressRegion: "England",
    postalCode: "HFG 785",
    addressCountry: "USA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.50876",
    longitude: "-0.37629",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "19:00",
    },
  ],
  image: "https://www.opt-flow.com/logo.png",
  priceRange: "£1 - £110",
  paymentAccepted: "Cash, Credit Card, Debit Card, PayPal, Apple Pay",
  areaServed: ["California, Sanfrancisco"],
  hasMap: "https://www.google.com/maps/place/Opt-flow/@51.50876,-0.37629,17z/",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "127",
  },
  sameAs: [
    "https://www.facebook.com/opt-flow/",
    "https://x.com/opt-flow",
    "https://www.instagram.com/opt-flow",
    "https://www.youtube.com/@opt-flow",
    "https://www.pinterest.co.uk/opt-flow",
    "https://www.linkedin.com/company/opt-flow/",
  ],
};
