import { Hero } from "@/src/widgets/hero/hero";
import { AboutPreview } from "@/src/features/home/about-preview";
import { ProductGrid } from "@/src/widgets/product-grid/product-grid";
import { StatsSection } from "@/src/widgets/sections/stats-section";
import { CertificatesPreview } from "@/src/widgets/sections/certificates-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <StatsSection />
      <ProductGrid />
      <CertificatesPreview />
    </>
  );
}
