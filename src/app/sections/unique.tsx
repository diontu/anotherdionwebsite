import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import Highlight from "@/components/text-style/highlight";

const standoutPoints = [
  {
    icon: "🫶",
    title: "Personalized Attention and Dedication",
    description: (
      <span>
        As an independent developer, I have the ability to dedicate most of my
        time and effort to each client. Unlike web agencies that juggle multiple
        projects and clients simultaneously, I focus on providing personalized
        and dedicated service. This means{" "}
        <Highlight>
          quicker response times, more flexibility, and a deeper understanding
        </Highlight>{" "}
        of your specific needs.
      </span>
    ),
  },
  {
    icon: "🖥️",
    title: "Experienced Frontend Developer",
    description: (
      <span>
        With over 3 years of hands-on experience in frontend development, I
        bring a wealth of knowledge and expertise to the table. My skills
        encompass a wide range of technologies and best practices,{" "}
        <Highlight>
          ensuring that your website is not only visually appealing but also
          highly functional and user-friendly.
        </Highlight>
      </span>
    ),
  },
  {
    icon: "💭",
    title: "Direct Communication",
    description: (
      <span>
        Working directly with me eliminates the middleman. You’ll have direct
        access to the person working on your project, leading to{" "}
        <Highlight>clearer communication, faster decision-making</Highlight>,
        and a more collaborative process. This direct line of communication
        ensures that your vision is understood and implemented precisely.
      </span>
    ),
  },
  {
    icon: "🧩",
    title: "Custom Solutions",
    description: (
      <span>
        I understand that every project is unique. Unlike agencies that might
        offer templated solutions, I take the time to craft{" "}
        <Highlight>custom solutions </Highlight>
        tailored to your specific requirements. Whether it’s a bespoke website
        design, unique functionality, or specialized integrations, I’m committed
        to delivering a product that fits your exact needs.
      </span>
    ),
  },
  {
    icon: "🤑",
    title: "Cost-Effective Services",
    description: (
      <span>
        Without the overhead costs that come with running a large agency, I can
        offer competitive pricing for my services. You get high-quality,
        professional work <Highlight>WITHOUT</Highlight> the premium price tag.
        My goal is to provide exceptional value for your investment.
      </span>
    ),
  },
];

export default function Unique() {
  return (
    <PageSection className="flex justify-center mt-10 gap-10 pt-36 bg-slate-100 min-h-[850px]">
      <div className="max-w-[500px] flex flex-col">
        <Heading>
          What makes me <Mark>different</Mark>?
        </Heading>
        <div className="pt-12">
          <Accordion
            type="single"
            className="w-full"
            defaultValue={standoutPoints[0].title}
          >
            {standoutPoints.map((point) => (
              <AccordionItem value={point.title}>
                <AccordionTrigger className="font-bold">
                  <div>
                    <span className="mr-6">{point.icon}</span>
                    {point.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text">
                  {point.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="relative min-w-[500px]">
        <Image
          src="/dion-pic-1.png"
          width={200}
          height={200}
          alt="dion-pic-1"
          className="absolute top-5 left-60 border-2 border-[var(--fallback-gradient)] rounded-lg"
        />
        <Image
          src="/dion-pic-2.png"
          width={200}
          height={200}
          alt="dion-pic-2"
          className="absolute top-80 left-72 border-2 border-[var(--fallback-gradient)] rounded-lg"
        />
        <Image
          src="/dion-pic-3.png"
          width={300}
          height={300}
          alt="dion-pic-3"
          className="absolute top-44 left-10 border-2 border-[var(--fallback-gradient)] rounded-lg"
        />
      </div>
    </PageSection>
  );
}
