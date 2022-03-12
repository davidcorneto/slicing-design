import Button from "./Button";
import Navbar from "./NavBar";

export default function Hero() {
  return (
    <div className='bg-hero h-[712px]'>
        <div className="container mx-auto">
          <Navbar />
          <div className='text-center mt-16'>
            <h1 className='text-3xl font-semibold text-white font-mono w-8/12 mx-auto leading-relaxed'>Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
            <p className=' text-lg text-white text-opacity-60 w-4/12 mx-auto mt-6 leading-relaxed'>Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.</p>
            <Button pill className="mt-12" variant="yellow">Pelajari</Button>
          </div>
        </div>
      </div>
  );
};
