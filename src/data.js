import product1 from "./assets/products/product1.jpg";
import product2 from "./assets/products/product2.jpg";
import product3 from "./assets/products/product image(8).png";
import product4 from "./assets/products/product image(9).png";
import product5 from "./assets/products/product image(10).png";
import product6 from "./assets/products/product image(7).png";
import product7 from "./assets/products/product image(6).png";
import product8 from "./assets/products/product image(5).png";
import product9 from "./assets/products/product image(4).png";
import product10 from "./assets/products/product image(2).png";
import product11 from "./assets/products/product image(3).png";

const generalDetails = {
  productDetails: `Beautya's 1st revitalizing serum that concentrates the double power of the Rose de Granville from the stem to the flower to revitalize the skin twice as fast (1) and visibly rejuvenate.
Created after 20 years of research, the 10,000 (2) micro-pearls rich in revitalizing rose micro-nutrients are now completed by the power of the Rose sap. The next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum is twice as concentrated,(4) combining the nourishing richness of an oil with the deep penetration of a serum.

From the first application of the serum, the skin appears plumped. In 3 weeks, 2x improvement in the look or feel of skin elasticity.(5) With regular use, skin looks and feels transformed.

As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced.

Reveal your extraordinary beauty with Beautya Prestige.

(1) Instrumental test, 32 panelists, after 30 min.
(2) In a 30 ml bottle.
(3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard. Water percentage included. The remaining 8% of ingredients contribute to the formula’s performance, sensory appeal and stability.
(4) In Rose de Granville micro-nutrients compared to the previous formula.
(5) Clinical assessment by a dermatologist on the evolution of the product’s performance on the skin elasticity, comparison between the effect after 7 days and 28 days on 34 women.`,
  ingredients: `AQUA/WATER/EAU, C12-15 ALKYL BENZOATE, GLYCERYL STEARATE SE, BUTYLENE GLYCOL, GLYCERIN, OLUS OIL/VEGETABLE OIL/HUILE VÉGÉTALE, ISONONYL ISONONANOATE, CETYL ALCOHOL, ETHYLHEXYL PALMITATE, CYCLOPENTASILOXANE, DIMETHICONE, POLYESTER-7, PHENOXYETHANOL, NEOPENTYL GLYCOL DIHEPTANOATE, BUTYROSPERMUM PARKII (SHEA) BUTTER, STEARETH-21, AVENA SATIVA (OAT) KERNEL EXTRACT, CARBOMER, DIMETHICONOL, POTASSIUM CETYL PHOSPHATE, CHLORPHENESIN, CAPRYLYL GLYCOL, XANTHAN GUM, HYDROLYZED VIOLA TRICOLOR EXTRACT, ALLANTOIN, ALOE BARBADENSIS (ALOE VERA) LEAF JUICE, DISODIUM EDTA, TOCOPHERYL ACETATE, CAMELLIA OLEIFERA SEED OIL, ROSA CANINA FRUIT OIL, ROSA DAMASCENA (ROSE) EXTRACT, SODIUM HYDROXIDE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, MICHELIA ALBA LEAF OIL, SODIUM LACTATE, COCO-GLUCOSIDE, PEG-8, ETHYLHEXYLGLYCERIN, SODIUM HYALURONATE, TOCOPHEROL, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-1, ASCORBYL PALMITATE, PLUMERIA RUBRA FLOWER EXTRACT, ASCORBIC ACID, CITRIC ACID, NICOTIANA SYLVESTRIS LEAF CELL CULTURE, LINALOOL, CITRONELLOL, GERANIOL.`,
  apply: `step 1: Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.
step 2: Use gentle pressure to make the serum penetrate deeply.
step 3: Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.`,

  advanceInformation: `OVER 11 AWARDS WON!
BIONYMPH PEPTIDE: peptide blend that helps to condition for smoother, plumper looking skin
VITAMINS C & E: work in harmony to BRIGHTEN the look of your complexion and EVEN the appearance of the skin tone
ROSEHIP OIL: helps revitalise and balance the look of skin
HYALURONIC ACID: helps keep skin hydrated for up to 24 hours
FRANGIPANI FLOWER EXTRACT: a floral extract with moisturising benefits
CAMELLIA OIL: hydrates and nourishes the skin for a dewy-looking complexion
ALOE VERA: calming, smoothing, moisturising properties
SHEA BUTTER: Nourishes and softens`,
  specification: `Product Code-46000701 Key Ingredients-Hyaluronic Acid, Vitamin C Beauty Effect-Brightening Brand-Estée Lauder Type-Serums Volume-30ml`,
};

const products = [
  {
    id: 1,
    src: product1,
    tags: ["best-sell"],
    title: "Beautya  La Mousse Off/On Foaming Cleaner",
    description:
      "Anti-Pollution Foaming Cleanser with Purifying French Water Lily",
    price: "$65.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 2,
    src: product2,
    tags: ["best-sell"],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$520.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 3,
    src: product3,
    tags: [""],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$520.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 4,
    src: product4,
    tags: ["best-sell"],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$520.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 5,
    src: product5,
    tags: [""],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$320.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 6,
    src: product6,
    tags: [""],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$65.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 7,
    src: product7,
    tags: [""],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$700.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 8,
    src: product8,
    tags: ["best-sell"],
    title: "Beautya Prestige la Mousse Micellaire",
    description:
      "Anti-Pollution Foaming Cleanser with Purifying French Water Lily",
    price: "$250.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 9,
    src: product9,
    tags: ["best-sell"],
    title: "Beautya  La Mousse Off/On Foaming Cleaner",
    description:
      "Anti-Pollution Foaming Cleanser with Purifying French Water Lily",
    price: "$120.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
  {
    id: 10,
    src: product10,
    tags: [""],
    title: "Beautya Prestige la Mousse Micellaire",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "$75.00",
    cetegory: "women-skincare",

    ...generalDetails,
  },
  {
    id: 11,
    src: product11,
    tags: ["best-sell"],
    title: "Beautya  La Mousse Off/On Foaming Cleaner",
    description:
      "Anti-Pollution Foaming Cleanser with Purifying French Water Lily",
    price: "$220.00",
    cetegory: "women-skincare",
    ...generalDetails,
  },
];
export default products;
