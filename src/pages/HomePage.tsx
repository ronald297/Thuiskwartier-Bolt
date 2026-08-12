import PageMeta from '../components/PageMeta';
import HeroSection from '../components/home/HeroSection';
import BrandStatementSection from '../components/home/BrandStatementSection';
import ProductRoutesSection from '../components/home/ProductRoutesSection';
import BrandMarqueeSection from '../components/home/BrandMarqueeSection';
import WorkProcessSection from '../components/home/WorkProcessSection';
import WhySection from '../components/home/WhySection';
import ReviewsSection from '../components/home/ReviewsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import InspirationSection from '../components/home/InspirationSection';
import ShowroomSection from '../components/home/ShowroomSection';
import ClosingCTASection from '../components/home/ClosingCTASection';

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Maak je huis tot een thuis"
        description="Keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten. Alles onder één dak in onze showroom in Urk. Plan een showroomafspraak."
      />
      <HeroSection />
      <BrandStatementSection />
      <ProductRoutesSection />
      <BrandMarqueeSection />
      <WorkProcessSection />
      <WhySection />
      <ReviewsSection />
      <ProjectsSection />
      <InspirationSection />
      <ShowroomSection />
      <ClosingCTASection />
    </>
  );
}
