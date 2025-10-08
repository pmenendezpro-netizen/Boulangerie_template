export interface Creation {
  id: string;
  titre: string;
  image: string;
  prix: string;
  categorie: 'Pain' | 'Viennoiseries' | 'Desserts individuels' | 'Desserts sur commande';
  allergenes: string[];
  description: string;
}

export const creations: Creation[] = [
  // Pains
  {
    id: 'baguette-tradition',
    titre: 'Baguette Tradition',
    image: '/src/assets/tradition_baguette.jpg',
    prix: '1,20€',
    categorie: 'Pain',
    allergenes: ['Gluten'],
    description: 'La baguette phare du boulanger, croustillante à l\'extérieur, moelleuse à l\'intérieur'
  },
  {
    id: 'pain-complet',
    titre: 'Pain Complet',
    image: '/src/assets/pain_campagne.jpg',
    prix: '2,50€',
    categorie: 'Pain',
    allergenes: ['Gluten'],
    description: 'Pain aux céréales complètes, riche en fibres et en saveurs'
  },
  {
    id: 'pain-cereales',
    titre: 'Pain aux Céréales',
    image: '/src/assets/Pain_Nordique.jpg',
    prix: '2,80€',
    categorie: 'Pain',
    allergenes: ['Gluten'],
    description: 'Mélange de graines et céréales pour un pain nutritif et savoureux'
  },
  {
    id: 'pain-aux-noix',
    titre: 'Pain aux Noix',
    image: '/src/assets/pain_campagne.jpg',
    prix: '3,20€',
    categorie: 'Pain',
    allergenes: ['Gluten', 'Fruits à coque'],
    description: 'Pain aux noix entières, parfait pour le petit-déjeuner'
  },

  // Viennoiseries
  {
    id: 'croissant-beurre',
    titre: 'Croissant au Beurre',
    image: '/src/assets/product-croissants.jpg',
    prix: '1,50€',
    categorie: 'Viennoiseries',
    allergenes: ['Gluten', 'Lait'],
    description: 'Croissant au beurre AOP, croustillant et parfumé'
  },
  {
    id: 'pain-chocolat',
    titre: 'Pain au Chocolat',
    image: '/src/assets/product-croissants.jpg',
    prix: '1,80€',
    categorie: 'Viennoiseries',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Pain au chocolat avec des barres de chocolat belge 70%'
  },
  {
    id: 'chausson-pommes',
    titre: 'Chausson aux Pommes',
    image: '/src/assets/product-croissants.jpg',
    prix: '2,20€',
    categorie: 'Viennoiseries',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Chausson aux pommes fraîches, parfait pour le goûter'
  },
  {
    id: 'brioche-tete',
    titre: 'Brioche Tête',
    image: '/src/assets/product-croissants.jpg',
    prix: '2,50€',
    categorie: 'Viennoiseries',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Brioche moelleuse et dorée, idéale pour le petit-déjeuner'
  },

  // Desserts individuels
  {
    id: 'eclair-chocolat',
    titre: 'Éclair au Chocolat',
    image: '/src/assets/Eclair_Chocolat.jpg',
    prix: '3,50€',
    categorie: 'Desserts individuels',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Éclair au chocolat avec crème pâtissière et glaçage'
  },
  {
    id: 'tarte-citron',
    titre: 'Tarte au Citron',
    image: '/src/assets/tarte-au-citron.jpg',
    prix: '4,20€',
    categorie: 'Desserts individuels',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Tarte au citron meringuée, fraîche et acidulée'
  },
  {
    id: 'millefeuille',
    titre: 'Millefeuille',
    image: '/src/assets/royal_chocolat.jpg',
    prix: '4,80€',
    categorie: 'Desserts individuels',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Millefeuille traditionnel avec crème pâtissière et glaçage'
  },
  {
    id: 'religieuse-cafe',
    titre: 'Religieuse au Café',
    image: '/src/assets/Religieuse_chocolat.jpg',
    prix: '3,80€',
    categorie: 'Desserts individuels',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Religieuse au café avec crème au beurre et glaçage'
  },

  // Desserts sur commande
  {
    id: 'gateau-anniversaire',
    titre: 'Gâteau d\'Anniversaire',
    image: '/src/assets/royal_chocolat.jpg',
    prix: '25,00€',
    categorie: 'Desserts sur commande',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Gâteau d\'anniversaire personnalisé, disponible sur commande'
  },
  {
    id: 'tarte-tatin',
    titre: 'Tarte Tatin',
    image: '/src/assets/galette_rois.jpg',
    prix: '18,00€',
    categorie: 'Desserts sur commande',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Tarte Tatin aux pommes caramélisées, à commander 48h à l\'avance'
  },
  {
    id: 'cheesecake-fruits',
    titre: 'Cheesecake aux Fruits',
    image: '/src/assets/royal_chocolat.jpg',
    prix: '22,00€',
    categorie: 'Desserts sur commande',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Cheesecake aux fruits de saison, sur commande uniquement'
  },
  {
    id: 'opera',
    titre: 'Opéra',
    image: '/src/assets/parisBrest.jpg',
    prix: '28,00€',
    categorie: 'Desserts sur commande',
    allergenes: ['Gluten', 'Lait', 'Œufs'],
    description: 'Opéra classique au café et chocolat, gâteau de prestige'
  }
];

export const categories = ['Pain', 'Viennoiseries', 'Desserts individuels', 'Desserts sur commande'] as const;
