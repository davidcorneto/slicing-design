import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
        <div className="flex mt-20 -mx-4 flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem 
              name="Hasten" 
              description="Explorasi landing page"
              image="/project-1.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem 
              name="Resources" 
              description="Explorasi landing page"
              image="/project-2.png"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem 
              name="Resources" 
              description="Explorasi landing page"
              image="/project-3.png"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem 
              name="Hasten" 
              description="Explorasi landing page"
              image="/project-4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
