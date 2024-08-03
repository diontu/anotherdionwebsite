import "./page-section.css";
import { cn } from "@/shadcn-components/lib/utils";

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
      className={cn(
        `w-full ${
          fitContent ? "page-section-content" : "page-section-page"
        } relative max-w-full py-0 px-[min(10%,170px)] overflow-hidden ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default PageSection;
