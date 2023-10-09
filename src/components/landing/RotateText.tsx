"use client";

import React, { useState, useEffect } from "react";
import { Text } from "@kuma-ui/core";

interface RotatingTextProps {
  textList: string[];
  fontSize: string;
  interval: number; // 切り替え間隔（秒）
}

const RotatingText: React.FC<RotatingTextProps> = ({ textList, interval, fontSize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // リストの最後に達したら最初に戻る
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, interval * 1000);

    // コンポーネントがアンマウントされたときにクリーンアップ
    return () => clearInterval(intervalId);
  }, [textList, interval]);

  return (
    <div className="text-start">
      <Text fontSize={fontSize} className="text-white ">
        {textList[currentIndex].toUpperCase()}
      </Text>
    </div>
  );
};

export default RotatingText;
