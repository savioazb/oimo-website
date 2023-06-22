import "./globals.css";
import localFont from "next/font/local";

import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const vcr = localFont({
  src: "./fonts/vcr_osd.ttf",
  variable: "--font-vcr",
});
const helvetica = localFont({
  src: [
    {
      path: "./fonts/helvetica-neue-light.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/helvetica-neue-bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata = {
  title: "OI MÔ",
  description: "Music branding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vcr.variable} ${helvetica.variable} bg-gray-50 font-sans text-gray-900`}
      >
        <main className="">
          <Menu />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
