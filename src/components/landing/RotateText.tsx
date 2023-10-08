"use client"

import React, { useState, useEffect } from 'react';


interface RotatingTextProps {
  textList: string[];
  interval: number; // 切り替え間隔（秒）
}

const RotatingText: React.FC<RotatingTextProps> = ({ textList, interval }) => {
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
    <div className="text-2xl text-white">
          {textList[currentIndex]}
    </div>
  );
};

export default RotatingText;
