"use client";
import Image from "next/image";
import RotatingText from "./RotateText";
import { useGlitch } from "react-powerglitch";
import { Text, VStack, HStack, Heading } from "@kuma-ui/core";
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
  const iconSizeClasses = "w-[30px] h-[30px]";
  const iconSizeNum = 20;
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
              <h1 className="text-white mr-5 md:text-7xl text-5xl">{"A"}</h1>
              <div ref={glitch.ref}>
                <RotatingText
                  fontSize="70px"
                  textList={textList}
                  interval={interval}
                />
              </div>
            </HStack>
          </div>
          <HStack className="space-x-3 text-[#E6E3C5]">
            <Heading fontSize={"25px"} className={myFont.className} >Skill: </Heading>
            <Image
              src={"/icons/Skill Swift.svg"}
              width={iconSizeNum}
              height={iconSizeNum}
              alt="Skill Swift"
              className={`w-[${iconSizeNum}px] h-[${iconSizeNum}px]`}
            />

            <Image
              src={"/icons/Skill Typescript.svg"}
              width={iconSizeNum}
              height={iconSizeNum}
              alt="Skill Swift"
              className={
                "rounded-sm " +
                `w-[${iconSizeNum}px] h-[${iconSizeNum}px]`
              }
            />
            <Image
              src={"/icons/Skill Python.svg"}
              width={iconSizeNum}
              height={iconSizeNum}
              alt="Skill Swift"
              className={`w-[${iconSizeNum}px] h-[${iconSizeNum}px]`}
            />
            {/* 
            <Image
              src={"/icons/Skill Ai.svg"}
              width={iconSizeNum}
              height={iconSizeNum}
              alt="Skill Swift"
              className={`w-[${iconSizeNum}px] h-[${iconSizeNum}px]`}
            />
            <Image
              src={"/icons/Skill Design.svg"}
              width={iconSizeNum}
              height={iconSizeNum}
              alt="Skill Swift"
              className={"border border-spacing-1 rounded-lg border-[#E6E3C5]" + `w-[${iconSizeNum}px] h-[${iconSizeNum}px]`}
            />
            <Image
              src={"/icons/Skill Ink Pen.svg"}
              width={iconSizeNum}
              height={iconSizeNum}
              alt="Skill Swift"
              className={"border border-spacing-1 rounded-lg border-[#E6E3C5]" + `w-[${iconSizeNum}px] h-[${iconSizeNum}px]`}
            />
            */}
          </HStack>
        </VStack>
      </div>
    </section>
  );
}
