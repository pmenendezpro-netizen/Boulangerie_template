import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creations, categories, type Creation } from "@/data/creations";
import { ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Creations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes");

  const filteredCreations = selectedCategory === "Toutes" 
    ? creations 
    : creations.filter(creation => creation.categorie === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Nos Créations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Découvrez notre gamme complète de pains, viennoiseries et desserts artisanaux, 
            tous préparés avec passion et savoir-faire traditionnel.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="py-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Filtrer par catégorie</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === "Toutes" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Toutes")}
              className="transition-all duration-200"
            >
              Toutes ({creations.length})
            </Button>
            {categories.map((category) => {
              const count = creations.filter(c => c.categorie === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category} ({count})
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grille des créations */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCreations.map((creation) => (
              <CreationCard key={creation.id} creation={creation} />
            ))}
          </div>
          
          {filteredCreations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucune création trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CreationCardProps {
  creation: Creation;
}

const CreationCard = ({ creation }: CreationCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={creation.image}
          alt={creation.titre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {creation.categorie}
          </Badge>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {creation.titre}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {creation.description}
        </p>

        {/* Prix */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">
            {creation.prix}
          </span>
        </div>

        {/* Allergènes */}
        {creation.allergenes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-red-600 mb-2">⚠️ Allergènes</h4>
            <div className="flex flex-wrap gap-1">
              {creation.allergenes.map((allergene, idx) => (
                <Badge key={idx} variant="destructive" className="text-xs">
                  {allergene}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Bouton d'action */}
        <Button 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
          variant="outline"
        >
          Voir les détails
        </Button>
      </div>
    </div>
  );
};

export default Creations;
