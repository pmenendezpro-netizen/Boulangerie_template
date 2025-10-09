// Imports explicites des images pour Vite
import croissantsSortantFour from './croissants_sortant_four.jpg';
import miniViennoiseries from './Mini-viennoiseries.jpg';
import painsChocolat from './pains-chocolat.jpg';
import panierViennoiserie from './panier_viennoiserie.jpg';
import traditionBaguette from './tradition_baguette.jpg';
import painCampagne from './pain_campagne.jpg';
import painNordique from './Pain_Nordique.jpg';
import eclairChocolat from './Eclair_Chocolat.jpg';
import tarteCitron from './tarte-au-citron.jpg';
import royalChocolat from './royal_chocolat.jpg';
import religieuseChocolat from './Religieuse_chocolat.jpg';
import galetteRois from './galette_rois.jpg';
import parisBrest from './parisBrest.jpg';

// Export des images avec des noms clairs
export const images = {
  // Viennoiseries
  croissantsSortantFour,
  miniViennoiseries,
  painsChocolat,
  panierViennoiserie,
  
  // Pains
  traditionBaguette,
  painCampagne,
  painNordique,
  
  // Desserts individuels
  eclairChocolat,
  tarteCitron,
  royalChocolat,
  religieuseChocolat,
  
  // Desserts sur commande
  galetteRois,
  parisBrest,
} as const;
