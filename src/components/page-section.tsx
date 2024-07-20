type PageSectionProps = {
  /** size of this is the size of the content inside. Otherwise, default is 100vh or a fixed height */
  fitContent?: boolean;

  /** className */
  className?: string;

  /** children */
  children?: React.ReactNode;
};

const PageSection = ({ fitContent, className, children }: PageSectionProps) => {
  return (
    <div
      className={`w-full ${
        fitContent ? "page-section-content" : "page-section-page"
      } relative page-section overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default PageSection;
