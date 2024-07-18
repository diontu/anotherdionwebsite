import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import Highlight from "@/components/text-style/highlight";

export default function Contact() {
  return (
    <PageSection className="flex flex-col mt-10">
      <div className="max-w-[500px]">
        <Heading id="contact">
          Get in touch with me <Mark>now</Mark>
        </Heading>
        <Subheading>
          I'm only a contact form to get in touch with you. Feel free to send me
          a message and I will get back to you as soon as possible.
        </Subheading>
      </div>
      <div>Form</div>
    </PageSection>
  );
}
