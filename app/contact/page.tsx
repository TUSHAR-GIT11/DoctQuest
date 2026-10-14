import type { Metadata } from "next";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ContactCTA from "../../components/sections/home/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us | DoctQuest",
  description:
    "Get in touch with DoctQuest. Share your questions and connect with our team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f1] text-[#26372e]">
      <Navbar />
      <ContactCTA />
      <Footer />
    </main>
  );
}