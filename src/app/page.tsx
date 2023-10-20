import { VStack } from "@kuma-ui/core";
import HeroView from "@/components/landing/HeroSection";
import ProductSection from "@/components/landing/ProductsSection";
import MySkillsSection from "@/components/landing/MySkillsSection";
import DesignsSection from "@/components/landing/DesignsSection";
import ContactSection from "@/components/landing/ContactSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kabuki | Portfolio",
  description: "自分だけの人工知能が作れるアプリEvekiの公式サイトです",
  twitter: {
    images: [
      "https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.jpg&w=12000&q=75",
    ],
  },

  openGraph: {
    title: "Kabuki | Portfolio",
    description: "自分だけの人工知能が作れるアプリEvekiの公式サイトです",
    url: "https://eveki.net",
    siteName: "i-kabuki.com",
    images: [
      {
        url: "https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.jpg&w=12000&q=75",
        width: 1200,
        height: 600,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

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
