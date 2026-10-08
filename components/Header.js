"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["Buy", "/listings?purpose=sale"],
  ["Rent", "/listings?purpose=rent"],
  ["Listings", "/listings"],
  ["Team", "/#team"],
  ["Contact", "/#contact"],
];

export default function Header({ name, phone }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-white"}`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-[72px]"}`}
      >
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-navy"
        >
          {" "}
          <Image
            src="/images/4lads_logo.png"
            alt={name}
            width={150}
            height={50}
          />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map(([t, h]) => (
            <Link
              key={t}
              href={h}
              className="group relative text-sm font-medium text-slate-700 hover:text-navy"
            >
              {t}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${phone}`} className="btn hidden sm:inline-flex">
            Call Us
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t bg-white md:hidden"
          >
            {links.map(([t, h]) => (
              <Link
                key={t}
                href={h}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 font-medium text-navy"
              >
                {t}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
