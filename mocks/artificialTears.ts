// Artificial Tears
const artificialTears: Medication[] = [
  {
    id: '11',
    name: 'Systane Ultra',
    activeIngredient: 'Polietilenglicole 400, Propilenglicole',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante che idrata e protegge la superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/8/3068-large_default.jpg',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '12',
    name: 'Refresh Tears',
    activeIngredient: 'Carbossimetilcellulosa sodica',
    concentration: '0.5%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante che allevia gli occhi secchi e irritati.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Irritazione oculare, iperemia, alterazioni della visione.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/9/3069-large_default.jpg',
    characteristics: ['single-dose'],
    requiresPrescription: false,
    manufacturer: 'Allergan',
    price: {
      amount: 12.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '31',
    name: 'Systane Balance',
    activeIngredient: 'Propilenglicole, Olio minerale',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Collirio lubrificante con componente lipidica per ripristinare lo strato lipidico del film lacrimale.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/0/3070-large_default.jpg',
    characteristics: ['preservative-free', 'gel'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA',
      url: 'https://www.igeasanitaria.com/systane-balance-collirio-10ml'
    }
  },
  {
    id: '32',
    name: 'Optive Advanced',
    activeIngredient: 'Carbossimetilcellulosa sodica, Glicerina, Polisorbato 80',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio lubrificante con formula avanzata con osmoprotettori per idratare e proteggere la superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/1/3071-large_default.jpg',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Allergan',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '33',
    name: 'Hyabak',
    activeIngredient: 'Ialuronato di sodio',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante senza conservanti con ialuronato di sodio per un\'idratazione di lunga durata.',
    dosage: 'Una goccia in ciascun occhio 4-6 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata, lieve bruciore.',
    contraindications: 'Ipersensibilità allo ialuronato di sodio o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/2/3072-large_default.jpg',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Thea Pharmaceuticals',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA',
      url: 'https://www.igeasanitaria.com/hyabak-collirio-10ml'
    }
  },
  
  // Nuove lacrime artificiali
  {
    id: '101',
    name: 'Systane Idra',
    activeIngredient: 'Acido ialuronico, HP-Guar',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio idratante con acido ialuronico e HP-Guar per un\'alta capacità umettante. Soluzione sterile per bruciore e secchezza oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, lieve irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 15.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '102',
    name: 'Systane Ultra UD',
    activeIngredient: 'HP-Guar, Glicoli',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Fialette monodose con formula Systane Ultra high performance senza conservanti. Ideale per occhi sensibili o portatori di lenti a contatto.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '103',
    name: 'Optive',
    activeIngredient: 'Carbossimetilcellulosa sodica, Glicerina',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Gocce oculari con doppia azione lubrificante e osmo-protettiva. Ideale per occhi secchi da fattori ambientali.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, lieve irritazione.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '104',
    name: 'Optive Fusion',
    activeIngredient: 'Carbossimetilcellulosa, Acido ialuronico',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio con sinergia umettante per lubrificazione e protezione osmotica prolungata. Formula potenziata per occhio secco moderato.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, lieve irritazione.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '105',
    name: 'Optive UD',
    activeIngredient: 'Carbossimetilcellulosa, Glicerina',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Flaconcini monodose di Optive senza conservanti. Ideale per occhi sensibili o uso frequente.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 15.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '106',
    name: 'Refresh Gel Drops',
    activeIngredient: 'Carbossimetilcellulosa ad alta viscosità',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico con effetto lubrificante prolungato. Ideale per secchezza oculare moderata-grave o uso notturno.',
    dosage: 'Una goccia in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '107',
    name: 'Eumill Gocce Rinfrescanti',
    activeIngredient: 'Acque distillate di camomilla, hamamelis ed eufrasia',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Gocce oculari lenitive con estratti vegetali. Effetto rinfrescante per occhi stanchi e arrossati.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Recordati',
    price: {
      amount: 9.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '108',
    name: 'Eumill Protection',
    activeIngredient: 'Acqua distillata di malva, Acido ialuronico',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Gocce oculari lubrificanti per occhi secchi da stress visivi. Ideale per chi lavora al computer.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Recordati',
    price: {
      amount: 10.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '109',
    name: 'Eumill Dry Repair',
    activeIngredient: 'Acido ialuronico reticolato, Urea',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flaconcini monodose per ripristinare la stabilità del film lacrimale in caso di occhio secco severo.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Recordati',
    price: {
      amount: 14.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '110',
    name: 'Afomill Lubrificante',
    activeIngredient: 'Acido ialuronico, Camomilla',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio per occhi secchi con effetto lubrificante e lenitivo. Soluzione isotonica sterile senza fosfati né conservanti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Montefarmaco OTC',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '111',
    name: 'Afomill Anti-arrossamento',
    activeIngredient: 'Acque distillate (eufrasia)',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Gocce oculari per occhi arrossati. Formula lenitiva senza conservanti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Montefarmaco OTC',
    price: {
      amount: 10.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '112',
    name: 'Iridina Hydra Repair',
    activeIngredient: 'Acido ialuronico ad alto peso molecolare, Coenzima Q10',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Gocce oculari idratanti con azione antiossidante oltre che lubrificante. Favorisce la riparazione oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Montefarmaco OTC',
    price: {
      amount: 13.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '113',
    name: 'Iridina Gocce Lubrificanti',
    activeIngredient: 'Acido ialuronico',
    concentration: '0.4%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante senza conservanti per secchezza oculare. Dispositivo medico CE classe IIb.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Montefarmaco OTC',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '114',
    name: 'Tonimer Lubri-Vision Monodose',
    activeIngredient: 'Acido ialuronico, Acqua marina trattata',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Contenitori monodose con soluzione oftalmica sterile per secchezza e irritazione. Senza conservanti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Istituto Ganassini',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '115',
    name: 'Fitostill Plus',
    activeIngredient: 'Acido ialuronico, Estratti di Camomilla, Eufrasia e Hamamelis',
    concentration: '0.16%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Fialette monodose con acido ialuronico ed estratti vegetali. Forma un film protettivo che idrata e lenisce occhi arrossati e stanchi.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Aboca',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '116',
    name: 'Nutrilen Gocce Oculari',
    activeIngredient: 'Acque distillate di mirtillo nero, hamamelis, camomilla, eufrasia, Sodio ialuronato',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Flacone con acque distillate arricchite di sodio ialuronato. Trattamento di stati irritativi e secchezza oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Nutrileya',
    price: {
      amount: 10.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '117',
    name: 'Thealoz Duo',
    activeIngredient: 'Trealosio, Sodio ialuronato',
    concentration: '3%/0.15%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con associazione bioprotettiva e lubrificante per occhio secco moderato-severo. Privo di conservanti.',
    dosage: 'Una goccia in ciascun occhio 4-6 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Laboratoires Théa',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '118',
    name: 'Thealoz Duo Gel',
    activeIngredient: 'Trealosio, Sodio ialuronato, Carbomer',
    concentration: '3%/0.15%/0.25%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Monodosi gelificati con trealosio, sodio ialuronato e carbomer. Gel notte per protezione prolungata.',
    dosage: 'Una goccia in ciascun occhio prima di coricarsi.',
    sideEffects: 'Visione temporaneamente offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose', 'gel'],
    requiresPrescription: false,
    manufacturer: 'Laboratoires Théa',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '119',
    name: 'VitA-POS',
    activeIngredient: 'Vitamina A (retinolo palmitato)',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Unguento oftalmico con vitamina A in base grassa per lubrificazione notturna. Senza acqua, ideale per uso notturno.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore prima di coricarsi.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['ointment'],
    requiresPrescription: false,
    manufacturer: 'Laboratoires Théa',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '120',
    name: 'Hylo-Comod',
    activeIngredient: 'Sodio ialuronato',
    concentration: '0.1%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Flacone con soluzione sterile senza conservanti né fosfati. Idratazione di lunga durata con sistema COMOD.',
    dosage: 'Una goccia in ciascun occhio 3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Ursapharm',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '121',
    name: 'Hylo-Care',
    activeIngredient: 'Sodio ialuronato, Dexpantenolo',
    concentration: '0.1%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con sodio ialuronato e dexpantenolo (pro-vitamina B5). Favorisce idratazione e riparazione dell\'epitelio corneale.',
    dosage: 'Una goccia in ciascun occhio 3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Ursapharm',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '122',
    name: 'Hylo-Gel',
    activeIngredient: 'Sodio ialuronato',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Flacone con sodio ialuronato ad alta viscosità per occhio secco grave. Fluido viscoelastico senza conservanti.',
    dosage: 'Una goccia in ciascun occhio 3 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'gel'],
    requiresPrescription: false,
    manufacturer: 'Ursapharm',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '123',
    name: 'Hylo Dual',
    activeIngredient: 'Sodio ialuronato, Ectoin',
    concentration: '0.5%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con sodio ialuronato e ectoin. Indicato in secchezza oculare associata ad allergia, stabilizza il film lacrimale.',
    dosage: 'Una goccia in ciascun occhio 3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Ursapharm',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '124',
    name: 'Hyalistil',
    activeIngredient: 'Sodio ialuronato',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio con sodio ialuronato. Lubrificante viscoelastico classico disponibile in fiale o flacone.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '125',
    name: 'Hyalistil Bio PF',
    activeIngredient: 'Sodio ialuronato, Aminoacidi (glicina, prolina, lisina)',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone "preservative free" con sodio ialuronato e aminoacidi. Soluzione umettante a media viscosità, senza conservanti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '126',
    name: 'Xiloial',
    activeIngredient: 'Acido ialuronico, Polisaccaride di Tamarindo',
    concentration: '0.2%/0.2%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con acido ialuronico e polisaccaride di Tamarindo. Azione lubrificante e muco-mimetica grazie al TSP, utile in caso di instabilità del film lacrimale.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '127',
    name: 'Xiloial Mono',
    activeIngredient: 'Acido ialuronico, Polisaccaride di Tamarindo',
    concentration: '0.2%/0.2%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Fialette monodose con acido ialuronico e polisaccaride di Tamarindo. Senza conservanti, ideale per occhi sensibili.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '128',
    name: 'Lubristil',
    activeIngredient: 'Sodio ialuronato',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione isotonica sterile lubrificante, disponibile in flacone o monodose. Adatta anche per lenti a contatto.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '129',
    name: 'Lubristil Gel',
    activeIngredient: 'Sodio ialuronato',
    concentration: '0.30%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Flacone con sodio ialuronato ad alta concentrazione. Formulazione gelificata per un effetto più denso e prolungato.',
    dosage: 'Una goccia in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '130',
    name: 'Siccafluid',
    activeIngredient: 'Carbomer',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico in tubo che aumenta la viscosità delle lacrime. Indicato per uso notturno in caso di secchezza grave.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore prima di coricarsi.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '131',
    name: 'Lacrigel',
    activeIngredient: 'Carbomer',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico mucoadesivo che prolunga l\'idratazione in caso di flusso lacrimale ridotto.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-4 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Bruschettini',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '132',
    name: 'Dropyal',
    activeIngredient: 'Idrossipropilmetilcellulosa (HPMC)',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Sostituto lacrimale classico viscoso, senza conservanti. Collirio con HPMC e sali.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Bruschettini',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '133',
    name: 'Iridium Polidose',
    activeIngredient: 'Ipromellosa (HPMC)',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Flacone con ipromellosa e sali bilanciati. Sostituto lacrimale utile per proteggere la cornea e ridurre bruciore e prurito.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 10.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '134',
    name: 'Iridium A',
    activeIngredient: 'Acido ialuronico, Aminoacidi, Aloe vera',
    concentration: '0.16%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flaconcini monodose con acido ialuronico, aminoacidi e Aloe vera. Sostituto lacrimale sterile per proteggere la cornea, indicato anche per lenti a contatto.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '135',
    name: 'Xantoftyal',
    activeIngredient: 'Polisaccaride di Tamarindo',
    concentration: '0.5%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con polisaccaride di Tamarindo estratto dai semi di Tamarindus indica. Proprietà muco-mimetiche, idratante per superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '136',
    name: 'Oftaial Plus',
    activeIngredient: 'Ipromellosa (HPMC), Aminoacidi, Liposomi, Vitamina A/E',
    concentration: '0.3%',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Fiale monodose con ipromellosa, aminoacidi, liposomi e vitamine A/E. Stabilizza lo strato lipidico del film lacrimale.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Alfa Intes',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '137',
    name: 'Oftaial',
    activeIngredient: 'Ipromellosa (HPMC)',
    concentration: '0.3%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio con ipromellosa. Possiede effetto lubrificante prolungato.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Alfa Intes',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '138',
    name: 'OMK1',
    activeIngredient: 'N-acetil-carnosina, Glicerina',
    concentration: '1%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con N-acetil-carnosina (dipeptide ad azione antiossidante) e glicerina. Indicato per secchezza associata a stress ossidativo, ad es. in soggetti maturi.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Omikron Italia',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '139',
    name: 'OMK2',
    activeIngredient: 'N-acetil-carnosina, Acido lipoico, Taurina',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con N-acetil-carnosina, acido lipoico e taurina. Formula avanzata per occhio secco severo e protezione dal danno ossidativo corneale.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Omikron Italia',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '140',
    name: 'Artelac Splash',
    activeIngredient: 'Acido ialuronico',
    concentration: '0.24%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Flacone con acido ialuronico senza conservanti. Sollievo immediato per occhi secchi.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '141',
    name: 'Artelac Reactive',
    activeIngredient: 'Acido ialuronico, Ectoina',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con acido ialuronico ed ectoina. Soluzione oftalmica indicata per occhi secchi reattivi, protettiva cellulare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '142',
    name: 'Artelac Rebalance',
    activeIngredient: 'Acido ialuronico, Vitamina B12',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con acido ialuronico, vitamina B12 e sali. Leggermente viscoso e dal colore rosato, per lubrificazione e nutrizione della superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '143',
    name: 'Artelac Nighttime Gel',
    activeIngredient: 'Carbomer, Trigliceridi mediani',
    concentration: '0.25%',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Gel notte che combina un polimero idrofilo e componenti lipidici per trattenere l\'idratazione durante il sonno.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore prima di coricarsi.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '144',
    name: 'Recugel',
    activeIngredient: 'Dexpantenolo',
    concentration: '5%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel idratante e rigenerante corneale. Ottimo come complemento notturno per occhi secchi.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-3 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '145',
    name: 'Cationorm',
    activeIngredient: 'Oli minerali in nanoparticelle',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Emulsione oftalmica cationica per stabilizzare lo strato lipidico. Indicato per occhio secco evaporativo.',
    dosage: 'Una goccia in ciascun occhio 4 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Santen/Théa',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '146',
    name: 'Lipimed',
    activeIngredient: 'Glicerina, Oli (castoroil), Lecitina',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Collirio con emulsione tripla per reintegrare lipidi. Indicato per occhio secco evaporativo.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Santen/Théa',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '147',
    name: 'Ozodrop',
    activeIngredient: 'Olio vegetale ozonizzato, Idrossietilcellulosa',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con olio vegetale ozonizzato e idrossietilcellulosa. Azione lubrificante e antibatterica grazie all\'olio ozonizzato, ideale post-chirurgia o blefariti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'FB Vision',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '148',
    name: 'VisuXL',
    activeIngredient: 'Acido ialuronico cross-linkato, Coenzima Q10',
    concentration: '0.1%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Flacone con acido ialuronico cross-linkato e coenzima Q10. La reticolazione dell\'HA aumenta la permanenza, mentre CoQ10 protegge l\'epitelio.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Visufarma',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '149',
    name: 'VisuXL Gel',
    activeIngredient: 'Acido ialuronico cross-linkato, Coenzima Q10',
    concentration: '0.3%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel fluido ad altissima idratazione e attività protettiva, per secchezza grave. Contiene HA cross-linkato e coenzima Q10.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'gel'],
    requiresPrescription: false,
    manufacturer: 'Visufarma',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '150',
    name: 'Blink Contacts',
    activeIngredient: 'Acido ialuronico',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio specifico per portatori di lenti a contatto. Idrata e lubrifica senza danneggiare le lenti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità, anche con lenti indossate.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Johnson & Johnson',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '151',
    name: 'Blink Intensive Tears',
    activeIngredient: 'Acido ialuronico, Polimeri',
    concentration: '0.20%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio con acido ialuronico e polimeri per idratazione intensa. Flacone senza conservanti con sistema OSD.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Johnson & Johnson',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '152',
    name: 'Ocutears Hydro+',
    activeIngredient: 'Acido ialuronico cross-linkato',
    concentration: '0.4%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico cross-linkato ad alta concentrazione. Lunga permanenza sulla superficie oculare.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Medivis',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '153',
    name: 'Renova LIPO',
    activeIngredient: 'Acido ialuronico, Componenti lipidiche, L-carnitina',
    concentration: '0.4%',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Collirio con acido ialuronico, componenti lipidiche e L-carnitina. Soluzione umettante per forme medio-gravi di occhio secco, senza conservanti.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Medivis',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '154',
    name: 'Lacrisek Ofta',
    activeIngredient: 'Liposomi, Vitamina A, Vitamina E',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Collirio con liposomi e vitamine A ed E per stabilizzare lo strato lipidico. Disponibile in flacone o monodose.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '155',
    name: 'Icross',
    activeIngredient: 'Acido ialuronico cross-linkato',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico cross-linkato. Sostituto lacrimale avanzato, indicato in secchezza severa.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '156',
    name: 'Trium',
    activeIngredient: 'Aminoacidi solforati, Vitamine',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con aminoacidi solforati e vitamine. Stabilizzante della superficie oculare in caso di micro-danno corneale.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '157',
    name: 'Tioretin A Free',
    activeIngredient: 'Taurina, Carnosina, Ginkgo biloba',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio protettivo e antiossidante per occhi secchi in associazione a stress ossidativo.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '158',
    name: 'TheraGel Oftalmico',
    activeIngredient: 'Carbomer, Liposomi',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico lubrificante indicato per secchezza grave con sintomi di affaticamento.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-3 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '159',
    name: 'Elastar',
    activeIngredient: 'Acido ialuronico cross-linkato, Carbossimetil β-glucano',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio senza conservanti che protegge, idrata e lubrifica con tecnologia "elasticizzante" del film lacrimale.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Nuovi prodotti richiesti
  {
    id: '160',
    name: 'Celluvisc - Collirio',
    activeIngredient: 'Carbossimetilcellulosa sodica',
    concentration: '1%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio ad alta viscosità in monodose per secchezza oculare moderata-grave. Forma un film protettivo sulla superficie oculare.',
    dosage: 'Una goccia in ciascun occhio 2-4 volte al giorno.',
    sideEffects: 'Visione temporaneamente offuscata, lieve bruciore all\'instillazione.',
    contraindications: 'Ipersensibilità alla carbossimetilcellulosa o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose', 'high-viscosity'],
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 14.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '161',
    name: 'Collirio Alfa Occhio Secco',
    activeIngredient: 'Acido ialuronico, Aloe vera',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante con acido ialuronico e aloe vera. Idrata e protegge la superficie oculare in caso di secchezza.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Alfa Intes',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '162',
    name: 'Dacriogel',
    activeIngredient: 'Carbomer',
    concentration: '0.3%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico ad alta viscosità per secchezza oculare grave. Offre un\'idratazione prolungata grazie alla sua consistenza.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-3 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità al carbomer o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel', 'high-viscosity'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 13.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '163',
    name: 'Idrastil',
    activeIngredient: 'Acido ialuronico, Aminoacidi',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico e aminoacidi per idratazione e nutrizione della superficie oculare. Indicato per occhio secco da stress visivo.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '164',
    name: 'Lacrilube',
    activeIngredient: 'Paraffina liquida, Lanolina',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Unguento oftalmico a base di paraffina e lanolina. Crea una barriera protettiva lipidica per prevenire l\'evaporazione delle lacrime durante la notte.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore prima di coricarsi.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità alla lanolina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['ointment', 'night-use'],
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '165',
    name: 'Lacrimart',
    activeIngredient: 'Acido ialuronico, Estratti vegetali',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio con acido ialuronico ed estratti vegetali. Idrata e lenisce gli occhi secchi e irritati.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '166',
    name: 'Lacrinorm',
    activeIngredient: 'Carbomer',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico a base di carbomer per secchezza oculare. Forma un film protettivo sulla superficie oculare.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-4 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità al carbomer o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel'],
    requiresPrescription: false,
    manufacturer: 'Farmila-Thea',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '167',
    name: 'Lacrisol',
    activeIngredient: 'Acido ialuronico',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio con acido ialuronico per idratazione della superficie oculare. Indicato per occhio secco lieve-moderato.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Bruschettini',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '168',
    name: 'Lifog',
    activeIngredient: 'Acido ialuronico, Vitamina B12',
    concentration: '0.15%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico e vitamina B12. Idrata e nutre la superficie oculare, con effetto antiossidante.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '169',
    name: 'Lipovisc',
    activeIngredient: 'Carbomer, Liposomi',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Gel oftalmico con carbomer e liposomi. Stabilizza lo strato lipidico del film lacrimale e previene l\'evaporazione.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-3 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel', 'lipid-based'],
    requiresPrescription: false,
    manufacturer: 'Farmila-Thea',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '170',
    name: 'Omkasa',
    activeIngredient: 'Acido ialuronico, Trealosio',
    concentration: '0.15%/3%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico e trealosio. Idrata e protegge la superficie oculare con doppia azione.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Omikron Italia',
    price: {
      amount: 16.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '171',
    name: 'Omkasa Comod',
    activeIngredient: 'Acido ialuronico, Trealosio',
    concentration: '0.15%/3%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico e trealosio in sistema COMOD. Idrata e protegge la superficie oculare senza conservanti.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'COMOD-system'],
    requiresPrescription: false,
    manufacturer: 'Omikron Italia',
    price: {
      amount: 17.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '172',
    name: 'Siccafluid - Gel',
    activeIngredient: 'Carbomer',
    concentration: '0.25%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico ad alta viscosità per secchezza oculare grave. Offre un\'idratazione prolungata grazie alla sua consistenza.',
    dosage: 'Applicare una piccola quantità nel sacco congiuntivale inferiore 1-3 volte al giorno.',
    sideEffects: 'Visione offuscata, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità al carbomer o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel', 'high-viscosity'],
    requiresPrescription: false,
    manufacturer: 'Farmila-Thea',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '173',
    name: 'Umostil',
    activeIngredient: 'Acido ialuronico, Vitamina E',
    concentration: '0.2%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ialuronico e vitamina E. Idrata e protegge la superficie oculare con azione antiossidante.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Medivis',
    price: {
      amount: 14.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '174',
    name: 'Ascotodin',
    activeIngredient: 'Acido ascorbico, Vitamina E',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con acido ascorbico e vitamina E. Azione antiossidante e protettiva per la superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['antioxidant'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '175',
    name: 'Xanterdes',
    activeIngredient: 'Xantano, Acido ialuronico',
    concentration: '0.1%/0.1%',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio con xantano e acido ialuronico. Doppia azione idratante e protettiva per la superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 15.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '176',
    name: 'Xanternet',
    activeIngredient: 'Xantano, Acido ialuronico, Aminoacidi',
    category: 'artificial-tears',
    subcategory: 'high-tech',
    description: 'Collirio riepitelizzante con xantano, acido ialuronico e aminoacidi. Favorisce la riparazione dell\'epitelio corneale.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['epithelial-repair'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 16.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Farmaci speciali nella sottocategoria "others"
  {
    id: '177',
    name: 'Heparin',
    activeIngredient: 'Eparina sodica',
    concentration: '1000 UI/ml',
    category: 'artificial-tears',
    subcategory: 'others',
    description: 'Collirio con eparina sodica ad azione profibrinolitica topica. Indicato per il trattamento di emorragie sottocongiuntivali e intraoculari.',
    dosage: 'Una goccia in ciascun occhio 3-4 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare, bruciore transitorio.',
    contraindications: 'Ipersensibilità all\'eparina o a qualsiasi componente della formulazione, tendenza al sanguinamento, recenti interventi chirurgici oculari.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['fibrinolytic'],
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '178',
    name: 'Oxervate',
    activeIngredient: 'Cenegermin',
    concentration: '20 μg/ml',
    category: 'artificial-tears',
    subcategory: 'others',
    description: 'Collirio con cenegermin, fattore di crescita nervoso umano ricombinante. Indicato per il trattamento della cheratite neurotrofica moderata o grave negli adulti.',
    dosage: 'Una goccia nell\'occhio(i) interessato 6 volte al giorno, a intervalli di 2 ore, per 8 settimane.',
    sideEffects: 'Dolore oculare, infiammazione oculare, aumento della lacrimazione, dolore palpebrale, sensazione di corpo estraneo.',
    contraindications: 'Ipersensibilità al cenegermin o a qualsiasi componente della formulazione, gravidanza, allattamento.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['growth-factor', 'refrigerated-storage'],
    requiresPrescription: true,
    manufacturer: 'Dompé',
    price: {
      amount: 1500.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '179',
    name: 'Systane Ultra Senza Conservanti',
    activeIngredient: 'Polietilenglicole 400, Propilenglicole, Idrossipropil guar',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante senza conservanti che dona sollievo rapido e duraturo dai sintomi dell\'occhio secco.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '180',
    name: 'Systane Idratazione Senza Conservanti',
    activeIngredient: 'Polietilenglicole 400, Propilenglicole, Idrossipropil guar, Sodio ialuronato',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio lubrificante senza conservanti con acido ialuronico per un\'idratazione duratura e un sollievo prolungato dai sintomi dell\'occhio secco.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '181',
    name: 'Systane Complete Senza Conservanti',
    activeIngredient: 'Propilene glicole, Idrossipropil guar, Olio minerale, Trigliceridi a catena media',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Collirio lubrificante senza conservanti con tecnologia nano-emulsione per il trattamento di tutti i tipi di secchezza oculare.',
    dosage: 'Una o due gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '182',
    name: 'Systane Gel Drops',
    activeIngredient: 'Polietilenglicole 400, glicole propilenico, idrossipropil guar, sorbitolo, amminometilpropanolo',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oculare lubrificante con densa formulazione in gel che dona sollievo prolungato dai sintomi dell\'Occhio Secco, adatto anche per il trattamento notturno.',
    dosage: 'Instillare 1 o 2 gocce nell\'occhio/negli occhi interessato/i secondo necessità e aprire e chiudere le palpebre.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['with-preservatives'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 16.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '183',
    name: 'Cellufresh',
    activeIngredient: 'Carbossimetilcellulosa sodica 0,5%, Purite 0,005%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica che allevia la sensazione di secchezza e irritazione oculare causata da polvere, luce intensa, polline, inquinamento e sovraffaticamento. Adatto anche per portatori di lenti a contatto.',
    dosage: 'Instillare 1-2 gocce per occhio fino a 3 volte al giorno.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['with-preservatives'],
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 20.78,
      currency: '€',
      source: 'Meafarma'
    }
  },
  {
    id: '177',
    name: 'Cellumed',
    activeIngredient: 'Carbossimetilcellulosa sodica 1,0%',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Soluzione oftalmica con 35% alta viscosità e 65% media viscosità che dona sollievo in caso di secchezza e stanchezza oculare. Adatto anche per portatori di lenti a contatto.',
    dosage: 'Instillare 1-2 gocce in ciascun occhio, fino a 3 volte al giorno o secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['with-preservatives'],
    requiresPrescription: false,
    manufacturer: 'Allergan/Abbvie',
    price: {
      amount: 22.43,
      currency: '€',
      source: 'Farmaluci'
    }
  },
  {
    id: '184',
    name: 'Biotrue Soluzione Oftalmica',
    activeIngredient: 'Sodio ialuronato 0,24%, sodio cloruro, potassio cloruro, disodio fosfato dodecaidrato, sodio diidrogeno fosfato',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica a base di acido ialuronico che migliora l\'idratazione degli occhi e stabilizza il film lacrimale. Dona sollievo agli occhi secchi, stanchi e irritati.',
    dosage: 'Instillare 1-2 gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['with-preservatives'],
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '185',
    name: 'Hydrabak',
    activeIngredient: 'Cloruro di sodio 0,9%, sodio diidrogeno fosfato diidrato, sodio fosfato dodecaidrato',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica isotonica senza conservanti per la pulizia della superficie oculare da agenti tossici o inquinanti ambientali. Adatta per portatori di lenti a contatto.',
    dosage: 'Instillare 1 goccia da 3 a 4 volte al giorno e fino ad 8 volte al giorno in caso di necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Thea Pharmaceuticals',
    price: {
      amount: 13.57,
      currency: '€',
      source: 'Meditua'
    }
  },
  {
    id: '186',
    name: 'Hylovision Sine',
    activeIngredient: 'Ialuronato di sodio (acido ialuronico)',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio umettante con acido ialuronico per l\'idratazione e la protezione della superficie oculare. Fornisce sollievo dalla sensazione di secchezza e dai sintomi dell\'occhio secco.',
    dosage: 'Instillare 1-2 gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '187',
    name: 'Relys',
    activeIngredient: 'sT-LysYal (aggregato supramolecolare di acido ialuronico, lisina, timina e sodio cloruro)',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica senza conservanti che idrata e lubrifica l\'occhio, alleviando la sensazione di secchezza. Contiene un aggregato supramolecolare di acido ialuronico, lisina, timina e sodio cloruro.',
    dosage: 'Instillare 1-2 gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 16.92,
      currency: '€',
      source: 'Linfafarmacie'
    }
  },
  {
    id: '188',
    name: 'Bluyal A',
    activeIngredient: 'Acido ialuronico sale sodico 0,15%, L-prolina 0,0752%, L-glicina 0,100%, L-lisina cloridrato 0,014%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica isotonica sterile con acido ialuronico sale sodico ed aminoacidi. Sostituto lacrimale per la protezione corneale che favorisce la riparazione dei tessuti epiteliali e mima la composizione del film lacrimale.',
    dosage: 'Instillare 1-2 gocce in ciascun occhio secondo necessità.',
    sideEffects: 'Raramente irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['with-preservatives'],
    requiresPrescription: false,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 12.54,
      currency: '€',
      source: 'Meditua'
    }
  },
  {
    id: '189',
    name: 'Trimix',
    activeIngredient: 'Acido ialuronico sodico 0,20%, trealosio 3%, Vitamina B12 0,05%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Collirio multifunzionale senza conservanti con un complesso di tre principi attivi naturali. L\'acido ialuronico conferisce effetto lubrificante, il trealosio ha proprietà protettive ed idratanti, mentre la vitamina B12 favorisce il ripristino dell\'integrità epiteliale corneale.',
    dosage: 'Una o due gocce in ciascun occhio 2-3 volte al giorno o secondo necessità.',
    sideEffects: 'Raramente irritazione oculare temporanea o visione offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'multifunctional'],
    requiresPrescription: false,
    manufacturer: 'Off Health',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '190',
    name: 'Lacricomplex',
    activeIngredient: 'Acido ialuronico 0,15%, lipotensidi, aminoacidi, vitamine',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Soluzione oftalmica innovativa che associa il potere idratante dell\'acido ialuronico con lipotensidi (componenti lipidici) che stabilizzano lo strato lipidico del film lacrimale. Contiene anche aminoacidi e vitamine che favoriscono i processi metabolici della superficie oculare.',
    dosage: 'Una o due gocce in ciascun occhio 2-3 volte al giorno o secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, lieve irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'lipid-containing'],
    requiresPrescription: false,
    manufacturer: 'FB Vision',
    price: {
      amount: 17.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '191',
    name: 'Optive Plus',
    activeIngredient: 'Carbossimetilcellulosa sodica 0,5%, glicerina 1%, L-Carnitina, eritritolo, lipidi (olio minerale)',
    category: 'artificial-tears',
    subcategory: 'lipidic',
    description: 'Emulsione oftalmica che combina l\'azione lubrificante e idratante di carbossimetilcellulosa e glicerina con componenti lipidici che stabilizzano il film lacrimale. La presenza di L-carnitina ed eritritolo aiuta a proteggere le cellule epiteliali da ipertonicità e stress ossidativo.',
    dosage: 'Una goccia in ciascun occhio secondo necessità.',
    sideEffects: 'Visione temporaneamente offuscata, irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['emulsion', 'lipid-containing'],
    requiresPrescription: false,
    manufacturer: 'Allergan/AbbVie',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '192',
    name: 'Vismed Multi',
    activeIngredient: 'Acido ialuronico sodico 0,18%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica isotonica a base di acido ialuronico per il trattamento dell\'occhio secco. La particolare formulazione assicura un\'elevata bagnabilità della superficie oculare e un\'azione lubrificante prolungata.',
    dosage: 'Una o due gocce in ciascun occhio 3-4 volte al giorno o secondo necessità.',
    sideEffects: 'Raramente lieve irritazione oculare o visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'multi-dose'],
    requiresPrescription: false,
    manufacturer: 'TRB Chemedica',
    price: {
      amount: 16.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
   {
    id: '193',
    name: 'Corneial',
    activeIngredient: 'Acido ialuronico 0,15%, carbomero',
    category: 'artificial-tears',
    subcategory: 'gel-formulations',
    description: 'Gel oftalmico a base di acido ialuronico e carbomero che assicura un\'elevata viscosità e un\'azione protettiva prolungata sulla superficie oculare. Particolarmente indicato per il trattamento dell\'occhio secco moderato-grave e per l\'uso notturno.',
    dosage: 'Una goccia in ciascun occhio 2-3 volte al giorno o secondo necessità. Ideale per l\'applicazione prima di coricarsi.',
    sideEffects: 'Visione temporaneamente offuscata, lieve irritazione oculare.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel', 'high-viscosity'],
    requiresPrescription: false,
    manufacturer: 'Bionativa S.p.A.',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '194',
    name: 'Hyalistil Bio',
    activeIngredient: 'Acido ialuronico 0,2%',
    category: 'artificial-tears',
    subcategory: 'aqueous',
    description: 'Soluzione oftalmica a base di acido ialuronico ad alto peso molecolare che assicura una lubrificazione prolungata della superficie oculare. La formulazione senza conservanti è particolarmente indicata per un uso frequente e prolungato.',
    dosage: 'Una o due gocce in ciascun occhio 3-4 volte al giorno o secondo necessità.',
    sideEffects: 'Raramente lieve irritazione oculare o visione temporaneamente offuscata.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'SIFI S.p.A.',
    price: {
      amount: 16.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
];

export default artificialTears;