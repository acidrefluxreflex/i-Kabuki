import Image from "next/image";
import { Text, Heading, VStack, HStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";
import WorksCard, { WorksCardProps } from "../shared/WorksCard";

export default function MySkillsSection() {
  const works = [
    {
      imageSrc:
        "https://assets.st-note.com/production/uploads/images/94031239/rectangle_large_type_2_aba5f17b03389c549acfab0b7fc2299c.jpeg?width=800",
      title: "共感はそこまで必要なのか",
      count: "37",
      description:
        "デザイナーの田中一光が提唱する「共感よりも芸術の啓蒙」のアイデアに注目。現代は共感が重視されるが、啓蒙も重要であり、特にインターネットの影響で意思表明が容易になり、新しいアイデアが生まれやすくなった。啓蒙は共感とは異なり、時に反感を呼ぶが、新しいものを生み出すには不可欠であると論じている。",
      href: "https://note.com/izumo092/n/n3f7bbd78be3a",
    },
    {
      imageSrc:
        "https://assets.st-note.com/production/uploads/images/83225526/rectangle_large_type_2_abbf8ee7cde6d02581cee8fb64a0a699.jpeg?width=2000&height=2000&fit=bounds&quality=85",
      title: "美の襲撃",
      count: "11",
      description:
        "芸術家の視点で現代社会を象徴的に捉え、通り魔や破滅願望などを通じて人間の孤独や時代の葛藤を描く。犯罪者や破滅を望む者が絶対的他者の不在を感じ、芸術家は絶対的孤独を前提に時代の変遷を作品に刻む。文化の危機にも触れ、芸術が消費と分離されなければならないとの警告を述べる。",
      href: "https://note.com/izumo092/n/n45b988597063",
    },
    {
      imageSrc:
        "https://assets.st-note.com/production/uploads/images/77110134/rectangle_large_type_2_f7877674532080d679b7fac0bf62d89e.png?width=800",
      title: "エンタメとアート",
      count: "16",
      description:
        "美と快楽、芸術と娯楽の関係を論じる本。美は持続性や純粋さを備え、芸術は娯楽とは異なる存在であると論じられる。感覚に反する美や普遍性を持つ美に焦点を当て、批評的な受け手と創作者の理解が芸術と娯楽の健全な関係を築く鍵であると提案。",
      href: "https://note.com/izumo092/n/nc18441cc7e70",
    },
    {
      imageSrc:
        "https://assets.st-note.com/production/uploads/images/73147245/rectangle_large_type_2_4694d394ab96f17a055fdb77e044595b.png?width=800",
      title: "高貴な心で、信条通り正しく：『自省録』",
      count: "25",
      description:
        "マルクス・アウレリウスの『自省録』を基に、思考と行動の相克、名声の儚さ、倫理や他者との関係に焦点を当てた。現代においても鮮烈なメッセージを残し、生きる意味や苦悩に向き合いながらの強さを提言。皇帝としての経験を通じ、勇気と理性を通して人間のあり方に深い示唆を与える。",
      href: "https://note.com/izumo092/n/n28249d32856f",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <SectionTitle text="Works" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
        <WorksCard
          imageSrc={works[0].imageSrc}
          title={works[0].title}
          count={works[0].count}
          href={works[0].href}
          description={works[0].description}
        />
        <WorksCard
          imageSrc={works[1].imageSrc}
          title={works[1].title}
          count={works[1].count}
          href={works[1].href}
          description={works[1].description}
        />

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
      </div>
    </div>
  );
}
