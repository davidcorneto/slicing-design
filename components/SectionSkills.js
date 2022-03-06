import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
  return (
    <section className="py-20 bg-skill">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex mt-20 flex-wrap">
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/javascript.svg" imageClassName="rounded-full h-16"/>
          </div>  
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/react.svg" imageClassName="h-16"/>
          </div>  
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/nodejs.svg" imageClassName="h-16"/>
          </div> 

          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/nodejs.svg" imageClassName="h-16"/>
          </div>  
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/javascript.svg" imageClassName="rounded-full h-16"/>
          </div>  
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/react.svg" imageClassName="h-16"/>
          </div>  
          
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/react.svg" imageClassName="h-16"/>
          </div>  
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/nodejs.svg" imageClassName="h-16"/>
          </div>  
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="JavaScript" level="Lanjutan" image="/javascript.svg" imageClassName="rounded-full h-16"/>
          </div>  
        </div>
      </div>
    </section>
  );
};
