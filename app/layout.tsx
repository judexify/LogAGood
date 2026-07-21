import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogAGood | Smart Logistics & Delivery Platform",
  description:
    "LogAGood is a modern logistics and delivery platform that connects businesses, riders, and customers. Manage deliveries, track orders in real time, assign riders, and streamline logistics operations across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlex.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main> {children}</main>
      </body>
    </html>
  );
}
