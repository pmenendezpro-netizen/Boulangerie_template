const SavoirFaire = () => {
  return (
    <section id="savoirfaire" className="py-20 px-4 md:px-8 bg-gradient-to-b from-secondary/20 to-background scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Notre Savoir-faire
        </h2>
        
        <div className="space-y-12">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Dans le silence de la nuit, quand la ville dort encore, nos artisans s'éveillent 
              pour perpétuer une tradition séculaire. Chaque geste est un héritage, 
              chaque recette un trésor transmis de génération en génération.
            </p>
          </div>

          {/* Storytelling sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Les ingrédients */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Des ingrédients soigneusement choisis
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Nos farines proviennent de moulins artisanaux qui perpétuent les méthodes 
                  traditionnelles. Chaque grain est sélectionné pour sa qualité exceptionnelle, 
                  garantissant cette texture incomparable qui fait la réputation de nos pains.
                </p>
                <p>
                  Le beurre AOP de Normandie, le chocolat de couverture belge, les œufs 
                  frais du jour... Chaque ingrédient raconte une histoire, celle d'un terroir 
                  et d'un savoir-faire qui se transmettent depuis des décennies.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🌾</div>
              <h4 className="text-xl font-semibold mb-2">Farines artisanales</h4>
              <p className="text-muted-foreground">
                Sélectionnées chez nos meuniers partenaires depuis 1950
              </p>
            </div>
          </div>

          {/* Le levain */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary/30 rounded-lg p-8 text-center order-2 lg:order-1">
              <div className="text-6xl mb-4">🍞</div>
              <h4 className="text-xl font-semibold mb-2">Levain naturel</h4>
              <p className="text-muted-foreground">
                Cultivé et entretenu depuis la création de la boulangerie
              </p>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Le levain, âme de notre boulangerie
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Notre levain naturel, né en 1950, est l'âme de notre boulangerie. 
                  Chaque jour, nous le nourrissons avec amour, comme un membre de la famille. 
                  Cette culture vivante confère à nos pains cette saveur unique, 
                  cette texture incomparable que nos clients reconnaissent entre mille.
                </p>
                <p>
                  À 3h du matin, quand le monde dort encore, c'est lui qui nous guide. 
                  Sa fermentation lente et naturelle développe des arômes complexes 
                  que seule la patience peut révéler.
                </p>
              </div>
            </div>
          </div>

          {/* Les pâtisseries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Pâtisseries faites avec amour
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Chaque croissant est façonné à la main, chaque tarte est un tableau 
                  de saveurs. Nos pâtissiers, véritables artistes, transforment les 
                  ingrédients les plus nobles en créations d'exception.
                </p>
                <p>
                  Les viennoiseries, dorées à point, révèlent leur cœur feuilleté 
                  au premier croc. Les tartes aux fruits de saison célèbrent 
                  les cycles naturels, tandis que nos éclairs et religieuses 
                  subliment les classiques de la pâtisserie française.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🥐</div>
              <h4 className="text-xl font-semibold mb-2">Viennoiseries artisanales</h4>
              <p className="text-muted-foreground">
                Façonnées à la main, chaque matin, avec passion et précision
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              L'art de la boulangerie, un héritage précieux
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Depuis trois générations, nous perpétuons cet art délicat où tradition 
              et innovation se rencontrent. Chaque produit qui sort de nos fours 
              porte en lui l'âme de notre maison, l'amour du métier bien fait, 
              et cette passion qui nous anime chaque jour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavoirFaire;
