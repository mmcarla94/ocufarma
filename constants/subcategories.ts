import { MedicationCategory } from '@/types/medication';

export interface SubcategoryInfo {
  id: string;
  name: string;
}

// Map of category ID to array of subcategories
export const subcategories: Record<MedicationCategory, SubcategoryInfo[]> = {
  // Anti-Glaucoma
  'anti-glaucoma': [
    { id: 'beta-blockers', name: 'Beta-bloccanti' },
    { id: 'prostaglandins', name: 'Analoghi delle prostaglandine' },
    { id: 'alpha-agonists', name: 'Alfa-agonisti' },
    { id: 'carbonic-anhydrase-inhibitors', name: 'Inibitori dell\'anidrasi carbonica' },
    { id: 'cholinergic-agonists', name: 'Agonisti colinergici' },
    { id: 'combined-medications', name: 'Farmaci combinati' }
  ],

  // Anti-Infective
  'anti-infective': [
    { id: 'antibiotics', name: 'Antibiotici' },
    { id: 'antivirals', name: 'Antivirali' },
    { id: 'antifungals', name: 'Antifungini' },
    { id: 'combinations', name: 'Anti-infettivi combinati' },
    { id: 'ointment', name: 'Unguento/Pomata oftalmica' }
  ],

  // Anti-Inflammatory
  'anti-inflammatory': [
    { id: 'corticosteroids', name: 'Corticosteroidi' },
    { id: 'nsaids', name: 'FANS (Farmaci antinfiammatori non steroidei)' },
    { id: 'combined-anti-inflammatory', name: 'Anti-infiammatori combinati' },
    { id: 'ointment-anti-inflammatory', name: 'Unguento/Pomata oftalmica' }
  ],

  // Anti-Allergic
  'anti-allergic': [
    { id: 'antihistamines', name: 'Antistaminici' },
    { id: 'mast-cell-stabilizers', name: 'Stabilizzatori dei mastociti' },
    { id: 'combined-anti-allergic', name: 'Anti-allergici combinati' },
    { id: 'dual-action', name: 'Azione doppia (antistaminico + stabilizzatore)' }
  ],

  // Mydriatic-Cycloplegic
  'mydriatic-cycloplegic': [
    { id: 'anticholinergics', name: 'Anticolinergici' },
    { id: 'sympathomimetics', name: 'Simpaticomimetici' },
    { id: 'combined-mydriatic', name: 'Midriatici combinati' }
  ],

  // Antiseptic
  'antiseptic': [
    { id: 'povidone-iodine', name: 'Iodopovidone' },
    { id: 'chlorhexidine', name: 'Clorexidina' },
    { id: 'other-antiseptics', name: 'Altri antisettici' }
  ],

  // Artificial Tears
  'artificial-tears': [
    { id: 'aqueous', name: 'Lacrime acquose' },
    { id: 'lipidic', name: 'Lacrime lipidiche' },
    { id: 'high-tech', name: 'Lacrime high-tech' },
    { id: 'gel-formulations', name: 'Formulazioni in gel' },
    { id: 'others', name: 'Altre' }
  ],

  // Supplements
  'supplements': [
    { id: 'retina', name: 'Retina' },
    { id: 'vitreous', name: 'Vitreo' },
    { id: 'neuroprotectors', name: 'Neuroprotettori' },
    { id: 'general-eye-health', name: 'Salute generale dell\'occhio' },
    { id: 'ocular-surface', name: 'Superficie oculare' }
  ],

  // Diagnostic
  'diagnostic': [
    { id: 'dyes', name: 'Coloranti' },
    { id: 'contrast-agents', name: 'Agenti di contrasto' },
    { id: 'other-diagnostic', name: 'Altri diagnostici' }
  ],

  // Anesthetic
  'anesthetic': [
    { id: 'topical-anesthetics', name: 'Anestetici topici' },
    { id: 'injectable-anesthetics', name: 'Anestetici iniettabili' }
  ],

  // Intravitreal
  'intravitreal': [
    { id: 'anti-vegf', name: 'Anti-VEGF' },
    { id: 'steroids-intravitreal', name: 'Steroidi intravitreali' },
  ]
};