import type { Metadata } from "next";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ApproachSection from "../../components/sections/home/ApproachSection";

export const metadata: Metadata = {
  title: "Our Approach | DoctQuest",
  description:
    "Discover the thoughtful, personalized approach behind DoctQuest.",
};

export default function ApproachPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f1] text-[#26372e]">
      <Navbar />
      <ApproachSection />
      <Footer />
    </main>
  );
}