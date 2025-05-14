import HeroSection from "@/components/hero-section";
import ServiceSection from "@/components/service-section";
import MenuShowcase from "@/components/menu-showcase";
import Testimonials from "@/components/testimonials";
import ProcessSection from "@/components/process-section";
import QualitySection from "@/components/quality-section";
import ContactSection from "@/components/contact-section";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <MenuShowcase />
      <Testimonials />
      <ProcessSection />
      <QualitySection />
      <CtaSection />
      <ContactSection />
    </>
  );
}