import Image from "next/image";
import { Text, Heading, VStack, Spacer, HStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";

export default function DesignsSection() {
  const size = 200;
  const rowClassName = "space-y-8";

  return (
    <div className="my-9 min-h-screen">
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Design" />
        <HStack className="space-x-8">
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
            <Spacer height={"57px"} />
            <Image
              className="w-[200px] "
              src="/images/Yatagarasu.webp"
              width={size}
              height={size * 1.61803}
              alt="test_image"
            />
            <Spacer height={"57px"} />
          </VStack>

          <VStack className={rowClassName}>
            <Image
              src="/images/kamon_4.webp"
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
