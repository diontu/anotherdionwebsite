import classnames from "classnames";

const Heading = ({
  id,
  size = "sm",
  children,
  className,
}: {
  id?: string;
  size?: "xsm" | "sm" | "lg";
  children: React.ReactNode;
  className?: string;
}) => {
  const headingClasses = classnames({
    "heading-xsm": size === "xsm",
    "heading-sm": size === "sm",
    "heading-lg": size === "lg",
  });

  return (
    <div {...(id && { id })} className={headingClasses + " " + className}>
      {children}
    </div>
  );
};

export default Heading;
