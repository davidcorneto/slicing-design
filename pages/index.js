import Hero from "../components/Hero";
import SectionProfile from "../components/ProfileSection";
import SectionContact from "../components/SectionContact";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionProfile />
      <SectionSkills /> 
      <SectionProjects />
      <SectionContact />
    </>
  );
}
