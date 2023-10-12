"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { HStack, Heading, VStack, Text } from "@kuma-ui/core";

export interface WorksCardProps {
  imageSrc: string;
  title: string;
  count: string;
  description?: string;
  href?: string;
}

const WorksOverlay = ({
  imageSrc,
  title,
  count,
  href,
  description,
}: WorksCardProps) => {
  const glassClasses_card =
    "p-4 flex flex-row justify-center items-start bg-[#000B00] min-w-[332px] min-h-[280px] h-[260px]";

  return (
    <VStack
      className={
        glassClasses_card +
        "text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border-[#E6E3C5] border"
      }
    >
      <Text fontSize="14px">{description}</Text>

      <a
        target="_blank"
        className="mt-5 px-5 py-2.5 text-sm font-medium text-white bg-[#125115] hover:bg-[#184212] focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
        href={href}
        rel="noopener noreferrer"
      >
        View All
      </a>
    </VStack>
  );
};

export default function WorksCard(props: WorksCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cornerClasses =
    "border-r-2 border-t-2 border-r-[#D81F35] border-t-[#D81F35] w-[12px] h-[12px] absolute";
  const squareClasses =
    "absolute top-0 left-0 z-10 min-w-[322px] min-h-[340px]";

  const hoverVariants = {
    initial: {
      scale: 1.0,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="">
      <div className=" relative text-white p-4">
        <Image
          src={props.imageSrc}
          width={300}
          height={160}
          alt={props.title}
        ></Image>
        <div className=" justify-between items-center mt-4">
          <Heading fontSize="16px">{props.title}</Heading>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <HStack className="items-center">
            <Image
              src={"/icons/Favorite Icon.svg"}
              alt="test"
              width={30}
              height={30}
            />
            <Text fontSize={"20px"}>{props.count}</Text>
          </HStack>
        </div>
        <motion.div
          whileHover="hover"
          initial="initial"
          variants={hoverVariants}
          className={squareClasses}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onTouchStart={() => null}
        >
          {isHovered ? (
            <WorksOverlay
              imageSrc={props.imageSrc}
              title={props.title}
              count={props.count}
              href={props.href}
              description={props.description}
            />
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
