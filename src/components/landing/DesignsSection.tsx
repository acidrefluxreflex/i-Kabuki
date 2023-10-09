import Image from "next/image";
import { Text, Heading, VStack, Spacer, HStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";

export default function DesignsSection() {
  const size = 200;
  const rowClassName = "space-y-7"

  return (
    <div>
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Design" />
        <HStack className="space-x-7">
          <VStack className={rowClassName}>
            <Image
              src="/images/nineLogo.webp"
              width={size}
              height={size * 1.61803}
              alt="test_image"
            />
            <Image
              src="/images/kamon_2.webp"
              width={size}
              height={size}
              alt="test_image"
            />
          </VStack>

          <VStack className={rowClassName}>
            <Spacer width={size} height={(size * 1.61803) / 2}></Spacer>
            <Image
              className="w-[200px] h-[200px]"
              src="/images/kamon_3.webp"
              width={size}
              height={size}
              alt="test_image"
            />
            <Spacer width={size} height={(size * 1.61803) / 2}></Spacer>
          </VStack>
          <VStack className={rowClassName}>
            <Image
              src="/images/kamon_1.webp"
              width={size}
              height={size}
              alt="test_image"
            />
            <Image
              src="/images/tendonLogo.webp"
              width={size}
              height={size * 1.61803}
              alt="test_image"
            />
          </VStack>
        </HStack>
      </VStack>
    </div>
  );
}
