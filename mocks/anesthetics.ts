import { Medication } from '@/types/medication';

// Anesthetic medications
const anestheticMedications: Medication[] = [
  {
    id: '300',
    name: 'Tetracaine',
    activeIngredient: 'Tetracaine cloridrato',
    concentration: '0.5%',
    category: 'anesthetic',
    subcategory: 'topical-anesthetics',
    description: 'Anestetico locale di tipo estere che blocca i canali del sodio, impedendo la generazione e la conduzione degli impulsi nervosi. Utilizzato per l\'anestesia di superficie in procedure diagnostiche e chirurgiche oftalmiche.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato prima della procedura. L\'effetto anestetico inizia entro 30 secondi e dura circa 15-20 minuti.',
    sideEffects: 'Bruciore transitorio all\'instillazione, iperemia congiuntivale, cheratite puntata superficiale, ritardo nella guarigione delle ferite corneali.',
    contraindications: 'Ipersensibilità alla tetracaina o ad altri anestetici locali di tipo estere, erosioni epiteliali corneali preesistenti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/tetracaine.jpg',
    characteristics: ['rapid-onset', 'short-acting'],
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 8.50,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '301',
    name: 'Novesina',
    activeIngredient: 'Oxybuprocaine cloridrato',
    concentration: '0.4%',
    category: 'anesthetic',
    subcategory: 'topical-anesthetics',
    description: 'Anestetico locale di tipo estere che blocca i canali del sodio, impedendo la generazione e la conduzione degli impulsi nervosi. Utilizzato per l\'anestesia di superficie in procedure diagnostiche e chirurgiche oftalmiche.',
    dosage: 'Una goccia nell\'occhio(i) interessato prima della procedura. L\'effetto anestetico inizia entro 30 secondi e dura circa 15-30 minuti.',
    sideEffects: 'Bruciore transitorio all\'instillazione, iperemia congiuntivale, cheratite puntata superficiale, ritardo nella guarigione delle ferite corneali.',
    contraindications: 'Ipersensibilità all\'oxybuprocaine o ad altri anestetici locali di tipo estere, erosioni epiteliali corneali preesistenti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/novesina.jpg',
    characteristics: ['rapid-onset', 'single-dose'],
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 7.80,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '302',
    name: 'Proparacaine',
    activeIngredient: 'Proparacaine cloridrato',
    concentration: '0.5%',
    category: 'anesthetic',
    subcategory: 'topical-anesthetics',
    description: 'Anestetico locale di tipo estere che blocca i canali del sodio, impedendo la generazione e la conduzione degli impulsi nervosi. Utilizzato per l\'anestesia di superficie in procedure diagnostiche e chirurgiche oftalmiche.',
    dosage: 'Una o due gocce nell\'occhio(i) interessato prima della procedura. L\'effetto anestetico inizia entro 30 secondi e dura circa 15 minuti.',
    sideEffects: 'Bruciore transitorio all\'instillazione, iperemia congiuntivale, cheratite puntata superficiale, ritardo nella guarigione delle ferite corneali.',
    contraindications: 'Ipersensibilità alla proparacaine o ad altri anestetici locali di tipo estere, erosioni epiteliali corneali preesistenti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/proparacaine.jpg',
    characteristics: ['rapid-onset', 'preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 8.20,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '303',
    name: 'Xylocaine',
    activeIngredient: 'Lidocaina cloridrato',
    concentration: '2%',
    category: 'anesthetic',
    subcategory: 'injectable-anesthetics',
    description: 'Anestetico locale di tipo amidico che blocca i canali del sodio, impedendo la generazione e la conduzione degli impulsi nervosi. Utilizzato per l\'anestesia locale in procedure chirurgiche oftalmiche.',
    dosage: 'Iniezione sottotenoniana o peribulbare di 2-5 ml a seconda della procedura. L\'effetto anestetico inizia entro 5 minuti e dura circa 1-2 ore.',
    sideEffects: 'Dolore all\'iniezione, emorragia, edema, ptosi transitoria, diplopia, aumento della pressione intraoculare, reazioni allergiche.',
    contraindications: 'Ipersensibilità alla lidocaina o ad altri anestetici locali di tipo amidico, disturbi della conduzione cardiaca, epilessia non controllata.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/xylocaine.jpg',
    characteristics: ['injectable', 'medium-acting'],
    requiresPrescription: true,
    manufacturer: 'AstraZeneca',
    price: {
      amount: 5.50,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  
  // Nuovo farmaco anestetico
  {
    id: '304',
    name: 'Ophtesic',
    activeIngredient: 'Lidocaina cloridrato',
    concentration: '4%',
    category: 'anesthetic',
    subcategory: 'topical-anesthetics',
    description: 'Anestetico locale di tipo amidico in gel oftalmico che blocca i canali del sodio, impedendo la generazione e la conduzione degli impulsi nervosi. Utilizzato per l\'anestesia di superficie in procedure diagnostiche e chirurgiche oftalmiche, con durata d\'azione prolungata grazie alla formulazione in gel.',
    dosage: 'Applicare una piccola quantità (circa 0.5 cm) nel sacco congiuntivale inferiore 5-10 minuti prima della procedura. L\'effetto anestetico inizia entro 1-2 minuti e dura circa 30-45 minuti.',
    sideEffects: 'Bruciore transitorio all\'instillazione, iperemia congiuntivale, cheratite puntata superficiale, visione offuscata temporanea, ritardo nella guarigione delle ferite corneali.',
    contraindications: 'Ipersensibilità alla lidocaina o ad altri anestetici locali di tipo amidico, erosioni epiteliali corneali preesistenti, uso prolungato o ripetuto.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['gel-formulation', 'longer-acting', 'amide-type'],
    requiresPrescription: true,
    manufacturer: 'Farmigea',
    price: {
      amount: 9.90,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  }
];

export default anestheticMedications;