export default function SkillCard({ name, level, image, imageClassName }) {
  const addImageClassName = imageClassName ? `${imageClassName}` : imageClassName;
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <img src={image} className={`${addImageClassName} mr-6`}/>
      <div className="">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
      </div>
    </div>  
  );
};
