"use client";
import Image from "next/image";
import { Text, Box, Heading, VStack, HStack, Spacer } from "@kuma-ui/core";
import { motion } from "framer-motion";
import HoverComponent from "@/lib/MotionTest";
import React, { useState } from "react";


interface FlipDesignCardProps {
    imageSrc: string;
    title: string;
    description?: string;
}


export default function FlipDesignCard({ imageSrc, title, description }: FlipDesignCardProps) {

    const [isHovered, setIsHovered] = useState(false);

    const cornerClasses =
      "border-r-2 border-t-2 border-r-[#D81F35] border-t-[#D81F35]  w-[12px] h-[12px] absolute";
  
    const hoverVariants = {
      initial: {
        scale: 1.0,
        rotateY: 0
      },
      hover: {
        scale: 1.0,
        rotateY: 180
      },
    };



    return (
      <p></p>
    );
}