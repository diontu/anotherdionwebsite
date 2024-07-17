import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import Highlight from "@/components/text-style/highlight";

export default function Unique() {
  return (
    <PageSection className="flex flex-col mt-10">
      <div className="max-w-[500px]">
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
      <div>Image</div>
    </PageSection>
  );
}
