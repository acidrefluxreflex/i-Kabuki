"use client";
import Link from "next/link";
import { VStack, Spacer } from "@kuma-ui/core";
import OverlayDesign from "../shared/DesignOverlay";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function DesignsSection() {
  const [selectedId, setSelectedId] = useState("0");
  const size = 200;
  const rowClassName = "space-y-9";

  return (
    <div className="my-9 min-h-screen">
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Design" />
        <div className="md:flex md:space-x-9">
          <VStack className={rowClassName}>
            <OverlayDesign
              isSquare={false}
              imageSRC="/images/nineLogo.webp"
              title="Nine"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?"
            />
            <OverlayDesign
              isSquare={true}
              imageSRC="/images/kamon_2.webp"
              title="Ka"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?"
            />
          </VStack>

          <VStack className={rowClassName}>
            <Spacer height={"57px"} />

            <OverlayDesign
              isSquare={false}
              imageSRC="/images/Yatagarasu.webp"
              title="八咫烏"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?"
            />
            <Spacer height={"57px"} />
          </VStack>

          <VStack className={rowClassName}>
            <OverlayDesign
              isSquare={true}
              imageSRC="/images/kamon_4.webp"
              title="八咫烏"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?"
            />

            <OverlayDesign
              isSquare={false}
              imageSRC="/images/tendonLogo.webp"
              title="八咫烏"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?"
            />
          </VStack>
        </div>
      </VStack>
      <Link
        href="/products"
        className="mt-5 px-5 py-2.5 text-sm font-medium text-white bg-[#125115] hover:bg-[#184212] focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
      >
        View All
      </Link>
    </div>
  );
}
