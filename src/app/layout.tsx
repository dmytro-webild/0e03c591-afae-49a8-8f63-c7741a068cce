import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Local Service Pro - Reliable Home Services & Free Quotes',
  description: 'Your trusted local partner for fast, professional home services including plumbing, electrical, and HVAC. Get a free quote today!',
  keywords: ["local service, home services, plumbing, electrical, HVAC, handyman, home repair, local contractor, free quote, emergency service, Springfield"],
  openGraph: {
    "title": "Local Service Pro - Fast & Reliable Home Services",
    "description": "Your trusted local partner for fast, professional home services including plumbing, electrical, and HVAC. Get a free quote today!",
    "url": "https://www.localservicepro.com",
    "siteName": "Local Service Pro",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/freight-parcel-inspiration-uniform-art_1134-1177.jpg",
        "alt": "Professional local service technician smiling"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Local Service Pro - Fast & Reliable Home Services",
    "description": "Your trusted local partner for fast, professional home services including plumbing, electrical, and HVAC. Get a free quote today!",
    "images": [
      "http://img.b2bpic.net/free-photo/freight-parcel-inspiration-uniform-art_1134-1177.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
