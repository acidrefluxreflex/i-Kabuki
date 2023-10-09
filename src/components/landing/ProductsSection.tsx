import Image from "next/image";
import { Text, VStack, HStack } from "@kuma-ui/core";

import SectionTitle from "./SectionTitle";

export default function ProductSection() {
  const placeholders = [
    "/images/zebootIcon.webp",
    "/images/evekiIcon.webp",
    "/images/tokiwaIcon.webp",
    "/images/homorIcon.webp",
    "/images/wordmuteIcon.webp",
  ];

  return (
    <div className="py-9">
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Product" />
        <HStack className="space-x-9">
          {placeholders.map((placeholder, index) => (
            <Image
              key={index}
              src={placeholder}
              width={200}
              height={200}
              alt="test_image"
            />
          ))}
        </HStack>
      </VStack>
    </div>
  );
}
