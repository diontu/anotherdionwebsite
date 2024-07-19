import classNames from "classnames";

// 15 is sm, 50 is md, 85 is lg
const ballValues = [15, 50, 85] as const;
type BallValues = (typeof ballValues)[number];

const opacityValues = [25, 50, 75, 100] as const;
type OpacityValues = (typeof opacityValues)[number];

// 15 is blur-none, 50 is blur-sm, 85 is blur-md
const blurValues = [15, 50, 85] as const;
type BlurValues = (typeof blurValues)[number];

type BallProps = {
  x: number;
  y: number;
  size: BallValues;
  opacity: OpacityValues;
  blur: BlurValues;
};

const Ball = ({ x, y, size, opacity, blur }: BallProps): JSX.Element => {
  const ballClasses = classNames({
    "absolute top-20 left-20 rounded-full animate-bounce bg-[var(--fallback-gradient)]":
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

const Background = (): JSX.Element => {
  // TODO: add make it so that the background is not visible for mobile
  // I could also add gradient animation or whatever here.
  /**
   * generate the opacity of the item in the background
   */
  const generateSize = (): BallValues => {
    const generatedValue = Math.random() * 100;
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
    const generatedValue = Math.random() * 100;
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
    const generatedValue = Math.random() * 100;
    const closest = blurValues.reduce(function (prev, curr) {
      return Math.abs(curr - generatedValue) < Math.abs(prev - generatedValue)
        ? curr
        : prev;
    });
    return closest;
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
      <Ball
        size={generateSize()}
        blur={generateBlur()}
        x={0}
        y={0}
        opacity={generateOpacity()}
      />
    </div>
  );
};

export default Background;
