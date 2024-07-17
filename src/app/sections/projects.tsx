import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";

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
      <div className="max-w-[500px]">
        <Heading>Projects</Heading>
        <Subheading>
          Explore the projects I have built and some of my favourites.
        </Subheading>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="min-w-[200px] h-[300px]">Image</div>
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
