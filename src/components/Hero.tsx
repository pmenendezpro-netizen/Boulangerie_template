import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/devanture_boulangerie.jpg.webp')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
          La Boulangerie Artisanale
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
          Tradition & Savoir-faire depuis 1950
        </p>
      </div>

      <a 
        href="#histoire" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;
