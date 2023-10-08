"use client";

import localFont from "next/font/local";
import { Heading } from "@kuma-ui/core";
import { useGlitch } from 'react-powerglitch'
interface FirstCharRedProps {
  text: string;
}

const myFont = localFont({
  src: "../../../public/fonts/tristandemo-regular.ttf",
  display: "swap",
});

export default function SectionTitle({ text }: FirstCharRedProps) {

  const glitch = useGlitch();


  if (text.length === 0) {
    return null; // もし文字列が空の場合は何も表示しないようにする
  }

  return (
    <Heading as="h2"  fontSize="96px" className={myFont.className}>
      <span className="text-[#D81F35]">{text.charAt(0)}</span>
      <span className="text-[#E6E3C5]">{text.substring(1)}</span>
    </Heading>
  );
}
