import ContactItem from "./ContactItem";
import Field from "./field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionContact() {
  return (
    <section className="container mx-auto py-28">
      <div className="bg-skill flex rounded-lg">
        <div className="w-6/12 border-r border-primarygray-200">
          <div className="py-16 px-20">
          <SectionTitle left="true">Contact</SectionTitle>
          <SectionParagraph left="true">Beberapa cara menghubungi saya.</SectionParagraph>
          <ContactItem 
            label="Mail"
            icon="/mail.svg"
            value="hi@david.com"
            className="mt-10"
            />

          <ContactItem 
            label="Phone"
            icon="/phone.svg"
            value="081234567812"
            className="mt-10"
            />

          <ContactItem 
            label="Twitter"
            icon="/twitter.svg"
            value="@davidcorneto"
            className="mt-10"
            />
          </div>
        </div>  
        <div className="w-6/12">
            <form className="py-16 px-20">
              <div className="flex -m-4">
                <div className="w-6/12 px-4">
                  <Field
                  label="Name"
                  name="name"
                  />
                </div>  
                <div className="w-6/12 px-4">
                  <Field
                  label="Name"
                  name="name"
                  />
                </div> 
              </div>
            </form>
        </div>  
      </div>
    </section>
  );
};
