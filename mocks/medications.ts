import { Medication } from '@/types/medication';

export const mockMedications: Medication[] = [
  // Anti-Glaucoma
  {
    id: '1',
    name: 'Timolol',
    activeIngredient: 'Timolol maleate',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-blocker che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/6/0/5/7/6057-large_default.jpg',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Santen Pharmaceutical',
    price: {
      amount: 12.50,
      currency: '€',
      source: 'Farmacia IGEA',
      url: 'https://www.igeasanitaria.com/timololo-0-5-collirio-5ml'
    }
  },
  {
    id: '2',
    name: 'Latanoprost',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/4/9/3049-large_default.jpg',
    characteristics: ['single-dose'],
    requiresPrescription: true,
    manufacturer: 'Pfizer',
    price: {
      amount: 15.80,
      currency: '€',
      source: 'Farmacia IGEA',
      url: 'https://www.igeasanitaria.com/latanoprost-collirio'
    }
  },
  {
    id: '21',
    name: 'Brimonidina',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista dei recettori alfa-2 adrenergici che riduce la produzione di umore acqueo e aumenta il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, mal di testa, secchezza delle fauci, affaticamento, sonnolenza.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/0/3050-large_default.jpg',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '22',
    name: 'Dorzolamide',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/1/3051-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Merck',
    price: {
      amount: 13.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '23',
    name: 'Cosopt',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/2/3052-large_default.jpg',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Santen Pharmaceutical',
    price: {
      amount: 18.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Anti-Infective
  {
    id: '3',
    name: 'Moxifloxacina',
    activeIngredient: 'Moxifloxacina cloridrato',
    concentration: '0.5%',
    category: 'anti-infective',
    subcategory: 'antibiotics',
    description: 'Antibiotico fluorochinolonico che inibisce la DNA girasi e la topoisomerasi IV batteriche.',
    dosage: 'Una goccia nell\'occhio(i) interessato 3 volte al giorno per 7 giorni.',
    sideEffects: 'Irritazione oculare, occhio secco, dolore oculare, iperemia oculare, alterazione del gusto.',
    contraindications: 'Ipersensibilità alla moxifloxacina, ad altri chinoloni o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/3/3053-large_default.jpg',
    characteristics: ['single-dose'],
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '4',
    name: 'Tobramicina',
    activeIngredient: 'Tobramicina',
    concentration: '0.3%',
    category: 'anti-infective',
    subcategory: 'antibiotics',
    description: 'Antibiotico aminoglicosidico che inibisce la sintesi proteica batterica.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato ogni 4 ore per infezioni da lievi a moderate.',
    sideEffects: 'Irritazione oculare, iperemia, prurito, prurito e gonfiore delle palpebre.',
    contraindications: 'Ipersensibilità alla tobramicina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/4/3054-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 11.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '24',
    name: 'Aciclovir',
    activeIngredient: 'Aciclovir',
    concentration: '3%',
    category: 'anti-infective',
    subcategory: 'antivirals',
    description: 'Farmaco antivirale che inibisce la sintesi del DNA virale nelle infezioni da virus herpes simplex.',
    dosage: 'Applicare un nastro di unguento di 1 cm nel sacco congiuntivale inferiore 5 volte al giorno a intervalli di 4 ore.',
    sideEffects: 'Cheratopatia puntata superficiale, lieve bruciore all\'applicazione, visione offuscata.',
    contraindications: 'Ipersensibilità all\'aciclovir, al valaciclovir o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/5/3055-large_default.jpg',
    characteristics: ['ointment'],
    requiresPrescription: true,
    manufacturer: 'GlaxoSmithKline',
    price: {
      amount: 14.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '26',
    name: 'Tobradex',
    activeIngredient: 'Tobramicina/Desametasone',
    concentration: '0.3%/0.1%',
    category: 'anti-infective',
    subcategory: 'combinations',
    description: 'Combinazione di un antibiotico aminoglicosidico e un corticosteroide per infezioni batteriche con componente infiammatoria.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato ogni 4-6 ore.',
    sideEffects: 'Aumento della pressione intraoculare, formazione di cataratta, irritazione oculare, ritardo nella guarigione delle ferite.',
    contraindications: 'Infezioni oculari virali, fungine o micobatteriche, cheratite epiteliale da herpes simplex.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/7/3057-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 17.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '41',
    name: 'Tobradex Unguento',
    activeIngredient: 'Tobramicina/Desametasone',
    concentration: '0.3%/0.1%',
    category: 'anti-infective',
    subcategory: 'combinations',
    description: 'Combinazione di un antibiotico aminoglicosidico e un corticosteroide in forma di unguento per infezioni batteriche con componente infiammatoria.',
    dosage: 'Applicare un nastro di 1-2 cm nel sacco congiuntivale inferiore 2-3 volte al giorno.',
    sideEffects: 'Aumento della pressione intraoculare, formazione di cataratta, irritazione oculare, visione offuscata.',
    contraindications: 'Infezioni oculari virali, fungine o micobatteriche, cheratite epiteliale da herpes simplex.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/7/3057-large_default.jpg',
    characteristics: ['ointment'],
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 18.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '27',
    name: 'FML-Neo',
    activeIngredient: 'Fluorometolone/Neomicina',
    concentration: '0.1%/0.5%',
    category: 'anti-infective',
    subcategory: 'combinations',
    description: 'Combinazione di un corticosteroide e un antibiotico aminoglicosidico per condizioni infiammatorie con componente batterica.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 2-4 volte al giorno.',
    sideEffects: 'Aumento della pressione intraoculare, irritazione oculare, reazioni allergiche, ritardo nella guarigione delle ferite.',
    contraindications: 'Infezioni oculari virali, fungine o micobatteriche, cheratite epiteliale da herpes simplex.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/0/3060-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 15.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Anti-Inflammatory
  {
    id: '5',
    name: 'Prednisolone',
    activeIngredient: 'Prednisolone acetato',
    concentration: '1%',
    category: 'anti-inflammatory',
    subcategory: 'corticosteroids',
    description: 'Corticosteroide che sopprime l\'infiammazione e la normale risposta immunitaria.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 2-4 volte al giorno.',
    sideEffects: 'Aumento della pressione intraoculare, formazione di cataratta, ritardo nella guarigione delle ferite, maggiore suscettibilità alle infezioni.',
    contraindications: 'Infezioni oculari virali, fungine o micobatteriche, glaucoma.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/8/3058-large_default.jpg',
    characteristics: ['gel'],
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '6',
    name: 'Ketorolac',
    activeIngredient: 'Ketorolac trometamina',
    concentration: '0.5%',
    category: 'anti-inflammatory',
    subcategory: 'nsaids',
    description: 'Farmaco antinfiammatorio non steroideo (FANS) che inibisce la sintesi delle prostaglandine.',
    dosage: 'Una goccia nell\'occhio(i) interessato 4 volte al giorno.',
    sideEffects: 'Bruciore/prurito transitorio all\'instillazione, irritazione oculare, reazioni allergiche.',
    contraindications: 'Ipersensibilità al ketorolac o a qualsiasi componente della formulazione, storia di asma sensibile all\'aspirina.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/9/3059-large_default.jpg',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 12.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Anti-Allergic
  {
    id: '7',
    name: 'Olopatadina',
    activeIngredient: 'Olopatadina cloridrato',
    concentration: '0.1%',
    category: 'anti-allergic',
    subcategory: 'dual-action',
    description: 'Antistaminico e stabilizzatore dei mastociti che inibisce il rilascio di istamina dai mastociti.',
    dosage: 'Una goccia in ciascun occhio interessato due volte al giorno.',
    sideEffects: 'Mal di testa, debolezza, occhio secco, bruciore o prurito, sensazione di corpo estraneo, iperemia.',
    contraindications: 'Ipersensibilità all\'olopatadina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/1/3061-large_default.jpg',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: false,
    manufacturer: 'Alcon',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '8',
    name: 'Ketotifene',
    activeIngredient: 'Ketotifene fumarato',
    concentration: '0.025%',
    category: 'anti-allergic',
    subcategory: 'dual-action',
    description: 'Antistaminico e stabilizzatore dei mastociti che inibisce il rilascio di mediatori infiammatori dalle cellule.',
    dosage: 'Una goccia nell\'occhio(i) interessato ogni 8-12 ore.',
    sideEffects: 'Iniezione congiuntivale, mal di testa, rinite, irritazione oculare.',
    contraindications: 'Ipersensibilità al ketotifene o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/2/3062-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Novartis',
    price: {
      amount: 11.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '28',
    name: 'Levocabastina',
    activeIngredient: 'Levocabastina',
    concentration: '0.05%',
    category: 'anti-allergic',
    subcategory: 'antihistamines',
    description: 'Antagonista dei recettori H1 che blocca l\'azione dell\'istamina ai recettori H1.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore/prurito transitorio, irritazione oculare, visione offuscata, mal di testa.',
    contraindications: 'Ipersensibilità alla levocabastina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/3/3063-large_default.jpg',
    characteristics: ['single-dose'],
    requiresPrescription: false,
    manufacturer: 'Johnson & Johnson',
    price: {
      amount: 12.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '29',
    name: 'Cromoglicato',
    activeIngredient: 'Cromoglicato di sodio',
    concentration: '2%',
    category: 'anti-allergic',
    subcategory: 'mast-cell-stabilizers',
    description: 'Stabilizzatore dei mastociti che previene il rilascio di istamina e altri mediatori infiammatori.',
    dosage: 'Una o due gocce in ciascun occhio 4-6 volte al giorno.',
    sideEffects: 'Bruciore/prurito transitorio, irritazione oculare.',
    contraindications: 'Ipersensibilità al cromoglicato di sodio o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/4/3064-large_default.jpg',
    characteristics: ['preservative-free'],
    requiresPrescription: false,
    manufacturer: 'Sanofi',
    price: {
      amount: 10.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Mydriatics & Cycloplegics
  {
    id: '9',
    name: 'Tropicamide',
    activeIngredient: 'Tropicamide',
    concentration: '1%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'anticholinergics',
    description: 'Agente anticolinergico che blocca la risposta del muscolo sfintere dell\'iride e del muscolo ciliare alla stimolazione colinergica.',
    dosage: 'Una goccia 15-20 minuti prima dell\'esame.',
    sideEffects: 'Aumento della pressione intraoculare, sensazione di bruciore, fotofobia, visione offuscata.',
    contraindications: 'Glaucoma ad angolo stretto o angoli anatomicamente stretti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/5/3065-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 9.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '10',
    name: 'Fenilefrina',
    activeIngredient: 'Fenilefrina cloridrato',
    concentration: '2.5%',
    category: 'mydriatic-cycloplegic',
    subcategory: 'sympathomimetics',
    description: 'Agonista alfa-adrenergico che causa contrazione del muscolo dilatatore della pupilla.',
    dosage: 'Una goccia prima dell\'esame.',
    sideEffects: 'Bruciore, prurito, visione offuscata, fotofobia, reazioni allergiche, aumento della pressione sanguigna.',
    contraindications: 'Glaucoma ad angolo stretto, malattie cardiache gravi, ipertensione.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/6/3066-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 10.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '30',
    name: 'Mydriasert',
    activeIngredient: 'Fenilefrina/Tropicamide',
    concentration: '5.4mg/0.28mg',
    category: 'mydriatic-cycloplegic',
    subcategory: 'combinations',
    description: 'Combinazione di un simpaticomimetico e un agente anticolinergico per la dilatazione pupillare.',
    dosage: 'Inserire un inserto oftalmico nel sacco congiuntivale inferiore 60 minuti prima della procedura.',
    sideEffects: 'Disagio oculare, fotofobia, visione offuscata, aumento della pressione intraoculare.',
    contraindications: 'Glaucoma ad angolo stretto, angoli anatomicamente stretti, malattie cardiache gravi.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/6/7/3067-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Thea Pharmaceuticals',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Antiseptic (New Category)
  {
    id: '25',
    name: 'Iodopovidone',
    activeIngredient: 'Iodopovidone',
    concentration: '5%',
    category: 'antiseptic',
    subcategory: 'povidone-iodine',
    description: 'Antisettico ad ampio spettro che distrugge le membrane cellulari microbiche e inibisce le funzioni cellulari.',
    dosage: 'Applicare come indicato dal professionista sanitario per l\'antisepsi pre-operatoria.',
    sideEffects: 'Irritazione, rossore, gonfiore, scolorimento temporaneo della pelle e delle mucose.',
    contraindications: 'Ipersensibilità allo iodio, disturbi tiroidei, gravidanza, neonati.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/6/3056-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 9.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '42',
    name: 'Iodim',
    activeIngredient: 'Iodopovidone',
    concentration: '10%',
    category: 'antiseptic',
    subcategory: 'povidone-iodine',
    description: 'Antisettico ad ampio spettro con maggiore concentrazione di iodio per una disinfezione più potente della superficie oculare.',
    dosage: 'Applicare come indicato dal professionista sanitario per l\'antisepsi pre-operatoria o per il trattamento di infezioni superficiali.',
    sideEffects: 'Irritazione, bruciore, arrossamento, reazioni allergiche, scolorimento temporaneo.',
    contraindications: 'Ipersensibilità allo iodio, disturbi tiroidei, gravidanza, neonati, uso prolungato.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/6/3056-large_default.jpg',
    requiresPrescription: false,
    manufacturer: 'Farmigea',
    price: {
      amount: 11.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '43',
    name: 'Clorexidina Collirio',
    activeIngredient: 'Clorexidina digluconato',
    concentration: '0.02%',
    category: 'antiseptic',
    subcategory: 'chlorhexidine',
    description: 'Antisettico biguanidico ad ampio spettro efficace contro batteri gram-positivi e gram-negativi, alcuni virus e funghi.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato 4 volte al giorno o come prescritto.',
    sideEffects: 'Irritazione oculare, bruciore, visione offuscata, reazioni allergiche.',
    contraindications: 'Ipersensibilità alla clorexidina, chirurgia oculare recente, uso prolungato.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/6/3056-large_default.jpg',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 13.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Artificial Tears
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
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA',
      url: 'https://www.igeasanitaria.com/systane-ultra-collirio-10ml'
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
    subcategory: 'preservative-free',
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
  
  // Supplements
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
  
  // Diagnostics
  {
    id: '15',
    name: 'Fluoresceina',
    activeIngredient: 'Fluoresceina sodica',
    concentration: '2%',
    category: 'diagnostic',
    subcategory: 'dyes',
    description: 'Colorante diagnostico utilizzato per rilevare abrasioni corneali e per valutare il film lacrimale.',
    dosage: 'Una goccia prima dell\'esame.',
    sideEffects: 'Bruciore temporaneo, visione gialla, macchie sulle lenti a contatto morbide.',
    contraindications: 'Ipersensibilità alla fluoresceina.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/8/3078-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 8.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '16',
    name: 'Rosa Bengala',
    activeIngredient: 'Rosa Bengala',
    concentration: '1%',
    category: 'diagnostic',
    subcategory: 'dyes',
    description: 'Colorante diagnostico utilizzato per identificare cellule epiteliali danneggiate sulla superficie oculare.',
    dosage: 'Una goccia prima dell\'esame.',
    sideEffects: 'Bruciore, prurito, scolorimento temporaneo dell\'occhio.',
    contraindications: 'Ipersensibilità al Rosa Bengala.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/7/9/3079-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 9.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '37',
    name: 'Visupac',
    activeIngredient: 'Fluoresceina sodica, Verde indocianina',
    category: 'diagnostic',
    subcategory: 'contrast-agents',
    description: 'Agente di contrasto utilizzato per l\'angiografia con fluoresceina e verde indocianina.',
    dosage: 'Somministrato per via endovenosa come indicato dal professionista sanitario.',
    sideEffects: 'Nausea, vomito, reazioni allergiche, reazioni vasovagali.',
    contraindications: 'Ipersensibilità alla fluoresceina, al verde indocianina o allo iodio.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/0/3080-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Carl Zeiss Meditec',
    price: {
      amount: 45.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Anesthetics
  {
    id: '17',
    name: 'Proparacaina',
    activeIngredient: 'Proparacaina cloridrato',
    concentration: '0.5%',
    category: 'anesthetic',
    subcategory: 'topical-anesthetics',
    description: 'Anestetico locale che blocca i canali del sodio, impedendo l\'inizio e la trasmissione degli impulsi nervosi.',
    dosage: 'Una o due gocce prima della procedura.',
    sideEffects: 'Bruciore, prurito, iperemia congiuntivale, reazioni allergiche.',
    contraindications: 'Ipersensibilità alla proparacaina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/1/3081-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '18',
    name: 'Tetracaina',
    activeIngredient: 'Tetracaina cloridrato',
    concentration: '0.5%',
    category: 'anesthetic',
    subcategory: 'topical-anesthetics',
    description: 'Anestetico locale che blocca gli impulsi nervosi stabilizzando le membrane neuronali.',
    dosage: 'Una o due gocce prima della procedura.',
    sideEffects: 'Bruciore, prurito, iperemia congiuntivale, tossicità epiteliale corneale.',
    contraindications: 'Ipersensibilità alla tetracaina o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/2/3082-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 12.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: '38',
    name: 'Lidocaina',
    activeIngredient: 'Lidocaina cloridrato',
    concentration: '2%',
    category: 'anesthetic',
    subcategory: 'injectable-anesthetics',
    description: 'Anestetico locale iniettabile che blocca i canali del sodio nelle membrane cellulari nervose.',
    dosage: 'Somministrato dal professionista sanitario secondo necessità per la procedura.',
    sideEffects: 'Dolore nel sito di iniezione, edema, ematoma, reazioni allergiche, tossicità sistemica.',
    contraindications: 'Ipersensibilità agli anestetici locali di tipo amidico.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/3/3083-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'AstraZeneca',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  
  // Intravitreal
  {
    id: '19',
    name: 'Lucentis',
    activeIngredient: 'Ranibizumab',
    concentration: '10mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Frammento di anticorpo monoclonale umanizzato che inibisce il fattore di crescita endoteliale vascolare A (VEGF-A), utilizzato per trattare la degenerazione maculare umida legata all\'età, l\'edema maculare diabetico e l\'occlusione venosa retinica.',
    dosage: '0,5 mg (0,05 ml) somministrati mediante iniezione intravitreale una volta al mese.',
    sideEffects: 'Dolore oculare, corpi mobili vitreali, aumento della pressione intraoculare, infiammazione intraoculare, distacco di retina.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/4/3084-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 850.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '46',
    name: 'Byooviz',
    activeIngredient: 'Ranibizumab',
    concentration: '10mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Biosimilare di Lucentis, frammento di anticorpo monoclonale umanizzato che inibisce il VEGF-A, approvato in ambito europeo per il trattamento della degenerazione maculare umida legata all\'età e altre patologie retiniche.',
    dosage: '0,5 mg (0,05 ml) somministrati mediante iniezione intravitreale una volta al mese.',
    sideEffects: 'Dolore oculare, corpi mobili vitreali, aumento della pressione intraoculare, infiammazione intraoculare, emorragia congiuntivale.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/4/3084-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Samsung Bioepis/Biogen',
    price: {
      amount: 650.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '20',
    name: 'Eylea',
    activeIngredient: 'Aflibercept',
    concentration: '40mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Proteina di fusione che agisce come recettore "esca" solubile legando il VEGF-A e il fattore di crescita placentare (PlGF), utilizzato per trattare la degenerazione maculare umida legata all\'età, l\'edema maculare diabetico e l\'occlusione venosa retinica.',
    dosage: '2 mg (0,05 ml) somministrati mediante iniezione intravitreale ogni 4 settimane per le prime 12 settimane, poi ogni 8 settimane.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, cataratta, distacco del vitreo, aumento della pressione intraoculare.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/5/3085-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Bayer',
    price: {
      amount: 900.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '47',
    name: 'Beovu',
    activeIngredient: 'Brolucizumab',
    concentration: '120mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Frammento di anticorpo a catena singola umanizzato (scFv) che inibisce il VEGF-A, utilizzato per il trattamento della degenerazione maculare umida legata all\'età. Offre un intervallo di trattamento potenzialmente più lungo rispetto ad altri anti-VEGF.',
    dosage: '6 mg (0,05 ml) somministrati mediante iniezione intravitreale ogni mese per le prime 3 dosi, poi ogni 8-12 settimane.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, infiammazione intraoculare, rischio di vasculite retinica e/o occlusione vascolare retinica.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, storia di vasculite retinica o occlusione vascolare retinica.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/5/3085-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 950.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '48',
    name: 'Vabysmo',
    activeIngredient: 'Faricimab',
    concentration: '120mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Anticorpo bispecifico che inibisce sia il VEGF-A che l\'angiopoietina-2 (Ang-2), rappresentando una nuova opzione per il trattamento della degenerazione maculare neovascolare legata all\'età e dell\'edema maculare diabetico.',
    dosage: '6 mg (0,05 ml) somministrati mediante iniezione intravitreale ogni 4 settimane per le prime 4 dosi, poi personalizzato fino a intervalli di 16 settimane.',
    sideEffects: 'Emorragia congiuntivale, aumento della pressione intraoculare, corpi mobili vitreali, dolore oculare, cataratta.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/5/3085-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Roche/Genentech',
    price: {
      amount: 1000.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '49',
    name: 'Macugen',
    activeIngredient: 'Pegaptanib sodico',
    concentration: '0.3mg',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Aptamero pegilato che si lega selettivamente all\'isoforma 165 del VEGF-A, utilizzato per il trattamento della degenerazione maculare neovascolare legata all\'età. È stato uno dei primi anti-VEGF approvati ma è stato ampiamente sostituito da agenti più recenti.',
    dosage: '0,3 mg somministrati mediante iniezione intravitreale ogni 6 settimane.',
    sideEffects: 'Infiammazione intraoculare, aumento della pressione intraoculare, emorragia congiuntivale, dolore oculare, cataratta.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/5/3085-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 700.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '50',
    name: 'Avastin',
    activeIngredient: 'Bevacizumab',
    concentration: '25mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Anticorpo monoclonale umanizzato che inibisce il VEGF-A, utilizzato off-label per trattamenti intravitreali di patologie retiniche. Originariamente approvato per il trattamento di vari tipi di cancro.',
    dosage: '1,25 mg (0,05 ml) somministrati mediante iniezione intravitreale ogni 4-6 settimane.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, aumento della pressione intraoculare, infiammazione intraoculare, distacco di retina.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/5/3085-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Roche',
    price: {
      amount: 400.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '51',
    name: 'Mvasi',
    activeIngredient: 'Bevacizumab',
    concentration: '25mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Biosimilare di Avastin, anticorpo monoclonale umanizzato che inibisce il VEGF-A. Come Avastin, viene utilizzato off-label per trattamenti intravitreali di patologie retiniche.',
    dosage: '1,25 mg (0,05 ml) somministrati mediante iniezione intravitreale ogni 4-6 settimane.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, aumento della pressione intraoculare, infiammazione intraoculare, distacco di retina.',
    contraindications: 'Infezioni oculari o perioculari, infiammazione intraoculare attiva, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/5/3085-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Amgen',
    price: {
      amount: 350.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '39',
    name: 'Ozurdex',
    activeIngredient: 'Desametasone',
    concentration: '0.7mg',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Impianto intravitreale che rilascia desametasone a rilascio prolungato per il trattamento dell\'edema maculare e dell\'uveite non infettiva.',
    dosage: 'Impianto da 0,7 mg somministrato mediante iniezione intravitreale, può essere ripetuto dopo 4-6 mesi se necessario.',
    sideEffects: 'Aumento della pressione intraoculare, formazione di cataratta, emorragia congiuntivale, dolore oculare.',
    contraindications: 'Infezioni oculari o perioculari, glaucoma con rapporto coppa/disco > 0,8, capsula posteriore del cristallino lacerata o rotta.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/6/3086-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 750.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '44',
    name: 'Iluvien',
    activeIngredient: 'Fluocinolone acetonide',
    concentration: '0.19mg',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Impianto intravitreale non biodegradabile che rilascia fluocinolone acetonide per un periodo fino a 36 mesi, indicato per l\'edema maculare diabetico cronico.',
    dosage: 'Impianto da 0,19 mg somministrato mediante iniezione intravitreale, con effetto fino a 36 mesi.',
    sideEffects: 'Aumento della pressione intraoculare, formazione di cataratta, distacco di retina, emorragia vitreale, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari, glaucoma non controllato, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/6/3086-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Alimera Sciences',
    price: {
      amount: 8500.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '45',
    name: 'Kenacort',
    activeIngredient: 'Triamcinolone acetonide',
    concentration: '40mg/ml',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Corticosteroide iniettabile utilizzato off-label per il trattamento dell\'edema maculare, dell\'uveite posteriore e della retinopatia diabetica proliferante.',
    dosage: '4 mg (0,1 ml) somministrati mediante iniezione intravitreale, con durata d\'azione di circa 3 mesi.',
    sideEffects: 'Aumento della pressione intraoculare, formazione di cataratta, pseudoendoftalmite, endoftalmite, distacco di retina.',
    contraindications: 'Infezioni oculari o perioculari, glaucoma non controllato, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/6/3086-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Bristol-Myers Squibb',
    price: {
      amount: 120.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  },
  {
    id: '40',
    name: 'Vancomicina Intravitreale',
    activeIngredient: 'Vancomicina cloridrato',
    concentration: '10mg/ml',
    category: 'intravitreal',
    subcategory: 'antibiotics-intravitreal',
    description: 'Antibiotico intravitreale utilizzato per trattare l\'endoftalmite causata da batteri gram-positivi.',
    dosage: '1 mg in 0,1 ml somministrati mediante iniezione intravitreale.',
    sideEffects: 'Tossicità retinica, aumento della pressione intraoculare, infiammazione, emorragia.',
    contraindications: 'Ipersensibilità alla vancomicina.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/8/7/3087-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Hospira',
    price: {
      amount: 45.00,
      currency: '€',
      source: 'Farmacia Ospedaliera'
    }
  }
];