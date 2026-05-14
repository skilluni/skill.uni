import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/homepage/HeroSection";
import { MetricsSection } from "@/components/homepage/MetricsSection";
import { CurriculumSection } from "@/components/homepage/CurriculumSection";
import { CoursesSection } from "@/components/homepage/CoursesSection";
import { TestimonialsSection } from "@/components/homepage/TestimonialsSection";
import { InstructorSection } from "@/components/homepage/InstructorSection";
import { NotificationCTASection } from "@/components/homepage/NotificationCTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <CurriculumSection />
        <CoursesSection />
        <TestimonialsSection />
        <InstructorSection />
        <NotificationCTASection />
      </main>
      <Footer />
    </div>
  );
}