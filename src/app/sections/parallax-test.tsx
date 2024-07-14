"use client";

import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import { ParallaxComponent, ParallaxImage } from "@/components/parallax";
import Subheading from "@/components/subheading";

export default function ParallaxTest() {
  return (
    <PageSection>
      <ParallaxComponent parallaxProps={{ speed: -10 }}>
        <div className="border-2 border-red-900 absolute left-80">
          <Heading>hello</Heading>
        </div>
      </ParallaxComponent>
      <div className="border-2 border-red-900 absolute left-20">
        <Subheading>hello</Subheading>
      </div>
      <div className="border-2 border-red-900 absolute right-80 subheading overflow-hidden w-80 h-80">
        <ParallaxImage src="bg.png" parallaxProps={{ speed: -5 }} />
      </div>
    </PageSection>
  );
}
