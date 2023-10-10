"use client";
import Image from "next/image";
import { Text, Box, Heading, VStack, HStack, Spacer } from "@kuma-ui/core";
import { motion } from "framer-motion";
import HoverComponent from "@/lib/MotionTest";
import React, { useState } from "react";
export interface ProductProps {
  imageSrc: string;
  title: string;
  iconsSrc: string[];
  description?: string;
}

function ProductView({ imageSrc, title, iconsSrc }: ProductProps) {
  return (
    <VStack className="p-4  items-center space-y-4">
      <Image src={imageSrc} className="" height={150} width={150} alt={title} />
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
          <Image key={index} src={iconSrc} height={30} width={30} alt={title} />
        ))}
      </HStack>
    </VStack>
  );
}

const ProductInfo = ({ title }: { title: string }) => {
  const glassClasses =
    "p-8 bg-[#000B00] min-w-[200px] min-h-[322px] text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80  border-[#D81F35]  border";

  return (
    <VStack className={glassClasses}>
      <Heading
        fontSize="24px"
        as="h3"
        style={{ fontFamily: "Futura" }}
      >
        {title}
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?
      </Text>
    </VStack>
  );
};

export function ProductCard({ imageSrc, title, iconsSrc }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cornerClasses =
    "border-r-2 border-t-2 border-r-[#D81F35] border-t-[#D81F35]  w-[12px] h-[12px] absolute";

  const hoverVariants = {
    initial: {
      scale: 1.0,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div>
      <div className="relative min-w-[200px] min-h-[322px]">
        <ProductView imageSrc={imageSrc} title={title} iconsSrc={iconsSrc} />
        <motion.div
          whileHover="hover"
          initial="initial"
          variants={hoverVariants}
          className="min-w-[200px] min-h-[322px] absolute top-0 z-10"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {isHovered ? <ProductInfo title={title} /> : null}
        </motion.div>
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
