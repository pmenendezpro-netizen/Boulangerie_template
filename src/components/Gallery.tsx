import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      src: "/images/croissant-four.jpg", 
      alt: "Croissant sortant du four",
      title: "Croissant Artisanal",
      description: "Croissant au beurre AOP, croustillant à l'extérieur, moelleux à l'intérieur",
      ingredients: ["Farine T65", "Beurre AOP", "Levure", "Sel", "Eau"],
      allergens: ["Gluten", "Lait"],
      suggestion: "Parfait pour le petit-déjeuner des enfants avec un verre de lait chaud 🥛✨"
    },
    { 
      src: "/images/Mini-viennoiseries.jpg", 
      alt: "Mini-viennoiseries variées",
      title: "Mini-Viennoiseries",
      description: "Assortiment de mini-croissants et mini-pains au chocolat",
      ingredients: ["Farine T65", "Beurre AOP", "Chocolat", "Levure", "Œufs"],
      allergens: ["Gluten", "Lait", "Œufs"],
      suggestion: "Idéal pour le goûter des enfants, ils peuvent goûter plusieurs saveurs ! 🍪👶"
    },
    { 
      src: "/images/pains-chocolat.jpg", 
      alt: "Pains au chocolat",
      title: "Pain au Chocolat",
      description: "Pain au chocolat avec des barres de chocolat belge 70%",
      ingredients: ["Farine T65", "Beurre AOP", "Chocolat belge 70%", "Levure", "Œufs"],
      allergens: ["Gluten", "Lait", "Œufs"],
      suggestion: "Le goûter préféré des enfants ! Parfait avec un jus de pomme 🍎🍫"
    },
    { 
      src: "/images/panier-viennoiseries.jpg", 
      alt: "Panier de viennoiseries",
      title: "Assortiment Viennoiseries",
      description: "Panier varié de viennoiseries fraîches du matin",
      ingredients: ["Farine T65", "Beurre AOP", "Chocolat", "Levure", "Œufs", "Sucre"],
      allergens: ["Gluten", "Lait", "Œufs"],
      suggestion: "Parfait pour un brunch en famille le dimanche matin ! 🌅👨‍👩‍👧‍👦"
    },
  ];

  return (
    <section id="produits" className="py-20 px-4 md:px-8 bg-secondary/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos Créations
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez nos spécialités artisanales, préparées avec passion et savoir-faire traditionnel
          </p>
          <Link to="/creations">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              En savoir plus sur nos créations et nos prix
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img 
                src={product.src} 
                alt={product.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-white/90 text-sm mb-2">{product.description.substring(0, 80)}...</p>
                  <p className="text-white/80 text-xs">Cliquez pour plus de détails</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                {selectedProduct?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProduct && (
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={selectedProduct.src} 
                    alt={selectedProduct.alt}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Ingrédients</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.ingredients.map((ingredient, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">⚠️ Allergènes</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.allergens.map((allergen, idx) => (
                          <Badge key={idx} variant="destructive" className="text-xs">
                            {allergen}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">💡 Suggestion pour les enfants</h4>
                      <p className="text-yellow-700 text-sm">
                        {selectedProduct.suggestion}
                      </p>
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
