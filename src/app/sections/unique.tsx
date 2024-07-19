import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import Mark from "@/components/text-style/mark";
import Image from "next/image";

const standoutPoints = [
  {
    title: "Personalized Attention and Dedication",
    description:
      "As an independent developer, I have the ability to dedicate most of my time and effort to each client. Unlike web agencies that juggle multiple projects and clients simultaneously, I focus on providing personalized and dedicated service. This means quicker response times, more flexibility, and a deeper understanding of your specific needs.",
  },
  {
    title: "Experienced Frontend Developer",
    description:
      "With over 3 years of hands-on experience in frontend development, I bring a wealth of knowledge and expertise to the table. My skills encompass a wide range of technologies and best practices, ensuring that your website is not only visually appealing but also highly functional and user-friendly.",
  },
  {
    title: "Direct Communication",
    description:
      "Working directly with me eliminates the middleman. You’ll have direct access to the person working on your project, leading to clearer communication, faster decision-making, and a more collaborative process. This direct line of communication ensures that your vision is understood and implemented precisely.",
  },
  {
    title: "Custom Solutions",
    description:
      "I understand that every project is unique. Unlike agencies that might offer templated solutions, I take the time to craft custom solutions tailored to your specific requirements. Whether it’s a bespoke website design, unique functionality, or specialized integrations, I’m committed to delivering a product that fits your exact needs.",
  },
  {
    title: "Cost-Effective Services",
    description:
      "Without the overhead costs that come with running a large agency, I can offer competitive pricing for my services. You get high-quality, professional work without the premium price tag. My goal is to provide exceptional value for your investment. ",
  },
];

export default function Unique() {
  return (
    <PageSection
      className="flex justify-center mt-10 gap-10 pt-36 bg-slate-100"
      fitContent
    >
      <div className="max-w-[500px] flex flex-col">
        <Heading>
          What makes me <Mark>different</Mark>?
        </Heading>
        <div className="pb-36">
          {standoutPoints.map((point) => (
            <div key={point.title} className="pt-6">
              <Heading
                size="xsm"
                className="pb-2 text-[var(--fallback-gradient)]"
              >
                {point.title}
              </Heading>
              <Subheading size="sm">{point.description}</Subheading>
            </div>
          ))}
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
