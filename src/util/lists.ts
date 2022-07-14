import { ImportMedicineList, LabProps, ManufacturerProps } from "../@types";

export const specialities: string[] = [
  'Allergy and immunology',
  'Anesthesiology',
  'Cardiologist',
  'Chemical pathology',
  'Cytopathology',
  'Dermatology',
  'Diagnostic radiology',
  'Emergency medicine',
  'Family medicine',
  'Hematology',
  'Internal medicine',
  'Medical genetics',
  'Medical microbiology',
  'Neurology',
  'Neuropathology',
  'Nuclear medicine',
  'Obstetrics and gynecology',
  'Ophthalmology',
  'Pathology',
  'Pediatrics',
  'Physical medicine and rehabilitation',
  'Preventive medicine',
  'Psychiatry',
  'Radiation oncology',
  'Surgery',
  'Urology'
];

export const healthPlans: string[] = [
  "Aetna",
  "Anthem",
  "Blue Cross Blue Shield",
  "Blue of California",
  "Cigna",
  "Coventry",
  "eHealth Medicare",
  "First Health",
  "Health Net",
  "Health First",
  "Health Spire",
  "Humana",
  "Kaiser Permanente",
  "MetLife",
  "Multiplan",
  "Optimum Health",
  "United Healthcare",
  "United Medical Advisors",
  "Wellcare",
  "Wells Fargo",
  "Other",
];

export const labs: LabProps[] = [
  {
    name: 'Diagnostic Solutions',
    email: '3931 N. Stockton Hill Rd Kingman, AZ 86409',
    phones: ['210-288-8611'],
    address: 'swallendslab@gmail.com',
    website: 'https://www.swallendslab.com',
  },
  {
    name: 'VACC Laboratories',
    email: '4582 N 1st Ave, Suite 190 Tucson, AZ 85718',
    phones: ['520-501-9100'],
    address: 'Info@vacclabs.com',
    website: 'https://www.vacclabs.com',
  },
  {
    name: 'Premier Lab Solutions',
    address: '3440 N 16th Street Phoenix , AZ 85016-7125',
    phones: ['602-441-2808'],
    email: 'msrivastava@premierlabsolutions.com',
    website: 'website: https://premierlabsolutions.com/'
  },
  {
    name: 'Alcala Labs',
    address: '3703 Camino del Rio South #100-A, San Diego, CA 92108',
    phones: ['619-450-5870, 619-727-5320'],
    email: 'Crystal.Becerril@alcalalabs.com',
    website: 'www.alcalalabs.com',
  },
  {
    name: 'Aptitude Clinical Diagnostics',
    address: '125 Cremona Drive, STE 100, Goleta, CA 93117',
    phones: ['415-233-4292'],
    email: 'jackson@aptitudemedical.com',
    website: 'aptitudeclinical.com',
  },
  {
    name: 'Arbor Vita Corporation',
    address: '48371 Fremont Blvd Suite 101, Fremont, CA 94538',
    phones: ['650-793-3686', '408-585-3902'],
    email: 'peter.lu@arborvita.com',
    website: 'https://www.arborvita.com/covid-19-testing',
  },
  {
    name: 'Breakthrough Genomics',
    address: '25 Mauchly, #313 Irvine, CA 92618',
    phones: ['310-429-3165'],
    email: 'info@btgenomics.com',
    website: 'www.btgenomics.com',
  },
  {
    name: 'Cancer Research',
    address: 'PO Box 801, Los Angeles, CA 90001',
    phones: ['213-867-8100'],
    email: 'info@cancerresearch.com',
    website: 'www.cancerresearch.com',
  },
  {
    name: 'Clinomics USA Inc.',
    address: '5555 Oberlin Drive, Suite 110 San Diego, CA 92121',
    phones: ['917-617-9481'],
    email: 'smchoi@clinomics.com',
    website: 'https://www.clinomics.com/en/main',
  },
  {
    name: 'First Rate Lab',
    address: '23276 S Pointe Laguna Hills, CA 92653',
    phones: ['949-317-0637'],
    website: 'https://firstratelab.com/',
  },
  {
    name: 'Nexsun Diagnostic Laboratories, LLC',
    address: '15735 Barranca Parkway, Suite A-110 Irvine, CA 92618',
  },
  {
    name: 'Q Squared Solutions, LLC',
    address: '27027 Tourney Road, Valencia, CA 91355',
    phones: ['919-287-4270'],
    email: 'Patrick.Hurban@Q2LabSolutions.com',
    website: 'www.Q2LabSolutions.com',
  },
  {
    name: 'Radiology Associates',
    address: 'PO Box 801, Los Angeles, CA 90001',
    phones: ['213-867-8100'],
    email: 'radiology@radiology.com',
    website: 'www.radiology.com',
  },
  {
    name: 'renegade.bio',
    address: '5700 Martin Luther King Jr Way Oakland #1521, CA 94609',
    phones: ['415-308-1416'],
    email: 'limor@renegade.bio',
    website: 'www.renegade.bio',
  },
  {
    name: 'Renaissance Labs',
    address: 'PO Box 7001, Los Angeles, CA 90001',
    phones: ['213-867-8870'],
    email: 'radiology@renaissance.com',
    website: 'www.renaissance.com',
  },
  {
    name: 'SeqMatic LLC',
    address: '44846 Osgood Rd, Fremont, California 94539',
    phones: ['510-474-2800'],
    email: 'victor.hum@seqmatic.com',
    website: 'www.seqmatic.com',
  },
  {
    name: 'Test Well',
    address: '1233 Ski Run Blvd. #4, South Lake Tahoe, California 96150',
    phones: ['530-322-8717'],
    email: 'info@testwell.clinic',
    website: 'https://www.testwell.clinic/',
  },
  {
    name: 'US Specialty Labs',
    address: '11588 Sorrento Valley Road, San Diego, California 92121',
    phones: ['858-345-1109', '858-209-2300'],
    email: 'Bryan@usspecialtylabs.com',
    website: 'usspecialtylabs.com',
  },
  {
    name: '1CARE Medical Diagnostics',
    address: '685 Stone Road Unit 7 - 12, Benicia, California 94510',
    phones: ['707-361-3240'],
    email: 'info@1carediagnostics.com',
    website: '1carediagnostics.com',
  },
];

export const manufacturers: ManufacturerProps[] = [
  {
    name: "ABBOTT PRODUCTS GMBH",
    country: "Germany"
  },
  {
    name: "ACINO PHARMA AG",
    country: "Switzerland"
  },
  {
    name: "ACTAVIS",
    country: "Malta"
  },
  {
    name: "ALLERGAN PHARMACEUTICALS LTD",
    country: "Ireland"
  },
  {
    name: "Amman Pharmaceutical Industries (API)",
    country: "Jordan"
  },
  {
    name: "ANIKA THERAPEUTICS",
    country: "United States"
  },
  {
    name: "Aspen Pharma Pty Ltd",
    country: "Australia"
  },
  {
    name: "BOEHRINGER INGELHEIM",
    country: "Germany"
  },
  {
    name: "BRISTOL-MYERS SQUIBB HOLDINGS PHARMA, Ltd. LIABBILITY COMPANY",
    country: "United States"
  },
  {
    name: "EIPICO",
    country: "Egypt"
  },
  {
    name: "FARMACLAIR",
    country: "France"
  },
  {
    name: "GLAXOSMITHKLINE (GSK)",
    country: "Germany"
  },
  {
    name: "GLAXOSMITHKLINE DUNGARVAN LIMITED",
    country: "Ireland"
  },
  {
    name: "Haupt Pharma Wulfing GmbH",
    country: "Germany"
  },
  {
    name: "I.C.N.PHARMACEUTICALS",
    country: "United States"
  },
  {
    name: "JAMJOOM PHARMACEUTICALS COMPANY",
    country: "Saudi Arabia"
  },
  {
    name: "JANSSEN PHARMACEUTICA N.V.",
    country: "Belgium"
  },
  {
    name: "Jazeera Pharmaceutical Industries (JPI)",
    country: "Saudi Arabia"
  },
  {
    name: "JORDAN RIVER PHARMACEUTICAL INDUSTRIES",
    country: "Jordan"
  },
  {
    name: "Jordan Sweden Medical and Sterilization Co.",
    country: "Jordan"
  },
  {
    name: "JUBILANT HOLLISTERSTIER GENERAL PARTNERSHIP",
    country: "Canada"
  },
  {
    name: "KUWAIT SAUDI PHARMACEUTICAL INDUSTRIES",
    country: "Kuwait"
  },
  {
    name: "LIEBEL  FLARSHEIM  COMPANY  LLC",
    country: "United States"
  },
  {
    name: "MEDAC",
    country: "Germany"
  },
  {
    name: "MEDICAL UNION PHARMACEUTICALS CO",
    country: "Egypt"
  },
  {
    name: "MERCKLE",
    country: "Germany"
  },
  {
    name: "NATIONAL PHARMACEUTICAL INDUSTRIES CO",
    country: "Oman"
  },
  {
    name: "NEOPHARMA",
    country: "United Arab Emirates"
  },
  {
    name: "NOVARTIS",
    country: "Switzerland"
  },
  {
    name: "NOVO NORDISK",
    country: "Denmark"
  },
  {
    name: "OCTAPHARMA",
    country: "Austria"
  },
  {
    name: "OMAN PHARMACEUTICAL PRODUCTS",
    country: "Oman"
  },
  {
    name: "PFIZER",
    country: "Canada"
  },
  {
    name: "Pharma International Co.",
    country: "Jordan"
  },
  {
    name: "Pharmaceutical Solution Industries (PSI)",
    country: "Saudi Arabia"
  },
  {
    name: "PHARMATHEN INTERNATIONAL",
    country: "Greece"
  },
  {
    name: "PHILADELPHIA PHARMACEUTICAL",
    country: "Jordan"
  },
  {
    name: "Ram Pharmaceutical Industries",
    country: "Jordan"
  },
  {
    name: "RIYADH PHARMA",
    country: "Saudi Arabia"
  },
  {
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO",
    country: "Saudi Arabia"
  },
  {
    name: "SANDOZ",
    country: "Austria"
  },
  {
    name: "SANOFI WINTHROP INDUSTRIE",
    country: "France"
  },
  {
    name: "sanofi-aventis",
    country: "United Kingdom"
  },
  {
    name: "SERONO",
    country: "Italy"
  },
  {
    name: "Siegfried Barbera, S.L",
    country: "Spain"
  },
  {
    name: "SMIITHKLINE BEECHAM",
    country: "United Kingdom"
  },
  {
    name: "Sofarimex SA",
    country: "Portugal"
  },
  {
    name: "TABUK PHARMACEUTICAL MANUFACTURING CO.",
    country: "Saudi Arabia"
  },
  {
    name: "TAKEDA GMBH",
    country: "Germany"
  },
  {
    name: "The Jordanian Pharmaceutical Manufacturing Medical Equipment Co. Ltd. (JPM)",
    country: "Jordan"
  }
]

export const medicines: ImportMedicineList[] = [
  {
    tradeName: "PANKREOFLAT TAB",
    scientificName: "PANCREATIN",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "ABBOTT PRODUCTS GMBH"
  },
  {
    tradeName: "PANKREOFLAT TAB",
    scientificName: "PANCREATIN",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 50,
    name: "ABBOTT PRODUCTS GMBH"
  },
  {
    tradeName: "OLFEN-50",
    scientificName: "DICLOFENAC SODIUM",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "ACINO PHARMA AG"
  },
  {
    tradeName: "OLFEN-100",
    scientificName: "DICLOFENAC SODIUM",
    pharmaceuticalForm: "Capsule",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 10,
    name: "ACINO PHARMA AG"
  },
  {
    tradeName: "OGLITON 15 MG Tablet",
    scientificName: "PIOGLITAZONE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "ACTAVIS"
  },
  {
    tradeName: "OGLITON 30 MG Tablet",
    scientificName: "PIOGLITAZONE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "ACTAVIS"
  },
  {
    tradeName: "OGLITON 45 MG Tablet",
    scientificName: "PIOGLITAZONE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "ACTAVIS"
  },
  {
    tradeName: "OFLOX 0.3% EYE DROPS",
    scientificName: "OFLOXACIN",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "ALLERGAN PHARMACEUTICALS LTD"
  },
  {
    tradeName: "OTOCOL EAR DROPS",
    scientificName: "CHLORAMPHENICOL, BENZOCAINE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Auricular (OTIC)",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "Amman Pharmaceutical Industries (API)"
  },
  {
    tradeName: "OTOZOL 1% EAR DROP",
    scientificName: "CLOTRIMAZOLE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Auricular (OTIC)",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "Amman Pharmaceutical Industries (API)"
  },
  {
    tradeName: "OPTIFUCIN 1% EYE DROP",
    scientificName: "FUSIDIC ACID",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "g",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "Amman Pharmaceutical Industries (API)"
  },
  {
    tradeName: "ORTHOVISC 15MG-ML SOLU FOR I-A Injection*",
    scientificName: "SODIUM HYALURONATE",
    pharmaceuticalForm: "INJECTION, SOLUTION",
    administrationRoute: "Intravenous",
    size: 2,
    sizeUnit: "ml",
    packageTypes: "Pre-filled syringe",
    packageSize: 1,
    name: "ANIKA THERAPEUTICS"
  },
  {
    tradeName: "PANADOL SINUS CAPLET",
    scientificName: "PARACETAMOL, PSEUDOEPHEDRINE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "Aspen Pharma Pty Ltd"
  },
  {
    tradeName: "PANADOL COLD & FLU CAPLET",
    scientificName: "PARACETAMOL, CHLORPHENIRAMINE MALEATE, PSEUDOEPHEDRINE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "Aspen Pharma Pty Ltd"
  },
  {
    tradeName: "NOVONORM 2MG TABLET",
    scientificName: "REPAGLINIDE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "BOEHRINGER INGELHEIM"
  },
  {
    tradeName: "NOVONORM 1MG TABLET",
    scientificName: "REPAGLINIDE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "BOEHRINGER INGELHEIM"
  },
  {
    tradeName: "NOVONORM 0.5MG TABLET",
    scientificName: "REPAGLINIDE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "BOEHRINGER INGELHEIM"
  },
  {
    tradeName: "ORENCIA 125MG Solution for injection in pre-filled syringe",
    scientificName: "ABATACEPT",
    pharmaceuticalForm: "INJECTION, SOLUTION",
    administrationRoute: "Subcutaneous",
    size: 1,
    sizeUnit: "ml",
    packageTypes: "Pre-filled syringe",
    packageSize: 4,
    name: "BRISTOL-MYERS SQUIBB HOLDINGS PHARMA, Ltd. LIABBILITY COMPANY"
  },
  {
    tradeName: "NO-URIC TAB 300MG",
    scientificName: "ALLOPURINOL",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "EIPICO"
  },
  {
    tradeName: "PANADOL BABY & INFANT SUSP 120MG-5ML",
    scientificName: "PARACETAMOL",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Oral",
    size: 100,
    sizeUnit: "ml",
    packageTypes: "Bottle",
    packageSize: 1,
    name: "FARMACLAIR"
  },
  {
    tradeName: "PANDEMRIX VACCINE",
    scientificName: "H1N1 INFLUENZA VACCINE INACTIVATED",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Subcutaneous",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 1,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL EXTRA TAB",
    scientificName: "PARACETAMOL, CAFFEINE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL EXTEND 665MG F.C. TABLETS",
    scientificName: "PARACETAMOL",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL COLD AND FLU DAY F.C. CABLETS",
    scientificName: "PARACETAMOL, CAFFEINE, PHENYLEPHERINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL ADVANCE 500MG FILM COATED TABLET",
    scientificName: "PARACETAMOL",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL ACTIFAST FILM COATED TABLETE",
    scientificName: "PARACETAMOL, SODIUM BICARBONATE",
    pharmaceuticalForm: "TABLET, COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL 500 mg film-coated tablet",
    scientificName: "PARACETAMOL",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "GLAXOSMITHKLINE (GSK)"
  },
  {
    tradeName: "PANADOL NIGHT CAPLET",
    scientificName: "PARACETAMOL, DIPHENHYDRAMINE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "GLAXOSMITHKLINE DUNGARVAN LIMITED"
  },
  {
    tradeName: "OLFEN-75",
    scientificName: "DICLOFENAC SODIUM, LIDOCAINE HYDROCHLORIDE",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Parenteral",
    size: 2,
    sizeUnit: "ml",
    packageTypes: "Ampoule",
    packageSize: 5,
    name: "Haupt Pharma Wulfing GmbH"
  },
  {
    tradeName: "OXSORALEN LOTION I%",
    scientificName: "METHOXSALEN",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Topical",
    size: 29.6,
    sizeUnit: "ml",
    packageTypes: "Bottle",
    packageSize: 1,
    name: "I.C.N.PHARMACEUTICALS"
  },
  {
    tradeName: "OXSORALEN CAPS 10MG",
    scientificName: "METHOXSALEN",
    pharmaceuticalForm: "Capsule",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Tablet Container",
    packageSize: 100,
    name: "I.C.N.PHARMACEUTICALS"
  },
  {
    tradeName: "OXSORALEN CAPS 10MG",
    scientificName: "METHOXSALEN",
    pharmaceuticalForm: "Capsule",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "I.C.N.PHARMACEUTICALS"
  },
  {
    tradeName: "OSELTA 75MG CAPSULES",
    scientificName: "OSELTAMIVIR",
    pharmaceuticalForm: "Capsule",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 10,
    name: "JAMJOOM PHARMACEUTICALS COMPANY"
  },
  {
    tradeName: "OPTIPRED 1% OPTHALMIC SUSP.",
    scientificName: "PREDNISOLONE ACETATE",
    pharmaceuticalForm: "SUSPENSION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "JAMJOOM PHARMACEUTICALS COMPANY"
  },
  {
    tradeName: "OPTIMOL 0.25% OPHTHALMIC SOLUTION",
    scientificName: "TIMOLOL MALEATE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "JAMJOOM PHARMACEUTICALS COMPANY"
  },
  {
    tradeName: "OPTILONE 0.1% OPTHALMIC SUSPENTION",
    scientificName: "FLUOROMETHOLONE",
    pharmaceuticalForm: "SUSPENSION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "JAMJOOM PHARMACEUTICALS COMPANY"
  },
  {
    tradeName: "OPTIFLOX OPTHALMIC SOLUTION",
    scientificName: "OFLOXACIN",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "JAMJOOM PHARMACEUTICALS COMPANY"
  },
  {
    tradeName: "OLOPAT 0.1% OPHTHALMIC SOLUTION",
    scientificName: "OLOPATADINE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "JAMJOOM PHARMACEUTICALS COMPANY"
  },
  {
    tradeName: "ORAP FORTE TAB 4 MG",
    scientificName: "PIMOZIDE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "JANSSEN PHARMACEUTICA N.V."
  },
  {
    tradeName: "OFLAM 50MG GRANULES FOR ORAL SOLUTION",
    scientificName: "DICLOFENAC POTASSIUM",
    pharmaceuticalForm: "GRANULE, FOR SOLUTION",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Sachet",
    packageSize: 10,
    name: "Jazeera Pharmaceutical Industries (JPI)"
  },
  {
    tradeName: "PANTOVER 40MG E.C. TABLETS",
    scientificName: "PANTOPRAZOLE",
    pharmaceuticalForm: "TABLET, COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 15,
    name: "JORDAN RIVER PHARMACEUTICAL INDUSTRIES"
  },
  {
    tradeName: "NOVIRAL 5% CREAM",
    scientificName: "ACYCLOVIR (ACICLOVIR)",
    pharmaceuticalForm: "cream",
    administrationRoute: "Topical",
    size: 15,
    sizeUnit: "g",
    packageTypes: "Tube",
    packageSize: 1,
    name: "JORDAN RIVER PHARMACEUTICAL INDUSTRIES"
  },
  {
    tradeName: "PANDA EXTRA CAPLETS",
    scientificName: "PARACETAMOL, CAFFEINE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "Jordan Sweden Medical and Sterilization Co."
  },
  {
    tradeName: "PANDA 500MG CAPLET",
    scientificName: "PARACETAMOL",
    pharmaceuticalForm: "Capsule",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "Jordan Sweden Medical and Sterilization Co."
  },
  {
    tradeName: "PABAL RTS 100 mcg/ml Solution for Injection",
    scientificName: "CARBETOCIN",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Intravenous",
    size: 1,
    sizeUnit: "ml",
    packageTypes: "Ampoule",
    packageSize: 5,
    name: "JUBILANT HOLLISTERSTIER GENERAL PARTNERSHIP"
  },
  {
    tradeName: "PANADREX 500 MG TAB",
    scientificName: "PARACETAMOL",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "KUWAIT SAUDI PHARMACEUTICAL INDUSTRIES"
  },
  {
    tradeName: "OPTIRAY 300MG-ML SOLUTION FOR IV. Injection",
    scientificName: "IOVERSOL",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Intravenous",
    size: 100,
    sizeUnit: "ml",
    packageTypes: "Vial",
    packageSize: 20,
    name: "LIEBEL  FLARSHEIM  COMPANY  LLC"
  },
  {
    tradeName: "OPTIRAY 350MG-ML SOLUTION FOR IV. Injection*",
    scientificName: "IOVERSOL",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Intravenous",
    size: 50,
    sizeUnit: "ml",
    packageTypes: "Vial",
    packageSize: 25,
    name: "LIEBEL  FLARSHEIM  COMPANY  LLC"
  },
  {
    tradeName: "OXALIPLATIN MEDAC 100MG POWDER",
    scientificName: "OXALIPLATIN",
    pharmaceuticalForm: "INJECTION, POWDER, FOR SOLUTION",
    administrationRoute: "Intravenous",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 1,
    name: "MEDAC"
  },
  {
    tradeName: "OXALIPLATIN MEDAC 50MG POWDER",
    scientificName: "OXALIPLATIN",
    pharmaceuticalForm: "INJECTION, POWDER, FOR SOLUTION",
    administrationRoute: "Intravenous",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 1,
    name: "MEDAC"
  },
  {
    tradeName: "PAINSTOP 20MG-ML AMPOULE",
    scientificName: "NEFOPAM",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Intravenous",
    size: 0,
    sizeUnit: "",
    packageTypes: "Ampoule",
    packageSize: 3,
    name: "MEDICAL UNION PHARMACEUTICALS CO"
  },
  {
    tradeName: "OEDEMAX",
    scientificName: "FUROSEMIDE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 10,
    name: "MERCKLE"
  },
  {
    tradeName: "OEDEMAX",
    scientificName: "FUROSEMIDE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 50,
    name: "MERCKLE"
  },
  {
    tradeName: "ORS New (50 SACHET)",
    scientificName: "Sodium chloride , Potassium chloride , Tri sodium citrate anhydrous , Dextrose Anhydrous",
    pharmaceuticalForm: "POWDER, FOR SOLUTION",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Sachet",
    packageSize: 50,
    name: "NATIONAL PHARMACEUTICAL INDUSTRIES CO"
  },
  {
    tradeName: "OXICLAV 625MG F.C.TABLETS",
    scientificName: "AMOXICILLIN, CLAVULANIC ACID",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 20,
    name: "NEOPHARMA"
  },
  {
    tradeName: "OTRIVIN MENTHOL 0.1% NASAL SPRAY",
    scientificName: "XYLOMETAZOLINE HYDROCHLORIDE, MENTHOL",
    pharmaceuticalForm: "spray",
    administrationRoute: "Nasal",
    size: 10,
    sizeUnit: "mg",
    packageTypes: "Spray Container",
    packageSize: 1,
    name: "NOVARTIS"
  },
  {
    tradeName: "OTRIVIN DOSING SPRAY 0.1%",
    scientificName: "XYLOMETAZOLINE HYDROCHLORIDE",
    pharmaceuticalForm: "nasal drops, solution",
    administrationRoute: "Nasal",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Spray Container",
    packageSize: 1,
    name: "NOVARTIS"
  },
  {
    tradeName: "NOVOMIX 50 PEN FILL",
    scientificName: "INSULIN ASPART, INSULIN ASPART PROTAMINE",
    pharmaceuticalForm: "INJECTION, SUSPENSION",
    administrationRoute: "Subcutaneous",
    size: 3,
    sizeUnit: "ml",
    packageTypes: "Cartridge",
    packageSize: 5,
    name: "NOVO NORDISK"
  },
  {
    tradeName: "NOVOMIX 50 FLEXPEN",
    scientificName: "INSULIN ASPART, INSULIN ASPART PROTAMINE",
    pharmaceuticalForm: "INJECTION, SUSPENSION",
    administrationRoute: "Subcutaneous",
    size: 3,
    sizeUnit: "ml",
    packageTypes: "Cartridge",
    packageSize: 5,
    name: "NOVO NORDISK"
  },
  {
    tradeName: "NOVORAPID FLEXPEN 100U\\ML",
    scientificName: "INSULIN ASPART",
    pharmaceuticalForm: "solution for injection in PreFilled pen",
    administrationRoute: "Subcutaneous",
    size: 3,
    sizeUnit: "ml",
    packageTypes: "PreFilled Pen",
    packageSize: 5,
    name: "NOVO NORDISK"
  },
  {
    tradeName: "OCTANINE F 500 IU",
    scientificName: "FACTOR IX HUMAN ",
    pharmaceuticalForm: "powder for injection",
    administrationRoute: "Parenteral",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Vial",
    packageSize: 1,
    name: "OCTAPHARMA"
  },
  {
    tradeName: "OCTANINE F 1000 I.U\\10ML VIAL",
    scientificName: "COAGULATION FACTOR IX",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Parenteral",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Vial",
    packageSize: 1,
    name: "OCTAPHARMA"
  },
  {
    tradeName: "OCTANATE 500IU VIAL",
    scientificName: "COAGULATION FACTOR VIII (HUMAN ANTIHAEMOPHILIC FRACTION) ",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Parenteral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 1,
    name: "OCTAPHARMA"
  },
  {
    tradeName: "OCTANATE 250IU VIAL",
    scientificName: "COAGULATION FACTOR VIII (HUMAN ANTIHAEMOPHILIC FRACTION) ",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Parenteral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 1,
    name: "OCTAPHARMA"
  },
  {
    tradeName: "NOVIRAX CREAM 15 GM",
    scientificName: "ACYCLOVIR (ACICLOVIR)",
    pharmaceuticalForm: "cream",
    administrationRoute: "Topical",
    size: 15,
    sizeUnit: "g",
    packageTypes: "Tube",
    packageSize: 1,
    name: "OMAN PHARMACEUTICAL PRODUCTS"
  },
  {
    tradeName: "OS-CAL TAB 500MG",
    scientificName: "CALCIUM CARBONATE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Tablet Container",
    packageSize: 30,
    name: "PFIZER"
  },
  {
    tradeName: "OPTIMAL 0.05% CREAM",
    scientificName: "TRETINOIN",
    pharmaceuticalForm: "cream",
    administrationRoute: "Topical",
    size: 30,
    sizeUnit: "mg",
    packageTypes: "Tube",
    packageSize: 30,
    name: "Pharma International Co."
  },
  {
    tradeName: "0.9% W/V SODIUM CHLORIDE INJECTION B.P",
    scientificName: "SODIUM CHLORIDE",
    pharmaceuticalForm: "INJECTION, SOLUTION",
    administrationRoute: "Parenteral",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Bottle",
    packageSize: 1,
    name: "Pharmaceutical Solution Industries (PSI)"
  },
  {
    tradeName: "PALETA 75mg film-coated tablets",
    scientificName: "CLOPIDOGREL BESYLATE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "PHARMATHEN INTERNATIONAL"
  },
  {
    tradeName: "PANTHOPHIL 5% OINTMENT",
    scientificName: "DEXPANTHENOL",
    pharmaceuticalForm: "ointment",
    administrationRoute: "Topical",
    size: 30,
    sizeUnit: "g",
    packageTypes: "Tube",
    packageSize: 1,
    name: "PHILADELPHIA PHARMACEUTICAL"
  },
  {
    tradeName: "OFLACIN 200MG TAB",
    scientificName: "OFLOXACIN",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 10,
    name: "Ram Pharmaceutical Industries"
  },
  {
    tradeName: "RIAPANTA 40 mg E.C. tablet",
    scientificName: "PANTOPRAZOLE SODIUM SESQUIHYDRATE",
    pharmaceuticalForm: "TABLET, COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Bottle",
    packageSize: 15,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "PARAFON",
    scientificName: "CHLORZOXAZONE, PARACETAMOL",
    pharmaceuticalForm: "Capsule",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OCURED",
    scientificName: "ANTAZOLINE SULPHATE, NAPHAZOLINE NITRATE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OCUMOL 0.5%",
    scientificName: "TIMOLOL MALEATE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OCULAC",
    scientificName: "SODIUM CHLORIED, HYPROMELLOSE",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 10,
    sizeUnit: "ml",
    packageTypes: "Bottle",
    packageSize: 1,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OCUGESIC",
    scientificName: "DICLOFENAC SODIUM",
    pharmaceuticalForm: "SOLUTION/ DROPS",
    administrationRoute: "Ophthalmic",
    size: 5,
    sizeUnit: "ml",
    packageTypes: "Dropper Container",
    packageSize: 1,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OLAZINE 10MG FILM COATED TABLETS",
    scientificName: "OLANZAPINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OLAZINE 15MG FILM COATED TABLETS",
    scientificName: "OLANZAPINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OLAZINE 5MG FILM COATED TABLETS",
    scientificName: "OLANZAPINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OLAZINE 20MG FILM COATED TABLETS",
    scientificName: "OLANZAPINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "OLAZINE 2.5MG FILM COATED TABLETS",
    scientificName: "OLANZAPINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "RIYADH PHARMA"
  },
  {
    tradeName: "PANTOMAX 40MG E.C.TABLETS",
    scientificName: "PANTOPRAZOLE",
    pharmaceuticalForm: "TABLET, COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 15,
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO"
  },
  {
    tradeName: "OLMETEC PLUS 40MG-25MG F.C. TABLETS",
    scientificName: "OLMESARTAN MEDOXOMIL, HYDROCHLOROTHIAZIDE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO"
  },
  {
    tradeName: "OLMETEC PLUS 40MG-12.5MG F.C. TABLETS",
    scientificName: "OLMESARTAN MEDOXOMIL, HYDROCHLOROTHIAZIDE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO"
  },
  {
    tradeName: "OLMETEC PLUS 20MG-12.5MG F.C. TABLETS",
    scientificName: "OLMESARTAN MEDOXOMIL, HYDROCHLOROTHIAZIDE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO"
  },
  {
    tradeName: "OLMETEC 40 mg film-coated tablet",
    scientificName: "OLMESARTAN MEDOXOMIL",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO"
  },
  {
    tradeName: "OLMETEC 20MG F.C. TABLETS",
    scientificName: "OLMESARTAN MEDOXOMIL",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "SAJA-SAUDI ARABIAN JAPANESE PHARMACEUTICAL CO"
  },
  {
    tradeName: "OSPEN 500",
    scientificName: "PHENOXYMETHYLPENICILLIN (PENICILIN V)",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "SANDOZ"
  },
  {
    tradeName: "OSPEN 1000 ",
    scientificName: "PHENOXYMETHYLPENICILLIN (PENICILIN V)",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "SANDOZ"
  },
  {
    tradeName: "ORELOX 100MG TABLETS",
    scientificName: "CEFPODOXIME",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 10,
    name: "SANOFI WINTHROP INDUSTRIE"
  },
  {
    tradeName: "ORUVAIL S-R CAPS 100 MG",
    scientificName: "KETOPROFEN",
    pharmaceuticalForm: "CAPSULE, EXTENDED RELEASE",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 28,
    name: "sanofi-aventis"
  },
  {
    tradeName: "OVITRELLE 250MCG POWDER & SOLVENT FOR INJ",
    scientificName: "CHORIOGONADOTROPIN ALFA",
    pharmaceuticalForm: "INJECTION, POWDER, FOR SOLUTION",
    administrationRoute: "Intramuscular",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 1,
    name: "SERONO"
  },
  {
    tradeName: "OROFAR LOZENGE",
    scientificName: "BENZOXONIUM CHLORIDE, LIDOCAINE HYDROCHLORIDE",
    pharmaceuticalForm: "Lozenge",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 24,
    name: "Siegfried Barbera, S.L"
  },
  {
    tradeName: "ORBENIN 500MG VIAL",
    scientificName: "CLOXACILLIN",
    pharmaceuticalForm: "Solution",
    administrationRoute: "Parenteral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Vial",
    packageSize: 10,
    name: "SMIITHKLINE BEECHAM"
  },
  {
    tradeName: "OLFEN",
    scientificName: "DICLOFENAC SODIUM",
    pharmaceuticalForm: "gel",
    administrationRoute: "Topical",
    size: 50,
    sizeUnit: "g",
    packageTypes: "Tube",
    packageSize: 1,
    name: "Sofarimex SA"
  },
  {
    tradeName: "ORATAB 100MG F.C. TABLETS",
    scientificName: "SUMATRIPTAN",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 2,
    name: "TABUK PHARMACEUTICAL MANUFACTURING CO."
  },
  {
    tradeName: "PANTOZOL 40MG TAB",
    scientificName: "PANTOPRAZOLE",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 15,
    name: "TAKEDA GMBH"
  },
  {
    tradeName: "OXIMAL 7.5MG TABLETS",
    scientificName: "MELOXICAM",
    pharmaceuticalForm: "Tablet",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "The Jordanian Pharmaceutical Manufacturing Medical Equipment Co. Ltd. (JPM)"
  },
  {
    tradeName: "OXETINE 20MG F.C. TABLETS",
    scientificName: "FLUOXETINE",
    pharmaceuticalForm: "TABLET, FILM COATED",
    administrationRoute: "Oral",
    size: 0,
    sizeUnit: "",
    packageTypes: "Blister",
    packageSize: 30,
    name: "The Jordanian Pharmaceutical Manufacturing Medical Equipment Co. Ltd. (JPM)"
  }
]
