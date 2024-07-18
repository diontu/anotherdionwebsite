import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import Highlight from "@/components/text-style/highlight";
import Image from "next/image";

export default function Unique() {
  return (
    <PageSection className="flex justify-center mt-10 gap-10 pt-36">
      <div className="max-w-[500px] flex flex-col">
        <Heading>
          What makes me <Mark>different</Mark>?
        </Heading>
        <Subheading>
          Lorem Ipsum is simply dummy <Highlight>text</Highlight> of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five
        </Subheading>
        <Subheading>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five
        </Subheading>
      </div>
      <div className="relative min-w-[500px]">
        <Image
          src="/dion-pic-1.png"
          width={200}
          height={200}
          alt="dion-pic-1"
          className="absolute top-5 left-60 border-2 border-[var(--fallback-gradient)] rounded-lg"
        />
        <Image
          src="/dion-pic-2.png"
          width={200}
          height={200}
          alt="dion-pic-2"
          className="absolute top-80 left-72 border-2 border-[var(--fallback-gradient)] rounded-lg"
        />
        <Image
          src="/dion-pic-3.png"
          width={300}
          height={300}
          alt="dion-pic-3"
          className="absolute top-44 left-10 border-2 border-[var(--fallback-gradient)] rounded-lg"
        />
      </div>
    </PageSection>
  );
}
