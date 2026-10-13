
import { ArrowRight, Sparkles } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Approach from "../components/home/Approach";
import ContactCTA from "../components/home/ContactCTA";

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

        <a
          href="#services"
          className="inline-flex items-center gap-1 text-[#d4e2ca] underline-offset-4 hover:underline"
        >
          Explore our approach
          <ArrowRight size={13} aria-hidden="true" />
        </a>
      </div>


      <Navbar />

      <Hero />
      <About />
      <Services />
      <Approach />
      <ContactCTA />
      <Footer />
    </main>
  );
}
