import Blockquote from "@/components/shared/Blockquote";
import PageHeadImage from "@/components/shared/PageHeadImage";
import { VStack } from "@kuma-ui/core";

export default function Designs() {
  return (
    <VStack justify="center" alignItems="center" className="min-h-screen">
      <PageHeadImage imageSrc="/images/head33.webp" title="Designs" />
      <div className="flex flex-row items-center justify-center  prose prose-p:text-[1.125rem] md:px-0  py-20 px-6">
        <VStack className="">
          <Blockquote
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"
            author="John Doe"
            info="Google Design"
          />
          <p>
            以前アイデアの出し方について参考になる本について文章を書いたので、今回は自分自身の発想法を考えていこうと思う。我が方法から学べ、という自画自賛ではなく、引用ばかりで頼りないと言われないための自己保身である。
          </p>
          <h1 id="心構え">心構え</h1>
          <p>
            まず前提として、自分の考えることは誰か他人が既に考えている。全く新しいアイデアなどというものはほとんどない。「革命的だ！」と思って検索してみると、似たようなものが世に溢れていた、ということは多々ある。
          </p>
          <p>
            もちろん幸運にも全く前例が見つからない場合もある。しかしむしろこちらの方が危険で、そもそものアイデアに問題がある可能性が高い。例えばホタルイカをスイカの上にトッピングした料理は斬新ではあるが、おそらく需要はない。もし類似したアイデアが存在しないなら、喜ぶ前に自分がホタルイカを乗せていないか確認するべきだろう。
          </p>
          <p>
            発想が被ってしまうのは問題ではない。どんな賢明なことでも一度は考えられているのである。大切なのは、それをもう一度自分の手で考えることだ。
          </p>
          <h1 id="発想のタネ">発想のタネ</h1>
          <p>
            無から何かを作り出せるのは神だけである。クリエイターと名乗ってみても創造主ではない。まずは知識をつけることが必要になる。当然のことのように思うが、これがなかなか難しい。
          </p>
          <p>試験勉強であれば範囲もキ</p>
        </VStack>
      </div>
    </VStack>
  );
}
