import { Metadata } from "next";
import SkilledVisaClient from "./SkilledVisaClient";

export const metadata: Metadata = {
  title: "Skilled Visa | Carmine Mercorella Legal",
  description:
    "Explore the Skilled Visa options available for skilled workers in Australia. Get expert guidance from Carmine Mercorella Legal.",
  keywords: [
    "Skilled Visa",
    "Australian Skilled Visa",
    "Carmine Mercorella",
  ],
  openGraph: {
    title: "Skilled Visa | Carmine Mercorella Legal",
    description:
      "Explore the Skilled Visa options available for skilled workers in Australia. Get expert guidance from Carmine Mercorella Legal.",
    url: "https://www.carminemercorellalegal.com/visa/skilled-visa",
    siteName: "Carmine Mercorella Legal",
    type: "website",
  },
};

export default function SkilledVisaPage() {
  return <SkilledVisaClient />;
}