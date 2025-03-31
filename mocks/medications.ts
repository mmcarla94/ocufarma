import { Medication } from '@/types/medication';
import supplements from './supplements';
import artificialTears from './artificialTears';
import antiglaucomaMedications from './antiglaucoma';
import antiinfectiveMedications from './antiinfective';
import antiinflammatoryMedications from './antiinflammatory';
import antiallergicMedications from './antiallergic';
import mydriaticcycloplegicMedications from './mydriaticcycloplegic';
import antisepticMeds from './antiseptic';
import intravitreaMeds from './intravitreal';
import anestheticMeds from './anesthetics';
import diagnosticMeds from './diagnostics';

// Debugging: Log the imported medication categories
console.log("antiglaucomaMedications:", antiglaucomaMedications);
console.log("antiinfectiveMedications:", antiinfectiveMedications);
console.log("antiinflammatoryMedications:", antiinflammatoryMedications);
console.log("antiallergicMedications:", antiallergicMedications);
console.log("mydriaticcycloplegicMedications:", mydriaticcycloplegicMedications);
console.log("antisepticMeds:", antisepticMeds);
console.log("artificialTears:", artificialTears);
console.log("supplements:", supplements);
console.log("intravitreaMeds:", intravitreaMeds);
console.log("anestheticMeds:", anestheticMeds);
console.log("diagnosticMeds:", diagnosticMeds);

// Combine all medications into a single array
export const medications: Medication[] = [
  ...(antiglaucomaMedications || []),
  ...(antiinfectiveMedications || []),
  ...(antiinflammatoryMedications || []),
  ...(antiallergicMedications || []),
  ...(mydriaticcycloplegicMedications || []),
  ...(antisepticMeds || []),
  ...(artificialTears || []),
  ...(supplements || []),
  ...(intravitreaMeds || []),
  ...(anestheticMeds || []),
  ...(diagnosticMeds || [])
];

// Debugging: Log the final medications array
console.log("medications:", medications);

// Export by category
export const antiGlaucomaMedications = antiglaucomaMedications || [];
export const antiInfectiveMedications = antiinfectiveMedications || [];
export const antiInflammatoryMedications = antiinflammatoryMedications || [];
export const antiAllergicMedications = antiallergicMedications || [];
export const mydriaticCycloplegicMedications = mydriaticcycloplegicMedications || [];
export const antisepticMedications = antisepticMeds || [];
export const artificialTearsMedications = artificialTears || [];
export const supplementsMedications = supplements || [];
export const intravitreaMedications = intravitreaMeds || [];
export const anestheticMedications = anestheticMeds || [];
export const diagnosticMedications = diagnosticMeds || [];
