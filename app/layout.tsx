import type { Metadata } from "next";
import { Orbitron, Roboto, Poppins, Exo_2, Audiowide, Teko, Titillium_Web, Russo_One, Barlow_Condensed, Chakra_Petch, Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LandingNavbar } from "@/components/custom/Navbar";
import Footerdemo from "@/components/custom/Footer";
import { LoadingProvider } from "./contexts/LoadingContext";
import { Rajdhani } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Imrobonix - Revolutionary Medical Robotics | SurgiKot & CheriBot",
    template: "%s | Imrobonix",
  },
  description:
    "Imrobonix pioneers precision medical robotics with India's first handheld robotic surgical device (SurgiKot) and AI-enabled bionic upper limb (CheriBot). Revolutionizing healthcare with cost-effective, high-precision robotic solutions.",
  keywords: [
    "medical robotics",
    "surgical robots",
    "SurgiKot",
    "CheriBot",
    "minimally invasive surgery",
    "robotic surgical device",
    "bionic arm",
    "AI vision prosthetics",
    "handheld surgical robot",
    "India medical technology",
    "precision surgery",
    "robotic prosthetics",
    "medical innovation",
    "healthcare robotics",
    "laparoscopic instruments",
    "surgical precision",
    "affordable medical robots",
    "Chennai startup",
    "Anna University",
    "medical device innovation",
  ],
  authors: [{ name: "Imrobonix Pvt Ltd" }],
  creator: "Imrobonix Pvt Ltd",
  publisher: "Imrobonix Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.imrobonix.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.imrobonix.com",
    title: "Imrobonix - Revolutionary Medical Robotics | SurgiKot & CheriBot",
    description:
      "India's first handheld robotic surgical device and AI-enabled bionic upper limb. Transforming healthcare with precision medical robotics.",
    siteName: "Imrobonix",
    images: [
      {
        url: "/images/og-image.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Imrobonix Medical Robotics - SurgiKot and CheriBot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imrobonix - Revolutionary Medical Robotics",
    description:
      "India's first handheld robotic surgical device and AI-enabled bionic upper limb. Transforming healthcare with precision robotics.",
    images: ["/images/twitter-image.png"], // Create this image (1200x675px recommended)
    creator: "@imrobonix", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Medical Technology",
  classification: "Healthcare Robotics",
};

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// export const orbitron = Orbitron({
//   subsets: ["latin"],
//   variable: "--font-orbitron",
//   display: "swap",
// });

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400"],
  display: "swap",
});

export const teko = Teko({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const russo = Russo_One({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400"],
  display: "swap",
});

export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const chakra = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const michroma = Michroma({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Imrobonix Pvt Ltd",
  "url": "https://www.imrobonix.com",
  "logo": "https://www.imrobonix.com/images/Logo.png",
  "description": "Revolutionary medical robotics company specializing in surgical devices and bionic prosthetics",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anna University, Sir C V Raman Science Block 3rd, Campus, Guindy",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600025",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-72000-61904",
    "contactType": "Customer Service",
    "email": "info@imrobonix.com"
  },
  "sameAs": [
    "https://instagram.com/_imrobonix_",
    "https://linkedin.com/company/imrobonix"
  ],
  "founder": {
    "@type": "Person",
    "name": "Iyyappan"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://www.imrobonix.com" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={` ${michroma.variable} ${roboto.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <div className="min-h-screen">
              <LandingNavbar />
              <main className="bg-background">
                {children}
              </main>
              <Footerdemo />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}