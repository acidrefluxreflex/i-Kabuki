"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Text, Box, Heading, VStack, HStack, Spacer } from "@kuma-ui/core";

interface DesignProps {
  isSquare: boolean;
  imageSRC: string;
  title: string;
  description?: string;
}

const squareClasses = "min-w-[200px] min-h-[200px] absolute top-0 z-10";
const cardClasses = "min-w-[200px] min-h-[324px] absolute top-0 z-10";

const DesignInfo = ({
  isSquare,
  title,
  description,
}: {
  isSquare: boolean;
  title: string;
  description?: string;
}) => {
  const glassClasses_square =
    "p-8 flex flex-row justify-center items-start bg-[#000B00] min-w-[200px] max-h-[200px] h-[200px]";

  const glassClasses_card =
    "p-8 flex flex-row justify-center items-start bg-[#000B00] min-w-[200px] min-h-[324px] h-[324px]";

  return (
    <VStack
      className={
        (isSquare ? glassClasses_square : glassClasses_card) +
        "text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80  border-[#E6E3C5] border"
      }
    >
      <Heading
        className="text-[#f2f2f7]"
        fontSize="24px"
        as="h3"
        style={{ fontFamily: "Futura" }}
      >
        {title}
      </Heading>
      <div className="divider"></div>
      <Text className="text-[#C0C0C0] text-sm">{description}</Text>
    </VStack>
  );
};

export default function OverlayDesign(props: DesignProps) {
  const [isHovered, setIsHovered] = useState(false);

  const width = 200;
  const height = props.isSquare ? 200 : 200 * 1.61803;

  const hoverVariants = {
    initial: {
      scale: 1.0,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="relative">
      <Image
        src={props.imageSRC}
        width={width}
        height={height}
        alt="test_image"
      />
      <motion.div
        whileHover="hover"
        initial="initial"
        variants={hoverVariants}
        className={props.isSquare ? squareClasses : cardClasses}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTouchStart={() => null}
      >
        {isHovered ? (
          <DesignInfo
            isSquare={props.isSquare}
            title={props.title}
            description={props.description}
          />
        ) : null}
      </motion.div>
    </div>
  );
}
