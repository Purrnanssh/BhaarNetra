export type TermCategory = "Government Standard" | "Engineering Concept" | "Legal Framework" | "Technology" | "Infrastructure" | "Operational Concept" | "International Standard";

export type PrimaryReference = {
  publication: string;
  organisation: string;
  year: string;
  documentType: string;
};

export type HandbookEntry = {
  term: string;
  fullName?: string;
  category: TermCategory;
  definition: string;
  whyItMatters: string;          
  referencedIn: string[];   
  seeAlso: string[];        
  primaryReferences: PrimaryReference[];
  usageCount: number;
  hasDiagram?: boolean;          
};

export const glossaryData: HandbookEntry[] = [
  {
    term: "AASHTO",
    fullName: "American Association of State Highway and Transportation Officials",
    category: "Government Standard",
    definition: "A standards-setting body which publishes specifications, test protocols, and guidelines used in highway design and construction throughout the United States and internationally.",
    whyItMatters: "Provides the foundational research (AASHO Road Test) used to establish the Fourth Power Law, critical for understanding overload-induced pavement damage.",
    referencedIn: ["Hero", "Problem", "Technical Depth", "PE-01"],
    seeAlso: ["FHWA", "IRC", "MoRTH"],
    primaryReferences: [
      { publication: "AASHO Road Test", organisation: "AASHTO", year: "1962", documentType: "Technical Report" }
    ],
    usageCount: 8
  },
  {
    term: "ANPR",
    fullName: "Automatic Number Plate Recognition",
    category: "Technology",
    definition: "A technology that uses optical character recognition on images to read vehicle registration plates to create vehicle location data.",
    whyItMatters: "Enables identity-linked enforcement without interrupting traffic flow and forms one of the three primary sensing inputs within the BhaarNetra architecture.",
    referencedIn: ["Architecture", "Demo", "Solution / Tier 1", "PE-04"],
    seeAlso: ["FASTag", "VAHAN", "Identity Resolution"],
    primaryReferences: [
      { publication: "FASTag Technical Specifications", organisation: "IHMCL", year: "2023", documentType: "National Standard" }
    ],
    usageCount: 14,
    hasDiagram: true
  },
  {
    term: "Chain of Custody",
    category: "Legal Framework",
    definition: "In legal contexts, the chronological documentation or paper trail that records the sequence of custody, control, transfer, analysis, and disposition of physical or electronic evidence.",
    whyItMatters: "Ensures that digital sensor measurements remain legally admissible by guaranteeing cryptographic non-repudiation between the sensing layer and the penalty generation layer.",
    referencedIn: ["Enforcement Flow", "Architecture", "PE-06"],
    seeAlso: ["Legal Metrology", "WIM"],
    primaryReferences: [
      { publication: "Information Technology Act (Sec 65B)", organisation: "Govt of India", year: "2000", documentType: "Government Standard" }
    ],
    usageCount: 5,
    hasDiagram: true
  },
  {
    term: "FASTag",
    fullName: "Electronic Toll Collection System",
    category: "Infrastructure",
    definition: "An electronic toll collection system in India, operated by the National Highway Authority of India (NHAI). It employs Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid or savings account linked to it.",
    whyItMatters: "Serves as the primary financial and identity anchor, binding physical vehicle presence to verified bank accounts for automated penalty deduction.",
    referencedIn: ["Architecture", "Demo", "Impact", "PE-04"],
    seeAlso: ["ANPR", "VAHAN"],
    primaryReferences: [
      { publication: "FASTag Technical Specifications", organisation: "IHMCL", year: "Current", documentType: "National Standard" }
    ],
    usageCount: 22,
    hasDiagram: true
  },
  {
    term: "FHWA",
    fullName: "Federal Highway Administration",
    category: "Government Standard",
    definition: "An agency within the U.S. Department of Transportation that supports State and local governments in the design, construction, and maintenance of the Nation’s highway system.",
    whyItMatters: "Publishes definitive literature on highway asset management and freight corridor intelligence, heavily referenced to design macro-infrastructure policy.",
    referencedIn: ["Impact", "Analytics", "PE-07"],
    seeAlso: ["AASHTO", "IRC"],
    primaryReferences: [
      { publication: "Freight Facts and Figures", organisation: "FHWA", year: "2023", documentType: "Technical Report" }
    ],
    usageCount: 4
  },
  {
    term: "GVW",
    fullName: "Gross Vehicle Weight",
    category: "Engineering Concept",
    definition: "The total weight of a vehicle including its payload, fuel, driver, and passengers.",
    whyItMatters: "The primary legal and engineering metric for determining statutory overload limits and calculating subsequent pavement deterioration.",
    referencedIn: ["Problem", "Hero", "Solution / Tier 1"],
    seeAlso: ["WIM", "Legal Metrology"],
    primaryReferences: [
      { publication: "The Motor Vehicles (Amendment) Act", organisation: "Govt of India", year: "2019", documentType: "Government Standard" }
    ],
    usageCount: 15
  },
  {
    term: "Identity Resolution",
    category: "Operational Concept",
    definition: "The computational process of synthesizing multiple imperfect data points (like an OCR read of a dirty license plate and an RFID ping) into a single, highly confident entity identity.",
    whyItMatters: "Prevents false-positive penalties by ensuring that a physical truck on the highway perfectly matches the legal entity in the national registry before enforcement occurs.",
    referencedIn: ["Architecture", "Technical Depth", "PE-04"],
    seeAlso: ["ANPR", "FASTag", "VAHAN"],
    primaryReferences: [
      { publication: "VAHAN Data Integration Guidelines", organisation: "MoRTH", year: "2023", documentType: "Government Standard" }
    ],
    usageCount: 7
  },
  {
    term: "IRC",
    fullName: "Indian Roads Congress",
    category: "Government Standard",
    definition: "The apex body of highway engineers in India that publishes codes and standards for road and bridge construction.",
    whyItMatters: "Provides the domestic engineering baseline (e.g. IRC:37) for flexible pavement design, translating the Fourth Power Law into Indian highway contexts.",
    referencedIn: ["Problem", "Impact", "PE-01"],
    seeAlso: ["MoRTH", "NHAI", "AASHTO"],
    primaryReferences: [
      { publication: "IRC:37 Guidelines for Design", organisation: "IRC", year: "2018", documentType: "National Standard" }
    ],
    usageCount: 9
  },
  {
    term: "ISO",
    fullName: "International Organization for Standardization",
    category: "International Standard",
    definition: "An international standard-setting body composed of representatives from various national standards organizations.",
    whyItMatters: "Provides globally recognized frameworks for digital evidence integrity and information security management systems.",
    referencedIn: ["Technical Depth", "PE-06"],
    seeAlso: ["OIML"],
    primaryReferences: [
      { publication: "ISO/IEC 27001", organisation: "ISO", year: "2022", documentType: "International Standard" }
    ],
    usageCount: 2
  },
  {
    term: "Legal Metrology",
    category: "Legal Framework",
    definition: "The application of legal requirements to measurements and measuring instruments. In the context of highway enforcement, it ensures that sensors like WIM produce legally admissible measurement data.",
    whyItMatters: "Establishes that no sensor data is legally defensible in court without metrological certification, mandating the use of certified hardware instrumentation.",
    referencedIn: ["Solution / Tier 2", "Architecture", "PE-05"],
    seeAlso: ["WIM", "Chain of Custody", "OIML"],
    primaryReferences: [
      { publication: "The Legal Metrology Act", organisation: "Govt of India", year: "2009", documentType: "Government Standard" }
    ],
    usageCount: 11,
    hasDiagram: true
  },
  {
    term: "MoRTH",
    fullName: "Ministry of Road Transport and Highways",
    category: "Government Standard",
    definition: "An apex organization under the Central Government of India, entrusted with the task of formulating and administering policies for road transport, national highways, and transport research.",
    whyItMatters: "The ultimate regulatory authority defining statutory axle load limits and the legal framework for the VAHAN registry.",
    referencedIn: ["Hero", "Impact", "PE-04"],
    seeAlso: ["NHAI", "IRC"],
    primaryReferences: [
      { publication: "Motor Vehicles (Amendment) Act", organisation: "Govt of India", year: "2019", documentType: "Government Standard" }
    ],
    usageCount: 6
  },
  {
    term: "NHAI",
    fullName: "National Highways Authority of India",
    category: "Infrastructure",
    definition: "An autonomous agency of the Government of India, responsible for the management of a network of over 50,000 km of National Highways.",
    whyItMatters: "The primary beneficiary and deploying agency for the BhaarNetra architecture, responsible for safeguarding national public infrastructure.",
    referencedIn: ["Footer", "Hero", "Impact", "PE-07"],
    seeAlso: ["MoRTH", "FASTag"],
    primaryReferences: [
      { publication: "Highway Asset Management Guidelines", organisation: "NHAI", year: "2021", documentType: "Government Standard" }
    ],
    usageCount: 18
  },
  {
    term: "OECD",
    fullName: "Organisation for Economic Co-operation and Development",
    category: "International Standard",
    definition: "An intergovernmental economic organisation with 38 member countries, founded in 1961 to stimulate economic progress and world trade.",
    whyItMatters: "Provides international macro-economic research correlating heavy vehicle freight networks with road safety and infrastructure spending.",
    referencedIn: ["Impact", "PE-08"],
    seeAlso: ["FHWA"],
    primaryReferences: [
      { publication: "Heavy Vehicles: Regulatory, Operational and Safety Aspects", organisation: "OECD", year: "2011", documentType: "Technical Report" }
    ],
    usageCount: 1
  },
  {
    term: "OIML",
    fullName: "Organisation Internationale de Métrologie Légale",
    category: "International Standard",
    definition: "An intergovernmental treaty organization which develops model regulations, standards and related documents for use by legal metrology authorities and industry.",
    whyItMatters: "Defines the rigorous R-134 standard for Weigh-In-Motion sensors, setting the benchmark for certified dynamic weighing accuracy globally.",
    referencedIn: ["Solution / Tier 1", "PE-03"],
    seeAlso: ["WIM", "Legal Metrology"],
    primaryReferences: [
      { publication: "OIML R 134-1", organisation: "OIML", year: "2006", documentType: "International Standard" }
    ],
    usageCount: 3
  },
  {
    term: "VAHAN",
    category: "Infrastructure",
    definition: "A highly flexible and comprehensive national registry of vehicle registration, acting as the central repository of vehicle data in India.",
    whyItMatters: "Provides the definitive source of truth for a vehicle's legal characteristics, such as unladen weight, statutory limits, and ownership history.",
    referencedIn: ["Architecture", "Demo", "PE-04"],
    seeAlso: ["ANPR", "Identity Resolution", "FASTag"],
    primaryReferences: [
      { publication: "VAHAN Data Integration Guidelines", organisation: "MoRTH", year: "2023", documentType: "Government Standard" }
    ],
    usageCount: 13
  },
  {
    term: "WIM",
    fullName: "Weigh-In-Motion",
    category: "Technology",
    definition: "Devices that are designed to capture and record the axle weights and gross vehicle weights as vehicles drive over a measurement site at normal traffic speeds.",
    whyItMatters: "The core physical sensing layer of the BhaarNetra architecture, enabling continuous, highway-speed overload enforcement without stopping traffic.",
    referencedIn: ["Solution / Tier 1", "Architecture", "PE-03"],
    seeAlso: ["GVW", "Legal Metrology", "OIML"],
    primaryReferences: [
      { publication: "OIML R 134-1: Automatic instruments for weighing road vehicles in motion", organisation: "OIML", year: "2006", documentType: "International Standard" }
    ],
    usageCount: 19,
    hasDiagram: true
  }
];
