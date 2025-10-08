import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import SavoirFaire from "@/components/SavoirFaire";
import Gallery from "@/components/Gallery";
import Actualites from "@/components/Actualites";
import Commande from "@/components/Commande";
import Contact from "@/components/Contact";
import AdressesContact from "@/components/AdressesContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <SavoirFaire />
      <Gallery />
      <Actualites />
      <Commande />
      <Contact />
      <AdressesContact />
      
      <footer className="bg-primary text-primary-foreground py-8 px-4 text-center">
        <p className="text-sm">
          © 2024 Boulangerie Artisanale - Tous droits réservés
        </p>
      </footer>
    </div>
  );
};

export default Index;
