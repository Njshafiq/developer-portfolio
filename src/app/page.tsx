import { Hero, HeroButtons } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { FloatingReactions } from "@/components/floating-reactions";
import { AboutStory } from "@/components/about-story";
import { DreamSection } from "@/components/dream-section";
import { WorkSection } from "@/components/work-section";
import { StickyNotes } from "@/components/sticky-notes";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { EducationAndCerts } from "@/components/education";
import { ContactBillboard } from "@/components/contact-billboard";

export default function Home() {
  return (
    <div className="space-y-4">
      {/* 1. Top Hero Section */}
      <Hero />

      {/* 2. Full-Width Yellow Ticker Marquee Ribbon */}
      <div className="my-2">
        <Ticker />
      </div>

      {/* 3. Three Hand-Drawn CTA Buttons Below Ticker */}
      <HeroButtons />

      {/* Interactive Confetti Reactions */}
      <FloatingReactions />

      {/* 4. About Story (Highlighters, Metrics Grid, Polaroid, Outside Work) */}
      <AboutStory />

      {/* 5. Dream / Vision Flagship Section (Retro Scanner Terminal HUD) */}
      <DreamSection />

      {/* 6. Work Section (Receipts, Attendance Dots, Ledger, Under-the-Hood) */}
      <WorkSection />

      {/* 7. Notes Section ("Hard problems, solved" Pastel Sticky Notes) */}
      <StickyNotes />

      {/* 8. Side Projects ("Things I build for fun" with Browser Dots) */}
      <div className="max-w-4xl mx-auto px-4">
        <Projects />
      </div>

      {/* 9. Skills Matrix (Toolbox "Grouped by what they're for") */}
      <div className="max-w-4xl mx-auto px-4">
        <Skills />
      </div>

      {/* 10. Education & Verified Credentials */}
      <div className="max-w-4xl mx-auto px-4">
        <EducationAndCerts />
      </div>

      {/* 11. Comic Billboard & Two-Card Contact Form */}
      <ContactBillboard />
    </div>
  );
}
