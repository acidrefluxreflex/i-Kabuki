import Image from "next/image";
import { Text, Box, Heading, VStack, HStack } from "@kuma-ui/core";

export interface ProductProps {
  imageSrc: string;
  title: string;
  iconsSrc: string[];
}

export function ProductCard({
  imageSrc,
  title,
  iconsSrc,
}: ProductProps) {
  const cornerClasses =
    "border-r-2 border-t-2 border-r-[#D81F35] border-t-[#D81F35]  w-[12px] h-[12px] absolute";

  const glassClasses =
    "bg-gray-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  border-gray-100";

  return (
    <div className="">
      <div className="relative">
        <VStack className="p-4 items-center space-y-4">
          <Image
            src={imageSrc}
            className=""
            height={150}
            width={150}
            alt={title}
          ></Image>
          <Heading
            fontSize="24px"
            className="text-white"
            as="h3"
            style={{ fontFamily: "Futura" }}
          >
            {title}
          </Heading>
          <HStack>
            {iconsSrc.map((iconSrc, index) => (
              <Image
                key={index}
                src={iconSrc}
                height={30}
                width={30}
                alt={title}
              ></Image>
            ))}
          </HStack>
        </VStack>
        <div
          className={cornerClasses}
          style={{
            right: "0",
            top: "0",
          }}
        ></div>
        <div
          className={cornerClasses}
          style={{
            left: "0",
            top: "0",
            transform: "rotateZ(-90deg)",
          }}
        ></div>
        <div
          className={cornerClasses}
          style={{
            bottom: "0",
            left: "0",
            transform: "rotateZ(180deg)",
          }}
        ></div>
        <div
          className={cornerClasses}
          style={{
            bottom: "0",
            right: "0",
            transform: "rotateZ(90deg)",
          }}
        ></div>
      </div>
    </div>
  );
}
