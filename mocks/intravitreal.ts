import { Medication } from '@/types/medication';

// Intravitreal medications
const intravitreaMedications: Medication[] = [
  {
    id: '305',
    name: 'Lucentis',
    activeIngredient: 'Ranibizumab',
    concentration: '10 mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Frammento di anticorpo monoclonale umanizzato che inibisce il fattore di crescita endoteliale vascolare A (VEGF-A), utilizzato per il trattamento della degenerazione maculare legata all\'età (AMD) neovascolare, dell\'edema maculare diabetico (DME), dell\'edema maculare secondario a occlusione venosa retinica e della retinopatia diabetica proliferante.\n\nRegimi di trattamento:\n- AMD neovascolare: Fase di carico con 3 iniezioni mensili consecutive, successivamente regime PRN (Pro Re Nata, al bisogno) basato su controlli mensili, oppure regime Treat-and-Extend (estensione graduale dell\'intervallo tra i trattamenti in caso di stabilità).\n- DME: Inizialmente iniezioni mensili fino alla stabilizzazione dell\'acuità visiva, poi regime PRN con monitoraggio mensile.\n- Edema maculare secondario a occlusione venosa retinica: Iniezioni mensili fino a stabilizzazione dell\'acuità visiva, poi trattamento al bisogno con monitoraggio mensile.\n- Retinopatia diabetica proliferante: Iniezioni mensili fino a stabilizzazione della malattia, poi regime PRN.',
    dosage: 'Iniezione intravitreale di 0.5 mg (0.05 ml). Per AMD, DME e occlusione venosa retinica: iniziare con iniezioni mensili per 3 mesi, poi personalizzare la frequenza in base alla risposta del paziente. Per retinopatia diabetica: iniezioni mensili fino alla stabilizzazione, poi continuare con monitoraggio e trattamento quando necessario.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, corpi mobili vitreali, aumento della pressione intraoculare, infiammazione intraoculare, distacco di retina, cataratta, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive o sospette, infiammazione intraoculare attiva grave, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/lucentis.jpg',
    characteristics: ['single-use vial', 'refrigerated storage'],
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 902.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '306',
    name: 'Byooviz',
    activeIngredient: 'Ranibizumab',
    concentration: '10 mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Biosimilare di Lucentis, è un frammento di anticorpo monoclonale che inibisce il VEGF-A, approvato per il trattamento della AMD neovascolare, DME, edema maculare secondario a occlusione venosa retinica e retinopatia diabetica.\n\nRegimi di trattamento:\n- AMD neovascolare: Fase di carico con 3 iniezioni mensili consecutive, successivamente regime PRN (Pro Re Nata, al bisogno) basato su controlli mensili, oppure regime Treat-and-Extend.\n- DME: Inizialmente iniezioni mensili fino alla stabilizzazione dell\'acuità visiva, poi regime PRN con monitoraggio mensile.\n- Edema maculare secondario a occlusione venosa retinica: Iniezioni mensili fino a stabilizzazione dell\'acuità visiva, poi trattamento al bisogno.\n- Retinopatia diabetica proliferante: Iniezioni mensili fino a stabilizzazione della malattia, poi regime PRN.',
    dosage: 'Iniezione intravitreale di 0.5 mg (0.05 ml). Identico regime di somministrazione di Lucentis: iniziare con fase di carico di 3 iniezioni mensili, seguito da monitoraggio mensile e trattamento personalizzato in base all\'attività della malattia e alla risposta del paziente.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, corpi mobili vitreali, aumento della pressione intraoculare, infiammazione intraoculare, distacco di retina, cataratta, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive o sospette, infiammazione intraoculare attiva grave, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.ema.europa.eu/en/documents/product-information/byooviz-epar-product-information_it.pdf',
    characteristics: ['single-use vial', 'refrigerated storage', 'biosimilar'],
    requiresPrescription: true,
    manufacturer: 'Samsung Bioepis',
    price: {
      amount: 750.00,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.ema.europa.eu'
    }
  },
  {
    id: '307',
    name: 'Eylea',
    activeIngredient: 'Aflibercept',
    concentration: '40 mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Proteina di fusione che agisce come recettore solubile che lega il VEGF-A, il VEGF-B e il fattore di crescita placentare (PlGF), utilizzato per il trattamento della AMD neovascolare, DME, edema maculare secondario a occlusione venosa retinica e retinopatia diabetica.\n\nRegimi di trattamento:\n- AMD neovascolare: Fase di carico con 3 iniezioni mensili consecutive, poi una iniezione ogni 2 mesi per il primo anno. Dopo 12 mesi, può essere adottato un regime Treat-and-Extend con graduale allungamento dell\'intervallo fino a 16 settimane.\n- DME: Fase di carico con 5 iniezioni mensili consecutive, poi una iniezione ogni 2 mesi, oppure regime PRN. Dopo il primo anno, può essere adottato un regime Treat-and-Extend.\n- Occlusione venosa retinica: Iniezioni mensili fino a stabilizzazione dell\'acuità visiva e parametri anatomici (massimo 6 iniezioni), poi trattamento ogni 2 mesi o secondo PRN.\n- Retinopatia diabetica proliferante: Trattamento mensile fino a stabilizzazione, poi regime di mantenimento con monitoraggio regolare.',
    dosage: 'Iniezione intravitreale di 2 mg (0.05 ml). Per AMD: 3 iniezioni mensili, poi ogni 2 mesi per il primo anno. Successivamente, possibilità di estendere gradualmente gli intervalli fino a 16 settimane. Per DME: 5 iniezioni mensili iniziali, poi ogni 2 mesi o con regimi personalizzati. Per occlusione venosa retinica: mensile fino alla stabilizzazione, poi ogni 2 mesi o secondo necessità.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, distacco dell\'epitelio pigmentato retinico, cataratta, corpi mobili vitreali, aumento della pressione intraoculare, distacco di retina, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive o sospette, infiammazione intraoculare attiva grave, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/eylea.jpg',
    characteristics: ['single-use vial', 'refrigerated storage'],
    requiresPrescription: true,
    manufacturer: 'Bayer',
    price: {
      amount: 950.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '308',
    name: 'Beovu',
    activeIngredient: 'Brolucizumab',
    concentration: '120 mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Frammento di anticorpo a catena singola umanizzato che inibisce il VEGF-A, utilizzato per il trattamento della AMD neovascolare.\n\nRegimi di trattamento:\n- AMD neovascolare: Fase di carico con 3 iniezioni mensili consecutive, successivamente regime di mantenimento con iniezione ogni 8-12 settimane (in base alla valutazione dell\'attività della malattia da parte dell\'oftalmologo). Dopo 12 mesi, gli intervalli di trattamento possono essere ulteriormente adattati in base all\'attività della malattia.',
    dosage: 'Iniezione intravitreale di 6 mg (0.05 ml). Iniziare con 3 iniezioni mensili consecutive, successivamente valutare l\'attività della malattia e procedere con iniezioni ogni 8-12 settimane in base alla risposta individuale. Monitoraggio regolare per potenziali eventi avversi vascolari retinici.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, infiammazione intraoculare, distacco di retina, cataratta, endoftalmite, vasculite retinica, occlusione vascolare retinica.',
    contraindications: 'Infezioni oculari o perioculari attive, infiammazione intraoculare attiva, ipersensibilità al principio attivo o agli eccipienti, storia di vasculite retinica o occlusione vascolare retinica.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/beovu.jpg',
    characteristics: ['single-use vial', 'refrigerated storage'],
    requiresPrescription: true,
    manufacturer: 'Novartis',
    price: {
      amount: 1050.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '309',
    name: 'Vabysmo',
    activeIngredient: 'Faricimab',
    concentration: '120 mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Anticorpo bispecifico che inibisce sia il VEGF-A che l\'angiopoietina-2 (Ang-2), rappresentando una nuova opzione per il trattamento dell\'AMD neovascolare e del DME.\n\nRegimi di trattamento:\n- AMD neovascolare: Fase di carico con 4 iniezioni mensili consecutive, seguita da un intervallo di trattamento personalizzato (PTI) che può arrivare fino a 16 settimane in base alla risposta anatomica e visiva del paziente.\n- DME: Fase di carico con 4 iniezioni mensili consecutive, seguita da un intervallo di trattamento personalizzato (PTI) che può arrivare fino a 16 settimane in base alla risposta del paziente. Gli intervalli di trattamento possono essere accorciati o allungati di 4 settimane alla volta fino a determinare l\'intervallo ottimale per ciascun paziente.',
    dosage: 'Iniezione intravitreale di 6 mg (0.05 ml). Per entrambe le indicazioni (AMD e DME): iniziare con 4 iniezioni mensili consecutive, quindi personalizzare il regime con valutazioni ogni 1-4 mesi. Sulla base dei risultati delle valutazioni, gli intervalli tra i trattamenti possono essere estesi con incrementi di 4 settimane fino a un massimo di 16 settimane per i pazienti stabili.',
    sideEffects: 'Emorragia congiuntivale, aumento della pressione intraoculare, corpi mobili vitreali, dolore oculare, distacco dell\'epitelio pigmentato retinico, uveite, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive o sospette, infiammazione intraoculare attiva, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.ema.europa.eu/en/documents/product-information/vabysmo-epar-product-information_it.pdf',
    characteristics: ['single-use vial', 'refrigerated storage', 'dual mechanism'],
    requiresPrescription: true,
    manufacturer: 'Roche',
    price: {
      amount: 1100.00,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.ema.europa.eu'
    }
  },
  {
    id: '310',
    name: 'Macugen',
    activeIngredient: 'Pegaptanib',
    concentration: '0.3 mg',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Aptamero pegilato che si lega selettivamente all\'isoforma 165 del VEGF-A, utilizzato per il trattamento della AMD neovascolare.\n\nRegime di trattamento:\n- AMD neovascolare: Iniezione intravitreale di 0.3 mg ogni 6 settimane. Il trattamento viene generalmente proseguito per un periodo di 1-2 anni, con rivalutazioni periodiche dell\'efficacia e della necessità di proseguire la terapia.',
    dosage: 'Iniezione intravitreale di 0.3 mg (0.09 ml) ogni 6 settimane. La terapia viene tipicamente continuata per 1-2 anni, con valutazioni regolari per determinare la necessità di proseguire il trattamento in base alla risposta individuale.',
    sideEffects: 'Infiammazione della camera anteriore, dolore oculare, aumento della pressione intraoculare, cheratite puntata, corpi mobili vitreali, cataratta, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/macugen.jpg',
    characteristics: ['single-use syringe', 'refrigerated storage'],
    requiresPrescription: true,
    manufacturer: 'Bausch & Lomb',
    price: {
      amount: 700.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '311',
    name: 'Avastin',
    activeIngredient: 'Bevacizumab',
    concentration: '25 mg/ml',
    category: 'intravitreal',
    subcategory: 'anti-vegf',
    description: 'Anticorpo monoclonale umanizzato che inibisce il VEGF-A, utilizzato off-label per il trattamento della AMD neovascolare, DME, edema maculare secondario a occlusione venosa retinica e retinopatia diabetica.\n\nRegimi di trattamento (off-label):\n- AMD neovascolare: Fase di carico con 3 iniezioni mensili consecutive, poi regime PRN basato su controlli mensili, oppure regime Treat-and-Extend.\n- DME: Iniezioni mensili fino a stabilizzazione, poi regime PRN con monitoraggio.\n- Occlusione venosa retinica: Iniezioni mensili fino a stabilizzazione, poi regime PRN.\n- Retinopatia diabetica: Iniezioni mensili fino a stabilizzazione, poi monitoraggio e trattamento al bisogno.',
    dosage: 'Iniezione intravitreale di 1.25 mg (0.05 ml). Per l\'uso off-label in oftalmologia: generalmente 3 iniezioni mensili consecutive, seguite da trattamenti periodici in base alla risposta individuale e al monitoraggio dei parametri anatomici e funzionali. La frequenza di somministrazione viene adattata seguendo protocolli PRN o Treat-and-Extend.',
    sideEffects: 'Emorragia congiuntivale, dolore oculare, corpi mobili vitreali, aumento della pressione intraoculare, infiammazione intraoculare, distacco di retina, cataratta, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive, infiammazione intraoculare attiva, ipersensibilità al principio attivo o agli eccipienti, gravidanza.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/avastin.jpg',
    characteristics: ['off-label use', 'refrigerated storage'],
    requiresPrescription: true,
    manufacturer: 'Roche',
    price: {
      amount: 400.00,
      currency: '€',
      source: 'Prezzo stimato per uso oftalmico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '312',
    name: 'Ozurdex',
    activeIngredient: 'Desametasone',
    concentration: '0.7 mg',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Impianto biodegradabile a rilascio prolungato di desametasone, utilizzato per il trattamento dell\'edema maculare secondario a occlusione venosa retinica, uveite non infettiva e DME in pazienti pseudofachici o che non rispondono alla terapia non steroidea.\n\nRegimi di trattamento:\n- Occlusione venosa retinica: Un impianto intravitreale (0.7 mg), con ritrattamento dopo 4-6 mesi se il paziente presenta una recidiva o un peggioramento dell\'edema maculare. Non è consigliabile ripetere il trattamento prima di 3 mesi.\n- Uveite non infettiva: Un impianto intravitreale (0.7 mg), con rivalutazione dell\'efficacia ogni 3-6 mesi e ritrattamento secondo necessità, ma non prima di 3 mesi.\n- DME: Un impianto intravitreale (0.7 mg), con rivalutazione ogni 3-6 mesi e ritrattamento secondo necessità, ma non prima di 3 mesi. Nei pazienti che rispondono alla terapia, si può considerare una ripetizione del trattamento dopo circa 6 mesi.',
    dosage: 'Impianto intravitreale di 0.7 mg. L\'effetto terapeutico dura circa 3-6 mesi, con necessità di valutare la risposta clinica per considerare un ritrattamento. Il ritrattamento non dovrebbe essere eseguito prima di 3 mesi dalla precedente iniezione. Per il DME e occlusione venosa: valutazione ogni 3-6 mesi, mentre per l\'uveite il monitoraggio dovrebbe essere più frequente.',
    sideEffects: 'Aumento della pressione intraoculare, cataratta, emorragia congiuntivale, dolore oculare, corpi mobili vitreali, distacco di retina, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive o sospette, glaucoma avanzato non adeguatamente controllato con i soli medicinali, afachia con lacerazione della capsula posteriore del cristallino, occhi con lente intraoculare in camera anteriore e lacerazione della capsula posteriore del cristallino, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/ozurdex.jpg',
    characteristics: ['sustained-release implant', 'biodegradable'],
    requiresPrescription: true,
    manufacturer: 'Allergan',
    price: {
      amount: 1200.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '313',
    name: 'Iluvien',
    activeIngredient: 'Fluocinolone acetonide',
    concentration: '0.19 mg',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Impianto non biodegradabile a rilascio prolungato di fluocinolone acetonide, utilizzato per il trattamento dell\'edema maculare diabetico cronico in pazienti che hanno avuto una risposta insufficiente alla terapia disponibile.\n\nRegime di trattamento:\n- DME cronico: Un singolo impianto intravitreale (0.19 mg) che rilascia il farmaco progressivamente per un periodo fino a 36 mesi. L\'impianto è progettato per fornire una dose giornaliera di fluocinolone acetonide di circa 0.2 μg/die. Non sono necessari trattamenti aggiuntivi durante questo periodo, anche se può essere considerato un nuovo impianto dopo 36 mesi se l\'edema maculare persiste o recidiva.',
    dosage: 'Impianto intravitreale di 0.19 mg, con rilascio continuo di fluocinolone acetonide (circa 0.2 μg/die) per un periodo fino a 36 mesi. Indicato specificamente per il DME cronico persistente nonostante trattamenti precedenti. Generalmente un singolo impianto è sufficiente per l\'intero periodo, con possibilità di ripetere il trattamento dopo 36 mesi se necessario.',
    sideEffects: 'Cataratta, aumento della pressione intraoculare, glaucoma, emorragia congiuntivale, dolore oculare, corpi mobili vitreali, distacco di retina, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari preesistenti o sospette, glaucoma avanzato che non può essere adeguatamente controllato con i soli medicinali, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/iluvien.jpg',
    characteristics: ['sustained-release implant', 'non-biodegradable', 'long-acting'],
    requiresPrescription: true,
    manufacturer: 'Alimera Sciences',
    price: {
      amount: 7500.00,
      currency: '€',
      source: 'Prezzo al pubblico',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '314',
    name: 'Triesence',
    activeIngredient: 'Triamcinolone acetonide',
    concentration: '40 mg/ml',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Sospensione di triamcinolone acetonide, utilizzata per il trattamento dell\'infiammazione oculare, della visualizzazione durante la vitrectomia e dell\'edema maculare diabetico.\n\nRegimi di trattamento:\n- Infiammazione oculare non infettiva: Iniezione intravitreale di 4 mg (0.1 ml). L\'effetto dura generalmente 1-3 mesi, con ritrattamento secondo necessità.\n- Edema maculare diabetico: Iniezione intravitreale di 4 mg (0.1 ml), con rivalutazione ogni 1-3 mesi e ritrattamento secondo necessità in base alla risposta clinica.\n- Visualizzazione durante vitrectomia: Iniezione di 1-4 mg nel vitreo durante l\'intervento per facilitare la visualizzazione del vitreo e delle membrane.',
    dosage: 'Iniezione intravitreale di 4 mg (0.1 ml). Per l\'infiammazione oculare e l\'edema maculare diabetico: valutare la risposta clinica ogni 1-3 mesi e considerare il ritrattamento quando i sintomi ricompaiono o quando l\'effetto terapeutico diminuisce, tipicamente dopo 1-3 mesi. Per la visualizzazione durante vitrectomia: iniezione di 1-4 mg direttamente nel vitreo all\'inizio dell\'intervento.',
    sideEffects: 'Aumento della pressione intraoculare, cataratta, emorragia congiuntivale, dolore oculare, corpi mobili vitreali, distacco di retina, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive, glaucoma avanzato, ipersensibilità al principio attivo o agli eccipienti.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    packageImageUrl: 'https://www.farmaciasoccavo.it/wp-content/uploads/2021/03/triesence.jpg',
    characteristics: ['suspension', 'preservative-free'],
    requiresPrescription: true,
    manufacturer: 'Alcon',
    price: {
      amount: 150.00,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  },
  {
    id: '315',
    name: 'Taioftal',
    activeIngredient: 'Triamcinolone acetonide',
    concentration: '40 mg/ml',
    category: 'intravitreal',
    subcategory: 'steroids-intravitreal',
    description: 'Sospensione di triamcinolone acetonide per uso intravitreale, utilizzata per il trattamento dell\'edema maculare diabetico, dell\'edema maculare secondario a occlusione venosa retinica e dell\'uveite non infettiva. Utile anche come adiuvante nella visualizzazione durante la vitrectomia.\n\nRegimi di trattamento:\n- Edema maculare diabetico: Iniezione intravitreale di 4 mg (0.1 ml), con rivalutazione ogni 3 mesi e ritrattamento secondo necessità. L\'effetto terapeutico dura generalmente 1-3 mesi.\n- Edema maculare secondario a occlusione venosa retinica: Iniezione intravitreale di 4 mg (0.1 ml), con monitoraggio mensile e ritrattamento ogni 3-4 mesi secondo necessità.\n- Uveite non infettiva: Iniezione intravitreale di 4 mg (0.1 ml) con monitoraggio e rivalutazione ogni 1-3 mesi. Il ritrattamento può essere considerato dopo 3-4 mesi in base alla persistenza dell\'infiammazione.\n- Visualizzazione durante vitrectomia: Iniezione di 1-4 mg nel vitreo durante l\'intervento per facilitare la visualizzazione del vitreo e delle membrane epiretiniche.',
    dosage: 'Iniezione intravitreale di 4 mg (0.1 ml). Per patologie retiniche: monitorare la risposta e considerare ritrattamento dopo 1-3 mesi in base alla sintomatologia e ai parametri clinici. Per uso chirurgico durante vitrectomia: iniettare 1-4 mg direttamente nel vitreo per migliorare la visualizzazione delle strutture intraoculari. Adattare la dose e la frequenza alle caratteristiche individuali del paziente e all\'evoluzione clinica.',
    sideEffects: 'Aumento della pressione intraoculare, cataratta, emorragia congiuntivale, dolore oculare, corpi mobili vitreali, distacco di retina, endoftalmite.',
    contraindications: 'Infezioni oculari o perioculari attive, glaucoma avanzato non controllato, ipersensibilità al triamcinolone o agli eccipienti, cheratite erpetica attiva.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    characteristics: ['suspension', 'preservative-free', 'surgical aid'],
    requiresPrescription: true,
    manufacturer: 'Sooft/Fidia',
    price: {
      amount: 145.00,
      currency: '€',
      source: 'Prezzo stimato',
      url: 'https://www.aifa.gov.it'
    }
  }
];

export default intravitreaMedications;