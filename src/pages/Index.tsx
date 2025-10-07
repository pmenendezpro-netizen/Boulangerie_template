import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Catalog from "@/components/Catalog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <Gallery />
      <Catalog />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8 px-4 text-center">
        <p className="text-sm">
          © 2024 Boulangerie Artisanale - Tous droits réservés
        </p>
      </footer>
    </div>
  );
};

export default Index;
