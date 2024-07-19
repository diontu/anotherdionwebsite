import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Subheading from "@/components/subheading";
import { Progress } from "@/shadcn-components/ui/progress";

const skills = {
  frontend: {
    title: "Frontend",
    competencyList: {
      typescript: {
        title: "TypeScript",
        level: 80,
      },
      react: {
        title: "React",
        level: 90,
      },
      redux: {
        title: "Redux",
        level: 70,
      },
      nextjs: {
        title: "Next.js",
        level: 60,
      },
      html: {
        title: "HTML",
        level: 80,
      },
      css: {
        title: "CSS",
        level: 80,
      },
    },
  },
  backend: {
    title: "Backend",
    competencyList: {
      python: {
        title: "Python",
        level: 60,
      },
      java: {
        title: "Java",
        level: 50,
      },
      bash: {
        title: "Bash",
        level: 65,
      },
    },
  },
  tooling: {
    title: "Tooling",
    competencyList: {
      docker: {
        title: "Docker",
        level: 65,
      },
      AWS: {
        title: "AWS (CloudFront, EC2, S3, Lambda)",
        level: 60,
      },
      ghactions: {
        title: "GitHub Actions",
        level: 45,
      },
    },
  },
  databases: {
    title: "Databases",
    competencyList: {
      mysql: {
        title: "MySQL",
        level: 70,
      },
      mongodb: {
        title: "MongoDB",
        level: 50,
      },
      redis: {
        title: "Redis",
        level: 40,
      },
    },
  },
};

export default function Skills() {
  return (
    <PageSection
      className="flex flex-col items-center text-center mb-20 pt-36"
      fitContent
    >
      <div className="max-w-[500px]">
        <Heading>My Skills</Heading>
        <Subheading>
          These are the tools I’m using right now. I’m not married to any tool
          and would love to have the opportunity to learn more!
        </Subheading>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-y-10 gap-x-32">
        {Object.values(skills).map((skill) => (
          <div className="w-[300px]">
            <div className="font-bold mb-4">{skill.title}</div>
            {Object.values(skill.competencyList).map((competency) => (
              <div className="mb-2">
                <div className="flex justify-start text text-sm">
                  {competency.title}
                </div>
                <Progress key={competency.title} value={competency.level} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageSection>
  );
}
