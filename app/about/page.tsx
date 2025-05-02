// app/about/page.tsx

import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Carmine Mercorella Legal | Immigration Law Experts",
  description:
    "Learn more about Carmine Mercorella Legal — over 20 years of trusted immigration law expertise helping clients navigate Australia's migration system.",
  keywords: ["Carmine Mercorella", "immigration lawyer", "about", "migration expert Australia"],
  openGraph: {
    title: "About Carmine Mercorella Legal",
    description:
      "Discover our mission, values, and the trusted expertise behind Carmine Mercorella Legal.",
    url: "https://yourdomain.com/about",
    siteName: "Carmine Mercorella Legal",
    images: [
      {
        url: "/images/cmlegal-background-3.png",
        height: 630,
        alt: "Carmine Mercorella Legal",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}