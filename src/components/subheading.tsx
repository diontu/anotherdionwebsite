import "./subheading.css";

const Subheading = ({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "sm" | "lg";
}) => {
  return (
    <div
      className={`text ${size === "sm" ? "subheading-sm" : "subheading-lg"}`}
    >
      {children}
    </div>
  );
};

export default Subheading;
