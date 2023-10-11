import Image from "next/image";
import { Text, Heading, VStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";
import WorksCard from "../shared/WorksCard";

export default function MySkillsSection() {
  return (
    <div>
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Works" />
        <WorksCard
          imageSrc="https://assets.st-note.com/production/uploads/images/94031239/rectangle_large_type_2_aba5f17b03389c549acfab0b7fc2299c.jpeg?width=800"
          title="共感はそこまで必要なのか"
          count="2"
        />
      </VStack>
    </div>
  );
}
