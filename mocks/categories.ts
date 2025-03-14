import { Category } from '@/types/medication';
import { Eye, Shield, Flame, Flower, CircleDot, Droplets, Pill, Microscope, AlertCircle, Syringe, Thermometer } from 'lucide-react-native';

export const categories: Category[] = [
  {
    id: 'anti-glaucoma',
    name: 'Antiglaucoma',
    description: 'Farmaci per il trattamento del glaucoma e dell\'ipertensione oculare',
    icon: Eye,
    color: '#4CAF50',
    medicationCount: 5
  },
  {
    id: 'anti-infective',
    name: 'Antinfettivi',
    description: 'Antibiotici, antivirali e antifungini per il trattamento delle infezioni oculari',
    icon: Shield,
    color: '#2196F3',
    medicationCount: 7
  },
  {
    id: 'anti-inflammatory',
    name: 'Antinfiammatori',
    description: 'Corticosteroidi e FANS per il trattamento dell\'infiammazione oculare',
    icon: Flame,
    color: '#F44336',
    medicationCount: 2
  },
  {
    id: 'anti-allergic',
    name: 'Antiallergici',
    description: 'Antistaminici e stabilizzatori dei mastociti per il trattamento delle allergie oculari',
    icon: Flower,
    color: '#9C27B0',
    medicationCount: 4
  },
  {
    id: 'mydriatic-cycloplegic',
    name: 'Midriatici e cicloplegici',
    description: 'Farmaci per la dilatazione pupillare e la paralisi dell\'accomodazione',
    icon: CircleDot,
    color: '#FF9800',
    medicationCount: 3
  },
  {
    id: 'antiseptic',
    name: 'Antisettici',
    description: 'Soluzioni antisettiche per la disinfezione della superficie oculare',
    icon: Thermometer,
    color: '#607D8B',
    medicationCount: 3
  },
  {
    id: 'artificial-tears',
    name: 'Lacrime artificiali',
    description: 'Sostituti lacrimali per il trattamento della secchezza oculare',
    icon: Droplets,
    color: '#00BCD4',
    medicationCount: 5
  },
  {
    id: 'supplements',
    name: 'Integratori',
    description: 'Integratori alimentari per la salute degli occhi',
    icon: Pill,
    color: '#8BC34A',
    medicationCount: 5
  },
  {
    id: 'diagnostic',
    name: 'Diagnostici',
    description: 'Coloranti e agenti di contrasto per la diagnostica oculare',
    icon: Microscope,
    color: '#795548',
    medicationCount: 3
  },
  {
    id: 'anesthetic',
    name: 'Anestetici',
    description: 'Anestetici locali per procedure oftalmiche',
    icon: AlertCircle,
    color: '#FF5722',
    medicationCount: 3
  },
  {
    id: 'intravitreal',
    name: 'Intravitreali',
    description: 'Farmaci per iniezione intravitreale',
    icon: Syringe,
    color: '#673AB7',
    medicationCount: 11
  }
];