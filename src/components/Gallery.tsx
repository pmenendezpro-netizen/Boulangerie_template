const Gallery = () => {
  const images = [
    { src: "/images/croissant-four.jpg", alt: "Croissant sortant du four" },
    { src: "/images/Mini-viennoiseries.jpg", alt: "Mini-viennoiseries variées" },
    { src: "/images/pains-chocolat.jpg", alt: "Pains au chocolat" },
    { src: "/images/panier-viennoiseries.jpg", alt: "Panier de viennoiseries" },
  ];

  return (
    <section id="galerie" className="py-20 px-4 md:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Nos Créations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-xl font-semibold p-6">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
