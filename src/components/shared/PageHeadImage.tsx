import localFont from "next/font/local";
import { Heading } from "@kuma-ui/core";

const myFont = localFont({
  src: "../../../public/fonts/tristandemo-regular.ttf",
  display: "swap",
});

interface PageHeadImageProps {
  imageSrc: string;
  title: string;
}

export default function PageHeadImage(props: PageHeadImageProps) {
  const backgroundImage = props.imageSrc;
  const text = props.title;
  return (
    <div
      className="hero min-h-[300px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="max-w-md">
        <Heading as="h2" fontSize="96px" className={myFont.className}>
          <span className="text-[#D81F35]">{text.charAt(0)}</span>
          <span className="text-[#E6E3C5]">{text.substring(1)}</span>
        </Heading>
      </div>
    </div>
  );
}
