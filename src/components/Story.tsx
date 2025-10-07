const Story = () => {
  return (
    <section id="histoire" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-foreground">
          Notre Histoire
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Depuis trois générations, notre famille perpétue l'art de la boulangerie traditionnelle française. 
            Fondée en 1950 par Pierre Dubois, notre boulangerie est devenue une institution dans le quartier.
          </p>
          
          <p>
            Chaque matin, nos artisans boulangers pétrissent la pâte avec passion et savoir-faire, 
            utilisant uniquement des ingrédients de première qualité. Notre levain naturel, 
            cultivé depuis la création de la boulangerie, confère à nos pains cette saveur unique 
            et authentique que nos clients apprécient tant.
          </p>
          
          <p>
            Au fil des années, nous avons su préserver les méthodes artisanales tout en nous adaptant 
            aux goûts contemporains. Notre engagement reste le même : vous offrir chaque jour 
            des produits frais, savoureux et de qualité exceptionnelle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
