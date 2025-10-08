import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Catalog = () => {
  const products = [
    {
      category: "Pains",
      items: [
        { name: "Baguette Tradition", price: "1,20€" },
        { name: "Pain de Campagne", price: "4,50€" },
        { name: "Pain aux Céréales", price: "3,80€" },
        { name: "Pain au Levain", price: "5,20€" },
      ]
    },
    {
      category: "Viennoiseries",
      items: [
        { name: "Croissant", price: "1,30€" },
        { name: "Pain au Chocolat", price: "1,40€" },
        { name: "Pain aux Raisins", price: "1,50€" },
        { name: "Chausson aux Pommes", price: "2,20€" },
      ]
    },
    {
      category: "Pâtisseries",
      items: [
        { name: "Éclair au Chocolat", price: "3,50€" },
        { name: "Tarte aux Fruits", price: "4,80€" },
        { name: "Millefeuille", price: "4,20€" },
        { name: "Paris-Brest", price: "4,50€" },
      ]
    },
    {
      category: "Spécialités",
      items: [
        { name: "Fougasse aux Olives", price: "4,00€" },
        { name: "Brioche Tressée", price: "6,50€" },
        { name: "Kouign-Amann", price: "2,80€" },
        { name: "Galette des Rois (saison)", price: "18,00€" },
      ]
    },
  ];

  return (
    <section id="catalogue" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Notre Catalogue
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((category) => (
            <Card key={category.category} className="shadow-soft hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">{category.category}</CardTitle>
                <CardDescription>Produits frais du jour</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
