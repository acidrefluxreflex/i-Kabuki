import Image from "next/image";
import { Text, VStack, HStack } from "@kuma-ui/core";
import { ProductCard, ProductProps } from "../shared/ProductCard";

import SectionTitle from "./SectionTitle";

export default function ProductSection() {
  const data: ProductProps[] = [
    {
      imageSrc: "/images/zebootIcon.webp",
      title: "Zeboot",
      iconsSrc: [
        "/icons/Meditate Flower Icon.svg",
        "/icons/Meditate Person Icon.svg",
        "/icons/Extension.svg",
      ],
    },
    {
      imageSrc: "/images/evekiIcon.webp",
      title: "Eveki",
      iconsSrc: [
        "/icons/Chat Icon.svg",
        "/icons/Robot Icon.svg",
        "/icons/Favorite Icon.svg",
      ],
    },
    {
      imageSrc: "/images/tokiwaIcon.webp",
      title: "Tokiwa",
      iconsSrc: [
        "/icons/Chat Icon.svg",
        "/icons/Group Icon.svg",
        "/icons/Favorite Icon.svg",
      ],
    },
    {
      imageSrc: "/images/homorIcon.webp",
      title: "Homor",
      iconsSrc: [
        "/icons/Pen and Text Icon.svg",
        "/icons/Robot Icon.svg",
        "/icons/Idea Icon.svg",
      ],
    },
    {
      imageSrc: "/images/wordmuteIcon.webp",
      title: "Mute",
      iconsSrc: [
        "/icons/Explore Icon.svg",
        "/icons/Shield with Heart Icon.svg",
        "/icons/Extension.svg",
      ],
    },
  ];

  return (
    <div className="py-9">
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Product" />
        <div className="grid grid-cols-3 gap-10 items-end">
          {data.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              iconsSrc={product.iconsSrc}
            />
          ))}

          <button className="btn">read more →</button>
        </div>
      </VStack>
    </div>
  );
}
