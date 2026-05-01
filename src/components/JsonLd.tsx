import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": "https://www.advancedpowerinfra.com",
    "logo": "https://www.advancedpowerinfra.com/icon.jpeg",
    "description": "Leading Diesel Generator dealers and service providers in Bangalore, offering sales, rental, and maintenance for Cummins, Tata, KOEL, and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.190, Elite Residency, Kodipalya Main Road, Kengeri",
      "addressLocality": "Bangalore",
      "postalCode": "560056",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone[0],
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi", "Kannada"]
    },
    "sameAs": [
      // Add social media links here if available
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Diesel Generator Sales and Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.190, Elite Residency, Kodipalya Main Road, Kengeri",
        "addressLocality": "Bangalore",
        "postalCode": "560056",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Diesel Generator Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diesel Generator Sales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diesel Generator Rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diesel Generator Maintenance (AMC)"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default JsonLd;
