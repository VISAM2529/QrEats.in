import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});
//sampl
export const metadata = {
  title: "QrEats - Run Your Café. Grow Your Brand.",
  description: "The all-in-one Café Growth & Management Platform. QR Ordering, POS, Inventory & Social Media Marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}