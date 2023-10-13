import Link from "next/link";
import { Text, VStack, HStack } from "@kuma-ui/core";
import { ProductCard, ProductProps } from "../shared/ProductCard";

import SectionTitle from "./SectionTitle";

export default function ProductSection() {
  const data: ProductProps[] = [
    {
      imageSrc: "/images/evekiIcon.webp",
      title: "Eveki",
      iconsSrc: [
        "/icons/Chat Icon.svg",
        "/icons/Robot Icon.svg",
        "/icons/Favorite Icon.svg",
      ],
      description: "自分好みのAIキャラクターを作成、シェアできるアプリ",
      href: "https://eveki.net",
    },
    {
      imageSrc: "/images/zebootIcon.webp",
      title: "Zeboot",
      iconsSrc: [
        "/icons/Meditate Flower Icon.svg",
        "/icons/Meditate Person Icon.svg",
        "/icons/Extension.svg",
      ],
      description: "自然言語処理と禅の発想を用いたコンテンツフィルタ",
      href: "https://zeboot.com/",
    },

    {
      imageSrc: "/images/tokiwaIcon.webp",
      title: "Tokiwa",
      iconsSrc: [
        "/icons/Chat Icon.svg",
        "/icons/Group Icon.svg",
        "/icons/Favorite Icon.svg",
      ],
      description: "心身の状態を家族や友人で共有できるヘルスケアアプリ",
      href: "https://apple.co/3PR7Qeb",
    },
    {
      imageSrc: "/images/homorIcon.webp",
      title: "Homer",
      iconsSrc: [
        "/icons/Pen and Text Icon.svg",
        "/icons/Robot Icon.svg",
        "/icons/Idea Icon.svg",
      ],
      description: "AIが文体を自動で分析し、修正案を作り出すアプリ",
      href: "https://apple.co/46pPkAV",
    },
    {
      imageSrc: "/images/wordmuteIcon.webp",
      title: "Mute",
      iconsSrc: [
        "/icons/Explore Icon.svg",
        "/icons/Shield with Heart Icon.svg",
        "/icons/Extension.svg",
      ],
      description: "インターネット上の過激な情報、言葉をブロックするアプリ",
      href: "https://apple.co/3PVMcWo",
    },
  ];

  return (
    <div className="my-9 min-h-screen">
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Product" />
        <div className="grid md:grid-cols-3 gap-20 items-end grid-cols-1">
          {data.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              iconsSrc={product.iconsSrc}
              description={product.description}
              href={product.href}
            />
          ))}
          <Link
            href="/products"
            className="mt-5 px-5 py-2.5 text-sm font-medium text-white bg-[#125115] hover:bg-[#184212] focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
          >
            View All
          </Link>
        </div>
      </VStack>
    </div>
  );
}
