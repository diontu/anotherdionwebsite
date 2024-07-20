"use client";

import Background from "@/app/background";
import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import { Badge } from "@/shadcn-components/ui/badge";
import { Button } from "@/shadcn-components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  return (
    <PageSection className="flex justify-around items-center bg-slate-100">
      <Background />
      <div className="max-w-[500px] z-10">
        <Heading size="lg">
          Hi! I'm <Mark>Dion</Mark>
        </Heading>
        <Subheading>
          Website wizard. Frontend + full-stack developer. Father of a cat.
        </Subheading>
        <div className="pt-2">
          <Badge>WEB DESIGN</Badge> <Badge>SEO</Badge> <Badge>FRONTEND</Badge>{" "}
          <Badge>BACKEND</Badge>
        </div>
        <div className="pt-[60px]">
          <Subheading>I can help you build your next great project.</Subheading>
        </div>
        <div className="pt-5">
          <Button onClick={() => router.push("/#contact")}>Get in touch</Button>
        </div>
      </div>
      <div className="max-w-[300px] z-10">
        <Image
          src="/aa-diontu-headshot.jpg"
          width={500}
          height={500}
          alt="dion-portrait"
          className="rounded-lg"
        />
      </div>
    </PageSection>
  );
}
