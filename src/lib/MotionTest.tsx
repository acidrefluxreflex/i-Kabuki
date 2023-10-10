"use client";
import { Box } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function FlipComponent(props: FlipProps) {
  // 状態を管理するフック
  const [isHovered, setIsHovered] = useState(false);

  // hover時のアニメーションのバリアント
  const hoverVariants = {
    initial: {
      rotateY: 0,
      transition: {
        duration: 1.0,
      },
    },
    hover: {
      rotateY: 180,
      transition: {
        duration: 1.0,
      },
    },
    exit: {
      rotateY: 0,
      transition: {
        duration: 1.0,
        
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="min-w-64 h-64 shadow-lg rounded-lg "
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
        exit="exit"
        // hover状態を切り替える関数を設定
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center h-full">
          {/* hover状態に応じて表示するテキストを変更 */}
          {isHovered ? (
            <div style={{ transform: "rotateY(180deg)" }}>{props.back}</div>
          ) : (
            <div>{props.front}</div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
