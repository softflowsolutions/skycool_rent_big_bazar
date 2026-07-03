import { HeroBanner } from '@/components/sections/HeroBanner';
import { SearchBar } from '@/components/sections/SearchBar';
import { CategoriesGrid } from '@/components/sections/CategoriesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { PopularProducts } from '@/components/sections/PopularProducts';
import { PopularServices } from '@/components/sections/PopularServices';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { AppComingSoon } from '@/components/sections/AppComingSoon';
import { Stats } from '@/components/sections/Stats';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { BannerCarousel } from '@/components/sections/BannerCarousel';
import { getFeaturedProducts, getFeaturedServices } from '@/lib/featured';

export default function HomePage() {
  const popularProducts = getFeaturedProducts();
  const popularServices = getFeaturedServices();

  return (
    <>
      <HeroBanner />
      <SearchBar />
      <BannerCarousel />
      <CategoriesGrid />
      <PopularProducts products={popularProducts} />
      <PopularServices services={popularServices} />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <WhyChooseUs />
      <AppComingSoon />
      <CTASection />
      <FAQ />
    </>
  );
}