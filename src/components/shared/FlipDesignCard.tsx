"use client";

import React, { useState } from "react";

interface FlipDesignCardProps {
  imageSrc: string;
  title: string;
  description?: string;
}

export default function OverlayCard({
  imageSrc,
  title,
  description,
}: FlipDesignCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cornerClasses =
    "border-r-2 border-t-2 border-r-[#D81F35] border-t-[#D81F35]  w-[12px] h-[12px] absolute";

  const hoverVariants = {
    initial: {
      scale: 1.0,
      rotateY: 0,
    },
    hover: {
      scale: 1.0,
      rotateY: 180,
    },
  };

  return <p></p>;
}
