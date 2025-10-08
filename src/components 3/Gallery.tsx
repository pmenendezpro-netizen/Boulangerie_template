import { useState } from "react";
import { Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProductImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: string;
  category: string;
  rating?: number;
  ingredients?: string[];
  allergens?: string[];
  context?: string;
  specialNote?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);

  const images: ProductImage[] = [
    {
      src: "/images/croissant-four.jpg",
      alt: "Croissant sortant du four",
      title: "Croissants Artisanaux",
      description: "Nos croissants sont façonnés à la main chaque matin avec du beurre AOP de Normandie. Une pâte feuilletée parfaite, dorée à point, qui révèle sa texture incomparable au premier croc.",
      price: "1,20€",
      category: "Viennoiseries",
      rating: 4.9,
      ingredients: ["Farine T65", "Beurre AOP", "Levure", "Sel", "Sucre"],
      allergens: ["Gluten", "Lait", "Œufs"],
      context: "Idéal pour le petit-déjeuner ou le goûter. Parfait avec une confiture maison ou du beurre frais.",
      specialNote: "Cuit au four à bois traditionnel"
    },
    {
      src: "/images/Mini-viennoiseries.jpg",
      alt: "Mini-viennoiseries variées",
      title: "Mini-Viennoiseries",
      description: "Une sélection de nos plus belles créations en format mini. Parfaites pour un petit-déjeuner gourmand ou un goûter d'exception. Chaque pièce est un concentré de saveurs.",
      price: "0,80€",
      category: "Viennoiseries",
      rating: 4.8,
      ingredients: ["Farine artisanale", "Beurre AOP", "Œufs frais", "Crème pâtissière"],
      allergens: ["Gluten", "Lait", "Œufs"],
      context: "Parfait pour les enfants ou un goûter léger. Idéal pour découvrir plusieurs saveurs.",
      specialNote: "Idéal pour les enfants"
    },
    {
      src: "/images/pains-chocolat.jpg",
      alt: "Pains au chocolat",
      title: "Pains au Chocolat",
      description: "Le classique de la boulangerie française revisité avec notre savoir-faire. Chocolat de couverture belge, pâte feuilletée au beurre AOP, une harmonie parfaite entre tradition et qualité.",
      price: "1,50€",
      category: "Viennoiseries",
      rating: 4.9,
      ingredients: ["Chocolat belge 70%", "Beurre AOP", "Farine T65", "Levure"],
      allergens: ["Gluten", "Lait", "Œufs"],
      context: "Le goûter parfait des enfants et des adultes. Excellent avec un verre de lait ou un café.",
      specialNote: "Chocolat bio équitable"
    },
    {
      src: "/images/panier-viennoiseries.jpg",
      alt: "Panier de viennoiseries",
      title: "Assortiment Viennoiseries",
      description: "Un panier généreux de nos spécialités du matin. Croissants, pains au chocolat, brioches et chaussons aux pommes. L'art de commencer la journée avec gourmandise.",
      price: "12,00€",
      category: "Assortiment",
      rating: 4.9,
      ingredients: ["Farine artisanale", "Beurre AOP", "Œufs frais", "Pommes de saison"],
      allergens: ["Gluten", "Lait", "Œufs"],
      context: "Parfait pour un brunch en famille ou entre amis. Idéal pour 4-6 personnes.",
      specialNote: "Parfait pour 4-6 personnes"
    }
  ];

  return (
    <section id="produits" className="py-20 px-4 md:px-8 bg-secondary/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Nos Créations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm mb-2">{image.description.substring(0, 80)}...</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {image.category}
                    </Badge>
                    {image.price && (
                      <span className="text-white font-bold text-lg">{image.price}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour afficher les détails du produit */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                {selectedImage?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedImage && (
              <div className="space-y-6">
                {/* Image principale */}
                <div className="relative">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  {selectedImage.specialNote && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {selectedImage.specialNote}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Informations du produit */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedImage.description}
                    </p>
                    
                    {/* Contexte */}
                    {selectedImage.context && (
                      <div>
                        <h4 className="font-semibold mb-2">Contexte d'usage</h4>
                        <p className="text-muted-foreground text-sm bg-secondary/30 p-3 rounded-lg">
                          {selectedImage.context}
                        </p>
                      </div>
                    )}
                    
                    {/* Ingrédients */}
                    {selectedImage.ingredients && (
                      <div>
                        <h4 className="font-semibold mb-2">Ingrédients</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedImage.ingredients.map((ingredient, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Allergènes */}
                    {selectedImage.allergens && (
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Allergènes</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedImage.allergens.map((allergen, idx) => (
                            <Badge key={idx} variant="destructive" className="text-xs">
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Détails techniques */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Prix</span>
                      <span className="text-2xl font-bold text-primary">{selectedImage.price}</span>
                    </div>

                    {selectedImage.rating && (
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{selectedImage.rating}/5</span>
                        <span className="text-sm text-muted-foreground">(Excellent)</span>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <Badge variant="secondary" className="text-sm">
                        {selectedImage.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
