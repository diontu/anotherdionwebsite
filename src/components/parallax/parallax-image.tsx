import { useParallax, ParallaxProps } from "react-scroll-parallax";

export type ParallaxImageProps = {
  src: string;
  parallaxProps: ParallaxProps;
};

const ParallaxImage = ({ src, parallaxProps }: ParallaxImageProps) => {
  const { ref: imageRef } = useParallax<HTMLImageElement>(parallaxProps);

  return (
    <img
      src={src}
      ref={imageRef}
      className="absolute object-cover object-center scale-150 w-full h-[120%] -top-10"
    />
  );
};

export default ParallaxImage;
