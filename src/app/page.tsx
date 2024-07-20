import Contact from "@/app/sections/contact";
import Landing from "@/app/sections/landing";
import Projects from "@/app/sections/projects";
import Services from "@/app/sections/services";
import Skills from "@/app/sections/skills";
import Unique from "@/app/sections/unique";

export default function Home() {
  return (
    <>
      <Landing />
      {/* uncomment the below when the projects section is ready */}
      {/* <Projects /> */}
      <Services />
      <Skills />
      <Unique />
      <Contact />
    </>
  );
}
