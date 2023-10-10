import Image from "next/image";
import { HStack, Heading, VStack, Text } from "@kuma-ui/core";

interface WorksCardProps {
  imageSrc: string;
  title: string;
  count: string;

  description?: string;
}

export default function WorksCard({
  imageSrc,
  title,
  count,
  description,
}: WorksCardProps) {

    const cornerClasses =
    "border-r-2 border-t-2 border-r-[#D81F35] border-t-[#D81F35]  w-[12px] h-[12px] absolute";


  return (
    <div>
        
      <div className="relative text-white p-4">
        <Image src={imageSrc} width={300} height={160} alt={title}></Image>
        <div className="flex justify-between items-center mt-5">
          <Heading fontSize="20px">{title}</Heading>
          <HStack className="items-center">
            <Image
              src={"/icons/Favorite Icon.svg"}
              alt="test"
              width={40}
              height={40}
            />
            <Text fontSize={"20px"}>{count}</Text>
          </HStack>
        </div>
        <div
          className={cornerClasses}
          style={{
            right: "0",
            top: "0",
          }}
        ></div>
        <div
          className={cornerClasses}
          style={{
            left: "0",
            top: "0",
            transform: "rotateZ(-90deg)",
          }}
        ></div>
        <div
          className={cornerClasses}
          style={{
            bottom: "0",
            left: "0",
            transform: "rotateZ(180deg)",
          }}
        ></div>
        <div
          className={cornerClasses}
          style={{
            bottom: "0",
            right: "0",
            transform: "rotateZ(90deg)",
          }}
        ></div>
      </div>
     
    </div>
  );
}
