import { Medication } from '@/types/medication';
import { antiGlaucomaMedications } from './medications';

// Anti-Glaucoma medications
const antiglaucomaMedications: Medication[] = [
  {
    id: '1',
    name: 'Timolol',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
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
  {
    id: 'AG1',
    name: 'Alphagan',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/0/3050-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG2',
    name: 'Azarga',
    activeIngredient: 'Brinzolamide/Timololo maleato',
    concentration: '1%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), secchezza oculare, irritazione oculare, bradicardia, ipotensione.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/2/3052-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 19.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG3',
    name: 'Azopt',
    activeIngredient: 'Brinzolamide',
    concentration: '1%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato due o tre volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), irritazione oculare, secchezza oculare, cefalea.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, insufficienza renale grave, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/1/3051-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 14.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG4',
    name: 'Betoptic',
    activeIngredient: 'Betaxololo cloridrato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante cardioselettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche. Minori effetti sistemici rispetto ai beta-bloccanti non selettivi.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/6/0/5/7/6057-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 13.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG5',
    name: 'Bimatoprost',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/4/9/3049-large_default.jpg',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 16.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG6',
    name: 'Combigan',
    activeIngredient: 'Brimonidina tartrato/Timololo maleato',
    concentration: '0.2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un agonista alfa-2 adrenergico e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno, a circa 12 ore di distanza.',
    sideEffects: 'Iperemia congiuntivale, bruciore, prurito, secchezza oculare, affaticamento, sonnolenza, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, pazienti in terapia con inibitori delle MAO.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/2/3052-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 20.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG7',
    name: 'Diamox',
    activeIngredient: 'Acetazolamide',
    concentration: '250 mg',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica sistemico che riduce la produzione di umore acqueo.',
    dosage: '250-1000 mg al giorno per via orale, divisi in 2-4 dosi.',
    sideEffects: 'Parestesie, affaticamento, depressione, nausea, vomito, diarrea, perdita di peso, calcoli renali, acidosi metabolica.',
    contraindications: 'Ipersensibilità ai sulfamidici, insufficienza epatica o renale grave, acidosi, ipokaliemia, iponatriemia.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/1/3051-large_default.jpg',
    characteristics: ['oral-tablet'],
    requiresPrescription: true,
    manufacturer: 'Sanofi',
    price: {
      amount: 8.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG8',
    name: 'Duotrav',
    activeIngredient: 'Travoprost/Timololo maleato',
    concentration: '0.004%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/4/9/3049-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 22.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG9',
    name: 'Carteol',
    activeIngredient: 'Carteololo cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/6/0/5/7/6057-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 11.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG10',
    name: 'Xalatan',
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
    requiresPrescription: true,
    manufacturer: 'Pfizer',
    price: {
      amount: 16.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  // Nuovi farmaci antiglaucoma
  {
    id: 'AG11',
    name: 'Alduoviz',
    activeIngredient: 'Dorzolamide/Timololo',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG12',
    name: 'Amiriox',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 16.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG13',
    name: 'Bimadoc - Collirio',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'DOC Generici',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG14',
    name: 'Bimanext',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Nextpharma',
    price: {
      amount: 16.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG15',
    name: 'Ecbirio',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Ecupharma',
    price: {
      amount: 14.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG16',
    name: 'Glamidolo',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmila-Thea Farmaceutici',
    price: {
      amount: 13.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG17',
    name: 'Izba',
    activeIngredient: 'Travoprost',
    concentration: '0.003%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare. Formulazione a concentrazione ridotta per minimizzare gli effetti collaterali.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG18',
    name: 'Miovisin',
    activeIngredient: 'Pilocarpina cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'cholinergic-agonists',
    description: 'Agonista colinergico che aumenta il deflusso dell\'umore acqueo attraverso il trabecolato e riduce la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato 3-4 volte al giorno.',
    sideEffects: 'Miosi, visione offuscata, dolore oculare, mal di testa, spasmo accomodativo, iperemia congiuntivale.',
    contraindications: 'Irite acuta, uveite anteriore, alcune forme di glaucoma secondario, infiammazioni acute del segmento anteriore.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 10.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG19',
    name: 'Safluround',
    activeIngredient: 'Tafluprost',
    concentration: '0.0015%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, prurito, irritazione, dolore, secchezza oculare, sensazione di corpo estraneo, cambiamenti nella pigmentazione dell\'iride e delle ciglia.',
    contraindications: 'Ipersensibilità al tafluprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Santen',
    price: {
      amount: 22.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG20',
    name: 'Zitodor',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 12.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG21',
    name: 'Acamba',
    activeIngredient: 'Brinzolamide',
    concentration: '1%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato due o tre volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), irritazione oculare, secchezza oculare, cefalea.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, insufficienza renale grave, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 14.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG22',
    name: 'Qualidofta',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Qualiphar',
    price: {
      amount: 13.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG23',
    name: 'Bialviz - Collirio',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 16.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG24',
    name: 'Bisantim',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG25',
    name: 'Bitrapol',
    activeIngredient: 'Travoprost/Timololo maleato',
    concentration: '0.004%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 22.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG26',
    name: 'Brimocomb',
    activeIngredient: 'Brimonidina tartrato/Timololo maleato',
    concentration: '0.2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un agonista alfa-2 adrenergico e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno, a circa 12 ore di distanza.',
    sideEffects: 'Iperemia congiuntivale, bruciore, prurito, secchezza oculare, affaticamento, sonnolenza, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, pazienti in terapia con inibitori delle MAO.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 20.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG27',
    name: 'Brimofree',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 15.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG28',
    name: 'Brimoftal',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Oftalmopharma',
    price: {
      amount: 15.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG29',
    name: 'Brimonidina E Timololo EG',
    activeIngredient: 'Brimonidina tartrato/Timololo maleato',
    concentration: '0.2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un agonista alfa-2 adrenergico e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno, a circa 12 ore di distanza.',
    sideEffects: 'Iperemia congiuntivale, bruciore, prurito, secchezza oculare, affaticamento, sonnolenza, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, pazienti in terapia con inibitori delle MAO.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 19.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG30',
    name: 'Brimonidina E Timololo Mylan',
    activeIngredient: 'Brimonidina tartrato/Timololo maleato',
    concentration: '0.2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un agonista alfa-2 adrenergico e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno, a circa 12 ore di distanza.',
    sideEffects: 'Iperemia congiuntivale, bruciore, prurito, secchezza oculare, affaticamento, sonnolenza, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, pazienti in terapia con inibitori delle MAO.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 19.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG31',
    name: 'Brimonidina EG',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 14.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG32',
    name: 'Brimonidina Mylan Generics',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 14.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG33',
    name: 'Brimonidina Omnivision',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Omnivision',
    price: {
      amount: 14.60,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG34',
    name: 'Brimonidina Stulln',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Pharma Stulln',
    price: {
      amount: 14.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG35',
    name: 'Brinzaflux',
    activeIngredient: 'Brinzolamide',
    concentration: '1%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato due o tre volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), irritazione oculare, secchezza oculare, cefalea.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, insufficienza renale grave, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 14.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG36',
    name: 'Brinzolamide E Timololo Accord',
    activeIngredient: 'Brinzolamide/Timololo maleato',
    concentration: '1%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), secchezza oculare, irritazione oculare, bradicardia, ipotensione.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Accord Healthcare',
    price: {
      amount: 19.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG37',
    name: 'Brinzolamide E Timololo EG',
    activeIngredient: 'Brinzolamide/Timololo maleato',
    concentration: '1%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), secchezza oculare, irritazione oculare, bradicardia, ipotensione.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 19.60,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG38',
    name: 'Brinzolamide E Timololo Mylan',
    activeIngredient: 'Brinzolamide/Timololo maleato',
    concentration: '1%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), secchezza oculare, irritazione oculare, bradicardia, ipotensione.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 19.40,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG39',
    name: 'Brinzolamide E Timololo Zentiva',
    activeIngredient: 'Brinzolamide/Timololo maleato',
    concentration: '1%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), secchezza oculare, irritazione oculare, bradicardia, ipotensione.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 19.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG40',
    name: 'Brinzolamide EG',
    activeIngredient: 'Brinzolamide',
    concentration: '1%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato due o tre volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), irritazione oculare, secchezza oculare, cefalea.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, insufficienza renale grave, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 14.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG41',
    name: 'Brinzolamide Mylan',
    activeIngredient: 'Brinzolamide',
    concentration: '1%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato due o tre volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), irritazione oculare, secchezza oculare, cefalea.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, insufficienza renale grave, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 14.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG42',
    name: 'Brinzolamide Sandoz',
    activeIngredient: 'Brinzolamide',
    concentration: '1%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato due o tre volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), irritazione oculare, secchezza oculare, cefalea.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione, insufficienza renale grave, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Sandoz',
    price: {
      amount: 14.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG43',
    name: 'Brunitrav',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Bruschettini',
    price: {
      amount: 17.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG44',
    name: 'Carteabak',
    activeIngredient: 'Carteololo cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Thea Farma',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG45',
    name: 'Combistill',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Bruschettini',
    price: {
      amount: 18.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG46',
    name: 'Combitimor - Collirio',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 18.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG47',
    name: 'Cusimolol',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 12.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG48',
    name: 'Dorzamox',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 13.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG49',
    name: 'Dorzoclar',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmila-Thea Farmaceutici',
    price: {
      amount: 13.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG50',
    name: 'Dorzolamide + Timololo Aurobindo',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Aurobindo',
    price: {
      amount: 18.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG51',
    name: 'Dorzolamide + Timololo EG',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 18.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG52',
    name: 'Dorzolamide + Timololo Mylan Generics',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 18.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG53',
    name: 'Dorzolamide + Timololo Pensa',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Pensa Pharma',
    price: {
      amount: 18.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG54',
    name: 'Dorzolamide + Timololo Zentiva',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 18.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG55',
    name: 'Dorzolamide Aurobindo',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Aurobindo',
    price: {
      amount: 13.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG56',
    name: 'Dorzolamide E Timololo Sandoz',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Sandoz',
    price: {
      amount: 18.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG57',
    name: 'Dorzolamide Mylan Generics',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 13.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG58',
    name: 'Dorzonorm',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Bruschettini',
    price: {
      amount: 13.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG59',
    name: 'Dorzostill',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Alfa Intes',
    price: {
      amount: 13.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG60',
    name: 'Dropilton 2%',
    activeIngredient: 'Pilocarpina cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'cholinergic-agonists',
    description: 'Agonista colinergico che aumenta il deflusso dell\'umore acqueo attraverso il trabecolato e riduce la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato 3-4 volte al giorno.',
    sideEffects: 'Miosi, visione offuscata, dolore oculare, mal di testa, spasmo accomodativo, iperemia congiuntivale.',
    contraindications: 'Irite acuta, uveite anteriore, alcune forme di glaucoma secondario, infiammazioni acute del segmento anteriore.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 10.40,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG61',
    name: 'Droplacomb',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 18.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG62',
    name: 'Droplatan',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 16.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG63',
    name: 'Droptimol',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG64',
    name: 'Dunaflot',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 16.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG65',
    name: 'Equiton - Antiglaucoma',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 12.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG66',
    name: 'Fixapost',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Thea Farma',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG67',
    name: 'Ganfort - Collirio',
    activeIngredient: 'Bimatoprost/Timololo maleato',
    concentration: '0.03%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 23.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG68',
    name: 'Iopidine',
    activeIngredient: 'Apraclonidina cloridrato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 16.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG69',
    name: 'Latafix',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 16.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG70',
    name: 'Latanoprost + Timololo Aurobindo Italia',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Aurobindo',
    price: {
      amount: 21.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG71',
    name: 'Latanoprost + Timololo EG',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG72',
    name: 'Latanoprost + Timololo Zentiva',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 21.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG73',
    name: 'Latanoprost Aurobindo',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Aurobindo',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG74',
    name: 'Latanoprost EG',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 16.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG75',
    name: 'Latanoprost Mylan Generics Italia',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG76',
    name: 'Latanoprost Pensa Pharma',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Pensa Pharma',
    price: {
      amount: 15.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG77',
    name: 'Latanoprost Ratiopharm Italia',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Ratiopharm',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG78',
    name: 'Latanoprost Sandoz',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Sandoz',
    price: {
      amount: 16.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG79',
    name: 'Latanoprost SIFI',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'SIFI',
    price: {
      amount: 16.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG80',
    name: 'Latanoprost Zentiva',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 15.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG81',
    name: 'Latanostill',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Alfa Intes',
    price: {
      amount: 16.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG82',
    name: 'Latatim',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG83',
    name: 'Latay - Collirio',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 16.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG84',
    name: 'Leviosa',
    activeIngredient: 'Levobunololo cloridrato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 12.40,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG85',
    name: 'Levodrop',
    activeIngredient: 'Levobunololo cloridrato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG86',
    name: 'Loyada - Collirio',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Bruschettini',
    price: {
      amount: 16.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG87',
    name: 'Lumigan - Collirio',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 17.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG88',
    name: 'Monoprost',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare. Formulazione senza conservanti in monodose.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Thea Farma',
    price: {
      amount: 18.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG89',
    name: 'Oflaton',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Oftalmopharma',
    price: {
      amount: 16.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG90',
    name: 'Pilocarpina Farmigea',
    activeIngredient: 'Pilocarpina cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'cholinergic-agonists',
    description: 'Agonista colinergico che aumenta il deflusso dell\'umore acqueo attraverso il trabecolato e riduce la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato 3-4 volte al giorno.',
    sideEffects: 'Miosi, visione offuscata, dolore oculare, mal di testa, spasmo accomodativo, iperemia congiuntivale.',
    contraindications: 'Irite acuta, uveite anteriore, alcune forme di glaucoma secondario, infiammazioni acute del segmento anteriore.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 10.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG91',
    name: 'Roclanda',
    activeIngredient: 'Latanoprost/Netarsudil',
    concentration: '0.005%/0.02%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un inibitore della Rho chinasi che riduce la pressione intraoculare aumentando il deflusso uveosclerale e trabecolare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, dolore oculare, cornea verticillata, emorragia congiuntivale, visione offuscata.',
    contraindications: 'Ipersensibilità ai principi attivi o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Aerie Pharmaceuticals',
    price: {
      amount: 25.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG92',
    name: 'Saflutan',
    activeIngredient: 'Tafluprost',
    concentration: '0.0015%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, prurito, irritazione, dolore, secchezza oculare, sensazione di corpo estraneo, cambiamenti nella pigmentazione dell\'iride e delle ciglia.',
    contraindications: 'Ipersensibilità al tafluprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Santen',
    price: {
      amount: 22.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG93',
    name: 'Simbrinza',
    activeIngredient: 'Brinzolamide/Brimonidina tartrato',
    concentration: '1%/0.2%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un agonista alfa-2 adrenergico che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, visione offuscata, disgeusia (sapore amaro), secchezza oculare, sonnolenza.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, ipersensibilità ai principi attivi, insufficienza renale grave.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 21.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG94',
    name: 'Tidocomb',
    activeIngredient: 'Dorzolamide cloridrato/Timololo maleato',
    concentration: '2%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, visione offuscata, iperemia congiuntivale, bradicardia.',
    contraindications: 'Asma bronchiale, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 18.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG95',
    name: 'Timod',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Sooft Italia',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG96',
    name: 'Timogel',
    activeIngredient: 'Timololo maleato',
    concentration: '0.1%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo in formulazione gel che riduce la pressione intraoculare diminuendo la produzione di umore acqueo. La formulazione gel permette una somministrazione una volta al giorno.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, al mattino.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Thea Farma',
    price: {
      amount: 14.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG97',
    name: 'Timolabak',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo. Formulazione senza conservanti.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Thea Farma',
    price: {
      amount: 13.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG98',
    name: 'Timololo Omnivision',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Omnivision',
    price: {
      amount: 12.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG99',
    name: 'Timoptol',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Santen',
    price: {
      amount: 12.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG100',
    name: 'Timoptol XE',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo in formulazione gel che riduce la pressione intraoculare diminuendo la produzione di umore acqueo. La formulazione gel permette una somministrazione una volta al giorno.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, al mattino.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Santen',
    price: {
      amount: 14.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG101',
    name: 'Traglasin',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 17.80,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG102',
    name: 'Travatan',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 18.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG103',
    name: 'Traviop',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 17.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG104',
    name: 'Travofix',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 17.60,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG105',
    name: 'Travoprost DOC Generici',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'DOC Generici',
    price: {
      amount: 17.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG106',
    name: 'Travoprost E Timololo EG',
    activeIngredient: 'Travoprost/Timololo maleato',
    concentration: '0.004%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 22.60,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG107',
    name: 'Travoprost E Timololo Mylan',
    activeIngredient: 'Travoprost/Timololo maleato',
    concentration: '0.004%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 22.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG108',
    name: 'Travoprost E Timololo Zentiva',
    activeIngredient: 'Travoprost/Timololo maleato',
    concentration: '0.004%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 22.40,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG109',
    name: 'Travoprost EG',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'EG S.p.A.',
    price: {
      amount: 17.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG110',
    name: 'Travoprost Mylan',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Mylan',
    price: {
      amount: 17.40,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG111',
    name: 'Travoprost Teva',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Teva',
    price: {
      amount: 17.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG112',
    name: 'Travoprost Zentiva',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Zentiva',
    price: {
      amount: 17.30,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG113',
    name: 'Trusopt',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Santen',
    price: {
      amount: 13.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG114',
    name: 'Visuplain',
    activeIngredient: 'Bimatoprost',
    concentration: '0.03%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride e della palpebra, prurito oculare.',
    contraindications: 'Ipersensibilità al bimatoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 16.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG115',
    name: 'Xalacom',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Pfizer',
    price: {
      amount: 22.90,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG116',
    name: 'Xalost',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 16.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG117',
    name: 'Ximluci',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Pharmathen',
    price: {
      amount: 16.00,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG118',
    name: 'Ocusynt',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Syntho Pharmaceuticals',
    price: {
      amount: 16.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG119',
    name: 'Omkipo',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Omikron Italia',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG120',
    name: 'Tanof',
    activeIngredient: 'Latanoprost/Timololo maleato',
    concentration: '0.005%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmila-Thea Farmaceutici',
    price: {
      amount: 22.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG121',
    name: 'Visublend',
    activeIngredient: 'Bimatoprost/Timololo maleato',
    concentration: '0.03%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un analogo delle prostaglandine e un beta-bloccante che riduce la pressione intraoculare aumentando il deflusso uveosclerale e diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la mattina.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito, bradicardia.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, ipersensibilità ai componenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Visufarma',
    price: {
      amount: 23.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG122',
    name: 'Zoliop',
    activeIngredient: 'Dorzolamide cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'carbonic-anhydrase-inhibitors',
    description: 'Inibitore dell\'anidrasi carbonica che riduce la secrezione di umore acqueo inibendo l\'anidrasi carbonica II nei processi ciliari.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno.',
    sideEffects: 'Bruciore oculare, prurito, sapore amaro, cheratite puntata superficiale, reazioni allergiche.',
    contraindications: 'Ipersensibilità a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Pharmathen',
    price: {
      amount: 13.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG123',
    name: 'Genisia',
    activeIngredient: 'Timololo maleato',
    concentration: '0.5%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG124',
    name: 'Glaubrim',
    activeIngredient: 'Brimonidina tartrato',
    concentration: '0.2%',
    category: 'anti-glaucoma',
    subcategory: 'alpha-agonists',
    description: 'Agonista selettivo dei recettori alfa-2 adrenergici che riduce la pressione intraoculare diminuendo la produzione di umore acqueo e aumentando il deflusso uveosclerale.',
    dosage: 'Una goccia nell\'occhio(i) interessato tre volte al giorno, a circa 8 ore di distanza.',
    sideEffects: 'Iperemia oculare, bruciore, prurito, secchezza oculare, mal di testa, affaticamento, sonnolenza, secchezza delle fauci.',
    contraindications: 'Pazienti in terapia con inibitori delle monoamino ossidasi, neonati e bambini piccoli, ipersensibilità al principio attivo.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 14.70,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG125',
    name: 'Menezon',
    activeIngredient: 'Travoprost',
    concentration: '0.004%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Iperemia congiuntivale, crescita delle ciglia, cambiamenti nella pigmentazione dell\'iride, bruciore, prurito.',
    contraindications: 'Ipersensibilità al travoprost o a qualsiasi componente della formulazione, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Medivis',
    price: {
      amount: 17.60,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG126',
    name: 'Galaxia',
    activeIngredient: 'Latanoprost',
    concentration: '0.005%',
    category: 'anti-glaucoma',
    subcategory: 'prostaglandins',
    description: 'Analogo delle prostaglandine che aumenta il deflusso uveosclerale per ridurre la pressione intraoculare.',
    dosage: 'Una goccia nell\'occhio(i) interessato una volta al giorno, preferibilmente la sera.',
    sideEffects: 'Cambiamenti nella pigmentazione dell\'iride, crescita delle ciglia, iperemia congiuntivale, irritazione oculare.',
    contraindications: 'Ipersensibilità al latanoprost o a qualsiasi componente della formulazione.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 16.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG127',
    name: 'Fortidose',
    activeIngredient: 'Carteololo cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.10,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AG128',
    name: 'Fortinol - Collirio',
    activeIngredient: 'Carteololo cloridrato',
    concentration: '2%',
    category: 'anti-glaucoma',
    subcategory: 'beta-blockers',
    description: 'Beta-bloccante non selettivo che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Bruciore, prurito, visione offuscata, occhi secchi, reazioni allergiche, bradicardia, broncospasmo.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 12.20,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
  {
    id: 'AI12',
    name: 'Brintidox',
    activeIngredient: 'Brinzolamide/Timololo maleato',
    concentration: '1%/0.5%',
    category: 'anti-glaucoma',
    subcategory: 'combinations',
    description: 'Combinazione di un inibitore dell\'anidrasi carbonica e un beta-bloccante che riduce la pressione intraoculare diminuendo la produzione di umore acqueo.',
    dosage: 'Una goccia nell\'occhio(i) interessato due volte al giorno.',
    sideEffects: 'Visione offuscata, disgeusia (sapore amaro), secchezza oculare, irritazione oculare, bradicardia, ipotensione.',
    contraindications: 'Asma, BPCO grave, bradicardia sinusale, blocco cardiaco, insufficienza cardiaca, acidosi ipercloremico.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciaigea.com/img/p/3/0/5/2/3052-large_default.jpg',
    requiresPrescription: true,
    manufacturer: 'DOC Generici',
    price: {
      amount: 11.50,
      currency: '€',
      source: 'Farmacia IGEA'
    }
  },
];

export default antiglaucomaMedications;