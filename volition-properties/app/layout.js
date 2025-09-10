import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-inter",
});

export const metadata = {
  title: "Volition Properties - Invest in Real Estate with Confidence",
  description: "Strategic real estate investment advisory services and exclusive property opportunities for discerning investors seeking sustainable wealth growth.",
  keywords: "real estate investment, property management, investment advisory, luxury real estate, wealth management",
  author: "Volition Properties",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
