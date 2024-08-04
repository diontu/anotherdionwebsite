import { cva } from "class-variance-authority";
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

const PageSectionClasses = cva(
  "w-full relative max-w-full py-0 px-[min(10%,170px)] overflow-hidden",
  {
    variants: {
      fitContent: {
        true: "page-section-content",
        false: "page-section-page",
      },
    },
    defaultVariants: {
      fitContent: false,
    },
  }
);

const PageSection = ({ fitContent, className, children }: PageSectionProps) => {
  return (
    <div className={cn(PageSectionClasses({ fitContent }), className)}>
      {children}
    </div>
  );
};

export default PageSection;
