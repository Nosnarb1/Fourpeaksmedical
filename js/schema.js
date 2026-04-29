/**
 * Four Peaks Medical — Structured Data (JSON-LD)
 * Include this as a <script type="application/ld+json"> block in every page's <head>.
 * Used by Google, Bing, and LLMs to understand the business.
 *
 * USAGE: Each HTML page references this via an inline <script> that calls
 * window.FPM_SCHEMA (defined here), or simply copy-paste the JSON into
 * a <script type="application/ld+json"> tag directly.
 */

window.FPM_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness", "Physician"],
      "@id": "https://fourpeaksmedical.com/#practice",
      "name": "Four Peaks Medical",
      "description": "Independent pain management and medication-assisted treatment (MAT/Suboxone) practice in Laurel, Delaware. Provider: Brooke Montgomery, FNP-B. Accepting new patients.",
      "url": "https://fourpeaksmedical.com",
      "logo": "https://fourpeaksmedical.com/assets/images/logo.jpg",
      "image": "https://fourpeaksmedical.com/assets/images/logo.jpg",
      "telephone": "+13022806358",
      "faxNumber": "+13022806321",
      "email": "fourpeaksmedical116@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "116 E. Front Street, Suite A",
        "addressLocality": "Laurel",
        "addressRegion": "DE",
        "postalCode": "19956",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.5568,
        "longitude": -75.5710
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "16:00"
        }
      ],
      "medicalSpecialty": [
        "Pain Management",
        "Addiction Medicine"
      ],
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Chronic Pain Management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Medication-Assisted Treatment (MAT)"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Suboxone / Buprenorphine Treatment"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Medication Management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Telehealth"
        }
      ],
      "employee": {
        "@type": "Physician",
        "@id": "https://fourpeaksmedical.com/#provider",
        "name": "Brooke Montgomery",
        "jobTitle": "Family Nurse Practitioner – Board Certified",
        "honorificSuffix": "FNP-B",
        "medicalSpecialty": ["Pain Management", "Addiction Medicine"],
        "worksFor": {"@id": "https://fourpeaksmedical.com/#practice"}
      },
      "hasMap": "https://maps.google.com/?q=116+E+Front+Street+Suite+A+Laurel+DE+19956",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Check, Credit Card, Insurance",
      "areaServed": [
        {
          "@type": "City",
          "name": "Laurel",
          "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Delaware"
        },
        {
          "@type": "State",
          "name": "Delaware"
        }
      ],
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://fourpeaksmedical.com/#website",
      "url": "https://fourpeaksmedical.com",
      "name": "Four Peaks Medical",
      "description": "Pain Management & MAT in Laurel, Delaware",
      "publisher": {"@id": "https://fourpeaksmedical.com/#practice"}
    }
  ]
};

// Auto-inject into <head> if not already present
(function() {
  if (document.querySelector('script[type="application/ld+json"]')) return;
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(window.FPM_SCHEMA);
  document.head.appendChild(s);
})();
