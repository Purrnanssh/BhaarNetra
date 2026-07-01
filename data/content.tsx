import { ReferenceLink } from "@/components/ReferenceLink";

export const journeyStages = [
  {
    id: "01",
    title: "Weigh-In-Motion Measurement",
    eyebrow: "Sensor plane",
    metrics: [
      { label: "Measured Weight", value: "34.2 t" },
      { label: "Vehicle Speed", value: "48 km/h" },
      { label: "Timestamp", value: "14:32:08 IST" },
      { label: "Status", value: "Weight Captured" }
    ],
    event: "weight.measured",
  },
  {
    id: "02",
    title: "ANPR Identification",
    eyebrow: "Optical capture",
    metrics: [
      { label: "Registration", value: "HR 55 AB 2481" },
      { label: "Confidence", value: "99.7%" },
      { label: "Camera ID", value: "PLZ-04" },
      { label: "Status", value: "Matched" }
    ],
    event: "plate.read",
  },
  {
    id: "03",
    title: "FASTag Verification",
    eyebrow: "Identity linkage",
    metrics: [
      { label: "FASTag ID", value: "3416XXXXXX" },
      { label: "Account Status", value: "Active" },
      { label: "Verification", value: "Successful" },
      { label: "Status", value: "Identity Linked" }
    ],
    event: "identity.verified",
  },
  {
    id: "04",
    title: "Vehicle Classification",
    eyebrow: "Category & Entitlement",
    metrics: [
      { label: "Class", value: "N3 Rigid Truck" },
      { label: "Permissible GVW", value: "28.0 t" },
      { label: "Measured GVW", value: "34.2 t" },
      { label: "Status", value: "Classified" }
    ],
    event: "vehicle.classified",
  },
  {
    id: "05",
    title: "Overload Detection",
    eyebrow: "Limit comparison",
    metrics: [
      { label: "Measured Weight", value: "34.2 t" },
      { label: "Permissible Weight", value: "28.0 t" },
      { label: "Excess Load", value: "+22.1%" },
      { label: "Result", value: "OVERLOAD DETECTED" }
    ],
    event: "overload.detected",
  },
  {
    id: "06",
    title: "Certified Evidence Package",
    eyebrow: "Legally defensible",
    metrics: [
      { label: "Weight Record", value: "Attached" },
      { label: "ANPR Record", value: "Attached" },
      { label: "FASTag Record", value: "Attached" },
      { label: "Hash Signature", value: "Generated" },
      { label: "Status", value: "Evidence Sealed" }
    ],
    event: "evidence.sealed",
  },
  {
    id: "07",
    title: "Penalty Calculation",
    eyebrow: "Automatic adjudication",
    metrics: [
      { label: "Overload Category", value: "22.1%" },
      { label: "Applicable Charge", value: "₹12,000" },
      { label: "Case ID", value: "BN-2026-004182" },
      { label: "Status", value: "Penalty Generated" }
    ],
    event: "penalty.computed",
  },
  {
    id: "08",
    title: "National Analytics",
    eyebrow: "Network intelligence",
    metrics: [
      { label: "Today's Violations", value: "1,284" },
      { label: "Recovered Charges", value: "₹2.7 Cr" },
      { label: "High-Risk Corridor", value: "Delhi–Jaipur" },
      { label: "Network Status", value: "Live" }
    ],
    event: "analytics.updated",
  },
] as const;

export const strategicCapabilities = [
  {
    id: "edge",
    index: "01",
    title: "Roadside Processing",
    copy: <>Every commercial vehicle is measured locally using certified roadside equipment. If connectivity is unavailable, measurements, timestamps, and evidence remain securely stored and automatically synchronize once communication is restored.<ReferenceLink id="PE-03" /></>,
  },
  {
    id: "legal",
    index: "02",
    title: "Evidence Generation",
    copy: <>Certified WIM measurements are combined with ANPR imagery, timestamps, and audit records to automatically create a tamper-evident evidence package suitable for legal enforcement.<ReferenceLink id="PE-06" /></>,
  },
  {
    id: "integration",
    index: "03",
    title: "Vehicle Identity Resolution",
    copy: <>The overload event is linked with FASTag and VAHAN records so every certified measurement is associated with the correct commercial vehicle and operator.<ReferenceLink id="PE-04" /></>,
  },
  {
    id: "intelligence",
    index: "04",
    title: "National Monitoring",
    copy: <>Data from every monitored corridor contributes to a centralized intelligence platform that identifies overload hotspots, repeat offenders, and infrastructure stress across the national highway network.<ReferenceLink id="PE-09" /></>,
  },
];

export const mvpRows = [
  ["ANPR", "REAL", "OpenCV + OCR on recorded vehicle clips or images"],
  ["Vehicle classification", "REAL", "Lightweight CV model by axle and silhouette"],
  ["Screening weight · Tier 1", "SIMULATED", "Load-cell proxy or parameterised feed"],
  ["Certified weight · Tier 2", "SIMULATED", "Synthetic high-confidence reading + mock certificate"],
  ["Identity · VAHAN + FASTag", "MOCKED", "Local reference table: plate → owner + legal GVW"],
  ["Penalty engine", "REAL", "Limit lookup, overload percentage and configured rule logic"],
  ["Evidence package", "REAL", "Hash-chained plate, weights and timestamp record"],
  ["Settlement", "MOCKED", "Simulated rail call with logged status transitions"],
  ["Dashboard", "REAL", "Live operator and analytics view over the real database"],
] as const;

export const services = [
  {
    name: "Vehicle Service",
    owns: "Vehicle domain",
    purpose:
      "Resolve a detected plate to verified identity, owner, class and registered legal GVW.",
    event: "identity.resolved",
  },
  {
    name: "Weight Service",
    owns: "Weight domain",
    purpose:
      "Persist screening and certified readings with certificate and calibration provenance.",
    event: "weight.certified",
  },
  {
    name: "Penalty Engine",
    owns: "Penalty domain",
    purpose:
      "Compare certified weight with the legal limit and create the only authoritative fine decision.",
    event: "penalty.computed",
  },
  {
    name: "Evidence Service",
    owns: "Evidence domain",
    purpose:
      <>Assemble and seal append-only, hash-chained packages sufficient for legal challenge.<ReferenceLink id="PE-06" /></>,
    event: "evidence.sealed",
  },
  {
    name: "Analytics Service",
    owns: "Analytics domain",
    purpose:
      <>Derive corridor trends, offender rankings, road stress and recovery KPIs.<ReferenceLink id="PE-09" /></>,
    event: "analytics.updated",
  },
  {
    name: "Notification Service",
    owns: "Notification domain",
    purpose:
      "Deliver operator alerts, offender notices and auditable delivery status.",
    event: "notice.issued",
  },
];
