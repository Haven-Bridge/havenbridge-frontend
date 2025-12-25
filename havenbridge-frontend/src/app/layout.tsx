import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.havenbridge.com.au'),
  
  title: {
    default: "HavenBridge Developments | Affordable & Social Housing Developer Australia",
    template: "%s | HavenBridge Developments"
  },
  
  description: "HavenBridge Developments is a purpose-driven property development company creating affordable, social, and community housing solutions across Australia. We partner with governments and community housing providers.",
  
  keywords: [
    "affordable housing Australia",
    "social housing developer",
    "community housing",
    "property development Melbourne",
    "property development Sydney",
    "NDIS housing",
    "SDA housing",
    "government housing partnerships",
    "inclusive housing development",
    "multicultural housing",
    "community-focused development",
    "HavenBridge Developments",
    "affordable housing developer",
    "social impact property",
    "housing equity Australia",
    "property project management",
  ],

  authors: [{ name: "HavenBridge Developments Pty Ltd" }],
  
  creator: "HavenBridge Developments Pty Ltd",
  
  publisher: "HavenBridge Developments Pty Ltd",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.havenbridge.com.au",
    siteName: "HavenBridge Developments",
    title: "HavenBridge Developments | Affordable & Social Housing Developer Australia",
    description: "Creating inclusive, community-focused housing solutions across Australia. We partner with governments to address housing affordability and supply challenges.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "HavenBridge Developments - Building Futures, Not Just Properties",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "HavenBridge Developments | Affordable & Social Housing Developer",
    description: "Purpose-driven property development creating affordable, social, and community housing across Australia.",
    images: ["/twitter-image.jpg"], 
    creator: "@HavenBridgeDev", 
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (add these when you have them)
  verification: {
    google: "your-google-verification-code", // ADD WHEN YOU GET IT
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate Languages (if you add translations)
  // alternates: {
  //   canonical: "https://www.havenbridge.com.au",
  //   languages: {
  //     'en-AU': 'https://www.havenbridge.com.au',
  //   },
  // },

  // App Links (if you build mobile apps later)
  // other: {
  //   'mobile-web-app-capable': 'yes',
  //   'apple-mobile-web-app-capable': 'yes',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HavenBridge Developments Pty Ltd",
              "alternateName": "HavenBridge",
              "url": "https://www.havenbridge.com.au",
              "logo": "https://www.havenbridge.com.au/logo.png",
              "description": "Purpose-driven property development company creating affordable, social, and community housing solutions across Australia.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "postalCode": "3000",
                "addressCountry": "AU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-3-9999-9999",
                "contactType": "Customer Service",
                "areaServed": "AU",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/havenbridge-developments",
                "https://twitter.com/HavenBridgeDev"
              ],
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "John Kuot",
                  "jobTitle": "CEO"
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Australia"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "-37.8136",
                  "longitude": "144.9631"
                }
              }
            })
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}