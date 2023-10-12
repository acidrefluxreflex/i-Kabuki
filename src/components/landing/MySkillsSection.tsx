import Image from "next/image";
import { Text, Heading, VStack, HStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";
import WorksCard, { WorksCardProps } from "../shared/WorksCard";

export default function MySkillsSection() {

  const works = [
    {
      imageSrc: "https://assets.st-note.com/production/uploads/images/94031239/rectangle_large_type_2_aba5f17b03389c549acfab0b7fc2299c.jpeg?width=800",
      title: "共感はそこまで必要なのか",
      count: "37",
      description: "共感はそこまで必要なのか",
      href: "https://note.com/izumo092/n/n3f7bbd78be3a",
      
    },
    {
      imageSrc: "https://assets.st-note.com/production/uploads/images/94031239/rectangle_large_type_2_aba5f17b03389c549acfab0b7fc2299c.jpeg?width=800",
      title: "共感はそこまで必要なのか",
      count: "37",
      description: "共感はそこまで必要なのか",
      href: "https://note.com/izumo092/n/n3f7bbd78be3a",
      
    },
    {
      imageSrc: "https://assets.st-note.com/production/uploads/images/94031239/rectangle_large_type_2_aba5f17b03389c549acfab0b7fc2299c.jpeg?width=800",
      title: "共感はそこまで必要なのか",
      count: "37",
      description: "共感はそこまで必要なのか",
      href: "https://note.com/izumo092/n/n3f7bbd78be3a",
      
    },
    {
      imageSrc: "https://assets.st-note.com/production/uploads/images/73147245/rectangle_large_type_2_4694d394ab96f17a055fdb77e044595b.png?width=800",
      title: "高貴な心で、信条通り正しく：『自省録』",
      count: "27",
      description: "共感はそこまで必要なのか",
      href: "https://note.com/izumo092/n/n28249d32856f",
      
    }

  ]





  return (
    <div>
      <VStack justify="center" alignItems="center" className="space-y-20">
        <SectionTitle text="Works" />
        <HStack className="space-x-20">
          <WorksCard
            imageSrc={works[0].imageSrc}
            title={works[0].title}
            count={works[0].count}
            href={works[0].href}
            description={works[0].description}
          />
          <WorksCard
              imageSrc={works[0].imageSrc}
              title={works[0].title}
              count={works[0].count}
              href={works[0].href}
              description={works[0].description}
          />
        </HStack>
        <HStack className="space-x-20">
        <WorksCard
            imageSrc={works[2].imageSrc}
            title={works[2].title}
            count={works[2].count}
            href={works[2].href}
            description={works[2].description}
          />
          <WorksCard
              imageSrc={works[3].imageSrc}
              title={works[3].title}
              count={works[3].count}
              href={works[3].href}
              description={works[3].description}
          />
        </HStack>
      </VStack>
    </div>
  );
}
