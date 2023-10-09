import { VStack } from "@kuma-ui/core";
import HeroView from "@/components/landing/HeroSection";
import ProductSection from "@/components/landing/ProductsSection";
import TimeLineSection from "@/components/landing/TimeLineSection";
import MySkillsSection from "@/components/landing/MySkillsSection";
import DesignsSection from "@/components/landing/DesignsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroView />
      <VStack justify="center" alignItems="center" className="m-[50px]">
        <ProductSection />
        <MySkillsSection />
        <DesignsSection />
      </VStack>
    </main>
  );
}
