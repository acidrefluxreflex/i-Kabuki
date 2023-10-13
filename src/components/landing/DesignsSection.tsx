"use client";
import Link from "next/link";
import { VStack, Spacer } from "@kuma-ui/core";
import OverlayDesign from "../shared/DesignOverlay";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function DesignsSection() {
  const [selectedId, setSelectedId] = useState("0");
  const size = 200;
  const rowClassName = "space-y-20";

  return (
    <div className="my-9 min-h-screen">
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Design" />
        <div className="md:flex md:space-x-20">
          <VStack className={rowClassName}>
            <OverlayDesign
              isSquare={false}
              imageSRC="/images/nineLogo.webp"
              title="Nine"
              description="「9」をモチーフにしたロゴデザイン。立体にも平面にも見えるような構図を意識したもの。"
            />
            <OverlayDesign
              isSquare={true}
              imageSRC="/images/kamon_2.webp"
              title="Ka"
              description="アルファベットの「K」と「a」、「可」などを組み合わせて図案化したデザイン。"
            />
          </VStack>

          <VStack className={rowClassName}>
            <Spacer height={"57px"} />

            <OverlayDesign
              isSquare={false}
              imageSRC="/images/Yatagarasu.webp"
              title="八咫烏"
              description="伝承上の八咫烏を幾何学的に構成したロゴデザイン。"
            />
            <Spacer height={"57px"} />
          </VStack>

          <VStack className={rowClassName}>
            <OverlayDesign
              isSquare={true}
              imageSRC="/images/kamon_4.webp"
              title="ひょうたん"
              description="家紋で使われる瓢箪の図案を、近未来的に再構成したデザイン"
            />

            <OverlayDesign
              isSquare={false}
              imageSRC="/images/tendonLogo.webp"
              title="Tendon"
              description="お笑い用語の「天丼」を図案化したロゴデザイン。食べ物の「天丼」と笑顔を組み合わせたもの。"
            />
          </VStack>
        </div>
        <Link
          href="/designs"
          className="mt-9 px-5 py-2.5 text-sm font-medium text-white bg-[#125115] hover:bg-[#184212] focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
        >
          View All
        </Link>
      </VStack>
    </div>
  );
}
