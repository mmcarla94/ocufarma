import { Medication } from '@/types/medication';

// Antiseptic medications
const antisepticMedications: Medication[] = [
  {
    id: 'AS1',
    name: 'Antisettico Astringente Sedativo',
    activeIngredient: 'Acido borico/Zinco solfato/Acqua di rose',
    concentration: '1.5%/0.25%/25%',
    category: 'antiseptic',
    subcategory: 'other-antiseptics',
    description: 'Combinazione di antisettici e astringenti per il trattamento di irritazioni congiuntivali lievi e secrezioni.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 2-3 volte al giorno.',
    sideEffects: 'Lieve bruciore transitorio, irritazione oculare.',
    contraindications: 'Ipersensibilità ai componenti della formulazione, lesioni corneali.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 8.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS2',
    name: 'Brumeton Colloidale',
    activeIngredient: 'Argento proteinato',
    concentration: '1%',
    category: 'antiseptic',
    subcategory: 'other-antiseptics',
    description: 'Antisettico a base di argento con azione battericida e astringente per infezioni congiuntivali lievi.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 2-3 volte al giorno.',
    sideEffects: 'Bruciore transitorio, irritazione oculare, colorazione scura della congiuntiva (argiria).',
    contraindications: 'Ipersensibilità ai componenti della formulazione, lesioni corneali.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Bruschettini',
    price: {
      amount: 9.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS3',
    name: 'Eustamyl',
    activeIngredient: 'Benzalconio cloruro/Acido borico',
    concentration: '0.01%/1.5%',
    category: 'antiseptic',
    subcategory: 'other-antiseptics',
    description: 'Combinazione di antisettici per il trattamento di irritazioni congiuntivali lievi e secrezioni.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 2-3 volte al giorno.',
    sideEffects: 'Bruciore transitorio, irritazione oculare, reazioni allergiche al benzalconio cloruro.',
    contraindications: 'Ipersensibilità ai componenti della formulazione, lesioni corneali.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 8.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS4',
    name: 'Bysabel',
    activeIngredient: 'Iodopovidone',
    concentration: '0.6%',
    category: 'antiseptic',
    subcategory: 'povidone-iodine',
    description: 'Antisettico ad ampio spettro a base di iodio per la disinfezione pre-operatoria e il trattamento di infezioni congiuntivali.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 4 volte al giorno per 7 giorni.',
    sideEffects: 'Bruciore transitorio, irritazione oculare, colorazione temporanea della congiuntiva, reazioni allergiche.',
    contraindications: 'Ipersensibilità allo iodio o a qualsiasi componente della formulazione, patologie tiroidee.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 10.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS5',
    name: 'Dacriogel',
    activeIngredient: 'Clorexidina digluconato',
    concentration: '0.02%',
    category: 'antiseptic',
    subcategory: 'chlorhexidine',
    description: 'Antisettico ad ampio spettro per la disinfezione delle palpebre e del bordo palpebrale in caso di blefariti.',
    dosage: 'Applicare una piccola quantità di gel sul bordo palpebrale 1-2 volte al giorno, preferibilmente la sera.',
    sideEffects: 'Bruciore transitorio, irritazione cutanea, reazioni allergiche.',
    contraindications: 'Ipersensibilità alla clorexidina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/5/3055-large_default.jpg',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Thea',
    price: {
      amount: 11.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS6',
    name: 'Oftasteril',
    activeIngredient: 'Benzalconio cloruro',
    concentration: '0.01%',
    category: 'antiseptic',
    subcategory: 'quaternary-ammonium',
    description: 'Antisettico a base di benzalconio cloruro per la disinfezione della superficie oculare e la prevenzione di infezioni.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 3-4 volte al giorno.',
    sideEffects: 'Bruciore transitorio, irritazione oculare, reazioni allergiche al benzalconio cloruro.',
    contraindications: 'Ipersensibilità al benzalconio cloruro o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'S.I.F.I.',
    price: {
      amount: 9.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS7',
    name: 'Di Mill',
    activeIngredient: 'Cetrimide/Clorexidina digluconato',
    concentration: '0.5%/0.05%',
    category: 'antiseptic',
    subcategory: 'chlorhexidine',
    description: 'Disinfettante per uso oftalmico a base di cetrimide e clorexidina per la disinfezione della superficie oculare e degli annessi.',
    dosage: 'Applicare una piccola quantità sulla zona interessata 2-3 volte al giorno.',
    sideEffects: 'Bruciore transitorio, irritazione cutanea, reazioni allergiche.',
    contraindications: 'Ipersensibilità alla clorexidina, al cetrimide o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/5/3055-large_default.jpg',
    characteristics: ['disinfettante'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 10.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AS8',
    name: 'Zincometil',
    activeIngredient: 'Zinco solfato/Benzalconio cloruro',
    concentration: '0.25%/0.01%',
    category: 'antiseptic',
    subcategory: 'other-antiseptics',
    description: 'Combinazione di zinco solfato con proprietà astringenti e benzalconio cloruro con azione antisettica per il trattamento di irritazioni congiuntivali e secrezioni.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 2-3 volte al giorno.',
    sideEffects: 'Bruciore transitorio, irritazione oculare, reazioni allergiche al benzalconio cloruro.',
    contraindications: 'Ipersensibilità allo zinco, al benzalconio cloruro o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 8.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  }
];

export default antisepticMedications;