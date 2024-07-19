import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Highlight from "@/components/text-style/highlight";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn-components/ui/carousel";

export default function Projects() {
  return (
    <PageSection
      className="flex justify-between mt-[160px] mb-[320px]"
      fitContent
    >
      <div className="w-2/5">
        <Heading>Projects</Heading>
        <Subheading>
          You can explore a selection of my work, highlighting my expertise in
          web development and UI/UX design. Each project demonstrates my
          commitment to creating{" "}
          <Highlight>high-quality, user-centric solutions.</Highlight> Click on
          any project to learn more about the process and technologies used.
        </Subheading>
      </div>
      <Carousel className="w-2/5 border-[1px] border-[var(--fallback-gradient)]">
        <CarouselContent>
          <CarouselItem>
            <div className="h-[300px]">Image</div>
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </PageSection>
  );
}
