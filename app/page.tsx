import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/home/Hero";
import AboutSection from "../components/sections/home/AboutSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import ApproachSection from "../components/sections/home/ApproachSection";
import ContactCTA from "../components/sections/home/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f1] text-[#26372e]">
      {/* Announcement bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 bg-[#173b2d] px-4 py-3 text-center text-[11px] text-white sm:gap-3">
        <Sparkles
          size={14}
          aria-hidden="true"
          className="text-[#c4d5b9]"
        />

        <span>Your wellbeing deserves a little more attention.</span>

        <Link
          href="/approach"
          className="inline-flex items-center gap-1 text-[#d4e2ca] underline-offset-4 hover:underline"
        >
          Explore our approach
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>

      <Navbar />

      <Hero />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ContactCTA />

      <Footer />
    </main>
  );
}