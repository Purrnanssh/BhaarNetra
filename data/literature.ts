export type SourceCategory = "Government Standard" | "Peer-reviewed Literature" | "International Guideline" | "Technical Report" | "National Standard" | "Industry Specification" | "Primary Government Legislation" | "Evidence Legislation" | "National Cybersecurity Regulation" | "Digital Record Standards" | "Implementation Rules" | "National Highway Digital Infrastructure" | "Intelligent Transportation Framework" | "Highway ITS Standard" | "National Electronic Toll Collection Standard" | "National Vehicle Registration Framework" | "National Freight Analytics Framework" | "National Freight Demand Analysis" | "Freight Performance Metrics";

// Map our internal grouped taxonomy to formal parts.
export type RecordGroup = "Engineering" | "Legal & Enforcement" | "Digital Infrastructure";

export type Publication = {
  title: string;
  documentIdentifier: string; // e.g., IRC:37-2018
  organisation: string;
  region: string;
  year?: string;
  status?: "Current" | "Historical" | "Draft" | "Superseded" | "TODO";
  category?: SourceCategory;
  classification: string;     // e.g., PRIMARY GOVERNMENT STANDARD
  officialSource?: string;
  url: string | "TODO";
  linkText?: string;
};

export type EvidenceRecord = {
  id: string; // Internal ID, e.g. PE-01
  publicId: string; // e.g. "¹"
  title: string;
  group: RecordGroup;
  description: string;
  engineeringRelevance: string; // Replaces whyItMatters
  traceabilityClaim: string;    // e.g., "Fourth Power Law"
  referencedThroughout: string[];
  supports?: string[];
  proposalOutcomes: string[];   // e.g., ["Road Preservation", "Infrastructure Longevity"]
  citationUsageCount: number;
  lastReviewed: string;
  relatedStandards: string[];
  publications: Publication[];
};

export const literatureData: EvidenceRecord[] = [
  {
    id: "PE-01",
    publicId: "01",
    title: "Pavement Engineering & Fourth Power Law",
    group: "Engineering",
    description: "Describes the exponential relationship between axle load and pavement deterioration, commonly known as the Fourth Power Law.",
    engineeringRelevance: "This body of literature establishes the engineering relationship between axle loading and pavement deterioration, providing the scientific foundation for overload enforcement and long-term highway asset preservation.",
    traceabilityClaim: "Fourth Power Law & Structural Degradation",
    referencedThroughout: ["Hero", "Problem", "Fourth Power Law", "Impact"],
    proposalOutcomes: ["Road Preservation", "Infrastructure Longevity", "Reduced Public Expenditure"],
    citationUsageCount: 8,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-07", "PE-08"],
    publications: [
      {
        title: "Guidelines for the Design of Flexible Pavements",
        documentIdentifier: "IRC:37-2018",
        organisation: "Indian Roads Congress (IRC)",
        region: "India",
        year: "2018",
        classification: "Primary Government Standard",
        url: "https://law.resource.org/pub/in/bis/irc/irc.gov.in.037.2019.pdf",
        linkText: "View Official PDF ↗"
      },
      {
        title: "The AASHO Road Test — HRB Special Report 61E",
        documentIdentifier: "HRB Special Report 61E",
        organisation: "American Association of State Highway Officials (AASHO)",
        region: "United States",
        year: "1962",
        classification: "Foundational Engineering Research",
        url: "https://onlinepubs.trb.org/Onlinepubs/sr/sr61/sr-61e.pdf",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Long-Term Pavement Performance (LTPP) Program",
        documentIdentifier: "LTPP",
        organisation: "Federal Highway Administration (FHWA)",
        region: "United States",
        classification: "Government Technical Program",
        url: "https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/ltpp/03094/01.cfm?utm_source=chatgpt.com",
        linkText: "View FHWA Documentation ↗"
      }
    ]
  },
  {
    id: "PE-02",
    publicId: "07",
    title: "Continuous Corridor Enforcement",
    group: "Digital Infrastructure",
    description: "Engineering framework for deploying uninterrupted, free-flow overload enforcement across national highway corridors using networked Weigh-In-Motion systems, ANPR, FASTag integration and centralized evidence processing.",
    engineeringRelevance: "Continuous corridor enforcement replaces isolated inspection points with distributed intelligent enforcement infrastructure. These publications define the technical, operational and policy framework required for national-scale deployment of automated highway enforcement without interrupting traffic flow. Together they establish the engineering principles behind corridor-wide monitoring, electronic toll integration, interoperable ITS infrastructure and centralized violation processing.",
    traceabilityClaim: "Automated Screening Unlocks Scalability",
    supports: [
      "Continuous highway monitoring",
      "Corridor-wide overload detection",
      "FASTag interoperability",
      "ANPR integration",
      "Distributed enforcement",
      "Networked WIM deployment"
    ],
    referencedThroughout: [
      "Hero",
      "Current System",
      "Architecture",
      "Solution",
      "Deployment",
      "National Rollout"
    ],
    proposalOutcomes: [
      "Continuous enforcement",
      "Zero-stop screening",
      "National interoperability",
      "Corridor-wide monitoring",
      "Automated evidence generation",
      "Scalable nationwide deployment"
    ],
    citationUsageCount: 6,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-03", "PE-04"],
    publications: [
      {
        title: "Electronic Toll Collection using FASTag",
        documentIdentifier: "NHAI-ETC",
        organisation: "National Highways Authority of India",
        region: "India",
        status: "Current",
        category: "National Highway Digital Infrastructure",
        classification: "NATIONAL HIGHWAY DIGITAL INFRASTRUCTURE",
        officialSource: "NHAI",
        url: "https://nhai.gov.in/nhai/sites/default/files/mix_file/FAQ-FASTag.pdf",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Intelligent Transportation Systems (ITS) Guidelines",
        documentIdentifier: "MoRTH-ITS",
        organisation: "Ministry of Road Transport & Highways",
        region: "India",
        status: "Current",
        category: "Intelligent Transportation Framework",
        classification: "INTELLIGENT TRANSPORTATION FRAMEWORK",
        officialSource: "MoRTH",
        url: "https://nhai.gov.in/nhai/sites/default/files/mix_file/ATMS_11-53.pdf",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Guidelines for Intelligent Transportation Systems on Highways",
        documentIdentifier: "IRC-SP-110",
        organisation: "Indian Roads Congress (IRC)",
        region: "India",
        status: "Current",
        category: "Highway ITS Standard",
        classification: "HIGHWAY ITS STANDARD",
        officialSource: "IRC",
        url: "https://www.irc.nic.in/",
        linkText: "View Official Publication"
      }
    ]
  },
  {
    id: "PE-03",
    publicId: "02",
    title: "Certified Weigh-In-Motion Standards",
    group: "Engineering",
    description: "Technical specifications for in-tarmac sensor arrays, defining accuracy classes and legal acceptability criteria.",
    engineeringRelevance: "These publications establish internationally recognised performance, calibration and accuracy requirements for Weigh-In-Motion systems. They define how dynamic vehicle weights are measured, validated and verified, providing the technical foundation required for legally admissible overload enforcement without interrupting highway traffic.",
    traceabilityClaim: "Certified Dynamic Vehicle Weighing",
    referencedThroughout: ["Solution", "Tier 1 Screening", "Architecture", "National Deployment"],
    supports: [
      "Certified measurement accuracy",
      "Legal metrology compliance",
      "Dynamic axle-load estimation",
      "Continuous highway enforcement",
      "Legally defensible evidence generation"
    ],
    proposalOutcomes: [
      "Certified overload detection",
      "Court-defensible evidence",
      "National-scale deployment readiness",
      "Standards-compliant enforcement"
    ],
    citationUsageCount: 2,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-05"],
    publications: [
      {
        title: "Automatic Instruments for Weighing Road Vehicles in Motion and Measuring Axle Loads",
        documentIdentifier: "OIML R 134-1",
        organisation: "International Organization of Legal Metrology (OIML)",
        region: "International",
        year: "2006",
        classification: "PRIMARY INTERNATIONAL STANDARD",
        url: "https://www.oiml.org/en/files/pdf_r/r134-1-e06.pdf",
        linkText: "View Official Standard ↗"
      },
      {
        title: "Weigh-in-Motion of Road Vehicles (COST 323)",
        documentIdentifier: "COST 323",
        organisation: "European Commission",
        region: "European Union",
        year: "1998",
        classification: "FOUNDATIONAL TECHNICAL REPORT",
        url: "https://op.europa.eu/en/publication-detail/-/publication/5eebc637-5aa6-4e5d-bd1d-01c8d13534fd",
        linkText: "View European Publication ↗"
      },
      {
        title: "Standard Specification for Highway Weigh-in-Motion (WIM) Systems",
        documentIdentifier: "ASTM E1318",
        organisation: "ASTM International",
        region: "United States",
        classification: "PRIMARY ENGINEERING STANDARD",
        url: "https://store.astm.org/e1318-09r17.html?utm_source=chatgpt.com",
        linkText: "View ASTM Standard ↗"
      }
    ]
  },
  {
    id: "PE-04",
    publicId: "08",
    title: "Vehicle Identification & Identity Resolution",
    group: "Digital Infrastructure",
    description: "Establishes the digital architecture required to convert physical vehicle observations into legally verified identities. These protocols define the integration of optical character recognition, radio-frequency identification, and central registries to achieve zero-stop vehicle attribution.",
    engineeringRelevance: "Automated enforcement requires absolute certainty when binding a sensor measurement to a penalised entity. This body of literature provides the technical framework for fusing ANPR data, NETC FASTag transactions, and MoRTH VAHAN records into a single identity resolution pipeline. By triangulating multiple independent data points, the system dramatically reduces false positives and ensures every enforcement action is legally attributable without manual intervention.",
    traceabilityClaim: "Multi-Modal Sensor Fusion Resolves Identity",
    supports: [
      "Vehicle identity verification",
      "FASTag interoperability",
      "ANPR validation",
      "VAHAN registry integration",
      "Automated owner identification",
      "Legally attributable enforcement"
    ],
    referencedThroughout: [
      "Current System",
      "Architecture",
      "Enforcement Pipeline",
      "Identity Resolution",
      "Violation Processing"
    ],
    proposalOutcomes: [
      "Unique vehicle identification",
      "Reduced false matches",
      "Automated owner mapping",
      "Accurate violation attribution",
      "Seamless enforcement workflow",
      "National interoperability"
    ],
    citationUsageCount: 1,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-06"],
    publications: [
      {
        title: "FASTag / National Electronic Toll Collection (NETC) Technical & Procedural Guidelines",
        documentIdentifier: "IHMCL-FASTAG-SPEC",
        organisation: "Indian Highways Management Company Limited (IHMCL)",
        region: "India",
        status: "Current",
        category: "National Electronic Toll Collection Standard",
        classification: "NATIONAL ELECTRONIC TOLL COLLECTION STANDARD",
        officialSource: "IHMCL",
        url: "https://ihmcl.co.in/wp-content/uploads/2023/02/NETC_PG_V1.9_.pdf",
        linkText: "View Official Publication ↗"
      },
      {
        title: "VAHAN – National Vehicle Registry & Vehicle Data Integration",
        documentIdentifier: "MoRTH-VAHAN",
        organisation: "Ministry of Road Transport & Highways (MoRTH)",
        region: "India",
        status: "Current",
        category: "National Vehicle Registration Framework",
        classification: "NATIONAL VEHICLE REGISTRATION FRAMEWORK",
        officialSource: "MoRTH",
        url: "https://vahan.parivahan.gov.in/",
        linkText: "View Official Publication"
      }
    ]
  },
  {
    id: "PE-05",
    publicId: "05",
    title: "Legal Metrology, Certified Measurement",
    group: "Legal & Enforcement",
    description: "Defines the statutory framework governing certified measurement systems and legal metrology, mandating strict instrument verification, calibration, and absolute evidentiary admissibility for regulatory enforcement.",
    engineeringRelevance: "This body of literature establishes why certified metrology is mandatory for automated highway enforcement, demonstrating that software estimation alone is legally insufficient for penalising private entities. It mandates rigorous calibration and unbroken measurement traceability to ensure that dynamic mass readings maintain unquestionable evidentiary integrity. By transforming raw sensor data into certified metrological records, these publications establish absolute confidence in Weigh-In-Motion enforcement systems, proving how legally certified measurements become fully admissible evidence in judicial proceedings.",
    traceabilityClaim: "Statutory Necessity of Metrological Calibration",
    supports: [
      "Certified measurement accuracy",
      "Legal metrology compliance",
      "Calibrated WIM instrumentation",
      "Sensor verification",
      "Enforcement-grade measurements",
      "Court-admissible evidence"
    ],
    referencedThroughout: [
      "Tier 2 Enforcement",
      "Enforcement Workflow",
      "Architecture",
      "Legal Framework",
      "Measurement Pipeline"
    ],
    proposalOutcomes: [
      "Judicial admissibility",
      "Legally defensible evidence",
      "Certified enforcement workflow",
      "Measurement integrity",
      "Regulatory compliance",
      "National deployment readiness"
    ],
    citationUsageCount: 4,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-03", "PE-06"],
    publications: [
      {
        title: "The Legal Metrology Act, 2009",
        documentIdentifier: "ACT-01-2010",
        organisation: "Government of India",
        classification: "PRIMARY GOVERNMENT LEGISLATION",
        region: "India",
        year: "2009",
        url: "https://www.indiacode.nic.in/bitstream/123456789/4892/1/legalmetrology_act_2009.pdf",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Motor Vehicles (Amendment) Act, 2019",
        documentIdentifier: "ACT-32-2019",
        organisation: "Government of India",
        classification: "TRANSPORT ENFORCEMENT LEGISLATION",
        region: "India",
        year: "2019",
        url: "https://prsindia.org/files/bills_acts/bills_parliament/2019/Motor%20Vehicles%20%28Amendment%29%20Act%2C%202019.pdf?utm_source=chatgpt.com",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Legal Metrology (General) Rules, 2011",
        documentIdentifier: "LM-RULES-2011",
        organisation: "Government of India",
        classification: "IMPLEMENTATION RULES",
        region: "India",
        year: "2011",
        url: "https://www.indiacode.nic.in/handle/123456789/1362/simple-search?query=Legal+Metrology+General+Rules%2C+2011&searchradio=rules",
        linkText: "View Official Publication ↗"
      }
    ]
  },
  {
    id: "PE-06",
    publicId: "06",
    title: "Digital Evidence, Chain of Custody",
    group: "Legal & Enforcement",
    description: "Defines the statutory framework governing digital evidence, cryptographic integrity, timestamping, secure audit logging, and chain-of-custody requirements for automated highway enforcement systems.",
    engineeringRelevance: "Automated overload enforcement is only effective if every violation record can withstand judicial scrutiny. These publications establish the legal and technical framework for converting raw sensor measurements into authenticated electronic evidence through cryptographic protection, secure storage, certified timestamps, audit trails, and legally recognised electronic records. Together they ensure every enforcement event remains traceable, tamper-evident, and admissible in court.",
    traceabilityClaim: "Cryptographic Integrity Ensures Admissibility",
    supports: [
      "Cryptographic integrity",
      "Electronic evidence admissibility",
      "Digital signatures",
      "Timestamp verification",
      "Secure audit logging",
      "Tamper detection",
      "Chain-of-custody preservation"
    ],
    referencedThroughout: [
      "Tier 2 Enforcement",
      "Evidence Pipeline",
      "Digital Signing",
      "Enforcement Workflow",
      "Judicial Review"
    ],
    proposalOutcomes: [
      "Court-admissible electronic evidence",
      "Tamper-evident digital records",
      "Cryptographically protected evidence",
      "End-to-end traceability",
      "Secure enforcement audit trails",
      "National legal compliance"
    ],
    citationUsageCount: 5,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-04", "PE-05"],
    publications: [
      {
        title: "Information Technology Act, 2000",
        documentIdentifier: "ACT-21-2000",
        organisation: "Government of India",
        region: "India",
        year: "2000",
        status: "Current",
        category: "Primary Government Legislation",
        classification: "PRIMARY GOVERNMENT LEGISLATION",
        officialSource: "India Code",
        url: "https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf?utm_source=chatgpt.com",
        linkText: "View Official Publication"
      },
      {
        title: "Legal Metrology (General) Rules, 2011",
        documentIdentifier: "LM-RULES-2011",
        organisation: "Government of India",
        region: "India",
        year: "2011",
        status: "Current",
        category: "Implementation Rules",
        classification: "IMPLEMENTATION RULES",
        officialSource: "India Code",
        url: "https://www.indiacode.nic.in/handle/123456789/1362/simple-search?query=Legal+Metrology+General+Rules%2C+2011&searchradio=rules",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Directions Relating to Information Security Practices, Procedure, Prevention, Response and Reporting of Cyber Incidents",
        documentIdentifier: "CERT-2022",
        organisation: "Indian Computer Emergency Response Team (CERT-In)",
        region: "India",
        year: "2022",
        status: "Current",
        category: "National Cybersecurity Regulation",
        classification: "NATIONAL CYBERSECURITY REGULATION",
        officialSource: "CERT-In",
        url: "https://www.cert-in.org.in/",
        linkText: "View Official Publication"
      }
    ]
  },
  {
    id: "PE-07",
    publicId: "03",
    title: "Highway Asset Management",
    group: "Engineering",
    description: "Macro-level engineering guidance governing lifecycle management, maintenance prioritisation and long-term preservation of national highway infrastructure.",
    engineeringRelevance: "Highway Asset Management provides the engineering and economic framework for maintaining road infrastructure over its entire lifecycle. These publications demonstrate that preventing premature pavement deterioration through overload enforcement significantly reduces maintenance expenditure, extends pavement service life and enables data-driven infrastructure investment.",
    traceabilityClaim: "Freight Volumes Correlate to Asset Deterioration",
    referencedThroughout: [
      "Impact",
      "Economic Benefits",
      "Infrastructure Longevity",
      "National Deployment"
    ],
    supports: [
      "Lifecycle asset preservation",
      "Pavement service-life optimisation",
      "Maintenance prioritisation",
      "Cost-effective infrastructure management",
      "Network performance monitoring"
    ],
    proposalOutcomes: [
      "Reduced lifecycle cost",
      "Longer pavement life",
      "Predictive maintenance planning",
      "Sustainable highway infrastructure",
      "Evidence-based investment decisions"
    ],
    citationUsageCount: 3,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-01", "PE-09"],
    publications: [
      {
        title: "Transportation Asset Management",
        documentIdentifier: "FHWA-ASSET",
        organisation: "Federal Highway Administration (FHWA)",
        classification: "PRIMARY GOVERNMENT GUIDANCE",
        region: "United States",
        url: "https://www.fhwa.dot.gov/asset/",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Transportation Asset Management Overview",
        documentIdentifier: "FHWA-AMO",
        organisation: "Federal Highway Administration (FHWA)",
        classification: "ENGINEERING GUIDANCE",
        region: "United States",
        url: "https://www.fhwa.dot.gov/asset/if08008/amo_02.cfm",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Transportation Asset Management Plans (TAMP)",
        documentIdentifier: "FHWA-TAMP",
        organisation: "Federal Highway Administration (FHWA)",
        classification: "IMPLEMENTATION FRAMEWORK",
        region: "United States",
        url: "https://www.fhwa.dot.gov/asset/plans.cfm",
        linkText: "View Official Publication ↗"
      }
    ]
  },
  {
    id: "PE-08",
    publicId: "04",
    title: "Road Safety",
    group: "Engineering",
    description: "Correlates vehicle overloading with braking performance, stopping distance, vehicle stability and crash severity.",
    engineeringRelevance: "These publications establish the engineering relationship between heavy vehicle mass, braking capability, stopping distance and roadway safety. Together they demonstrate why overloaded commercial vehicles increase crash risk and why effective overload enforcement improves public safety while reducing severe collisions.",
    traceabilityClaim: "Mass Anomalies Proportionally Increase Fatality Risk",
    referencedThroughout: [
      "Impact",
      "Problem",
      "Solution",
      "Enforcement"
    ],
    supports: [
      "Heavy vehicle braking performance",
      "Stopping distance analysis",
      "Crash risk reduction",
      "Road safety engineering",
      "Commercial vehicle safety"
    ],
    proposalOutcomes: [
      "Reduced stopping distance risk",
      "Lower crash severity",
      "Safer freight corridors",
      "Improved heavy vehicle compliance",
      "Better roadway safety"
    ],
    citationUsageCount: 1,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-01", "PE-03"],
    publications: [
      {
        title: "Vehicle Characteristics Affecting Safety",
        documentIdentifier: "FHWA-TSW",
        organisation: "Federal Highway Administration (FHWA)",
        classification: "PRIMARY GOVERNMENT GUIDANCE",
        region: "United States",
        url: "https://www.fhwa.dot.gov/reports/tswstudy/vehiclsaf.htm",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Air Brake Systems — Final Rule",
        documentIdentifier: "FMVSS-121",
        organisation: "National Highway Traffic Safety Administration (NHTSA)",
        classification: "FEDERAL MOTOR VEHICLE SAFETY STANDARD",
        region: "United States",
        url: "https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/121_stopping_distance_fr.pdf",
        linkText: "View Official Publication ↗"
      },
      {
        title: "Stopping Sight Distance Design for Large Trucks",
        documentIdentifier: "TRR-1208",
        organisation: "Transportation Research Board (TRB)",
        classification: "PEER-REVIEWED TRANSPORTATION ENGINEERING RESEARCH",
        region: "United States",
        url: "https://onlinepubs.trb.org/Onlinepubs/trr/1989/1208/1208-005.pdf",
        linkText: "View Official Publication ↗"
      }
    ]
  },
  {
    id: "PE-09",
    publicId: "09",
    title: "Freight Analytics, Network Intelligence",
    group: "Digital Infrastructure",
    description: "Nationwide Weigh-In-Motion deployments continuously generate freight movement intelligence that extends beyond overload enforcement. Aggregated vehicle, axle-load, and corridor activity data enable freight demand modelling, infrastructure investment planning, logistics optimisation, and evidence-based transport policy.",
    engineeringRelevance: "Modern freight infrastructure functions as a nationwide sensing network. Every WIM installation contributes continuous traffic, weight, and freight-flow observations that can be transformed into strategic intelligence for predicting corridor demand, prioritising maintenance, identifying logistics bottlenecks, and supporting long-term transportation planning. These publications establish the engineering and analytical methods used to convert operational highway data into national freight intelligence.",
    traceabilityClaim: "Sensor Networks Yield Macro-Economic Intelligence",
    supports: [
      "Freight demand modelling",
      "National freight analytics",
      "Corridor performance monitoring",
      "Logistics optimisation",
      "Infrastructure investment planning",
      "Predictive maintenance"
    ],
    referencedThroughout: [
      "Analytics Dashboard",
      "Network Intelligence",
      "National Rollout",
      "Impact",
      "Infrastructure Planning",
      "Freight Insights"
    ],
    proposalOutcomes: [
      "National freight intelligence",
      "Corridor performance analytics",
      "Predictive infrastructure planning",
      "Data-driven freight policy",
      "Logistics optimisation",
      "Long-term asset forecasting"
    ],
    citationUsageCount: 3,
    lastReviewed: "June 2026",
    relatedStandards: ["PE-02", "PE-07"],
    publications: [
      {
        title: "Freight Analysis Framework (FAF5)",
        documentIdentifier: "FHWA-FAF5",
        organisation: "Federal Highway Administration (FHWA) & Bureau of Transportation Statistics (BTS)",
        region: "United States",
        year: "2025",
        status: "Current",
        category: "National Freight Analytics Framework",
        classification: "NATIONAL FREIGHT ANALYTICS FRAMEWORK",
        officialSource: "FHWA",
        url: "https://ops.fhwa.dot.gov/freight/freight_analysis/faf/",
        linkText: "View Official Publication"
      },
      {
        title: "Unlocking the Potential of Freight Logistics in India",
        documentIdentifier: "WB-FREIGHT-INDIA",
        organisation: "World Bank",
        region: "India",
        year: "2018",
        status: "Current",
        category: "National Freight Demand Analysis",
        classification: "NATIONAL FREIGHT DEMAND ANALYSIS",
        officialSource: "World Bank",
        url: "https://openknowledge.worldbank.org/entities/publication/355d3821-ff22-598a-a825-8e71b1e79e8f",
        linkText: "View Official Publication"
      },
      {
        title: "Freight Transport Indicators",
        documentIdentifier: "OECD-FREIGHT",
        organisation: "Organisation for Economic Co-operation and Development (OECD)",
        region: "International",
        status: "Current",
        category: "Freight Performance Metrics",
        classification: "FREIGHT PERFORMANCE METRICS",
        officialSource: "OECD",
        url: "https://www.oecd.org/en/data/indicators/freight-transport.html",
        linkText: "View Official Publication"
      }
    ]
  }
];
