import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Deepankar Singh | AI Engineer & Full Stack Developer",
  description: "AI Engineer Trainee at Trianz with an MCA from NIT Bhopal, building scalable systems with Spring Boot, Apache Kafka, Trino, and modern full-stack technologies.",
  keywords: [
    "Deepankar Singh",
    "AI Engineer",
    "Java Full Stack Developer",
    "Spring Boot",
    "Apache Kafka",
    "Trino",
    "NIT Bhopal",
    "Developer Portfolio",
  ],
  authors: [{ name: "Deepankar Singh" }],
  creator: "Deepankar Singh",
  publisher: "Deepankar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Deepankar Singh | AI Engineer & Full Stack Developer",
    description: "AI Engineer Trainee at Trianz focused on building scalable event-driven platforms and backend systems.",
    siteName: "Deepankar Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepankar Singh | AI Engineer & Full Stack Developer",
    description: "AI Engineer Trainee at Trianz focused on scalable systems and real-time data pipelines.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
