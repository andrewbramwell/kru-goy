module.exports = {
    "name": "Kru Goy Uk",
    "email": "krugoymassageinstructor@gmail.com",
    "phoneForTel": "+447415998445",
    "phoneFormatted": "07415 998445",
    "openingHours": "Mon-Sun: 10am-10pm",
    "onlineBooking": "",
    "address": {
        "lineOne": "48 Faulkner Street",
        "lineTwo": "China Town",
        "city": "Manchester",
        "state": "",
        "zip": "M1 4FH",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/RKyT39CZ4tRgJ8du5"
    },
    "socials": {
        "facebook": "https://www.facebook.com/kruGoySalisa",
        "instagram": "",
        "googleReview": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://thaimassageinstructor.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": ["EducationalOrganization", "LocalBusiness"],
            "@id": "https://thaimassageinstructor.co.uk/#business",
            "name": "Kru Goy Uk",
            "image": "https://thaimassageinstructor.co.uk/assets/svgs/logo.svg",
            "url": "https://thaimassageinstructor.co.uk",
            "telephone": "+447415998445",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "48 Faulkner Street, China Town",
                "addressLocality": "Manchester",
                "postalCode": "M1 4FH",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/RKyT39CZ4tRgJ8du5"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "22:00"
            },
            "sameAs": [
                "https://www.facebook.com/kruGoySalisa"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://thaimassageinstructor.co.uk/#website",
            "url": "https://thaimassageinstructor.co.uk",
            "name": "Kru Goy Uk",
            "publisher": {
                "@id": "https://thaimassageinstructor.co.uk/#business"
            }
        }
    }
};

