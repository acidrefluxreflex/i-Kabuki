"use client";
import Image from "next/image";
import RotatingText from "./RotateText";
import { useGlitch } from "react-powerglitch";
import { Text, Box, Heading, VStack, HStack } from "@kuma-ui/core";
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
  const url = "/images/backForHero.webp";

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
    <section
      className="hero min-h-screen min-w-[100vh] bg-[#0909096c] bg-blend-multiply"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div id="STAGE" className="hero-content py-24 lg:py-56">
        <div id="AVATAR" className="avatar">
          <div className="w-24 rounded-full">
            <Image
              src={"/images/profileIcon.webp"}
              width={500}
              height={500}
              alt="hero"
            />
          </div>
        </div>
        <VStack className="md:min-w-[500px]">
          <Text className="text-white" style={{ fontFamily: "Futura" }}>
            Hello (^-^)/ I'm Kabuki
          </Text>
          <HStack justify={"left"} className={myFont.className}>
            <Text fontSize="70px" className="text-white mr-5">
              {"A"}
            </Text>
            <div ref={glitch.ref}>
              <RotatingText
                fontSize="70px"
                textList={textList}
                interval={interval}
              />
            </div>
          </HStack>
        </VStack>
      </div>
    </section>
  );
}
