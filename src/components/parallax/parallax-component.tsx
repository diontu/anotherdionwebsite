import { useParallax, ParallaxProps } from "react-scroll-parallax";

export type ParallaxComponentProps = {
  parallaxProps: ParallaxProps;
  children: React.ReactNode;
};

function ParallaxComponent({
  parallaxProps,
  children,
}: {
  parallaxProps: ParallaxProps;
  children: React.ReactNode;
}) {
  const { ref } = useParallax<HTMLDivElement>(parallaxProps);

  return <div ref={ref}>{children}</div>;
}

export default ParallaxComponent;
