import { VStack } from "@kuma-ui/core";
import HeroView from "@/components/landing/HeroSection";
import ProductSection from "@/components/landing/ProductsSection";
import MySkillsSection from "@/components/landing/MySkillsSection";
import DesignsSection from "@/components/landing/DesignsSection";

import ContactSection from "@/components/landing/ContactSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroView />
      <VStack justify="center" alignItems="center" className="m-[50px]">
        <ProductSection />
        <DesignsSection />
        <MySkillsSection />
        <ContactSection />
      </VStack>
    </main>
  );
}
