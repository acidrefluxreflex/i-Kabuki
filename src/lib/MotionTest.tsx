import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HoverComponent() {
  // 状態を管理するフック
  const [isHovered, setIsHovered] = useState(false);

  // hover時のアニメーションのバリアント
  const hoverVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      backgroundColor: "#ffffff",
    },
    hover: {
      scale: 1.2,
      rotate: 180,
      backgroundColor: "#ff0000",
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-64 h-64 shadow-lg rounded-lg"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
        // hover状態を切り替える関数を設定
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center h-full">
          {/* hover状態に応じて表示するテキストを変更 */}
          {isHovered ? (
            <h1 className="text-4xl font-bold text-white">Hello!</h1>
          ) : (
            <h1 className="text-4xl font-bold text-black">Hover me!</h1>
          )}
        </div>
      </motion.div>
    </div>
  );
};
