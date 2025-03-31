// Definizione delle interazioni tra farmaci oculistici
// Questo file contiene informazioni dettagliate sulle interazioni tra farmaci oculistici

export interface DrugInteraction {
  id: string;
  medicationId: string;
  interactingDrug: string;
  severity: 'lieve' | 'moderata' | 'grave';
  description: string;
  recommendation: string;
}

export const drugInteractions: DrugInteraction[] = [
  // Beta-bloccanti (Timololo, Betaxololo, ecc.)
  {
    id: 'int-001',
    medicationId: 'timolol-maleate-0.5',
    interactingDrug: 'Beta-bloccanti sistemici',
    severity: 'moderata',
    description: 'L\'uso concomitante di beta-bloccanti oftalmici e sistemici può potenziare gli effetti sistemici come bradicardia, ipotensione e broncospasmo.',
    recommendation: 'Monitorare attentamente la pressione arteriosa e la frequenza cardiaca. Considerare una riduzione del dosaggio del beta-bloccante sistemico.'
  },
  {
    id: 'int-002',
    medicationId: 'timolol-maleate-0.5',
    interactingDrug: 'Calcio-antagonisti',
    severity: 'moderata',
    description: 'La combinazione può causare ipotensione, bradicardia e disturbi della conduzione cardiaca, specialmente con verapamil e diltiazem.',
    recommendation: 'Monitorare la pressione arteriosa e la frequenza cardiaca. Considerare farmaci alternativi se necessario.'
  },
  {
    id: 'int-003',
    medicationId: 'timolol-maleate-0.5',
    interactingDrug: 'Farmaci antiaritmici',
    severity: 'grave',
    description: 'Rischio aumentato di bradicardia, blocco cardiaco e depressione miocardica, specialmente con amiodarone e propafenone.',
    recommendation: 'Evitare l\'uso concomitante quando possibile. Se necessario, monitorare attentamente la funzione cardiaca.'
  },
  {
    id: 'int-004',
    medicationId: 'timolol-maleate-0.5',
    interactingDrug: 'Farmaci per l\'asma',
    severity: 'grave',
    description: 'I beta-bloccanti possono antagonizzare l\'effetto dei broncodilatatori e precipitare il broncospasmo nei pazienti asmatici.',
    recommendation: 'Controindicato nei pazienti con asma o BPCO grave. Considerare beta-bloccanti cardioselettivi se necessario.'
  },
  
  // Inibitori dell'anidrasi carbonica (Dorzolamide, Brinzolamide)
  {
    id: 'int-005',
    medicationId: 'dorzolamide-2',
    interactingDrug: 'Salicilati ad alte dosi',
    severity: 'moderata',
    description: 'Rischio aumentato di acidosi metabolica, specialmente in pazienti con funzione renale compromessa.',
    recommendation: 'Monitorare l\'equilibrio acido-base. Considerare una riduzione del dosaggio dei salicilati.'
  },
  {
    id: 'int-006',
    medicationId: 'dorzolamide-2',
    interactingDrug: 'Diuretici',
    severity: 'lieve',
    description: 'Possibile effetto additivo sulla diuresi e sugli elettroliti sierici.',
    recommendation: 'Monitorare gli elettroliti sierici, specialmente in pazienti anziani o con funzione renale compromessa.'
  },
  
  // Agonisti alfa-2 (Brimonidina)
  {
    id: 'int-007',
    medicationId: 'brimonidine-0.2',
    interactingDrug: 'Inibitori delle monoamino ossidasi',
    severity: 'grave',
    description: 'Rischio di crisi ipertensive dovute all\'inibizione del metabolismo delle catecolamine.',
    recommendation: 'Evitare l\'uso concomitante. Attendere almeno 14 giorni dopo l\'interruzione degli IMAO prima di iniziare la brimonidina.'
  },
  {
    id: 'int-008',
    medicationId: 'brimonidine-0.2',
    interactingDrug: 'Antidepressivi triciclici',
    severity: 'moderata',
    description: 'Possono ridurre l\'efficacia della brimonidina e aumentare il rischio di effetti collaterali sistemici.',
    recommendation: 'Monitorare l\'efficacia del trattamento e considerare alternative se necessario.'
  },
  {
    id: 'int-009',
    medicationId: 'brimonidine-0.2',
    interactingDrug: 'Farmaci con effetto depressivo sul SNC',
    severity: 'moderata',
    description: 'Effetto additivo sulla sedazione e sulla depressione del sistema nervoso centrale.',
    recommendation: 'Usare con cautela. Avvisare i pazienti di evitare attività che richiedono vigilanza fino a quando non sono noti gli effetti della combinazione.'
  },
  
  // Analoghi delle prostaglandine (Latanoprost, Travoprost, Bimatoprost)
  {
    id: 'int-010',
    medicationId: 'latanoprost-0.005',
    interactingDrug: 'Colliri contenenti tiomersal',
    severity: 'lieve',
    description: 'Il tiomersal può precipitare con gli analoghi delle prostaglandine, riducendone l\'efficacia.',
    recommendation: 'Somministrare i colliri a distanza di almeno 5 minuti l\'uno dall\'altro.'
  },
  {
    id: 'int-011',
    medicationId: 'latanoprost-0.005',
    interactingDrug: 'Farmaci antinfiammatori non steroidei topici',
    severity: 'lieve',
    description: 'Possibile riduzione dell\'efficacia ipotensiva degli analoghi delle prostaglandine.',
    recommendation: 'Monitorare la pressione intraoculare per verificare l\'efficacia del trattamento.'
  },
  
  // Corticosteroidi
  {
    id: 'int-012',
    medicationId: 'dexamethasone-0.1',
    interactingDrug: 'Farmaci anticoagulanti',
    severity: 'moderata',
    description: 'Aumentato rischio di sanguinamento dovuto all\'effetto dei corticosteroidi sulla coagulazione.',
    recommendation: 'Monitorare attentamente i parametri della coagulazione e considerare una riduzione del dosaggio degli anticoagulanti se necessario.'
  },
  {
    id: 'int-013',
    medicationId: 'dexamethasone-0.1',
    interactingDrug: 'Farmaci antidiabetici',
    severity: 'moderata',
    description: 'I corticosteroidi possono ridurre l\'efficacia dei farmaci antidiabetici aumentando la glicemia.',
    recommendation: 'Monitorare attentamente la glicemia e considerare un aggiustamento del dosaggio dei farmaci antidiabetici.'
  },
  
  // Midriatici e cicloplegici
  {
    id: 'int-014',
    medicationId: 'tropicamide-1',
    interactingDrug: 'Farmaci anticolinergici',
    severity: 'moderata',
    description: 'Effetti additivi anticolinergici come secchezza delle fauci, visione offuscata, ritenzione urinaria e costipazione.',
    recommendation: 'Usare con cautela, specialmente nei pazienti anziani. Monitorare per segni di tossicità anticolinergica.'
  },
  {
    id: 'int-015',
    medicationId: 'tropicamide-1',
    interactingDrug: 'Inibitori della colinesterasi',
    severity: 'moderata',
    description: 'Gli effetti degli inibitori della colinesterasi possono essere antagonizzati dai farmaci anticolinergici.',
    recommendation: 'Evitare l\'uso concomitante quando possibile. Se necessario, monitorare attentamente l\'efficacia del trattamento.'
  }
];

// Funzione per ottenere le interazioni di un farmaco specifico
export function getInteractionsForMedication(medicationId: string): DrugInteraction[] {
  return drugInteractions.filter(interaction => interaction.medicationId === medicationId);
}

// Funzione per ottenere le interazioni per severità
export function getInteractionsBySeverity(severity: 'lieve' | 'moderata' | 'grave'): DrugInteraction[] {
  return drugInteractions.filter(interaction => interaction.severity === severity);
}
