import type { Metadata } from "next";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ServicesSection from "../../components/sections/home/ServicesSection";

export const metadata: Metadata = {
  title: "Our Services | DoctQuest",
  description:
    "Explore DoctQuest services and discover thoughtful ways to support your wellbeing.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f1] text-[#26372e]">
      <Navbar />
      <ServicesSection />
      <Footer />
    </main>
  );
}