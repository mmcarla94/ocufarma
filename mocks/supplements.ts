import { Medication } from '@/types/medication';

// Supplements
const supplements: Medication[] = [
  {
    id: '13',
    name: 'Ocuvite',
    activeIngredient: 'Luteina, Zeaxantina, Omega-3, Vitamina C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi.',
    dosage: 'Una compressa al giorno con un pasto.',
    sideEffects: 'Disturbi gastrointestinali, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/3/3073-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '14',
    name: 'PreserVision AREDS 2',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina C, E, Zinco, Rame',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la degenerazione maculare legata all\'età.',
    dosage: 'Una capsula molle due volte al giorno con i pasti.',
    sideEffects: 'Disturbi gastrointestinali, colorazione gialla della pelle, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, fumo (formulazione con beta-carotene).',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/4/3074-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '34',
    name: 'Vitreoclar',
    activeIngredient: 'Acido ialuronico, Condroitina solfato',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per supportare la salute del vitreo.',
    dosage: 'Una compressa al giorno con un pasto.',
    sideEffects: 'Disturbi gastrointestinali, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/5/3075-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 22.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '35',
    name: 'Neurovis',
    activeIngredient: 'Citicolina, Vitamina B12, Taurina',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con proprietà neuroprotettive per la salute del nervo ottico.',
    dosage: 'Una compressa al giorno con un pasto.',
    sideEffects: 'Disturbi gastrointestinali, mal di testa, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/6/3076-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Omikron Italia',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '36',
    name: 'Lacrifilm',
    activeIngredient: 'Omega-3, Vitamina A, D, E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare per supportare il film lacrimale e la salute della superficie oculare.',
    dosage: 'Una capsula molle al giorno con un pasto.',
    sideEffects: 'Disturbi gastrointestinali, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/7/3077-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Nuovi integratori
  {
    id: '200',
    name: 'Activision',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e il mantenimento della funzione visiva. Contiene antiossidanti specifici per la macula.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali lievi.',
    contraindications: 'Ipersensibilità a uno o più componenti. Non superare la dose giornaliera consigliata.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Novartis',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '201',
    name: 'Alfactiv Oft',
    activeIngredient: 'Acido alfa-lipoico, Vitamina E, Selenio, Zinco',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con potente azione antiossidante per la protezione delle cellule nervose dell\'occhio. Utile in caso di stress ossidativo e per la protezione del nervo ottico.',
    dosage: 'Una capsula al giorno, preferibilmente al mattino con la colazione.',
    sideEffects: 'Occasionalmente disturbi gastrointestinali, nausea.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in gravidanza e allattamento senza consultare il medico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Alfa Intes',
    price: {
      amount: 19.50,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '202',
    name: 'Almega 3',
    activeIngredient: 'Omega-3 (EPA/DHA), Vitamina D3, Vitamina E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare a base di acidi grassi Omega-3 ad alta concentrazione, specificamente formulato per il benessere della superficie oculare e il supporto della funzione lacrimale.',
    dosage: 'Due capsule molli al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '203',
    name: 'Astar 3D',
    activeIngredient: 'Astaxantina, Luteina, Zeaxantina, Mirtillo, Vitamina C, E',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare con formula avanzata per la protezione della macula e il mantenimento della funzione visiva. La combinazione di carotenoidi offre una protezione tridimensionale contro lo stress ossidativo retinico.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, colorazione gialla delle urine.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in gravidanza senza consultare il medico.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Visufarma',
    price: {
      amount: 26.50,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '204',
    name: 'Astenon',
    activeIngredient: 'Vitamina B2, B6, B12, Magnesio, Coenzima Q10',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare specifico per contrastare l\'affaticamento visivo e l\'astenopia. Supporta il metabolismo energetico delle cellule oculari e la funzione del nervo ottico.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, colorazione gialla delle urine.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '205',
    name: 'Astenon Junior',
    activeIngredient: 'DHA, Luteina, Vitamina A, B2, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare formulato specificamente per bambini e adolescenti. Supporta la salute visiva durante la crescita e aiuta a contrastare l\'affaticamento visivo da dispositivi digitali.',
    dosage: 'Una compressa masticabile al giorno, preferibilmente durante la colazione.',
    sideEffects: 'Nessuno rilevante alle dosi consigliate.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '206',
    name: 'AVS Retina',
    activeIngredient: 'Luteina, Zeaxantina, Resveratrolo, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula potenziata con resveratrolo per un\'azione antiossidante sinergica.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in gravidanza senza consultare il medico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'AVS Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '207',
    name: 'Azyr Mega',
    activeIngredient: 'Acido docosaesaenoico (DHA), Vitamina A, E, Zinco, Rame',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare con alta concentrazione di DHA e micronutrienti essenziali per la salute della retina. Particolarmente indicato per la degenerazione maculare legata all\'età.',
    dosage: 'Due capsule molli al giorno durante i pasti principali.',
    sideEffects: 'Occasionalmente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Azyr Pharmaceuticals',
    price: {
      amount: 28.50,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '208',
    name: 'Benoftal',
    activeIngredient: 'Mirtillo nero, Luteina, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per il benessere degli occhi. Contiene estratto di mirtillo nero standardizzato in antocianosidi per migliorare la microcircolazione oculare.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Benfar',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '209',
    name: 'Blue Berry',
    activeIngredient: 'Mirtillo, Luteina, Vitamina A, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare a base di mirtillo e luteina per il benessere degli occhi. Particolarmente indicato per chi trascorre molte ore davanti a schermi digitali.',
    dosage: 'Una compressa al giorno.',
    sideEffects: 'Nessuno rilevante alle dosi consigliate.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'New Nordic',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '210',
    name: 'Boots Pharmaceuticals Vista',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, B2, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata di vitamine, minerali e carotenoidi per il benessere visivo quotidiano.',
    dosage: 'Una compressa al giorno con un pasto.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Boots Pharmaceuticals',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '211',
    name: 'Buonalux',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula avanzata con tre carotenoidi per una protezione completa contro lo stress ossidativo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Buona Farma',
    price: {
      amount: 23.50,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '212',
    name: 'Cataratprev',
    activeIngredient: 'N-acetilcarnosina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare specifico per la salute del cristallino. Contiene N-acetilcarnosina, un dipeptide con proprietà antiossidanti che aiuta a prevenire l\'opacizzazione del cristallino.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftalmedica',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '213',
    name: 'Cebrolux 800',
    activeIngredient: 'Citicolina, Vitamina B12, Acido folico',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con citicolina ad alto dosaggio (800 mg) per la protezione e il supporto del nervo ottico. Indicato in caso di neuropatie ottiche e glaucoma.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Cebrolux Pharma',
    price: {
      amount: 29.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '214',
    name: 'Coqun Combo',
    activeIngredient: 'Coenzima Q10, Vitamina E, Acido alfa-lipoico, Resveratrolo',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con potenti antiossidanti per la protezione delle cellule nervose dell\'occhio. La combinazione di Coenzima Q10 e altri antiossidanti offre una protezione sinergica contro lo stress ossidativo.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Coqun Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '215',
    name: 'Coqun Os',
    activeIngredient: 'Coenzima Q10, Acido alfa-lipoico, Vitamina E, Selenio',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con Coenzima Q10 e antiossidanti per la protezione delle cellule nervose dell\'occhio. Formulazione specifica per il supporto del nervo ottico in caso di stress ossidativo.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Coqun Pharma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '216',
    name: 'Diaberet',
    activeIngredient: 'Acido alfa-lipoico, Mirtillo, Vitamina B1, B2, B6, E, Cromo',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare specifico per la protezione della retina in soggetti diabetici. Formula mirata per contrastare lo stress ossidativo e migliorare la microcircolazione retinica.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia ipoglicemizzante.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Diaberet Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '217',
    name: 'Drusenoff',
    activeIngredient: 'Luteina, Zeaxantina, Resveratrolo, Omega-3, Vitamina C, E, Zinco',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare specifico per la degenerazione maculare legata all\'età con drusen. Formula avanzata per la protezione della macula e il supporto della microcircolazione retinica.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftalmedica',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '218',
    name: 'Drusenoff Evo',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Omega-3, Resveratrolo, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare di nuova generazione per la degenerazione maculare legata all\'età con drusen. Formula potenziata con astaxantina e resveratrolo per una protezione antiossidante avanzata.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftalmedica',
    price: {
      amount: 32.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '219',
    name: 'Equimacula',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Rame',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della macula. Formula bilanciata secondo le più recenti evidenze scientifiche per il supporto della funzione maculare.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Equi Pharma',
    price: {
      amount: 24.50,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '220',
    name: 'Equivitreo',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare specifico per la salute del vitreo. Contiene precursori dei glicosaminoglicani per supportare la struttura e l\'idratazione del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Equi Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '221',
    name: 'Eukom 1000',
    activeIngredient: 'Omega-3 (EPA/DHA 1000 mg), Vitamina E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare con alta concentrazione di acidi grassi Omega-3 (1000 mg per capsula) per il supporto della funzione lacrimale e il benessere della superficie oculare.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Eukom Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '222',
    name: 'Euvision Ofta',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Euvision',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '223',
    name: 'Eu-Visus',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per il benessere degli occhi. Formula completa con antiossidanti e micronutrienti essenziali per la funzione visiva.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Eu-Pharma',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '224',
    name: 'FitoEye',
    activeIngredient: 'Mirtillo, Ginkgo biloba, Luteina, Vitamina A, E',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare a base di estratti vegetali per il benessere degli occhi. La combinazione di mirtillo e ginkgo biloba supporta la microcircolazione oculare.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'FitoMed',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '225',
    name: 'Fitovista',
    activeIngredient: 'Mirtillo, Ginkgo biloba, Luteina, Zeaxantina, Vitamina A, C, E',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo a base di estratti vegetali e nutrienti per la salute degli occhi. Formula avanzata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'FitoMed',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '226',
    name: 'Forvista',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Rame',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare formulato secondo lo studio AREDS per la protezione della retina. Indicato per la degenerazione maculare legata all\'età.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'ForVista Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '227',
    name: 'Fridop',
    activeIngredient: 'Citicolina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare per la protezione del nervo ottico. Indicato in caso di neuropatie ottiche e glaucoma.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Fridop Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '228',
    name: 'Fridop Task',
    activeIngredient: 'Citicolina, Taurina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare avanzato per la protezione del nervo ottico. Formula potenziata con taurina per un\'azione neuroprotettiva completa.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Fridop Pharma',
    price: {
      amount: 28.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '229',
    name: 'Fryal Choco Vision',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi in forma di cioccolatini. Particolarmente indicato per bambini e adolescenti.',
    dosage: 'Un cioccolatino al giorno.',
    sideEffects: 'Nessuno rilevante alle dosi consigliate.',
    contraindications: 'Ipersensibilità ai componenti. Non adatto a soggetti con diabete o intolleranza al lattosio.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Fryal Nutraceuticals',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '230',
    name: 'Glauconerv',
    activeIngredient: 'Citicolina, Coenzima Q10, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare specifico per la protezione del nervo ottico in caso di glaucoma. Formula avanzata con citicolina e coenzima Q10 per un\'azione neuroprotettiva sinergica.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Glauconerv Pharma',
    price: {
      amount: 29.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '231',
    name: 'Hyaluwell Fast',
    activeIngredient: 'Acido ialuronico, Omega-3, Vitamina A, D, E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare per il supporto della superficie oculare. Formula avanzata con acido ialuronico e omega-3 per il benessere del film lacrimale.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Hyaluwell Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '232',
    name: 'Idralux',
    activeIngredient: 'Acido ialuronico, Omega-3, Vitamina A, D, E, Zinco',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare completo per il supporto della superficie oculare. Formula avanzata con acido ialuronico, omega-3 e vitamine per il benessere del film lacrimale.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Idralux Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '233',
    name: 'Intravit',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare specifico per la salute del vitreo. Formula avanzata con precursori dei glicosaminoglicani e antiossidanti per supportare la struttura e l\'idratazione del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Intravit Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '234',
    name: 'Licofor Plus',
    activeIngredient: 'Luteina, Zeaxantina, Licopene, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina. Formula avanzata con licopene, luteina e zeaxantina per una protezione antiossidante completa.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Licofor Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '235',
    name: 'Limone composto',
    activeIngredient: 'Estratto di limone, Mirtillo, Vitamina C, Bioflavonoidi',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare naturale per il benessere degli occhi. Formula a base di estratti vegetali e bioflavonoidi per il supporto della microcircolazione oculare.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Erboristeria Italiana',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '236',
    name: 'LongLife Lutein 6 mg',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi. Formula bilanciata con luteina e zeaxantina per il benessere della retina e della macula.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'LongLife',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '237',
    name: 'LongLife Ocufactors Plus',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula avanzata con antiossidanti e micronutrienti essenziali per la funzione visiva.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'LongLife',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '238',
    name: 'Look at Me',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Look at Me Pharma',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '239',
    name: 'Ludevit',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula bilanciata con luteina e zeaxantina per il benessere visivo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Ludevit Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '240',
    name: 'Lumira',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula potenziata con astaxantina per una protezione antiossidante completa.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Lumira Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '241',
    name: 'Lutegenol',
    activeIngredient: 'Luteina, Zeaxantina, Resveratrolo, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula avanzata con resveratrolo per un\'azione antiossidante sinergica.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Lutegenol Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '242',
    name: 'Lutein Omega3',
    activeIngredient: 'Luteina, Zeaxantina, Omega-3 (EPA/DHA), Vitamina C, E, Zinco',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula completa con omega-3 per un\'azione antiossidante e antinfiammatoria.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Lutein Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '243',
    name: 'Macula360',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Omega-3, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare completo per la protezione a 360° della macula. Formula avanzata con carotenoidi e acidi grassi essenziali per una protezione ottimale.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Macula Pharma',
    price: {
      amount: 28.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '244',
    name: 'Macular B Forte',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina B1, B2, B6, B12, Acido folico, Zinco',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della macula con complesso vitaminico B potenziato. Supporta il metabolismo energetico delle cellule retiniche.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, colorazione gialla delle urine.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Macular Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '245',
    name: 'Mesoxan',
    activeIngredient: 'Xantofille (Luteina, Zeaxantina), Vitamina C, E, Zinco, Rame',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della macula. Formula bilanciata con xantofille e antiossidanti per il benessere della retina.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Mesoxan Pharma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '246',
    name: 'Miodesol',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo e la prevenzione delle miodesopsie (mosche volanti). Supporta la struttura e la trasparenza del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Miodesol Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '247',
    name: 'Miopex',
    activeIngredient: 'DHA, Luteina, Zeaxantina, Vitamina A, B2, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per il supporto della funzione visiva in caso di miopia. Formula specifica per la salute della retina e la protezione dalle radiazioni blu.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Miopex Pharma',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '248',
    name: 'Mioret',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo e la prevenzione delle miodesopsie (mosche volanti). Formula avanzata con precursori dei glicosaminoglicani per supportare la struttura e la trasparenza del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Mioret Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '249',
    name: 'Mirtillo Saluvision',
    activeIngredient: 'Mirtillo nero (25% antocianosidi), Vitamina A, C, E',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare a base di mirtillo nero ad alta concentrazione di antocianosidi. Supporta la microcircolazione oculare e la funzione visiva.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Saluvision',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '250',
    name: 'Mirtilux Capsule',
    activeIngredient: 'Mirtillo nero (36% antocianosidi), Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare a base di mirtillo nero ad altissima concentrazione di antocianosidi. Supporta la microcircolazione oculare e la funzione visiva notturna.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Mirtilux Pharma',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '251',
    name: 'Mirtilux Soluzione',
    activeIngredient: 'Mirtillo nero (36% antocianosidi), Vitamina A, C, E',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare in forma liquida a base di mirtillo nero ad alta concentrazione di antocianosidi. Supporta la microcircolazione oculare e la funzione visiva. Formato liquido per un assorbimento ottimale.',
    dosage: '10 ml al giorno, puro o diluito in acqua.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Mirtilux Pharma',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '252',
    name: 'Neoram',
    activeIngredient: 'Citicolina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare per la protezione del nervo ottico. Indicato in caso di neuropatie ottiche e glaucoma.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Neoram Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '253',
    name: 'Neukron Ofta',
    activeIngredient: 'Citicolina, Homotaurina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare avanzato per la protezione del nervo ottico. Formula potenziata con homotaurina per un\'azione neuroprotettiva completa.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Neukron Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '254',
    name: 'Neukron Ofta Mese',
    activeIngredient: 'Citicolina, Homotaurina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare avanzato per la protezione del nervo ottico. Confezione mensile con formula potenziata con homotaurina per un\'azione neuroprotettiva completa.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Neukron Pharma',
    price: {
      amount: 32.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '255',
    name: 'Neuprozin',
    activeIngredient: 'Citicolina, Taurina, Vitamina B12, Acido folico, Coenzima Q10',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare per la protezione del nervo ottico. Formula avanzata con citicolina e coenzima Q10 per un\'azione neuroprotettiva completa.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Neuprozin Pharma',
    price: {
      amount: 28.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '256',
    name: 'Neuprozin Mito',
    activeIngredient: 'Citicolina, Taurina, Coenzima Q10, Resveratrolo, Vitamina B12',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare avanzato per la protezione del nervo ottico con focus sulla funzione mitocondriale. Formula potenziata con resveratrolo e coenzima Q10 per supportare il metabolismo energetico delle cellule nervose.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Neuprozin Pharma',
    price: {
      amount: 32.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '257',
    name: 'Nhco-Aminoeye',
    activeIngredient: 'Aminoacidi (L-glicina, L-prolina, L-lisina), Luteina, Zeaxantina, Vitamina B2',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare a base di aminoacidi specifici e carotenoidi per il supporto della funzione visiva. Formula innovativa che supporta la sintesi proteica nelle strutture oculari.',
    dosage: 'Due capsule al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'NHCO Nutrition',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '258',
    name: 'Noèd',
    activeIngredient: 'Acido ialuronico, Omega-3, Vitamina A, D, E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare per il supporto della superficie oculare. Formula avanzata con acido ialuronico e omega-3 per il benessere del film lacrimale.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Noèd Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '259',
    name: 'Nutriva Vistalplus',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata con antiossidanti e micronutrienti essenziali per la funzione visiva.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Nutriva',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '260',
    name: 'Ocularina Antiox',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare con potente azione antiossidante per la protezione della retina. Formula avanzata con tre carotenoidi per una protezione completa contro lo stress ossidativo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Ocularina Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '261',
    name: 'Oculine',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oculine Pharma',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '262',
    name: 'Ocusyn',
    activeIngredient: 'Acido ialuronico, Omega-3, Vitamina A, D, E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare per il supporto della superficie oculare. Formula avanzata con acido ialuronico e omega-3 per il benessere del film lacrimale.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Ocusyn Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '263',
    name: 'Oftalut',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula bilanciata con luteina e zeaxantina per il benessere visivo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftalut Pharma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '264',
    name: 'Oftaplex',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula completa con tre carotenoidi per una protezione antiossidante ottimale.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftaplex Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '265',
    name: 'Oftavis',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftavis Pharma',
    price: {
      amount: 20.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '266',
    name: 'Omega 3 Oftal',
    activeIngredient: 'Omega-3 (EPA/DHA), Vitamina E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare a base di acidi grassi Omega-3 ad alta concentrazione, specificamente formulato per il benessere della superficie oculare e il supporto della funzione lacrimale.',
    dosage: 'Due capsule molli al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Oftal Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '267',
    name: 'Omniret',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare completo per la protezione della retina. Formula avanzata con tre carotenoidi per una protezione antiossidante ottimale.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Omniret Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '268',
    name: 'Optika',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Optika Pharma',
    price: {
      amount: 19.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '269',
    name: 'Overdry Plus',
    activeIngredient: 'Acido ialuronico, Omega-3, Vitamina A, D, E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare per il supporto della superficie oculare in caso di secchezza grave. Formula avanzata con acido ialuronico e omega-3 per il benessere del film lacrimale.',
    dosage: 'Una capsula molle due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Overdry Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '270',
    name: 'Overvist',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Overvist Pharma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '271',
    name: 'Pronerv',
    activeIngredient: 'Citicolina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare per la protezione del nervo ottico. Indicato in caso di neuropatie ottiche e glaucoma.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Pronerv Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '272',
    name: 'Reonorm',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula bilanciata con luteina e zeaxantina per il benessere visivo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Reonorm Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '273',
    name: 'Resolvis Capsule',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula completa con tre carotenoidi per una protezione antiossidante ottimale.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Resolvis Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '274',
    name: 'Respir',
    activeIngredient: 'Acido ialuronico, Omega-3, Vitamina A, D, E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare per il supporto della superficie oculare. Formula avanzata con acido ialuronico e omega-3 per il benessere del film lacrimale.',
    dosage: 'Una capsula molle al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Respir Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '275',
    name: 'Retizin',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula bilanciata con luteina e zeaxantina per il benessere visivo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Retizin Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '276',
    name: 'Retizin Angio',
    activeIngredient: 'Luteina, Zeaxantina, Resveratrolo, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula con focus sulla microcircolazione retinica. Formula potenziata con resveratrolo per un\'azione antiossidante e vascolare sinergica.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Retizin Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '277',
    name: 'Ricocell',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo. Formula avanzata con precursori dei glicosaminoglicani per supportare la struttura e l\'idratazione del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Ricocell Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '278',
    name: 'Rpa Oftal 3',
    activeIngredient: 'Omega-3 (EPA/DHA), Vitamina E',
    category: 'supplements',
    subcategory: 'ocular-surface',
    description: 'Integratore alimentare a base di acidi grassi Omega-3 ad alta concentrazione, specificamente formulato per il benessere della superficie oculare e il supporto della funzione lacrimale.',
    dosage: 'Due capsule molli al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali, retrogusto di pesce.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'RPA Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '279',
    name: 'Tauretina',
    activeIngredient: 'Taurina, Vitamina B12, Acido folico, Vitamina E',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare per la protezione del nervo ottico. Formula a base di taurina, un aminoacido con proprietà neuroprotettive.',
    dosage: 'Una compressa al giorno, preferibilmente al mattino.',
    sideEffects: 'Raramente disturbi gastrointestinali, cefalea.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Tauretina Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '280',
    name: 'Tiolux 400',
    activeIngredient: 'Acido alfa-lipoico, Vitamina E, Selenio, Zinco',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con acido alfa-lipoico ad alto dosaggio (400 mg) per la protezione delle cellule nervose dell\'occhio. Potente azione antiossidante per contrastare lo stress ossidativo.',
    dosage: 'Una capsula al giorno, preferibilmente al mattino con la colazione.',
    sideEffects: 'Occasionalmente disturbi gastrointestinali, nausea.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in gravidanza e allattamento senza consultare il medico.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Tiolux Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '281',
    name: 'Totalvision',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Totalvision Pharma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '282',
    name: 'Vi3',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vi3 Pharma',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '283',
    name: 'Vi3 Pro',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula potenziata con astaxantina per una protezione antiossidante completa.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vi3 Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '284',
    name: 'Vision Kids Blue Light',
    activeIngredient: 'DHA, Luteina, Zeaxantina, Vitamina A, B2, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare formulato specificamente per bambini e adolescenti. Supporta la salute visiva durante la crescita e aiuta a contrastare l\'affaticamento visivo da dispositivi digitali e luce blu.',
    dosage: 'Una compressa masticabile al giorno, preferibilmente durante la colazione.',
    sideEffects: 'Nessuno rilevante alle dosi consigliate.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vision Kids',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '285',
    name: 'Vistavital',
    activeIngredient: 'Luteina, Zeaxantina, Mirtillo, Vitamina A, C, E, Zinco',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare completo per la salute degli occhi. Formula bilanciata per il supporto della funzione visiva e la protezione delle strutture oculari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vistavital Pharma',
    price: {
      amount: 20.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '286',
    name: 'Visucomplex Plus Maquibright',
    activeIngredient: 'Luteina, Zeaxantina, Estratto di Maqui (Aristotelia chilensis), Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula innovativa con estratto di Maqui, una bacca ricca di antocianine con potente azione antiossidante.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Visucomplex Pharma',
    price: {
      amount: 28.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '287',
    name: 'Visucondrio',
    activeIngredient: 'Coenzima Q10, Acido alfa-lipoico, Vitamina E, Selenio',
    category: 'supplements',
    subcategory: 'neuroprotectors',
    description: 'Integratore alimentare con focus sulla funzione mitocondriale delle cellule nervose dell\'occhio. Formula avanzata con coenzima Q10 per supportare il metabolismo energetico cellulare.',
    dosage: 'Una capsula al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Visucondrio Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '288',
    name: 'Visuretin',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula bilanciata con luteina e zeaxantina per il benessere visivo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Visuretin Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '289',
    name: 'Visu-Ton OPC',
    activeIngredient: 'Proantocianidine oligomeriche (OPC), Mirtillo, Vitamina C, E',
    category: 'supplements',
    subcategory: 'general-eye-health',
    description: 'Integratore alimentare a base di OPC estratti da semi d\'uva e mirtillo per il supporto della microcircolazione oculare. Formula avanzata per il benessere visivo e la protezione dei capillari.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Consultare il medico in caso di terapia anticoagulante.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Visu-Ton Pharma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '290',
    name: 'Vitreoclar Crono',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare a rilascio prolungato per la salute del vitreo. Formula avanzata con precursori dei glicosaminoglicani per supportare la struttura e l\'idratazione del corpo vitreo nel tempo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '291',
    name: 'Vitreoftal',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo. Supporta la struttura e la trasparenza del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vitreoftal Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '292',
    name: 'Vitreolife',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo. Formula avanzata con precursori dei glicosaminoglicani per supportare la struttura e l\'idratazione del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vitreolife Pharma',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '293',
    name: 'Vitreolisina Forte',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Glucosamina, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare ad alto dosaggio per la salute del vitreo. Formula potenziata con precursori dei glicosaminoglicani per supportare la struttura e l\'idratazione del corpo vitreo in caso di alterazioni significative.',
    dosage: 'Una compressa due volte al giorno durante i pasti principali.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti. Non utilizzare in caso di allergia ai crostacei (fonte di glucosamina).',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vitreolisina Pharma',
    price: {
      amount: 29.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '294',
    name: 'Vitreolisina Idro',
    activeIngredient: 'Acido ialuronico cross-linkato, Condroitina solfato, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo con acido ialuronico cross-linkato per una maggiore efficacia. Formula avanzata per supportare l\'idratazione e la struttura del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vitreolisina Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '295',
    name: 'Vitreosan',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo. Supporta la struttura e la trasparenza del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vitreosan Pharma',
    price: {
      amount: 24.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '296',
    name: 'Vitreoxigen',
    activeIngredient: 'Acido ialuronico, Condroitina solfato, Coenzima Q10, Vitamina C, E',
    category: 'supplements',
    subcategory: 'vitreous',
    description: 'Integratore alimentare per la salute del vitreo con coenzima Q10 per un\'azione antiossidante potenziata. Formula avanzata per supportare la struttura e la trasparenza del corpo vitreo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Vitreoxigen Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '297',
    name: 'Zaffit Special',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula completa con tre carotenoidi per una protezione antiossidante ottimale.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Zaffit Pharma',
    price: {
      amount: 27.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '298',
    name: 'Zared',
    activeIngredient: 'Luteina, Zeaxantina, Vitamina A, C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare per la protezione della retina e della macula. Formula bilanciata con luteina e zeaxantina per il benessere visivo.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Zared Pharma',
    price: {
      amount: 23.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  },
  {
    id: '299',
    name: 'Zared 2',
    activeIngredient: 'Luteina, Zeaxantina, Astaxantina, Vitamina C, E, Zinco, Selenio',
    category: 'supplements',
    subcategory: 'retina',
    description: 'Integratore alimentare avanzato per la protezione della retina e della macula. Formula di seconda generazione potenziata con astaxantina per una protezione antiossidante completa.',
    dosage: 'Una compressa al giorno durante un pasto principale.',
    sideEffects: 'Raramente disturbi gastrointestinali.',
    contraindications: 'Ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: false,
    manufacturer: 'Zared Pharma',
    price: {
      amount: 26.90,
      currency: '€',
      source: 'Farmacia Online'
    }
  }
];


export default supplements;