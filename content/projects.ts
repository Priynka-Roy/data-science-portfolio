export type ProjectSection = { title: string; paragraphs: string[]; bullets?: string[] };
export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  highlights: string[];
  github: string;
  live: string;
  sections: ProjectSection[];
  results: { value: string; label: string; note?: string }[];
  architecture: string[];
  limitations: string[];
  sources: { label: string; url: string }[];
};

const industrialGuard = "https://github.com/Priynka-Roy/industrialguard-explainable-predictive-maintenance";
const industrialDocs = `${industrialGuard}/blob/main/explainable-predictive-maintenance/docs`;
const enerTwin = "https://github.com/Priynka-Roy/enertwin-industrial-energy-digital-twin";
const energyDocs = `${enerTwin}/blob/main/docs`;

export const projects: Project[] = [
  {
    slug: "industrialguard-ai",
    name: "IndustrialGuard AI",
    title: "Explainable Predictive Maintenance & Equipment Health Monitoring",
    summary: "A historical condition-monitoring application that brings real compressor telemetry, statistical anomaly detection, and transparent model evidence into one reviewable workflow.",
    image: "/images/industrialguard.jpg",
    imageAlt: "Actual IndustrialGuard AI application overview with compressor monitoring charts",
    tags: ["Python", "scikit-learn", "Statistical monitoring", "Isolation Forest", "Streamlit"],
    highlights: ["1.52 million real compressor readings", "Causal features and chronological evaluation", "Explainable monitoring with explicit evidence limits"],
    github: industrialGuard,
    live: "https://industrialguard-predictive-maintenance-fm5zvs3pfvs.streamlit.app/",
    sections: [
      {
        title: "The industrial question",
        paragraphs: ["Which changes in pressure, current, and temperature merit investigation, and how much inspection workload do alerts create? IndustrialGuard AI explores that question using one metro train's air-compressor auxiliary power unit. It supports historical review rather than claiming reliable failure forecasting."],
      },
      {
        title: "Real telemetry, careful provenance",
        paragraphs: ["The UCI MetroPT-3 dataset contains 1,516,948 original readings from February–September 2020, with seven analogue sensors and eight digital channels. Source bytes are preserved, missing observation periods remain explicit, and the application uses five-minute aggregates with causal features.", "The source is attributed to Davari, Veloso, Ribeiro, and Gama (2021), DOI 10.24432/C5VW3R, under CC BY 4.0. Labels from the separate 2022 data release are not imported into this history."],
      },
      {
        title: "Statistical and machine learning methods",
        paragraphs: ["Version 2 compares global robust deviations, regularized multivariate covariance, regime-relative references, and Isolation Forest. Original, raw, pressure-engineered, and reduced feature sets expose the effect of representation choices.", "Training-fitted transformations, gap-reset rolling features, calibration quantiles, and persistence rules preserve the information available at each historical observation. Reference deviations and covariance components help explain unusual measurements without claiming physical causes."],
        bullets: ["Training-only feature selection and scaling", "Calibration-only thresholds at 0.98/0.995 quantiles", "Predeclared workload and persistence comparisons"],
      },
      {
        title: "Evaluation and actual findings",
        paragraphs: ["February supplies training, March calibration, and April primary development, alongside an earlier chronological fold. Model and policy selection uses pre-May development evidence. May–September had already been inspected in Version 1, so Version 2 calls it a retrospective benchmark, not a fresh holdout.", "The selected covariance policy overlaps 0 of 1 April development events and 1 of 3 retrospective reported intervals, with 15 unannotated episodes. Reduced Isolation Forest overlaps 2 of 3 retrospectively with 22 unannotated episodes, but the predeclared workload objective does not select it.", "A covariance warning appears 40 minutes before the July reported onset. This descriptive retrospective overlap may be coincidental; four sparse reported intervals on one machine cannot establish reliable early-warning performance. Unannotated alerts are not confirmed false alarms."],
      },
      {
        title: "From analysis to an application",
        paragraphs: ["Eight Streamlit sections connect sensor exploration, anomaly scores, calibration-relative equipment health, explanations, illustrative maintenance decisions, and versioned performance. Portable saved artifacts keep startup separate from model fitting and raw-data downloads.", "The project demonstrates an end-to-end analytical system: official-source ingestion, data audits, controlled experiments, reproducible metrics, tests, and transparent documentation."],
      },
    ],
    results: [
      { value: "1,516,948", label: "Original sensor readings", note: "One compressor APU; not an independent sample of machines." },
      { value: "1 / 3", label: "Retrospective event overlap", note: "Selected V2 covariance policy; 0/1 in April development." },
      { value: "15", label: "Unannotated alert episodes", note: "Retrospective selected-policy burden: 0.16060 per observed unannotated day." },
    ],
    architecture: ["Official UCI ingestion and source audit", "Causal features and training-fitted models", "Frozen calibration, development selection, and retrospective evaluation", "Persisted model/metric and historical demo artifacts", "Eight-section Streamlit application with automated analytical checks"],
    limitations: ["One machine and four reported intervals cannot establish general failure prediction.", "Previously inspected benchmark dates provide retrospective evidence; no external independent validation is available.", "Anomaly scores and calibration-relative health are not failure probabilities or remaining useful life.", "Explanations describe statistical associations, not physical fault causes.", "Maintenance costs are illustrative assumptions; no measured savings or prevented downtime is demonstrated."],
    sources: [
      { label: "Current V2 results", url: `${industrialDocs}/V2_RESULTS.md` },
      { label: "Methodology", url: `${industrialDocs}/V2_METHODOLOGY.md` },
      { label: "Limitations", url: `${industrialDocs}/LIMITATIONS.md` },
      { label: "Original project case study", url: `${industrialDocs}/PORTFOLIO_CASE_STUDY.md` },
      { label: "UCI dataset and attribution", url: "https://archive.ics.uci.edu/dataset/791/metropt+3+dataset" },
    ],
  },
  {
    slug: "enertwin-ai",
    name: "EnerTwin AI",
    title: "Industrial Energy Forecasting, Digital Twin & Operations Optimization",
    summary: "A data-driven energy simulator combining complete 24-hour demand forecasts, empirical uncertainty, and deterministic and robust workload scheduling under explicit assumptions.",
    image: "/images/enertwin.jpg",
    imageAlt: "Actual EnerTwin AI application displaying 24-hour energy forecasts and uncertainty controls",
    tags: ["Python", "Forecasting", "SciPy HiGHS", "Robust optimization", "Streamlit"],
    highlights: ["35,040 real quarter-hour energy observations", "Five models forecasting 96 steps from one origin", "Shared-schedule robust LP with honest feasibility backtests"],
    github: enerTwin,
    live: "https://enertwin-industrial-energy-digital-twin-a2rgv4nwanli6udcl9egvr.streamlit.app/",
    sections: [
      {
        title: "The industrial question",
        paragraphs: ["How can an energy planner schedule additional flexible work when demand forecasts are imperfect? EnerTwin AI joins real whole-facility electricity data with forecasting, uncertainty diagnostics, and a conditional workload simulator. Its digital twin is a data-driven scenario model, not a validated physical plant model."],
      },
      {
        title: "Dataset and information boundaries",
        paragraphs: ["The UCI Steel Industry Energy Consumption dataset provides 35,040 quarter-hour observations from one South Korean steel facility in 2018. A documented sequence correction moves 365 same-date midnight rows to the following interval-end day without changing measured values.", "Data are attributed to Sathishkumar V E, Changsun Shin, and Yongyun Cho (2021), DOI 10.24432/C52G8C, under CC BY 4.0. Future observed load categories, reactive energy, power factors, and CO2 are excluded from forecast inputs. Conflicting source CO2 units prevent treating that column as validated emissions."],
      },
      {
        title: "Complete next-day forecasting",
        paragraphs: ["At each midnight origin, five methods issue all 96 quarter-hour predictions using only completed history and known calendar information. Last-observation, daily seasonal, and weekly seasonal baselines are compared with Ridge regression and Histogram Gradient Boosting.", "Original model selection uses July–August validation, followed by September residual calibration and October–December evaluation. The selected Gradient Boosting model achieves MAE 10.870 and RMSE 19.408 kWh per interval, against weekly seasonal MAE 12.942. V2 preserves those point predictions; new comparisons on the already inspected October–December dates are retrospective."],
      },
      {
        title: "Uncertainty with measured trade-offs",
        paragraphs: ["V2 investigates fixed horizon-wise, fixed six-hour pooled, and rolling six-hour pooled residual bands. Pooled scores use complete-day maximum errors in each six-hour bin; rolling updates use only residual days already completed at the forecast origin.", "The development rule retains fixed horizon-wise bands as default. Their nominal 90% pointwise bands cover 78.70% retrospectively, with mean width 41.63 kWh. Rolling pooled bands are a wider alternative: 97.93% pointwise coverage and 79.04 kWh mean width, but only 61.96% whole-day coverage. The pooled nominal level concerns six-hour scores, not a 90% full-day guarantee.", "Temporal dependence, shift, and reused evaluation data prevent an exact coverage guarantee or a claim of fresh independent validation."],
      },
      {
        title: "Deterministic and finite-scenario robust scheduling",
        paragraphs: ["SciPy HiGHS allocates continuously divisible hypothetical task energy while respecting completion, availability windows, individual/shared capacity, and total-demand caps. Reference and optimized schedules share the same constraints; interval kWh is converted to average kW using 0.25 hours.", "Robust mode freezes one workload allocation across every supplied demand path. Signed earlier residual-day profiles preserve within-day co-movement; an explicit synthetic stress path adds a declared assumption. These paths have no calibrated occurrence probabilities, and feasibility protects only the supplied finite set.", "At a 700 kW cap, robust scheduling is feasible on 18 of 92 retrospective days, versus all 92 for deterministic scheduling. Both policies have zero observed-background violations and identical mean modeled costs of €214.42 on the 18 paired days. At tighter 350/500 kW caps, the robust method issues no schedules. This exposes conservatism, not a measured robust-policy benefit."],
      },
      {
        title: "Modeled decisions, conserved energy",
        paragraphs: ["The preserved illustrative tariff case changes conditional charges from €360 to €332 while conserving 1,819.52 kWh. Timing changes energy charges without reducing total energy; constant-factor emissions remain unchanged.", "All workloads, tariffs, operating windows, capacities, and emissions factors are assumptions. No realized factory financial outcome, energy reduction, or emissions saving is claimed."],
      },
    ],
    results: [
      { value: "35,040", label: "Real energy observations", note: "One facility-year, sampled every 15 minutes." },
      { value: "10.870", label: "Forecast MAE · kWh/interval", note: "Original October–December evaluation; 16.02% below weekly seasonal MAE." },
      { value: "18 / 92", label: "Robust schedules feasible", note: "Retrospective 700 kW case; no cost or violation improvement established on paired days." },
    ],
    architecture: ["Source ingestion, chronology repair, and reproducible data audit", "Frozen-origin forecast features and five fitted models", "Causal residual calibration and demand-scenario provenance", "Deterministic/shared-schedule robust SciPy HiGHS LP", "Frozen-decision backtests and portable deployment artifacts", "Eight-section Streamlit application with mathematical and causality tests"],
    limitations: ["One facility-year cannot establish transfer to other plants or future years.", "V2 comparisons reuse inspected dates and provide no fresh independent evaluation.", "Default bands are undercovered retrospectively; wider alternatives have different score targets and remain imperfect at peaks.", "Historical residual scenarios are illustrative paths without calibrated probabilities; unseen demand can exceed supplied scenarios.", "Hypothetical constraints assume divisible, interruptible work and do not validate steel-process physics.", "Conditional modeled cost differences are not measured industrial savings; conserved energy and fixed-factor emissions do not decrease from timing alone."],
    sources: [
      { label: "Current V2 results", url: `${energyDocs}/V2_RESULTS.md` },
      { label: "Methodology", url: `${energyDocs}/V2_METHODOLOGY.md` },
      { label: "Optimization formulation", url: `${energyDocs}/OPTIMIZATION_MODEL.md` },
      { label: "Limitations", url: `${energyDocs}/LIMITATIONS.md` },
      { label: "Original project case study", url: `${energyDocs}/PORTFOLIO_CASE_STUDY.md` },
      { label: "UCI dataset and attribution", url: "https://archive.ics.uci.edu/dataset/851/steel+industry+energy+consumption" },
    ],
  },
];
