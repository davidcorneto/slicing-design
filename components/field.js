export default function Field({label, name}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 font-semibold">{label}</label>
      <input type="text" name={name} id={name} className="bg-transparent border border-primarygray-300 py-3 px-6 w-full" />
    </div>
  );
};
