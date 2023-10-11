import Image from "next/image";
import { Text, Heading, VStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";
import WorksCard from "../shared/WorksCard";

export default function ContactSection() {
  return (
    <div>
      <VStack justify="center" alignItems="center">
        <SectionTitle text="Contact" />
      </VStack>
    </div>
  );
}
