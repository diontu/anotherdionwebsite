const Heading = ({
  size = "sm",
  children,
}: {
  size?: "sm" | "lg";
  children: React.ReactNode;
}) => {
  return (
    <div className={`${size === "sm" ? "heading-sm" : "heading-lg"}`}>
      {children}
    </div>
  );
};

export default Heading;
