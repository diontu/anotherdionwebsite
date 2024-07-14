import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";

export default function Projects() {
  return (
    <PageSection className="flex justify-between items-center mt-10">
      <div className="max-w-[500px]">
        <Heading>Projects</Heading>
        <Subheading>
          Explore the projects I have built and some of my favourites.
        </Subheading>
      </div>
      <div>Image</div>
    </PageSection>
  );
}
