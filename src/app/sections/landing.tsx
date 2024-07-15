import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import { Button } from "@/shadcn-components/ui/button";

export default function Landing() {
  return (
    <PageSection className="flex justify-around items-center mt-10">
      <div className="max-w-[500px]">
        <Heading size="lg">Hi! I'm Dion</Heading>
        <Subheading>
          Website wizard. Frontend + full-stack developer. Father of a cat.
        </Subheading>
        <div className="pt-[120px]">
          <Subheading>
            I can make custom websites for you, help with your dream web app or
            help create automations for you.
          </Subheading>
        </div>
        <div className="pt-5">
          <Button>Get in touch</Button>
        </div>
      </div>
      <div>Image</div>
    </PageSection>
  );
}
