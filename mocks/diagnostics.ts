import { Medication } from '@/types/medication';

// Diagnostic medications
const diagnosticMedications: Medication[] = [
  {
    id: '301',
    name: 'Fluorescein',
    activeIngredient: 'Fluoresceina sodica',
    concentration: '2%',
    category: 'diagnostic',
    subcategory: 'dyes',
    description: 'Colorante idrosolubile che emette fluorescenza verde quando esposto alla luce blu. Utilizzato per la valutazione dell\'integrità dell\'epitelio corneale, la misurazione della pressione intraoculare con tonometria ad applanazione, la valutazione del film lacrimale e l\'angiografia retinica.',
    dosage: 'Per uso topico: una goccia o l\'applicazione di una striscia di carta impregnata nell\'occhio(i) interessato. Per angiografia: iniezione endovenosa di 5 ml di soluzione al 10%.',
    sideEffects: 'Colorazione temporanea della congiuntiva e della pelle, visione offuscata transitoria. Per uso endovenoso: nausea, vomito, reazioni allergiche, shock anafilattico (raro).',
    contraindications: 'Ipersensibilità alla fluoresceina o agli eccipienti. Per uso endovenoso: gravidanza, allattamento, insufficienza renale grave.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/fluorescein.jpg',
    characteristics: ['fluorescent dye', 'strips available'],
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 6.50,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '302',
    name: 'Rose Bengal',
    activeIngredient: 'Rosa bengala',
    concentration: '1%',
    category: 'diagnostic',
    subcategory: 'dyes',
    description: 'Colorante che si lega alle cellule epiteliali devitalizzate o degenerate della cornea e della congiuntiva. Utilizzato per la valutazione delle alterazioni della superficie oculare, in particolare nella sindrome dell\'occhio secco.',
    dosage: 'Una goccia nell\'occhio(i) interessato o l\'applicazione di una striscia di carta impregnata.',
    sideEffects: 'Bruciore intenso all\'instillazione, colorazione temporanea della congiuntiva e delle palpebre.',
    contraindications: 'Ipersensibilità al rosa bengala o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/rose-bengal.jpg',
    characteristics: ['vital dye', 'strips available'],
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 7.20,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '303',
    name: 'Lissamine Green',
    activeIngredient: 'Verde di lissamina',
    concentration: '1%',
    category: 'diagnostic',
    subcategory: 'dyes',
    description: 'Colorante che si lega alle cellule epiteliali devitalizzate o degenerate della cornea e della congiuntiva, simile al rosa bengala ma meno irritante. Utilizzato per la valutazione delle alterazioni della superficie oculare, in particolare nella sindrome dell\'occhio secco.',
    dosage: 'Una goccia nell\'occhio(i) interessato o l\'applicazione di una striscia di carta impregnata.',
    sideEffects: 'Lieve bruciore all\'instillazione, colorazione temporanea della congiuntiva.',
    contraindications: 'Ipersensibilità al verde di lissamina o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/lissamine-green.jpg',
    characteristics: ['vital dye', 'strips available', 'less irritating'],
    requiresPrescription: true,
    manufacturer: 'HUB Pharmaceuticals',
    price: {
      amount: 7.50,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '304',
    name: 'ICG',
    activeIngredient: 'Verde indocianina',
    concentration: '25 mg',
    category: 'diagnostic',
    subcategory: 'contrast-agents',
    description: 'Colorante fluorescente che si lega alle proteine plasmatiche e rimane confinato nei vasi sanguigni. Utilizzato per l\'angiografia coroideale, che permette di visualizzare la circolazione coroideale e le anomalie vascolari sottoretinici.',
    dosage: 'Iniezione endovenosa di 25 mg diluiti in 5 ml di solvente.',
    sideEffects: 'Nausea, vomito, prurito, orticaria, reazioni allergiche, shock anafilattico (raro), colorazione temporanea della pelle e delle urine.',
    contraindications: 'Ipersensibilità al verde indocianina, allo iodio o agli eccipienti, ipertiroidismo, adenoma tiroideo, gravidanza, allattamento, insufficienza epatica o renale grave.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/icg.jpg',
    characteristics: ['fluorescent dye', 'powder for solution'],
    requiresPrescription: true,
    manufacturer: 'Akorn',
    price: {
      amount: 95.00,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  
  // Nuovo farmaco diagnostico
  {
    id: '305',
    name: 'Flurekain',
    activeIngredient: 'Fluoresceina sodica, Oxibuprocaina cloridrato',
    concentration: '0.25%/0.4%',
    category: 'diagnostic',
    subcategory: 'combined-diagnostic',
    description: 'Collirio diagnostico che combina un colorante (fluoresceina) e un anestetico locale (oxibuprocaina). Utilizzato per la valutazione dell\'integrità dell\'epitelio corneale e la tonometria ad applanazione, con il vantaggio dell\'effetto anestetico che riduce il fastidio durante la procedura.',
    dosage: 'Una goccia nell\'occhio(i) interessato prima della procedura diagnostica.',
    sideEffects: 'Bruciore transitorio all\'instillazione, colorazione temporanea della congiuntiva e delle lacrime, visione offuscata transitoria, possibile ritardo nella guarigione delle ferite corneali.',
    contraindications: 'Ipersensibilità alla fluoresceina, all\'oxibuprocaina o ad altri anestetici locali di tipo estere, erosioni epiteliali corneali preesistenti, uso prolungato.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['fluorescent dye', 'anesthetic', 'combined'],
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 8.90,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  }
];

export default diagnosticMedications;