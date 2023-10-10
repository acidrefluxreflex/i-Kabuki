"use client";
import React, { useState, useEffect } from "react";
import { Heading } from "@kuma-ui/core";
import localFont from "next/font/local";
import Link from "next/link";
import { useGlitch } from "react-powerglitch";



const myFont_2 = localFont({
  src: "../../../public/fonts/PTO-19seg-Box.otf",
  display: "swap",
});

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 max-w-full  ${
        isTop
          ? "bg-transparent"
          : "border-solid bg-[#000B00] bg-opacity-50 drop-shadow-2xl backdrop-blur-md backdrop-filter"
      } 
    ${
      isTop ? " text-white " : "text-white"
    } mx-md px-20 navbar items-center transition-all duration-500 ease-in-out`}
    >
      <div className="navbar-start">
        <Link href="/" >
          <Heading as="h1" fontSize="28px">
            歌武輝
          </Heading>
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <p className={myFont_2.className}>blog</p>
        </div>
      </div>
    </nav>
  );
}
