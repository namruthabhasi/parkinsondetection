# Parkinson'sDetection — Motor Characteristic Analysis & Research Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Model](https://img.shields.io/badge/Architecture-EfficientNet--B0-orange)](https://pytorch.org/vision/stable/models/efficientnet.html)
[![Dataset](https://img.shields.io/badge/Dataset-NewHandPD-informational)](#historical-technology-constraint-compliance)
[![Tech Cutoff](https://img.shields.io/badge/Tech_Cutoff-March_31%2C_2025-blueviolet)](#historical-technology-constraint-compliance)

Parkinson'sDetection is a high-end AI research web application strongly inspired by modern SaaS visual design principles (minimal aesthetic, warm off-white tones, space-grotesk headings, soft rounded cards, subtle borders, and smooth micro-interactions). It analyzes spiral drawings using computer vision and explainable AI (Grad-CAM) to evaluate motor tremor characteristics.

---

## Historical Technology Constraint Compliance

This project strictly adheres to the **March 31, 2025 technology cutoff constraint**. All libraries, frontend dependencies, model architectures, datasets, and explainability frameworks used in this application existed and were publicly available prior to March 31, 2025.

### Technology Timeline

| Technology | Selected Version | Available by 2025? | Purpose |
| :--- | :--- | :--- | :--- |
| **React** | `19.0.0` | Yes (Dec 2024) | Component Architecture & UI Logic |
| **Vite** | `6.0.3` | Yes (Dec 2024) | High-performance Development & Bundling |
| **TypeScript** | `5.7.2` | Yes (Late 2024) | Type-safe Application Code |
| **React Router** | `7.1.0` | Yes (Nov 2024) | Declarative Client-side Navigation |
| **Lucide React** | `0.469.0` | Yes (Late 2024) | Minimalist SaaS Iconography |
| **Vanilla CSS** | Standard CSS3 | Yes | Custom Design System (CSS Modules & Variables) |
| **PyTorch** | `2.5.1` | Yes (Late 2024) | Machine Learning & Tensor Inference |
| **torchvision** | `0.20.1` | Yes (Late 2024) | EfficientNet-B0 Pre-trained Backbones |
| **Grad-CAM** | Standard XAI | Yes (Pre-2024) | Gradient-weighted Class Activation Mapping |
| **NewHandPD** | Published | Yes (2015–2017) | Benchmark Spiral & Meander Drawing Dataset |

---

## Features & Application Flow

1. **Ganttify-Inspired Landing Page (`/`)**:
   - Minimal SaaS Top Navigation with mobile drawer support.
   - Large hero section with live visual inference flow mockup.
   - Large interactive Product Showcase section ("See the analysis in action.").
   - Methodology breakdown and dataset research highlights.

2. **SaaS Workspace Dashboard (`/dashboard`)**:
   - Sidebar navigation categorized by Analysis, Insights, and System configuration.
   - Workspace overview showing actual stored analyses count, baseline model accuracy (84.7%), and latest evaluation timestamps.

3. **Main Analysis Screen (`/dashboard/analyze`)**:
   - Drag & drop spiral image uploader with format validation (PNG, JPG, JPEG).
   - Animated multi-step AI processing state (`Preparing image` -> `Running model` -> `Generating Grad-CAM`).
   - Results dashboard featuring **Detection Verdict Banner**, **Model Confidence Score**, probability breakdown, and dual-panel **Grad-CAM Visual Attention Heatmap Viewer** with opacity controls.

4. **Analysis History Log (`/dashboard/history`)**:
   - Stored prediction records in local storage.
   - Interactive history table with click-to-view detailed result modal.

5. **Model Insights (`/dashboard/insights`)**:
   - Performance metrics (Accuracy, Precision, Recall, F1-score, Sensitivity, Specificity, ROC-AUC curve).
   - Training hyperparameter specifications.

6. **Research & Educational Documentation (`/dashboard/research`)**:
   - Technical breakdown of spiral motor analysis, NewHandPD dataset specs, EfficientNet-B0 architecture, and XAI disclaimers.

---

## Getting Started

### Prerequisites
- Node.js `18.x` or `20.x`
- npm `10.x` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/namruthabhasi/parkinsondetection.git
cd parkinsondetection

# Install dependencies (pinned to pre-2025 compatible versions)
npm install

# Run development server
npm run dev
```

### Build & Production Test

```bash
# Type check and build bundle
npm run build

# Preview production build
npm run preview
```

---

## License & Disclaimer

This project is licensed under the [MIT License](LICENSE).

*Disclaimer*: This software is provided for research exploration and educational demonstration only. It is not certified for clinical diagnosis.
