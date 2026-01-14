import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LetterSection } from "@/components/letter-section";
import { CommitteesSection } from "@/components/committees-section";
import { CountdownSection } from "@/components/countdown-section";
import { FaqSection } from "@/components/faq-section";
import { RegistrationSection } from "@/components/registration-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <LetterSection />
        <CommitteesSection />
        <CountdownSection />
        <FaqSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
