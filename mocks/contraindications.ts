// Definizione delle controindicazioni dettagliate per farmaci oculistici
// Questo file contiene informazioni dettagliate sulle controindicazioni dei farmaci oculistici

export interface ContraindicationDetail {
  id: string;
  medicationId: string;
  condition: string;
  description: string;
  severity: 'assoluta' | 'relativa';
  recommendation: string;
  alternativeTreatments?: string[];
}

export const contraindicationsDetails: ContraindicationDetail[] = [
  // Beta-bloccanti (Timololo)
  {
    id: 'ci-001',
    medicationId: 'timolol-maleate-0.5',
    condition: 'Asma bronchiale',
    description: 'I beta-bloccanti, anche in formulazione oftalmica, possono causare broncospasmo e peggiorare l\'asma.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con asma attiva o storia di asma grave.',
    alternativeTreatments: ['Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica', 'Agonisti alfa-2']
  },
  {
    id: 'ci-002',
    medicationId: 'timolol-maleate-0.5',
    condition: 'BPCO grave',
    description: 'I beta-bloccanti possono peggiorare l\'ostruzione delle vie aeree nei pazienti con BPCO grave.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con BPCO grave.',
    alternativeTreatments: ['Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica', 'Agonisti alfa-2']
  },
  {
    id: 'ci-003',
    medicationId: 'timolol-maleate-0.5',
    condition: 'Bradicardia sinusale',
    description: 'I beta-bloccanti possono ulteriormente rallentare la frequenza cardiaca nei pazienti con bradicardia preesistente.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con frequenza cardiaca inferiore a 60 battiti al minuto.',
    alternativeTreatments: ['Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica']
  },
  {
    id: 'ci-004',
    medicationId: 'timolol-maleate-0.5',
    condition: 'Blocco cardiaco di secondo o terzo grado',
    description: 'I beta-bloccanti possono peggiorare i disturbi della conduzione cardiaca.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con blocco atrioventricolare di secondo o terzo grado non controllato da pacemaker.',
    alternativeTreatments: ['Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica']
  },
  {
    id: 'ci-005',
    medicationId: 'timolol-maleate-0.5',
    condition: 'Insufficienza cardiaca non controllata',
    description: 'I beta-bloccanti possono peggiorare l\'insufficienza cardiaca se non adeguatamente controllata.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con insufficienza cardiaca non compensata.',
    alternativeTreatments: ['Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica']
  },
  
  // Analoghi delle prostaglandine (Latanoprost)
  {
    id: 'ci-006',
    medicationId: 'latanoprost-0.005',
    condition: 'Ipersensibilità al latanoprost',
    description: 'Reazioni allergiche al principio attivo o a qualsiasi componente della formulazione.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con ipersensibilità nota al latanoprost o a qualsiasi componente della formulazione.',
    alternativeTreatments: ['Beta-bloccanti', 'Inibitori dell\'anidrasi carbonica', 'Agonisti alfa-2']
  },
  {
    id: 'ci-007',
    medicationId: 'latanoprost-0.005',
    condition: 'Gravidanza',
    description: 'Gli analoghi delle prostaglandine possono avere effetti teratogeni e indurre contrazioni uterine.',
    severity: 'relativa',
    recommendation: 'Evitare l\'uso durante la gravidanza, specialmente nel primo trimestre. Utilizzare solo se il beneficio potenziale giustifica il rischio potenziale per il feto.',
    alternativeTreatments: ['Beta-bloccanti (alcuni)', 'Inibitori dell\'anidrasi carbonica topici']
  },
  {
    id: 'ci-008',
    medicationId: 'latanoprost-0.005',
    condition: 'Uveite attiva',
    description: 'Gli analoghi delle prostaglandine possono peggiorare l\'infiammazione intraoculare.',
    severity: 'relativa',
    recommendation: 'Usare con cautela in pazienti con storia di uveite. Monitorare attentamente i segni di infiammazione durante il trattamento.',
    alternativeTreatments: ['Beta-bloccanti', 'Inibitori dell\'anidrasi carbonica']
  },
  {
    id: 'ci-009',
    medicationId: 'latanoprost-0.005',
    condition: 'Edema maculare',
    description: 'Gli analoghi delle prostaglandine possono causare o peggiorare l\'edema maculare, specialmente in pazienti afachici o pseudofachici con rottura della capsula posteriore.',
    severity: 'relativa',
    recommendation: 'Usare con cautela in pazienti afachici, pseudofachici con rottura della capsula posteriore o con fattori di rischio noti per l\'edema maculare.',
    alternativeTreatments: ['Beta-bloccanti', 'Inibitori dell\'anidrasi carbonica', 'Agonisti alfa-2']
  },
  
  // Inibitori dell'anidrasi carbonica (Dorzolamide)
  {
    id: 'ci-010',
    medicationId: 'dorzolamide-2',
    condition: 'Ipersensibilità alla dorzolamide',
    description: 'Reazioni allergiche al principio attivo o a qualsiasi componente della formulazione.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con ipersensibilità nota alla dorzolamide o a qualsiasi componente della formulazione.',
    alternativeTreatments: ['Beta-bloccanti', 'Analoghi delle prostaglandine', 'Agonisti alfa-2']
  },
  {
    id: 'ci-011',
    medicationId: 'dorzolamide-2',
    condition: 'Insufficienza renale grave',
    description: 'La dorzolamide e i suoi metaboliti vengono escreti principalmente dai reni. In caso di insufficienza renale grave, può verificarsi un accumulo del farmaco.',
    severity: 'relativa',
    recommendation: 'Usare con cautela in pazienti con insufficienza renale grave (clearance della creatinina <30 ml/min). Monitorare attentamente la funzione renale.',
    alternativeTreatments: ['Beta-bloccanti', 'Analoghi delle prostaglandine', 'Agonisti alfa-2']
  },
  {
    id: 'ci-012',
    medicationId: 'dorzolamide-2',
    condition: 'Acidosi ipercloremica',
    description: 'Gli inibitori dell\'anidrasi carbonica possono causare o peggiorare l\'acidosi metabolica.',
    severity: 'relativa',
    recommendation: 'Usare con cautela in pazienti con tendenza all\'acidosi. Monitorare l\'equilibrio acido-base in pazienti a rischio.',
    alternativeTreatments: ['Beta-bloccanti', 'Analoghi delle prostaglandine', 'Agonisti alfa-2']
  },
  
  // Agonisti alfa-2 (Brimonidina)
  {
    id: 'ci-013',
    medicationId: 'brimonidine-0.2',
    condition: 'Terapia con inibitori delle monoamino ossidasi',
    description: 'Potenziale interazione tra brimonidina e inibitori delle MAO con rischio di crisi ipertensive.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti in terapia con inibitori delle MAO.',
    alternativeTreatments: ['Beta-bloccanti', 'Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica']
  },
  {
    id: 'ci-014',
    medicationId: 'brimonidine-0.2',
    condition: 'Neonati e bambini piccoli',
    description: 'Rischio di depressione del sistema nervoso centrale, apnea, bradicardia, ipotensione e ipotermia nei neonati e nei bambini piccoli a causa dell\'immaturità della barriera emato-encefalica.',
    severity: 'assoluta',
    recommendation: 'Controindicato nei bambini di età inferiore ai 2 anni. Usare con cautela nei bambini di età superiore.',
    alternativeTreatments: ['Beta-bloccanti (in alcuni casi)', 'Inibitori dell\'anidrasi carbonica']
  },
  {
    id: 'ci-015',
    medicationId: 'brimonidine-0.2',
    condition: 'Ipersensibilità alla brimonidina',
    description: 'Reazioni allergiche al principio attivo o a qualsiasi componente della formulazione.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con ipersensibilità nota alla brimonidina o a qualsiasi componente della formulazione.',
    alternativeTreatments: ['Beta-bloccanti', 'Analoghi delle prostaglandine', 'Inibitori dell\'anidrasi carbonica']
  },
  
  // Corticosteroidi (Desametasone)
  {
    id: 'ci-016',
    medicationId: 'dexamethasone-0.1',
    condition: 'Cheratite erpetica',
    description: 'I corticosteroidi possono peggiorare l\'infezione da herpes simplex e portare a ulcerazione corneale e potenziale perforazione.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con cheratite erpetica attiva.',
    alternativeTreatments: ['Farmaci antivirali topici e sistemici']
  },
  {
    id: 'ci-017',
    medicationId: 'dexamethasone-0.1',
    condition: 'Infezioni oculari fungine',
    description: 'I corticosteroidi possono sopprimere la risposta immunitaria locale e peggiorare le infezioni fungine.',
    severity: 'assoluta',
    recommendation: 'Evitare l\'uso in pazienti con infezioni oculari fungine sospette o confermate.',
    alternativeTreatments: ['Farmaci antifungini topici e sistemici']
  },
  {
    id: 'ci-018',
    medicationId: 'dexamethasone-0.1',
    condition: 'Glaucoma ad angolo aperto',
    description: 'I corticosteroidi possono aumentare la pressione intraoculare e peggiorare il glaucoma preesistente.',
    severity: 'relativa',
    recommendation: 'Usare con estrema cautela e solo sotto stretto controllo oftalmologico in pazienti con glaucoma. Monitorare frequentemente la pressione intraoculare.',
    alternativeTreatments: ['Farmaci antinfiammatori non steroidei topici']
  }
];

// Funzione per ottenere le controindicazioni di un farmaco specifico
export function getContraindicationsForMedication(medicationId: string): ContraindicationDetail[] {
  return contraindicationsDetails.filter(contraindication => contraindication.medicationId === medicationId);
}

// Funzione per ottenere le controindicazioni per severità
export function getContraindicationsBySeverity(severity: 'assoluta' | 'relativa'): ContraindicationDetail[] {
  return contraindicationsDetails.filter(contraindication => contraindication.severity === severity);
}
