"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our approach", href: "#approach" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e5e6dc]/80 bg-[#f8f7f1]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-16 xl:px-24">
        {/* Brand */}
        <Link
          href="#home"
          aria-label="Wellora home"
          onClick={closeMenu}
          className="group flex items-center gap-2.5"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-[#e4ebe0] text-[#214c3b] transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-[#d7e3d0]">
            <Heart size={20} strokeWidth={1.7} />
          </span>

          <span className="text-2xl font-bold tracking-[-0.06em] text-[#214c3b]">
            wellora<span className="text-[#a4b88d]">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-xs font-medium text-[#626b61] transition-colors duration-200 hover:text-[#214c3b] lg:text-sm"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#829775] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA and mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="group hidden min-h-11 items-center gap-2 rounded-full bg-[#214c3b] px-5 text-xs font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#173b2d] sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-11 items-center justify-center rounded-full border border-[#dfe4d9] text-[#214c3b] transition hover:bg-[#e9f0e5] md:hidden"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] border-t border-[#e5e6dc] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="mx-auto max-w-[1440px] px-5 pb-5 pt-3 sm:px-8">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 40}ms`
                    : "0ms",
                }}
                className="flex items-center justify-between border-b border-[#e5e6dc] py-4 text-sm font-medium text-[#405342] transition-colors hover:text-[#829775] last:border-0"
              >
                {item.label}
                <ArrowUpRight size={16} className="text-[#91a187]" />
              </Link>
            ))}

            <Link
              href="#contact"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#214c3b] px-5 text-sm font-medium text-white transition hover:bg-[#173b2d] sm:hidden"
            >
              Let&apos;s talk
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}