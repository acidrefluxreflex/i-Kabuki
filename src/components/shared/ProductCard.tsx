"use client";
import Image from "next/image";
import { Text, Box, Heading, VStack, HStack, Spacer } from "@kuma-ui/core";
import { motion } from "framer-motion";

import React, { useState } from "react";
export interface ProductProps {
  imageSrc: string;
  title: string;
  iconsSrc: string[];
  description?: string;
  href: string;
}

function ProductView(props: ProductProps) {
  return (
    <VStack className="p-4  items-center space-y-4 justify-center">
      <Image
        src={props.imageSrc}
        className=""
        height={150}
        width={150}
        alt={props.title}
      />
      <Heading
        fontSize="30px"
        className="text-white"
        as="h3"
        style={{ fontFamily: "Futura" }}
      >
        {props.title}
      </Heading>
      <HStack>
        {props.iconsSrc.map((iconSrc, index) => (
          <Image
            key={index}
            src={iconSrc}
            height={30}
            width={30}
            alt={props.title}
          />
        ))}
      </HStack>
    </VStack>
  );
}

const ProductInfo = ({
  title,
  description,
  href,
}: {
  title: string;
  description?: string;
  href: string;
}) => {
  const glassClasses =
    "p-8 flex flex-row justify-center items-start bg-[#000B00] min-w-[200px] min-h-[324px] text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80  border-[#D81F35]  border";

  return (
    <VStack className={glassClasses}>
      <Heading fontSize="24px" as="h3" style={{ fontFamily: "Futura" }}>
        {title}
      </Heading>
      <div className="divider"></div>
      <Text className="text-[#C0C0C0] text-sm">{description}</Text>

      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="mt-5 px-5 py-2.5 text-sm font-medium text-white bg-[#125115] hover:bg-[#184212] focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
      >
        Download
    
      </a>
    </VStack>
  );
};

export function ProductCard(props: ProductProps) {
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
      <div className=" flex flex-row relative min-w-[200px] min-h-[322px] items-center justify-center">
        <ProductView {...props} />
        <motion.div
          whileHover="hover"
          initial="initial"
          variants={hoverVariants}
          className="min-w-[200px] min-h-[322px] absolute top-0 z-10"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onTouchStart={() => null}
        >
          {isHovered ? (
            <ProductInfo title={props.title} description={props.description} href={props.href} />
          ) : null}
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
