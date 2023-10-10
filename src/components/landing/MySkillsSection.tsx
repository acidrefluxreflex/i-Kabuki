import Image from "next/image";
import { Text, Heading, VStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";

export default function MySkillsSection() {
  return (
    <div>
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Works" />
      </VStack>
    </div>
  );
}
