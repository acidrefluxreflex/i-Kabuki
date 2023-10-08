"use client";
import Image from "next/image";
import RotatingText from "./RotateText";
import { useGlitch } from "react-powerglitch";
import { Text, Heading, VStack, HStack } from "@kuma-ui/core";
import localFont from "next/font/local";

const myFont_2 = localFont({
  src: "../../../public/fonts/PTO-19seg-Box.otf",
  display: "swap",
});

const myFont = localFont({
  src: "../../../public/fonts/tristandemo-regular.ttf",
  display: "swap",
});



export default function HeroView() {
  const glitch = useGlitch({
    timing: {
      duration: 2500,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 1.0,
    },
  });
  const textList = ["Developer", "Creator", "Designer", "Philosopher"];
  const interval = 2.5;

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply min-h-screen">
        <HStack className="space-x-4">
          <div ref={glitch.ref} className={myFont.className}>
            <RotatingText textList={textList} interval={interval} />
          </div>
        </HStack>
      </section>
    </div>
  );
}
