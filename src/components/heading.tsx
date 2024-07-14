const Heading = ({
  size = "sm",
  children,
}: {
  size?: "sm" | "lg";
  children: React.ReactNode;
}) => {
  return <div className={`heading-${size}`}>{children}</div>;
};

export default Heading;
