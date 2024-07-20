import classNames from "classnames";
import gen from "random-seed";
import { ParallaxComponent } from "@/components/parallax";

// 15 is sm, 50 is md, 85 is lg
const ballValues = [15, 50, 85] as const;
type BallValues = (typeof ballValues)[number];

const opacityValues = [25, 50, 75, 100] as const;
type OpacityValues = (typeof opacityValues)[number];

// 15 is blur-none, 50 is blur-sm, 85 is blur-md
const blurValues = [15, 50, 85] as const;
type BlurValues = (typeof blurValues)[number];

type BallProps = {
  size: BallValues;
  opacity: OpacityValues;
  blur: BlurValues;
  className?: string;
};

const Ball = ({ size, opacity, blur, className }: BallProps): JSX.Element => {
  const ballClasses = classNames({
    [`absolute rounded-full animate-pulse bg-[var(--fallback-gradient)] ${className}`]:
      true,
    "w-[25px] h-[25px]": size === 15,
    "w-[50px] h-[50px]": size === 50,
    "w-[75px] h-[75px]": size === 85,
    "opacity-25": opacity === 25,
    "opacity-50": opacity === 50,
    "opacity-75": opacity === 75,
    "opacity-100": opacity === 100,
    "blur-none": blur === 15,
    "blur-sm": blur === 50,
    "blur-md": blur === 85,
  });
  return <div className={ballClasses}></div>;
};

const points = [
  {
    className: "top-[60px] left-[80px]",
    parallaxSpeed: -10,
  },
  {
    className: "top-[10px] left-[300px]",
    parallaxSpeed: -10,
  },
  {
    className: "top-[300px] left-[700px]",
    parallaxSpeed: -5,
  },
  {
    className: "top-[400px] left-[200px]",
    parallaxSpeed: -15,
  },
  {
    className: "top-[600px] left-[290px]",
    parallaxSpeed: -5,
  },
  {
    className: "top-[400px] left-[800px]",
    parallaxSpeed: -15,
  },
  {
    className: "top-[450px] right-[200px]",
    parallaxSpeed: -10,
  },
  {
    className: "top-[25px] left-[1000px]",
    parallaxSpeed: -10,
  },
  {
    className: "top-[150px] left-[640px]",
    parallaxSpeed: -5,
  },
  {
    className: "bottom-[30px] right-[300px]",
    parallaxSpeed: -5,
  },
];

const Background = (): JSX.Element => {
  // arbitrary seed selected
  const seed = "1000";
  const random = gen.create(seed);
  // TODO: add make it so that the background is not visible for mobile
  // I could also add gradient animation or whatever here.
  /**
   * generate the opacity of the item in the background
   */
  const generateSize = (): BallValues => {
    const generatedValue = random(100);
    const closest = ballValues.reduce(function (prev, curr) {
      return Math.abs(curr - generatedValue) < Math.abs(prev - generatedValue)
        ? curr
        : prev;
    });
    return closest;
  };

  /**
   * generate the opacity of the item in the background
   */
  const generateOpacity = (): OpacityValues => {
    const generatedValue = random(100);
    const closest = opacityValues.reduce(function (prev, curr) {
      return Math.abs(curr - generatedValue) < Math.abs(prev - generatedValue)
        ? curr
        : prev;
    });
    return closest;
  };

  /**
   * generate the blur of the item in the background
   */
  const generateBlur = (): BlurValues => {
    const generatedValue = random(100);
    const closest = blurValues.reduce(function (prev, curr) {
      return Math.abs(curr - generatedValue) < Math.abs(prev - generatedValue)
        ? curr
        : prev;
    });
    return closest;
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
      {points.map((point) => (
        <ParallaxComponent
          parallaxProps={{ speed: point.parallaxSpeed }}
          key={point.className}
        >
          <Ball
            className={point.className}
            size={generateSize()}
            blur={generateBlur()}
            opacity={generateOpacity()}
          />
        </ParallaxComponent>
      ))}
    </div>
  );
};

export default Background;
