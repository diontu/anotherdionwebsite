import PComponent from "@/components/parallax/parallax-component";
import PImage from "@/components/parallax/parallax-image";

import type { ParallaxComponentProps } from "@/components/parallax/parallax-component";
import type { ParallaxImageProps } from "@/components/parallax/parallax-image";
import ParallaxWrapper from "@/components/parallax/parallax-wrapper";

export function ParallaxComponent(props: ParallaxComponentProps) {
  return (
    <ParallaxWrapper>
      <PComponent {...props}>{props.children}</PComponent>
    </ParallaxWrapper>
  );
}

export function ParallaxImage(props: ParallaxImageProps) {
  return (
    <ParallaxWrapper>
      <PImage {...props} />
    </ParallaxWrapper>
  );
}
