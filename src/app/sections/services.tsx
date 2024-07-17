import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import { Card, CardContent } from "@/shadcn-components/ui/card";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faRocket,
    title: "Frontend + backend development",
    description:
      "I can develop or assist in developing your next great project.",
  },
  {
    icon: faDesktop,
    title: "Website development",
    description:
      "I create responsive, user-friendly websites and web applications using modern technologies.",
  },
  {
    icon: faPalette,
    title: "UI/UX design",
    description:
      "I design intuitive and engaging user interfaces and experiences.",
  },
];

export default function Services() {
  return (
    <PageSection className="flex flex-col items-center text-center">
      <div className="max-w-[500px]">
        <Heading>Services</Heading>
        <Subheading>
          These are the tools I'm using right now. I'm not married to any tool
          and would love to have the opportunity to learn more!
        </Subheading>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Card
            className="w-[250px] h-[210px] hover:border-[var(--fallback-gradient)] transition duration-400"
            key={service.title}
          >
            <CardContent className="my-5 mx-2">
              <FontAwesomeIcon icon={service.icon} size="2xl" />
              <p className="mt-3 gradient-text font-bold">{service.title}</p>
              <p className="text text-sm mt-4">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
