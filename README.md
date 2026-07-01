<div align="center">
  <h1>BhaarNetra</h1>
  <p>National Digital Infrastructure for Freight Monitoring and Highway Asset Protection</p>
  
  [![Build Status](https://img.shields.io/github/actions/workflow/status/Purrnanssh/BhaarNetra/deploy.yml?style=flat-square&color=000000&logo=github)](https://github.com/Purrnanssh/BhaarNetra/actions)
  [![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=flat-square&logo=next.js)](https://nextjs.org)
  [![License](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](#license)
</div>

<br/>

<div align="center">
  <img src="https://via.placeholder.com/1200x600/0a0a0a/ffffff?text=BhaarNetra+Architecture" alt="BhaarNetra Banner" width="100%" />
</div>

<br/>

## Overview

Overloaded freight vehicles systematically accelerate the deterioration of national highways, reducing pavement life from decades to years. Structural fatigue scales to the fourth power of axle load, turning minor weight violations into catastrophic infrastructural degradation.

Currently, enforcement relies on fragmented, manual interventions that lack the scale and continuity required for a national highway network. Violation data resides in isolated silos, and physical enforcement creates logistical bottlenecks that disrupt legitimate supply chains.

BhaarNetra is a proposed digital infrastructure framework. It establishes a unified, telemetry-driven enforcement layer that operates continuously across the highway network without impeding traffic flow. 

By integrating Weigh-in-Motion (WIM), Automatic Number Plate Recognition (ANPR), and existing toll architectures, it creates an unbroken chain of custody from violation detection to legal enforcement.

---

## Core Principles

| Principle | Definition |
| :--- | :--- |
| **Continuous Monitoring** | Uninterrupted telemetry collection across designated highway corridors. |
| **Identity-linked Enforcement** | Deterministic mapping of vehicular telemetry to validated FASTag and VAHAN registries. |
| **Certified Measurement** | Utilization of Legal Metrology Act compliant sensors for unimpeachable data fidelity. |
| **Evidence Integrity** | Cryptographic chain of custody ensuring non-repudiation of collected violation data. |
| **Digital Infrastructure** | Software-defined enforcement replacing physical barricades and manual checkpoints. |
| **Legal Defensibility** | Architecture designed specifically to withstand evidentiary scrutiny in judicial proceedings. |

---

## Architecture

```text
                          [ National Highway Network ]
                                       │
                                       ▼
 ┌─────────────────────────── [ Edge Sensors ] ───────────────────────────┐
 │                                                                        │
 │       [ Weigh-in-Motion ]     [ ANPR Cameras ]       [ RFID/FASTag ]   │
 │        (Mass & Axle Load)     (Visual Identity)      (Electronic ID)   │
 │                                                                        │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
                      [ Ingestion & Correlation Engine ]
                                     │
                                     ▼
 ┌────────────────────────── [ Evidence Pipeline ] ───────────────────────┐
 │                                                                        │
 │   [ VAHAN Database ] ──▶ [ Identity Verification ] ◀── [ NETC System ] │
 │                                   │                                    │
 │                           [ Payload Analysis ]                         │
 │                                   │                                    │
 │                         [ Chain of Custody Log ]                       │
 │                                                                        │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
                      [ Automated Adjudication System ]
                                     │
                                     ▼
 ┌───────────────────────── [ Enforcement Subsystems ] ───────────────────┐
 │                                                                        │
 │     [ NHAI Analytics ]       [ e-Challan Node ]      [ State Portals ] │
 │                                                                        │
 └────────────────────────────────────────────────────────────────────────┘
```

---

## Features

| Feature | Description | Benefit |
| :--- | :--- | :--- |
| **Telemetry Ingestion** | Real-time processing of high-frequency sensor data streams. | Eliminates manual intervention. |
| **Multi-modal Correlation** | Deterministic matching of ANPR, FASTag, and WIM data. | Reduces false positive rates. |
| **Stateless Architecture** | Edge-agnostic processing pipelines for national scale. | Enables horizontal scaling. |
| **Evidentiary Packaging** | Automated generation of legally admissible violation packets. | Streamlines judicial processing. |
| **Network Analytics** | Aggregate insights into corridor stress and structural fatigue. | Empowers predictive maintenance. |

---

## Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, Server Components |
| **Framework** | Next.js 16 (App Router) |
| **Motion** | Framer Motion, GSAP |
| **Typography** | Inter (Google Fonts) |
| **Graphics** | Three.js, WebGL |
| **Styling** | Tailwind CSS 4 |
| **Deployment** | GitHub Pages (Static Export) |
| **Toolchain** | pnpm, ESLint, TypeScript |

---

## Screenshots

<br/>

<div align="center">
  <h3>Landing Page</h3>
  <img src="https://via.placeholder.com/1200x675/0a0a0a/ffffff?text=Landing+Page" width="100%" />
</div>

<br/>

<div align="center">
  <h3>Architecture</h3>
  <img src="https://via.placeholder.com/1200x675/0a0a0a/ffffff?text=Architecture" width="100%" />
</div>

<br/>

<div align="center">
  <h3>Methodology</h3>
  <img src="https://via.placeholder.com/1200x675/0a0a0a/ffffff?text=Methodology" width="100%" />
</div>

<br/>

<div align="center">
  <h3>Evidence System</h3>
  <img src="https://via.placeholder.com/1200x675/0a0a0a/ffffff?text=Evidence+System" width="100%" />
</div>

<br/>

<div align="center">
  <h3>Impact Dashboard</h3>
  <img src="https://via.placeholder.com/1200x675/0a0a0a/ffffff?text=Impact+Dashboard" width="100%" />
</div>

<br/>

---

## Literature & Standards

| Publication | Authority | Purpose | Status |
| :--- | :--- | :--- | :--- |
| **Motor Vehicles Act, 1988** | MoRTH | Legal framework for axle load limits and penalties. | Active |
| **Legal Metrology Act, 2009** | DoCA | Calibration and certification of weighing instruments. | Active |
| **Information Technology Act** | MeitY | Admissibility of electronic records and digital evidence. | Active |
| **IRC Guidelines** | Indian Roads Congress | Pavement design standards and fatigue assessment. | Prescriptive |
| **VAHAN Integration** | NIC | National registry for vehicle technical specifications. | Operational |
| **NETC FASTag Guidelines** | NPCI | Electronic toll collection and vehicle identity linking. | Operational |

---

## Methodology

This architecture relies strictly on primary government publications and established engineering standards. 

Engineering literature and infrastructural guidelines take absolute precedence to ensure the technical model remains accurate to physical highway constraints. Legal traceability is maintained throughout the architecture to guarantee that generated enforcement metrics map directly to existing statutory requirements, establishing a robust foundation for automated enforcement.

---

## Repository Structure

```text
bhaarnetra/
├── app/
│   ├── architecture/
│   ├── demo/
│   ├── methodology/
│   └── page.tsx
├── components/
│   ├── ui/
│   └── sections/
├── data/
│   ├── literature.ts
│   └── revisions.ts
├── public/
├── .github/
│   └── workflows/
├── next.config.mjs
└── package.json
```

---

## Getting Started

Clone the repository and install the dependencies using your preferred package manager.

```bash
git clone https://github.com/Purrnanssh/BhaarNetra.git
cd BhaarNetra
```

```bash
pnpm install
```

Start the local development server.

```bash
pnpm dev
```

Execute a local production build.

```bash
pnpm build
pnpm start
```

---

## Deployment

### GitHub Pages

This repository is configured for automated deployment to GitHub Pages. All pushes to the `main` branch trigger a continuous integration workflow that builds and publishes the application.

### Static Export

The architecture utilizes Next.js static export capabilities. Setting `output: 'export'` generates a highly optimized static directory containing HTML, CSS, and client-side JavaScript, eliminating the requirement for a Node.js runtime environment.

### Next.js Build Pipeline

The CI/CD pipeline installs dependencies via `pnpm`, executes `pnpm next build`, and uploads the resulting `out/` directory as an artifact. This artifact is subsequently deployed to the official GitHub Pages environment.

---

## Design Language

| Element | Implementation Philosophy |
| :--- | :--- |
| **Typography** | Inter is utilized exclusively for its exceptional legibility in dense technical interfaces. |
| **Spacing** | Governed by a strict engineering grid to maintain vertical rhythm and visual predictability. |
| **Motion** | Purposeful, hardware-accelerated micro-interactions utilizing Framer Motion and GSAP. |
| **Color System** | Monochromatic base with high-contrast accents, optimized for prolonged analytical use. |
| **Dark Theme** | Default presentation to reduce ocular fatigue and emphasize telemetry data visibility. |
| **Minimalism** | Absolute reduction of visual noise to maintain focus on core structural metrics. |
| **Glassmorphism**| Applied conservatively to establish depth hierarchy without compromising contrast ratios. |

---

## Future Roadmap

- [ ] National Corridor Simulation
- [ ] Digital Twin Integration
- [ ] AI-assisted Corridor Analytics
- [ ] Automated Enforcement Heatmaps
- [ ] State-level Adjudication Dashboard
- [ ] Cryptographic Evidence Archive
- [ ] Officer Verification Portal
- [ ] Predictive Maintenance Pipeline

---

## Contributing

Contributions are evaluated based on adherence to the architectural philosophy and engineering standards outlined in this document. Ensure that all modifications align with the existing design language and successfully pass static analysis workflows prior to submission.

---

## License

This project is licensed under the MIT License.

---

## Credits

**BhaarNetra**

<br/>

<hr/>

<div align="center">
  <p>Designed as a technical demonstration of a national digital infrastructure concept for highway asset protection.</p>
</div>
