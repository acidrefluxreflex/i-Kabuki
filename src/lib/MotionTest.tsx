"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipProps {
  base: React.ReactNode;
  overlay: React.ReactNode;
}

export default function OverlayComponent(props: FlipProps) {
  // 状態を管理するフック
  const [isHovered, setIsHovered] = useState(false);

  // hover時のアニメーションのバリアント
  const hoverVariants = {
    initial: {
      scale: 1.0,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="relative w-full h-full">
      {props.base}
      <motion.div
        whileHover="hover"
        initial="initial"
        variants={hoverVariants}
        className="absolute top-0 z-10 w-full h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTouchStart={() => null}
      >
        {/* hover状態に応じて表示するテキストを変更 */}
        {isHovered ? props.overlay : null}
      </motion.div>
    </div>
  );
}
