import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter - Clean, modern, and highly readable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Sora - Modern, geometric, and perfect for headings
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// JetBrains Mono - For code snippets if needed
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "QrEats - Smart Cafe Management System",
  description: "Transform your cafe with QR ordering and powerful analytics. Streamline operations with QrEats - the complete cafe management solution.",
  keywords: "cafe management, QR ordering, restaurant POS, cafe analytics, food ordering system",
  authors: [{ name: "QrEats Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "QrEats - Smart Cafe Management System",
    description: "Transform your cafe with QR ordering and powerful analytics",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}