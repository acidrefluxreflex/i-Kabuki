"use client";
import Image from "next/image";
import RotatingText from "./RotateText";
import { useGlitch } from "react-powerglitch";
import { Text, Box, Heading, VStack, HStack } from "@kuma-ui/core";
import localFont from "next/font/local";

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
      className="hero min-h-screen min-w-full bg-[#0909096c] bg-blend-multiply"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div
        id="STAGE"
        className="hero-content flex flex-col md:flex-row py-24 lg:py-56"
      >
        <div id="AVATAR" className="avatar">
          <div className="w-24 rounded-full">
            <Image
              src={"/images/profileIcon.webp"}
              width={500}
              height={500}
              className="w-full md:w-[500px]"
              alt="hero"
            />
          </div>
        </div>
        <VStack className="md:w-[500px] w-full">
          <Text className="text-white" style={{ fontFamily: "Futura" }}>
            Hello (^-^)/ I'm Kabuki
          </Text>
          <div className="text-start">
            <HStack justify={"left"} className={myFont.className}>
              <h1 className="text-white mr-5 md:text-7xl text-5xl">
                {"A"}
              </h1>
              <div ref={glitch.ref}>
                <RotatingText
                  fontSize="70px"
                
                  textList={textList}
                  interval={interval}
                />
              </div>
            </HStack>
          </div>
        </VStack>
      </div>
    </section>
  );
}
