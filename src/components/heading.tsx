const Heading = ({
  id,
  size = "sm",
  children,
}: {
  id?: string;
  size?: "sm" | "lg";
  children: React.ReactNode;
}) => {
  return (
    <div
      {...(id && { id })}
      className={`${size === "sm" ? "heading-sm" : "heading-lg"}`}
    >
      {children}
    </div>
  );
};

export default Heading;
