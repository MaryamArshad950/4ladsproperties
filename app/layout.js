import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Header from "../components/Header";
import { agency } from "../data/data";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: `${agency.name} | Real Estate in Karachi`,
  description: "Buy, sell and rent properties with a trusted agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header name={agency.name} phone={agency.phone} />
        <main>{children}</main>
        <footer className="bg-navy-900 pt-12 text-sm text-slate-300">
          <div className="container-x grid gap-8 md:grid-cols-3">
            <div>
              {" "}
              <Image
                src="/images/4lads_icon.png"
                alt={agency.name}
                width={150}
                height={50}
              />
              <p className="mt-2">{agency.tagline}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Quick links</p>
              <p className="mt-2 space-y-1">
                <Link className="block hover:text-gold" href="/listings">
                  Listings
                </Link>
                <Link className="block hover:text-gold" href="/#team">
                  Our team
                </Link>
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Contact</p>
              <p className="mt-2">
                {agency.phone}
                <br />
                {agency.email}
                <br />
                {agency.address}
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 py-5 text-center text-xs">
            © {new Date().getFullYear()} {agency.name}
          </p>
        </footer>
        {/* <a
          href={`https://wa.me/${agency.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-sm font-bold text-white shadow-xl transition hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-40" />
          <span className="relative">WA</span>
        </a> */}
        <a
          href={`https://wa.me/${agency.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
          <FaWhatsapp className="relative text-3xl" />
        </a>
      </body>
    </html>
  );
}
