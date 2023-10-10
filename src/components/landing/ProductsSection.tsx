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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?",
    },
    {
      imageSrc: "/images/evekiIcon.webp",
      title: "Eveki",
      iconsSrc: [
        "/icons/Chat Icon.svg",
        "/icons/Robot Icon.svg",
        "/icons/Favorite Icon.svg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?",
    },
    {
      imageSrc: "/images/tokiwaIcon.webp",
      title: "Tokiwa",
      iconsSrc: [
        "/icons/Chat Icon.svg",
        "/icons/Group Icon.svg",
        "/icons/Favorite Icon.svg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?",
    },
    {
      imageSrc: "/images/homorIcon.webp",
      title: "Homor",
      iconsSrc: [
        "/icons/Pen and Text Icon.svg",
        "/icons/Robot Icon.svg",
        "/icons/Idea Icon.svg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?",
    },
    {
      imageSrc: "/images/wordmuteIcon.webp",
      title: "Mute",
      iconsSrc: [
        "/icons/Explore Icon.svg",
        "/icons/Shield with Heart Icon.svg",
        "/icons/Extension.svg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?",
    },
  ];

  return (
    <div className="my-9 min-h-screen">
      
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Product" />
        <div className="grid md:grid-cols-3 gap-12 items-end grid-cols-1">
          {data.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              iconsSrc={product.iconsSrc}
              description={product.description}
            />
          ))}

          <button className="btn btn-secondary">read more →</button>
        </div>
      </VStack>
    </div>
  );
}
