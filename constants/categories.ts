import { Category } from '@/types/medication';

// Definizione delle categorie di farmaci oculistici
export const categories = [
  {
    id: 'anti-glaucoma',
    name: 'Antiglaucoma',
    description: 'Farmaci per il trattamento del glaucoma e dell\'ipertensione oculare',
    color: '#4CAF50',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',
    count: 168
  },
  {
    id: 'anti-infective',
    name: 'Antinfettivi',
    description: 'Antibiotici, antivirali e antifungini per il trattamento delle infezioni oculari',
    color: '#2196F3',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    count: 69
  },
  {
    id: 'anti-inflammatory',
    name: 'Antinfiammatori',
    description: 'Corticosteroidi e FANS per il trattamento dell\'infiammazione oculare',
    color: '#F44336',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3004/3004458.png',
    count: 43
  },
  {
    id: 'anti-allergic',
    name: 'Antiallergici',
    description: 'Antistaminici e stabilizzatori dei mastociti per il trattamento delle allergie oculari',
    color: '#9C27B0',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2281/2281832.png',
    count: 36
  },
  {
    id: 'mydriatic-cycloplegic',
    name: 'Midriatici e cicloplegici',
    description: 'Farmaci per la dilatazione pupillare e la paralisi dell\'accomodazione',
    color: '#FF9800',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3100/3100425.png',
    count: 14
  },
  {
    id: 'antiseptic',
    name: 'Antisettici',
    description: 'Soluzioni antisettiche per la disinfezione della superficie oculare',
    color: '#607D8B',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3004/3004458.png',
    count: 8
  },
  {
    id: 'artificial-tears',
    name: 'Lacrime artificiali',
    description: 'Sostituti lacrimali per il trattamento della secchezza oculare',
    color: '#00BCD4',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3036/3036479.png',
    count: 82
  },
  {
    id: 'supplements',
    name: 'Integratori',
    description: 'Integratori alimentari per la salute degli occhi',
    color: '#8BC34A',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3140/3140407.png',
    count: 100
  },
  {
    id: 'diagnostic',
    name: 'Diagnostici',
    description: 'Coloranti e agenti di contrasto per la diagnostica oculare',
    color: '#795548',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3004/3004155.png',
    count: 5
  },
  {
    id: 'anesthetic',
    name: 'Anestetici',
    description: 'Anestetici locali per procedure oftalmiche',
    color: '#FF5722',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3004/3004447.png',
    count: 5
  },
  {
    id: 'intravitreal',
    name: 'Intravitreali',
    description: 'Farmaci per iniezione intravitreale',
    color: '#673AB7',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3004/3004155.png',
    count: 11
  }
];
