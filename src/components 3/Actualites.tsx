const Actualites = () => {
  return (
    <section id="actualites" className="py-20 px-4 md:px-8 bg-secondary/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Actualités
        </h2>
        
        <div className="text-center">
          <div className="bg-secondary/30 rounded-lg p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Section en cours de développement
            </h3>
            <p className="text-muted-foreground mb-6">
              Cette section contiendra bientôt nos dernières actualités, 
              événements et nouveautés de la boulangerie.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <span>🚧</span>
              <span>TODO: Intégrer un système d'actualités</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actualites;
