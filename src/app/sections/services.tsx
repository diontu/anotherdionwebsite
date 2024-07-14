import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";

export default function Services() {
  return (
    <PageSection className="flex flex-col items-center text-center">
      <div className="max-w-[500px]">
        <Heading>Services</Heading>
        <Subheading>
          These are the tools I'm using right now. I'm not married to any tool
          and would love to have the opportunity to learn more!
        </Subheading>
      </div>
      <div>Image</div>
    </PageSection>
  );
}
