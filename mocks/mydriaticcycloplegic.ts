import { Medication } from '@/types/medication';

// Mydriatic-Cycloplegic medications
const mydriaticcycloplegicMedications: Medication[] = [
  {
    id: 'MC1',
    name: 'Atropina 1% Farmigea',
    activeIngredient: 'Atropina solfato',
    concentration: '1%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Anticolinergico potente che blocca i recettori muscarinici, causando midriasi e cicloplegia prolungate.',
    dosage: 'Una goccia nell\'occhio(i) interessato 1-2 volte al giorno. Per cicloplegia in bambini: una goccia 2 volte al giorno per 1-3 giorni prima dell\'esame.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, confusione (specialmente negli anziani), ritenzione urinaria.',
    contraindications: 'Glaucoma ad angolo chiuso o predisposizione, bambini molto piccoli o con precedenti reazioni avverse agli anticolinergici.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 9.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC2',
    name: 'Ciclolux',
    activeIngredient: 'Ciclopentolato cloridrato',
    concentration: '1%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Anticolinergico di media potenza che blocca i recettori muscarinici, causando midriasi e cicloplegia di durata intermedia.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5-10 minuti se necessario. L\'effetto massimo si ottiene dopo 30-60 minuti e dura 24 ore.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, confusione (specialmente negli anziani).',
    contraindications: 'Glaucoma ad angolo chiuso o predisposizione, bambini molto piccoli o con precedenti reazioni avverse agli anticolinergici.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 10.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC3',
    name: 'Dropilton 2%',
    activeIngredient: 'Tropicamide',
    concentration: '2%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Anticolinergico di breve durata che blocca i recettori muscarinici, causando midriasi e cicloplegia di breve durata.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5 minuti se necessario. L\'effetto massimo si ottiene dopo 20-40 minuti e dura 4-6 ore.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, confusione (specialmente negli anziani).',
    contraindications: 'Glaucoma ad angolo chiuso o predisposizione, bambini molto piccoli o con precedenti reazioni avverse agli anticolinergici.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 11.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC4',
    name: 'Ascotodin',
    activeIngredient: 'Fenilefrina cloridrato',
    concentration: '10%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'sympathomimetics',
    description: 'Simpaticomimetico che stimola i recettori alfa-adrenergici, causando midriasi senza cicloplegia significativa.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5-10 minuti se necessario. L\'effetto massimo si ottiene dopo 15-30 minuti e dura 2-3 ore.',
    sideEffects: 'Bruciore transitorio, iperemia reattiva, aumento della pressione intraoculare, ipertensione arteriosa, tachicardia, aritmie.',
    contraindications: 'Glaucoma ad angolo chiuso, malattie cardiovascolari gravi, ipertensione arteriosa non controllata, ipertiroidismo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 9.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC5',
    name: 'Fortinol',
    activeIngredient: 'Fenilefrina cloridrato/Tropicamide',
    concentration: '10%/0.5%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'combined-mydriatic',
    description: 'Combinazione di un simpaticomimetico e un anticolinergico per ottenere una midriasi rapida e completa per esami diagnostici.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5 minuti se necessario. L\'effetto massimo si ottiene dopo 20-40 minuti.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, ipertensione arteriosa, aritmie.',
    contraindications: 'Glaucoma ad angolo chiuso, malattie cardiovascolari gravi, ipertensione arteriosa non controllata, ipertiroidismo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC6',
    name: 'Benoxinato Cloridrato Intes',
    activeIngredient: 'Oxibuprocaina cloridrato',
    concentration: '0.4%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anesthetics',
    description: 'Anestetico locale per uso oftalmico che blocca reversibilmente la conduzione nervosa, utilizzato per procedure diagnostiche e chirurgiche minori.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato prima della procedura. L\'effetto anestetico inizia dopo 20-30 secondi e dura 15-20 minuti.',
    sideEffects: 'Bruciore transitorio, iperemia congiuntivale, cheratite puntata superficiale, ritardo nella guarigione delle ferite corneali.',
    contraindications: 'Ipersensibilità all\'oxibuprocaina o ad altri anestetici locali di tipo estere, erosioni corneali estese.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Intes',
    price: {
      amount: 8.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC7',
    name: 'Mydrane',
    activeIngredient: 'Tropicamide/Fenilefrina cloridrato/Lidocaina cloridrato',
    concentration: '0.2%/0.31%/1%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'combined-mydriatic',
    description: 'Combinazione di due midriatici (tropicamide e fenilefrina) e un anestetico locale (lidocaina) per uso intracamerale durante la chirurgia della cataratta.',
    dosage: 'Somministrazione intracamerale di 0.2 ml della soluzione all\'inizio dell\'intervento chirurgico di cataratta.',
    sideEffects: 'Edema corneale, iperemia congiuntivale, aumento della pressione intraoculare, ipertensione arteriosa, tachicardia.',
    contraindications: 'Glaucoma ad angolo chiuso, malattie cardiovascolari gravi, ipertensione arteriosa non controllata, ipertiroidismo, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    characteristics: ['intracamerale'],
    requiresPrescription: true,
    manufacturer: 'Thea',
    price: {
      amount: 25.60,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC8',
    name: 'Tropimil',
    activeIngredient: 'Tropicamide',
    concentration: '1%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Anticolinergico di breve durata che blocca i recettori muscarinici, causando midriasi e cicloplegia di breve durata per esami diagnostici.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5 minuti se necessario. L\'effetto massimo si ottiene dopo 20-40 minuti e dura 4-6 ore.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, confusione (specialmente negli anziani).',
    contraindications: 'Glaucoma ad angolo chiuso o predisposizione, bambini molto piccoli o con precedenti reazioni avverse agli anticolinergici.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 10.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC9',
    name: 'Irireact – Collirio',
    activeIngredient: 'Fenilefrina cloridrato',
    concentration: '5%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'sympathomimetics',
    description: 'Simpaticomimetico che stimola i recettori alfa-adrenergici, causando midriasi senza cicloplegia significativa per esami diagnostici.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5-10 minuti se necessario. L\'effetto massimo si ottiene dopo 15-30 minuti e dura 2-3 ore.',
    sideEffects: 'Bruciore transitorio, iperemia reattiva, aumento della pressione intraoculare, ipertensione arteriosa, tachicardia, aritmie.',
    contraindications: 'Glaucoma ad angolo chiuso, malattie cardiovascolari gravi, ipertensione arteriosa non controllata, ipertiroidismo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Sooft',
    price: {
      amount: 9.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC10',
    name: 'Mydriasert',
    activeIngredient: 'Fenilefrina cloridrato/Tropicamide',
    concentration: '5.4 mg/0.28 mg',
    category: 'mydriatic-cycloplegic',
    subcategory: 'combined-mydriatic',
    description: 'Inserto oftalmico a rilascio controllato contenente fenilefrina e tropicamide per ottenere una midriasi preoperatoria prolungata.',
    dosage: 'Posizionare un inserto nel fornice congiuntivale inferiore 1 ora prima dell\'intervento chirurgico. Rimuovere l\'inserto al termine della procedura.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, ipertensione arteriosa, aritmie, irritazione congiuntivale.',
    contraindications: 'Glaucoma ad angolo chiuso, malattie cardiovascolari gravi, ipertensione arteriosa non controllata, ipertiroidismo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    characteristics: ['inserto oftalmico'],
    requiresPrescription: true,
    manufacturer: 'Thea',
    price: {
      amount: 28.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC11',
    name: 'Visumidriatic',
    activeIngredient: 'Tropicamide',
    concentration: '0.5%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Anticolinergico di breve durata che blocca i recettori muscarinici, causando midriasi e cicloplegia di breve durata per esami diagnostici.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5 minuti se necessario. L\'effetto massimo si ottiene dopo 20-40 minuti e dura 4-6 ore.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, confusione (specialmente negli anziani).',
    contraindications: 'Glaucoma ad angolo chiuso o predisposizione, bambini molto piccoli o con precedenti reazioni avverse agli anticolinergici.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 10.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC12',
    name: 'Visumidriatic Fenilefrina',
    activeIngredient: 'Fenilefrina cloridrato',
    concentration: '10%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'sympathomimetics',
    description: 'Simpaticomimetico che stimola i recettori alfa-adrenergici, causando midriasi senza cicloplegia significativa per esami diagnostici.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5-10 minuti se necessario. L\'effetto massimo si ottiene dopo 15-30 minuti e dura 2-3 ore.',
    sideEffects: 'Bruciore transitorio, iperemia reattiva, aumento della pressione intraoculare, ipertensione arteriosa, tachicardia, aritmie.',
    contraindications: 'Glaucoma ad angolo chiuso, malattie cardiovascolari gravi, ipertensione arteriosa non controllata, ipertiroidismo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 10.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC13',
    name: 'Plegik',
    activeIngredient: 'Ciclopentolato cloridrato',
    concentration: '0.5%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Anticolinergico di media potenza che blocca i recettori muscarinici, causando midriasi e cicloplegia di durata intermedia, particolarmente indicato per i bambini.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5-10 minuti se necessario. L\'effetto massimo si ottiene dopo 30-60 minuti e dura 24 ore.',
    sideEffects: 'Fotofobia, visione offuscata, secchezza delle fauci, tachicardia, confusione (specialmente negli anziani).',
    contraindications: 'Glaucoma ad angolo chiuso o predisposizione, bambini molto piccoli o con precedenti reazioni avverse agli anticolinergici.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Sooft',
    price: {
      amount: 10.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'MC14',
    name: 'Trazyl',
    activeIngredient: 'Ibopamina',
    concentration: '2%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'sympathomimetics',
    description: 'Simpaticomimetico che stimola i recettori dopaminergici, causando midriasi senza cicloplegia e aumentando la produzione di umor acqueo, utile nella diagnosi di glaucoma.',
    dosage: 'Una goccia nell\'occhio(i) interessato, ripetere dopo 5 minuti. Misurare la pressione intraoculare dopo 45 minuti per il test provocativo.',
    sideEffects: 'Bruciore transitorio, iperemia congiuntivale, aumento della pressione intraoculare (effetto desiderato nel test provocativo).',
    contraindications: 'Glaucoma ad angolo chiuso, ipersensibilità all\'ibopamina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Sooft',
    price: {
      amount: 11.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  }
];

export default mydriaticcycloplegicMedications;