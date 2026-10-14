
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AboutSection from "../../components/sections/home/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f1] text-[#26372e]">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}
