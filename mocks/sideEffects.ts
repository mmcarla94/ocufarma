// Definizione degli effetti collaterali dettagliati per farmaci oculistici
// Questo file contiene informazioni dettagliate sugli effetti collaterali dei farmaci oculistici

export interface SideEffectDetail {
  id: string;
  medicationId: string;
  name: string;
  description: string;
  frequency: 'molto comune' | 'comune' | 'non comune' | 'raro' | 'molto raro';
  severity: 'lieve' | 'moderato' | 'grave';
  onset: 'immediato' | 'rapido' | 'graduale';
  duration: 'temporaneo' | 'persistente' | 'permanente';
  managementTips: string;
}

export const sideEffectsDetails: SideEffectDetail[] = [
  // Beta-bloccanti (Timololo)
  {
    id: 'se-001',
    medicationId: 'timolol-maleate-0.5',
    name: 'Bruciore oculare',
    description: 'Sensazione di bruciore o irritazione agli occhi dopo l\'instillazione del collirio.',
    frequency: 'comune',
    severity: 'lieve',
    onset: 'immediato',
    duration: 'temporaneo',
    managementTips: 'Generalmente si risolve entro pochi minuti. Refrigerare il collirio può ridurre il fastidio.'
  },
  {
    id: 'se-002',
    medicationId: 'timolol-maleate-0.5',
    name: 'Visione offuscata',
    description: 'Temporaneo annebbiamento della vista dopo l\'instillazione.',
    frequency: 'comune',
    severity: 'lieve',
    onset: 'immediato',
    duration: 'temporaneo',
    managementTips: 'Attendere che la visione si schiarisca prima di guidare o utilizzare macchinari.'
  },
  {
    id: 'se-003',
    medicationId: 'timolol-maleate-0.5',
    name: 'Bradicardia',
    description: 'Rallentamento della frequenza cardiaca dovuto all\'assorbimento sistemico del farmaco.',
    frequency: 'non comune',
    severity: 'moderato',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Monitorare la frequenza cardiaca. Consultare il medico se si avverte affaticamento, vertigini o palpitazioni.'
  },
  {
    id: 'se-004',
    medicationId: 'timolol-maleate-0.5',
    name: 'Broncospasmo',
    description: 'Restringimento delle vie aeree che può causare difficoltà respiratorie, specialmente in pazienti con asma o BPCO.',
    frequency: 'non comune',
    severity: 'grave',
    onset: 'rapido',
    duration: 'persistente',
    managementTips: 'Interrompere immediatamente il farmaco e consultare un medico se si manifestano difficoltà respiratorie o respiro sibilante.'
  },
  
  // Analoghi delle prostaglandine (Latanoprost)
  {
    id: 'se-005',
    medicationId: 'latanoprost-0.005',
    name: 'Iperemia congiuntivale',
    description: 'Arrossamento degli occhi dovuto alla dilatazione dei vasi sanguigni congiuntivali.',
    frequency: 'molto comune',
    severity: 'lieve',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Generalmente non richiede trattamento. Può diminuire con l\'uso continuato del farmaco.'
  },
  {
    id: 'se-006',
    medicationId: 'latanoprost-0.005',
    name: 'Crescita delle ciglia',
    description: 'Aumento della lunghezza, dello spessore e della pigmentazione delle ciglia.',
    frequency: 'comune',
    severity: 'lieve',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Effetto cosmetico che non richiede trattamento. Reversibile dopo l\'interruzione del farmaco, ma può richiedere mesi.'
  },
  {
    id: 'se-007',
    medicationId: 'latanoprost-0.005',
    name: 'Cambiamenti nella pigmentazione dell\'iride',
    description: 'Aumento della pigmentazione marrone dell\'iride, specialmente in pazienti con iridi di colore misto.',
    frequency: 'comune',
    severity: 'moderato',
    onset: 'graduale',
    duration: 'permanente',
    managementTips: 'Cambiamento permanente. Informare i pazienti prima di iniziare il trattamento, specialmente quelli con iridi di colore misto.'
  },
  {
    id: 'se-008',
    medicationId: 'latanoprost-0.005',
    name: 'Edema maculare cistoide',
    description: 'Accumulo di liquido nella macula che può causare visione offuscata o distorta.',
    frequency: 'raro',
    severity: 'grave',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Consultare immediatamente un oculista se si verifica una riduzione dell\'acuità visiva. Può richiedere l\'interruzione del farmaco.'
  },
  
  // Inibitori dell'anidrasi carbonica (Dorzolamide)
  {
    id: 'se-009',
    medicationId: 'dorzolamide-2',
    name: 'Sapore amaro',
    description: 'Sensazione di sapore amaro o metallico in bocca dopo l\'instillazione del collirio.',
    frequency: 'comune',
    severity: 'lieve',
    onset: 'immediato',
    duration: 'temporaneo',
    managementTips: 'Chiudere gli occhi e premere l\'angolo interno dell\'occhio per 1-2 minuti dopo l\'instillazione per ridurre il drenaggio nasolacrimale.'
  },
  {
    id: 'se-010',
    medicationId: 'dorzolamide-2',
    name: 'Bruciore e irritazione oculare',
    description: 'Sensazione di bruciore, puntura o irritazione agli occhi dopo l\'instillazione.',
    frequency: 'comune',
    severity: 'lieve',
    onset: 'immediato',
    duration: 'temporaneo',
    managementTips: 'Generalmente si risolve entro pochi minuti. Refrigerare il collirio può ridurre il fastidio.'
  },
  {
    id: 'se-011',
    medicationId: 'dorzolamide-2',
    name: 'Cheratite puntata superficiale',
    description: 'Piccole erosioni sulla superficie corneale che possono causare dolore, fotofobia e lacrimazione.',
    frequency: 'non comune',
    severity: 'moderato',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Consultare un oculista se si manifestano dolore oculare persistente, fotofobia o sensazione di corpo estraneo.'
  },
  
  // Agonisti alfa-2 (Brimonidina)
  {
    id: 'se-012',
    medicationId: 'brimonidine-0.2',
    name: 'Secchezza delle fauci',
    description: 'Sensazione di bocca secca dovuta all\'effetto sistemico del farmaco.',
    frequency: 'comune',
    severity: 'lieve',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Bere frequentemente piccoli sorsi d\'acqua. Utilizzare sostituti salivari se necessario.'
  },
  {
    id: 'se-013',
    medicationId: 'brimonidine-0.2',
    name: 'Sonnolenza',
    description: 'Sensazione di stanchezza o sonnolenza dovuta all\'effetto sistemico del farmaco.',
    frequency: 'comune',
    severity: 'moderato',
    onset: 'rapido',
    duration: 'persistente',
    managementTips: 'Evitare di guidare o utilizzare macchinari fino a quando non sono noti gli effetti del farmaco. Considerare la somministrazione serale.'
  },
  {
    id: 'se-014',
    medicationId: 'brimonidine-0.2',
    name: 'Reazione allergica oculare',
    description: 'Arrossamento, prurito, gonfiore delle palpebre e congiuntiva dovuti a reazione allergica al farmaco.',
    frequency: 'non comune',
    severity: 'moderato',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Interrompere il farmaco e consultare un oculista. Può richiedere un trattamento con antistaminici o corticosteroidi topici.'
  },
  
  // Corticosteroidi (Desametasone)
  {
    id: 'se-015',
    medicationId: 'dexamethasone-0.1',
    name: 'Aumento della pressione intraoculare',
    description: 'Incremento della pressione all\'interno dell\'occhio che può portare a danni al nervo ottico se non trattata.',
    frequency: 'comune',
    severity: 'grave',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Monitorare regolarmente la pressione intraoculare durante il trattamento. Può richiedere terapia antiglaucomatosa concomitante.'
  },
  {
    id: 'se-016',
    medicationId: 'dexamethasone-0.1',
    name: 'Cataratta',
    description: 'Opacizzazione del cristallino che può causare visione offuscata o ridotta.',
    frequency: 'comune',
    severity: 'grave',
    onset: 'graduale',
    duration: 'permanente',
    managementTips: 'Limitare la durata del trattamento quando possibile. Monitorare regolarmente la trasparenza del cristallino.'
  },
  {
    id: 'se-017',
    medicationId: 'dexamethasone-0.1',
    name: 'Ritardo nella guarigione delle ferite corneali',
    description: 'Rallentamento del processo di guarigione delle lesioni corneali.',
    frequency: 'comune',
    severity: 'moderato',
    onset: 'graduale',
    duration: 'persistente',
    managementTips: 'Usare con cautela in pazienti con lesioni corneali. Monitorare attentamente la guarigione.'
  }
];

// Funzione per ottenere gli effetti collaterali di un farmaco specifico
export function getSideEffectsForMedication(medicationId: string): SideEffectDetail[] {
  return sideEffectsDetails.filter(effect => effect.medicationId === medicationId);
}

// Funzione per ottenere gli effetti collaterali per severità
export function getSideEffectsBySeverity(severity: 'lieve' | 'moderato' | 'grave'): SideEffectDetail[] {
  return sideEffectsDetails.filter(effect => effect.severity === severity);
}

// Funzione per ottenere gli effetti collaterali per frequenza
export function getSideEffectsByFrequency(frequency: 'molto comune' | 'comune' | 'non comune' | 'raro' | 'molto raro'): SideEffectDetail[] {
  return sideEffectsDetails.filter(effect => effect.frequency === frequency);
}
