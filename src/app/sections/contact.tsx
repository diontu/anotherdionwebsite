"use client";

import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import { Card, CardContent } from "@/shadcn-components/ui/card";
import { Input } from "@/shadcn-components/ui/input";
import { Textarea } from "@/shadcn-components/ui/textarea";
import { Button } from "@/shadcn-components/ui/button";
import Background from "@/app/background";

export default function Contact() {
  return (
    <PageSection className="flex flex-col pt-36">
      <Background />
      <div className="max-w-[500px] z-10 backdrop-blur-lg">
        <Heading id="contact">
          Get in touch with me <Mark>now</Mark>
        </Heading>
        <Subheading>
          I&#39;m only a contact form to get in touch with you. Feel free to
          send me a message and I will get back to you as soon as possible.
        </Subheading>
      </div>
      <div className="mt-10 max-w-[500px] z-10">
        <Card>
          <CardContent className="py-5 flex flex-col gap-5">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </div>
    </PageSection>
  );
}
