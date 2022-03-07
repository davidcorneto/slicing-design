export default function ProjectItem({name, description, image}) {
  return (
    <article className="text-center">
      <img src={image} className="w-full rounded-lg" />
      <h3 className="text-xl text-semibold font-sans mt-4 mb-2">{name}</h3>
      <p className="text-lg text-gray-500">{description}</p>
    </article> 
  );
};
