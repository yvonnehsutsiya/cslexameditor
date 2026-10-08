import SiteNav from "./components/SiteNav";
import HeroSection from "./components/HeroSection";
import PainSection from "./components/PainSection";
import ValueSection from "./components/ValueSection";
import DemoVideoSection from "./components/DemoVideoSection";
import FeatureSection from "./components/FeatureSection";
import CompareSection from "./components/CompareSection";
import AiSection from "./components/AiSection";
import AudienceSection from "./components/AudienceSection";
import PricingSection from "./components/PricingSection";
import FounderSection from "./components/FounderSection";
import TrustSection from "./components/TrustSection";
import InstitutionSection from "./components/InstitutionSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50 font-body text-foreground-900">
      <SiteNav />
      <main>
        <HeroSection />
        <PainSection />
        <ValueSection />
        <DemoVideoSection />
        <FeatureSection />
        <CompareSection />
        <AiSection />
        <AudienceSection />
        <PricingSection />
        <FounderSection />
        <TrustSection />
        <InstitutionSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}