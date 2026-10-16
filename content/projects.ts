export type ProjectSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
  visual?: { src: string; alt: string; caption: string };
};
export type Project = {
  slug: string;
  name: string;
  title: string;
  category?: string;
  seoTitle?: string;
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
const creditRisk = "https://github.com/Priynka-Roy/creditrisk-ai-explainable-credit-risk";
const creditDocs = `${creditRisk}/blob/c561888742e020a52448df28fffa6a1986bfbbc0/docs`;

const actuaryLab = "https://github.com/Priynka-Roy/actuarylab-ai-insurance-pricing-risk";
const actuaryRevision = "726b2474f9a93aee2e99a6bebca6148584618013";
const actuaryDocs = `${actuaryLab}/blob/${actuaryRevision}/docs`;

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
  {
    slug: "creditrisk-ai",
    name: "CreditRisk AI",
    title: "Explainable Credit Risk Modeling & Model Validation",
    category: "Banking · Credit Risk · Financial Analytics",
    seoTitle: "CreditRisk AI | Banking Credit Risk & Model Validation",
    summary: "An explainable historical banking risk analytics platform combining statistical default modeling, probability calibration, model validation, and hypothetical Monte Carlo credit-loss simulation.",
    image: "/images/creditrisk-overview.jpg",
    imageAlt: "Actual CreditRisk AI dashboard showing the historical credit-card cohort, default prevalence, and model-validation workflow",
    tags: ["Python", "scikit-learn", "Credit risk", "Monte Carlo", "Streamlit"],
    highlights: ["30,000 historical customer records", "Paired bootstrap and calibration uncertainty", "Hypothetical dependence-aware portfolio losses"],
    github: creditRisk,
    live: "https://creditrisk-ai-asquvlbgrsfevfur938zrk.streamlit.app/",
    sections: [
      {
        title: "The banking analytics question",
        paragraphs: ["How well do historical repayment patterns support next-month default probability estimates, and how should an analyst interpret their uncertainty? CreditRisk AI connects interpretable baselines, nonlinear models, probability diagnostics, and hypothetical loss scenarios in one reviewable platform.", "The work demonstrates methods relevant to quantitative risk analysis using public historical data. It provides analytical evidence and explicit limitations rather than real-customer lending decisions."],
      },
      {
        title: "Historical data and a precisely defined outcome",
        paragraphs: ["The UCI Default of Credit Card Clients dataset contains 30,000 Taiwanese customer records with April–September 2005 repayment history, 23 predictors, and 6,636 next-month payment default events: an observed rate of 22.12%. Monetary source values are in New Taiwan dollars (NTD).", "Attribution: Yeh, I. (2009), UCI Machine Learning Repository, DOI 10.24432/C55S3H, CC BY 4.0. Identifiers are excluded from modeling and public outputs; undocumented source codes remain explicitly labeled. This next-month outcome is different from a regulatory one-year default probability."],
      },
      {
        title: "Statistical baselines and controlled model development",
        paragraphs: ["Unpenalized logistic regression supplies an interpretable benchmark. L1 and L2 regularization control coefficient complexity, while histogram gradient boosting tests nonlinear predictive relationships. Training-only preprocessing and three-fold cross-validation tune limited candidate grids.", "A frozen, seed-42 stratified customer split separates training (15,000), validation (4,500), calibration (4,500), and test (6,000). Validation selects features and the model using probability scores and a documented simplicity preference. The chosen boosting model uses 150 iterations, learning rate 0.05, seven leaves, and L2 regularization 10.", "The calibration partition separately compares no mapping, sigmoid, and isotonic calibration using fit/selection halves. No additional recalibration wins that comparison, so the original predicted probabilities are retained. Test outcomes select neither the model nor its calibration."],
      },
      {
        title: "Preserved historical model results",
        paragraphs: ["These Version 1 results describe the original 6,000-customer random holdout after development choices were frozen. ROC-AUC measures discrimination rather than classification accuracy; average precision summarizes the precision–recall ranking. Lower Brier score and log loss indicate better probability scores.", "Boosting was selected using validation evidence before the original test audit. Version 2 preserves these fitted-model results. This historical random holdout provides no prospective, external, or out-of-time banking validation."],
        table: {
          caption: "Original V1 historical test · 6,000 customers. Average precision is not trapezoidal PR area.",
          columns: ["Model", "ROC-AUC", "Average precision", "Brier score ↓", "Log loss ↓"],
          rows: [
            ["Logistic regression", "0.7675", "0.5314", "0.13785", "0.43909"],
            ["L2 logistic regression", "0.7673", "0.5346", "0.13742", "0.43805"],
            ["L1 logistic regression", "0.7679", "0.5334", "0.13747", "0.43821"],
            ["Histogram gradient boosting", "0.7804", "0.5549", "0.13499", "0.42919"],
          ],
        },
      },
      {
        title: "Discrimination is different from calibration",
        paragraphs: ["Discrimination asks whether people who default tend to receive higher scores. Calibration asks whether predicted probabilities agree with observed event frequencies. A model can rank well while giving unreliable probabilities.", "The selected model's joint calibration intercept is −0.0141 and slope is 0.9845. Version 2 uses 1,000 ordinary customer bootstrap replicates, allowing event prevalence to vary; the approximate slope interval is [0.9240, 1.0459]. These conditional overall diagnostics do not establish exact or subgroup calibration, and the original no-additional-calibration decision remains unchanged."],
        visual: {
          src: "/images/creditrisk-calibration.jpg",
          alt: "Actual CreditRisk AI probability calibration screen with reliability diagnostics and the selected no-additional-calibration method",
          caption: "Authentic application screenshot: historical reliability diagnostics. The independently selected method applies no additional recalibration; V2 adds retrospective uncertainty around the same predictions.",
        },
      },
      {
        title: "Retrospective paired comparisons and uncertainty",
        paragraphs: ["Version 2 resamples the same stratified customer indices for both fitted models in each of 1,000 paired bootstrap replicates. The differences below are boosting minus L2 logistic regression. Positive ROC-AUC and negative probability-score differences favor boosting on this historical sample.", "The V1 test had already been inspected when V2 was developed. These are retrospective, pointwise 95% percentile intervals conditional on frozen models and observed class counts, with no multiplicity adjustment. They omit training and model-selection uncertainty and do not guarantee superiority in a new banking population. The KS difference interval includes zero, so the analysis does not distinguish every discrimination metric."],
        table: {
          caption: "Retrospective boosting minus L2 · same 6,000 historical customers · 1,000 paired bootstrap replicates.",
          columns: ["Metric", "Difference", "95% interval"],
          rows: [
            ["ROC-AUC", "+0.013040", "[0.006656, 0.019037]"],
            ["Brier score", "−0.002436", "[−0.003512, −0.001375]"],
            ["Log loss", "−0.008860", "[−0.012153, −0.005617]"],
            ["KS", "+0.008589", "[−0.002694, 0.019102]"],
          ],
        },
        visual: {
          src: "/images/creditrisk-paired-comparison.jpg",
          alt: "Actual CreditRisk AI V2 paired model-comparison screen with bootstrap differences and conditional intervals",
          caption: "Authentic V2 application screenshot: paired bootstrap model comparison. All additional original-test analyses are retrospective, with frozen model choices.",
        },
      },
      {
        title: "Explanations, subgroup diagnostics, and stability",
        paragraphs: ["Logistic coefficients and odds ratios explain their own transformed model scale. Boosting permutation importance on validation ranks maximum positive repayment delay and September repayment status strongly. Correlated predictors limit attribution: these are predictive associations, not causal effects.", "Subgroup diagnostics report counts, event denominators, uncertainty, and availability rather than treating sparse groups as precise evidence. Historical disparities alone do not establish discrimination, and metric parity does not certify fairness.", "A separate development-only experiment refits L2 logistic regression on 100 training resamples with fixed category references and evaluates the existing validation observations. This measures training sensitivity, without creating new validation data or estimating the selected boosting model's refit uncertainty."],
      },
      {
        title: "Hypothetical Monte Carlo credit-loss simulation",
        paragraphs: ["Version 2 constructs 1,000 synthetic accounts from an anonymous, rounded probability histogram and simulates 5,000 portfolios. Baseline exposure at default (EAD) is assumed to be 100,000 NTD per account; loss given default (LGD) is assumed to be 45%. These are scenario inputs rather than measured exposures or recoveries.", "Independent defaults are compared with a Gaussian common-factor scenario using assumed latent correlation 0.15. Identical marginal probabilities, EAD, and LGD imply the same analytical expected loss: 9,933,705 NTD. Dependence increases modeled tail loss under these assumptions; small differences between simulated means reflect Monte Carlo sampling.", "VaR95 is the empirical 95th loss percentile. ES95 averages the worst 5% of simulated loss probability mass, accounting for discreteness and ties. Finite simulation and rounded portfolio probabilities introduce approximation; these values are simulated losses rather than observed bank losses or regulatory capital."],
        table: {
          caption: "Hypothetical baseline · 1,000 synthetic accounts · 5,000 simulated portfolios · amounts in million NTD.",
          columns: ["Default assumption", "Analytical expected loss", "VaR95", "ES95"],
          rows: [
            ["Independent · ρ = 0", "9.9337", "10.8000", "11.0160"],
            ["Common factor · assumed ρ = 0.15", "9.9337", "17.6850", "20.1152"],
          ],
        },
        visual: {
          src: "/images/creditrisk-risk-simulation.jpg",
          alt: "Actual CreditRisk AI V2 loss-simulation dashboard comparing independent and assumed common-factor portfolio losses",
          caption: "Authentic V2 application screenshot: hypothetical Monte Carlo portfolio losses. EAD, LGD, stress, and latent dependence are assumptions; expected loss is unchanged when marginal loss inputs stay fixed.",
        },
      },
      {
        title: "Illustrative governance with evidence and follow-up",
        paragraphs: ["Ten educational criteria connect frozen diagnostics, explicitly assumed tolerances, review status, and follow-up. A value within an illustrative tolerance is not model approval. For example, changing the assumed ROC-AUC floor from 0.75 to 0.80 flags the same historical 0.7804 estimate for review without changing any model or prediction.", "The appropriate next steps require governed temporal or external cohorts, a lender-specific outcome definition, measured exposures and recoveries, and institutional review. The project demonstrates transparent model validation practices without claiming official bank acceptance criteria or regulatory compliance."],
      },
      {
        title: "An auditable analytical application",
        paragraphs: ["Eight Streamlit sections connect cohort exploration, model evidence, validation, calibration, explanations, hypothetical credit-loss scenarios, and governance. Lightweight aggregate artifacts serve the dashboard without downloading raw customer data or fitting models at startup; the app accepts no real borrower records.", "Python, pandas, NumPy, SciPy, scikit-learn, Plotly, and Streamlit support the pipeline and interface. Versioned artifacts, source/split hashes, reproducible seeds, pytest checks, and Ruff preserve the distinction between historical evidence, retrospective inference, and hypothetical simulation."],
      },
    ],
    results: [
      { value: "30,000", label: "Historical customer records", note: "Taiwan 2005; 6,636 next-month payment defaults (22.12%)." },
      { value: "0.7804", label: "Original boosting ROC-AUC", note: "Historical 6,000-customer random holdout; not classification accuracy." },
      { value: "11.02 → 20.12m", label: "Hypothetical ES95 · NTD", note: "Independent to assumed common-factor defaults; analytical expected loss stays 9.93m NTD." },
    ],
    architecture: ["UCI source audit and identifier-safe feature pipeline", "Training-only preprocessing/CV and frozen development selection", "Independent calibration assessment and original historical test audit", "Retrospective paired bootstrap, calibration uncertainty, and subgroup diagnostics", "Development-only logistic resampling and hypothetical Monte Carlo portfolio losses", "Versioned aggregate evidence and eight-section Streamlit/Plotly dashboard"],
    limitations: ["Historical Taiwan 2005 records do not validate present-day Finnish or European borrowers; no genuine out-of-time or external cohort is available.", "The outcome is next-month payment default, not a regulatory one-year probability of default.", "Every additional V2 analysis of the inspected V1 test is retrospective. Conditional bootstrap intervals omit training/selection uncertainty and rely on unproven customer independence.", "Predictive explanations are not causal; sparse subgroup evidence and exploratory multiple comparisons limit responsible-use conclusions.", "Synthetic accounts, EAD, LGD, latent dependence, and stress are assumptions. Simulated VaR/ES are not observed losses, regulatory capital, or IFRS 9 provisioning.", "Educational governance tolerances do not approve a model. The application makes no real-customer lending decisions and claims no bank endorsement or regulatory compliance."],
    sources: [
      { label: "Verified V2 results", url: `${creditDocs}/V2_RESULTS.md` },
      { label: "Paired model comparison", url: `${creditDocs}/V2_MODEL_COMPARISON.md` },
      { label: "Calibration uncertainty", url: `${creditDocs}/V2_CALIBRATION_UNCERTAINTY.md` },
      { label: "Hypothetical risk simulation", url: `${creditDocs}/V2_RISK_SIMULATION.md` },
      { label: "Illustrative model governance", url: `${creditDocs}/V2_MODEL_GOVERNANCE.md` },
      { label: "Model card and intended use", url: `${creditDocs}/MODEL_CARD.md` },
      { label: "Limitations", url: `${creditDocs}/LIMITATIONS.md` },
      { label: "Original project case study", url: `${creditDocs}/PORTFOLIO_CASE_STUDY.md` },
      { label: "UCI dataset and attribution", url: "https://doi.org/10.24432/C55S3H" },
    ],
  },
  {
    slug: "actuarylab-ai",
    name: "ActuaryLab AI",
    title: "Insurance Pricing, Claims Modeling & Portfolio Risk Platform",
    category: "Insurance Analytics · Actuarial Statistics · Quantitative Risk",
    seoTitle: "ActuaryLab AI | Insurance Pricing & Portfolio Risk",
    summary: "An actuarial analytics platform combining exposure-aware claim frequency, Gamma severity regression, Tweedie pure-premium estimation, and Monte Carlo portfolio risk simulation using historical motor insurance data.",
    image: "/images/actuarylab-overview.jpg",
    imageAlt: "Actual ActuaryLab AI insurance overview showing the reconciled historical policy cohort, exposure-years, positive payments, and claims modeling workflow",
    tags: ["Python", "Actuarial modeling", "GLM & Tweedie", "Monte Carlo", "Streamlit"],
    highlights: ["668,896 reconciled historical policies", "Exposure-aware frequency, severity, and pure premium", "Transparent holdout weakness and hypothetical tail risk"],
    github: actuaryLab,
    live: "https://actuarylab-ai-insurance-pricing-risk-hr7wfi9w5xtdycwvvyjuxp.streamlit.app/",
    sections: [
      {
        title: "From claim occurrence to portfolio risk",
        paragraphs: ["Insurance pricing connects how often payments occur, how large they may be, and how much coverage a policy provides. ActuaryLab AI investigates those components separately, then brings them together as expected cost per exposure-year, hypothetical premiums, and simulated aggregate loss.", "The project demonstrates insurance analytics using public historical French motor third-party liability data. It helps explain model evidence and assumption sensitivity; its synthetic pricing examples are not commercial insurance quotes."],
      },
      {
        title: "Historical sources and the reconciled population",
        paragraphs: ["The OpenML freMTPL2freq (41214) and freMTPL2sev (41215) datasets originate from CASdatasets, attributed to C. Dutang and A. Charpentier (2018). The downloaded frequency source contains 678,013 policies, while the severity source contains 26,639 payment rows. Those original source populations are different from the primary economic modeling cohort.", "After reconciliation, the primary cohort contains 668,896 policies, 353,893.168 exposure-years, and 26,443 positive payments totaling 59,908,673.17 source monetary units (SMU). These are historical recorded amounts without currency conversion or inflation adjustment. The public application distributes aggregate summaries and synthetic profiles rather than raw policy records."],
      },
      {
        title: "Reconciliation before modeling",
        paragraphs: ["A policy-level audit identifies 195 unmatched payment rows, 255 exact repeated payment rows, and 9,117 policies with inconsistent declared claim counts. Repeated equal payments remain because no unique claim identifier can establish whether they are accidental duplicates. Payments are aggregated once per policy before a validated one-to-one join, preserving exposure denominators.", "The primary analysis excludes unresolved count/payment histories instead of interpreting unknown payment costs as zero. Ordinary zero-claim policies remain valid zeros. This does not recover missing claims: exclusion changes the population and may introduce selection bias. Large payments and exposures above one year remain uncapped in the primary analysis."],
      },
      {
        title: "Exposure-aware statistical design",
        paragraphs: ["A deterministic seed-42 policy hash assigns 401,433 policies to training, 133,582 to validation, and 133,881 to final holdout. Every payment inherits its parent policy's split, preventing payment rows from the same policy entering different partitions. Transformations are fitted on training only; validation selects models with no post-selection refit or test-based reselection.", "Frequency is the expected number of strictly positive linked payments per exposure-year, compatible with the positive-payment severity target. Annual pure premium = expected annual frequency × expected positive severity. For policy exposure e, expected policy claims cost = e × predicted annual frequency × predicted severity. Annualized pure premium and contract-period cost therefore have different units.", "The random historical holdout is internal retrospective evidence. The released fields do not support a reliable out-of-time assessment, and policy-ID separation cannot establish independence between unidentifiable repeat customers or renewals."],
      },
      {
        title: "Frequency, severity, and pure-premium models",
        paragraphs: ["Poisson log-link GLMs and regularized alternatives model annual positive-payment frequency using exposure weights, equivalent in the unpenalized objective to a count model with fixed log-exposure offset. Poisson histogram gradient boosting tests a nonlinear conditional mean. Dispersion and zero-count diagnostics investigate the Poisson assumption; a negative-binomial development diagnostic does not beat the selected boosting candidate.", "Gamma log-link regression models individual strictly positive payment severity, with all primary large losses retained. A training-only capped-payment refit is reported separately: improving a capped target does not establish better full-cost prediction.", "The two-part model multiplies compatible frequency and severity estimates. Direct Tweedie log-link regressions supply an alternative annual pure-premium model with fitted powers 1.3, 1.5, and 1.7. All premium candidates are compared at one common Tweedie evaluation power of 1.5, rather than mixing scoring scales."],
        visual: {
          src: "/images/actuarylab-frequency.jpg",
          alt: "Actual ActuaryLab AI claim-frequency screen with exposure-aware Poisson and gradient boosting comparisons",
          caption: "Authentic application screenshot: annual positive-payment frequency modeling. Exposure-adjusted scores compare conditional mean predictions; they do not certify a Poisson loss process.",
        },
      },
      {
        title: "Actual holdout evidence, separated by target",
        paragraphs: ["Lower deviance is better within the same prediction target and scoring convention. Frequency, severity, and pure-premium deviances have different scales and must not be compared across targets. The selected models were chosen using validation before the final holdout audit.", "The selected Poisson gradient boosting frequency model improves the historical held-out exposure-weighted Poisson score relative to the unpenalized GLM. Gamma severity uses alpha 0.1; the best direct Tweedie candidate has fitted power 1.7 and alpha 0.1. Machine learning is not claimed to be best for every component."],
        table: {
          caption: "Frozen-model historical holdout · 133,881 policies and 5,238 positive payments. Premium scores share evaluation power 1.5.",
          columns: ["Prediction target", "Candidate", "Holdout deviance ↓"],
          rows: [
            ["Annual payment frequency · Poisson", "Poisson GLM", "0.461383"],
            ["Annual payment frequency · Poisson", "Poisson gradient boosting · selected", "0.449373"],
            ["Positive payment severity · Gamma", "Gamma GLM · selected", "2.025686"],
            ["Annual pure premium · Tweedie p = 1.5", "Two-part frequency × severity · selected", "80.463183"],
            ["Annual pure premium · Tweedie p = 1.5", "Direct Tweedie · fitted p = 1.7", "86.392864"],
          ],
        },
      },
      {
        title: "A visible calibration weakness: 15.49% underprediction",
        paragraphs: ["The selected two-part model predicts 11,389,868.69 SMU in aggregate holdout claims against 13,477,614.76 SMU observed: 15.49% underprediction. Although it achieved the strongest selected pure-premium validation score, that comparison does not guarantee accurate aggregate pricing.", "The holdout observed-to-expected cost ratio is 1.1833. Heavy payments create substantial uncertainty: payments above the training 99th percentile contribute 35.23% of training paid cost. This weakness is preserved as a central finding rather than hidden behind a better model-comparison score."],
      },
      {
        title: "Paired comparisons and conditional uncertainty",
        paragraphs: ["The analysis uses 250 ordinary policy-cluster bootstrap resamples with paired policy indices for model comparisons. A policy's exposure, counts, and payments stay together. The selected boosting-minus-Poisson-GLM frequency deviance difference is −0.01201, with pointwise 95% percentile interval [−0.01495, −0.00936]. This supports a historical score difference under the specified resampling procedure.", "These intervals condition on frozen fitted models and the observed historical sample; they omit full training and selection uncertainty and do not guarantee future superiority. The observed holdout pure-premium interval is broad: [125.10, 316.69] SMU per exposure-year. The selected premium observed-to-expected interval [0.7809, 1.9784] illustrates how heavy tails limit precise calibration conclusions."],
        table: {
          caption: "Pointwise 95% policy-bootstrap intervals · 250 resamples · fixed fitted models. Differences use paired policies.",
          columns: ["Diagnostic", "95% interval", "Interpretation"],
          rows: [
            ["Boosting minus Poisson GLM · frequency deviance", "[−0.01495, −0.00936]", "Negative difference favors boosting on this historical target."],
            ["Observed holdout pure premium · SMU/exposure-year", "[125.10, 316.69]", "Descriptive cost uncertainty; not an individual prediction interval."],
            ["Selected premium · observed / expected", "[0.7809, 1.9784]", "Wide conditional interval does not establish future calibration."],
          ],
        },
      },
      {
        title: "Hypothetical pricing with explicit assumptions",
        paragraphs: ["Synthetic profiles separate expected claims cost from an assumed charged premium. The annual illustration is (pure premium × (1 + risk loading) + fixed annual cost) / (1 − expense share − profit share). Expense and profit are shares of final premium; exposure scales annual amounts into contract-period amounts.", "The baseline assumes expense share 20%, profit share 5%, risk loading 5%, and zero fixed cost. For 1,000 one-year synthetic policies, assumed premium is 367,856.79 SMU. Holding that denominator fixed, simultaneous +20% frequency and severity multiply expected cost by 1.44 and increase the hypothetical expected loss ratio from 71.43% to 102.86%. Commercial earned premiums and expenses are absent, so this is an assumption-based adequacy scenario rather than measured profitability."],
        visual: {
          src: "/images/actuarylab-pricing.jpg",
          alt: "Actual ActuaryLab AI pure-premium screen comparing two-part and direct Tweedie historical holdout model results",
          caption: "Authentic application screenshot: two-part and direct Tweedie pure-premium evidence. Pricing examples elsewhere in the app use hypothetical loadings and are not insurance offers.",
        },
      },
      {
        title: "Monte Carlo portfolio losses and stress scenarios",
        paragraphs: ["The baseline contains 1,000 synthetic one-year policies: 125 of each of eight model-derived profiles. A seeded simulation generates 10,000 portfolios using Poisson counts and assumed Gamma severities; alternatives investigate frequency, severity, portfolio composition, lognormal tails, and a mean-one shared frequency shock.", "The baseline analytical expected loss is 262,754.85 SMU; the simulated mean is 263,178.44 SMU, with mean Monte Carlo standard error 1,346.05 SMU. That numerical agreement concerns the assumed simulation model, not empirical tail validation. The simulator also reports loss standard deviation and illustrative loss ratios; future process variability is distinct from error in the simulated mean."],
        table: {
          caption: "Hypothetical model-based simulations · 1,000 synthetic policies · 10,000 portfolios · all loss amounts in SMU.",
          columns: ["Assumed scenario", "Analytical expected loss", "VaR95", "ES95"],
          rows: [
            ["Baseline · independent Gamma", "262,754.85", "512,611.75", "611,360.58"],
            ["Frequency +20%", "315,305.82", "581,382.03", "681,867.61"],
            ["Severity +20%", "315,305.82", "615,134.10", "733,632.70"],
            ["Combined +20% frequency and severity", "378,366.98", "697,658.44", "818,241.13"],
            ["Alternative lognormal · same means", "262,754.85", "341,976.14", "367,810.71"],
            ["Shared frequency shock · mean preserved", "262,754.85", "575,154.90", "702,798.17"],
            ["Portfolio mix · younger profile weight 50%", "307,195.98", "583,399.50", "688,858.81"],
          ],
        },
        visual: {
          src: "/images/actuarylab-risk-simulation.jpg",
          alt: "Actual ActuaryLab AI synthetic portfolio risk simulator comparing baseline losses and hypothetical frequency, severity, tail, and shared-shock scenarios",
          caption: "Authentic application screenshot: assumed aggregate loss scenarios. These are simulated process losses, not observed insurer financial outcomes or regulatory capital estimates.",
        },
      },
      {
        title: "Tail interpretation depends on the assumed loss law",
        paragraphs: ["VaR95 is the inverse empirical 95th loss percentile. ES95 averages exactly the worst 5% of simulated probability mass, including fractional boundary mass where needed. Finite Monte Carlo samples leave uncertainty in both, particularly at the reported 99% level with only 100 draws in the upper tail.", "Gamma and lognormal alternatives preserve conditional mean severity and analytical expected loss, yet their ES95 estimates differ: 611,360.58 versus 367,810.71 SMU. Different training-derived dispersion specifications produce this contrast; a lower simulated tail is not evidence of greater accuracy. A mean-preserving shared frequency shock instead raises ES95 to 702,798.17 SMU while expected loss stays fixed. These are assumption-sensitivity findings rather than Solvency II capital estimates."],
      },
      {
        title: "Explainability, responsible pricing, and governance",
        paragraphs: ["GLM rate relativities, feature diagnostics, and frequency × severity decomposition make model contributions reviewable. Exposure-adjusted group diagnostics show policy counts, payment counts, exposure, and sparse-group cautions. Predictive associations do not establish causal effects, and sparse ratios or aggregate calibration cannot certify fair subgroup pricing.", "Age and geographic variables may face legal or ethical pricing restrictions; predictive performance does not establish permission to use them. Historical French payment records do not validate contemporary Finnish insurance pricing. The project has no insurer sponsor or endorsement, makes no claim of professional actuarial credentials, and is not a certified commercial pricing model. Operational use would require contemporary independent data and actuarial, legal, and governance review."],
      },
      {
        title: "A reproducible analytical application",
        paragraphs: ["Eight Streamlit sections connect insurance overview, portfolio exploration, frequency, severity, pure premium, model validation, risk simulation, and governance. Guided cases connect the statistical evidence with interpretation. Compact aggregate JSON serves the application without raw-data downloads or model training at startup; bounded, cached simulations keep interactive experiments manageable.", "Python, pandas, NumPy, SciPy, scikit-learn, Plotly, and Streamlit support the pipeline and interface. Source hashes, a frozen evaluation protocol, versioned computed artifacts, pytest checks, and Ruff make the result reviewable. Internal checks and review perspectives are software and analytical evidence, not independent external actuarial validation."],
      },
    ],
    results: [
      { value: "668,896", label: "Reconciled historical policies", note: "From 678,013 source policies; unresolved payment histories excluded, with selection-bias risk." },
      { value: "15.49%", label: "Aggregate holdout underprediction", note: "11.39m SMU predicted against 13.48m observed; selected two-part model." },
      { value: "71.43 → 102.86%", label: "Hypothetical expected loss ratio", note: "Baseline to combined +20% frequency/severity; assumed premium held fixed." },
    ],
    architecture: ["Versioned OpenML ingestion and policy/payment reconciliation audit", "Policy-level splitting, claim inheritance, and training-only transformations", "Exposure-weighted Poisson, Gamma severity, and common-score Tweedie comparisons", "Frozen-model holdout calibration, paired policy bootstrap, and tail diagnostics", "Synthetic loaded pricing and bounded compound-loss Monte Carlo scenarios", "Integrity-checked aggregate artifacts and eight-section Streamlit/Plotly application"],
    limitations: ["Historical French MTPL records and payment conventions do not establish contemporary Finnish or Nordic pricing validity; no reliable out-of-time or external cohort is available.", "The 668,896-policy reconciled cohort differs from the 678,013-policy source. Exclusion of 9,117 unresolved payment histories may introduce selection bias and cannot recover missing costs.", "The selected two-part model underpredicts aggregate holdout claims by 15.49%. Better deviance does not establish accurate aggregate pricing or future profitability.", "Conditional policy-bootstrap intervals omit full training and selection uncertainty; sparse groups, unidentifiable repeat policyholders, and heavy payments limit inference.", "Hypothetical premiums, tail distributions, composition, and shared shocks are assumptions. Simulated VaR and Expected Shortfall are not observed company losses, catastrophe validation, or Solvency II capital.", "Coverage, inflation, reliable development histories, actual commercial premiums, and expenses are unavailable. Associations do not establish causality, lawful rating factors, or fair pricing.", "This educational project claims no insurer partnership, operational tariff approval, professional actuarial certification, or independent external validation."],
    sources: [
      { label: "Verified computed results", url: `${actuaryLab}/blob/${actuaryRevision}/reports/results.json` },
      { label: "Data provenance and attribution", url: `${actuaryDocs}/DATA_CARD.md` },
      { label: "Policy/payment reconciliation", url: `${actuaryDocs}/DATA_RECONCILIATION.md` },
      { label: "Frozen methodology", url: `${actuaryDocs}/METHODOLOGY.md` },
      { label: "Model validation and scoring", url: `${actuaryDocs}/MODEL_VALIDATION.md` },
      { label: "Conditional statistical uncertainty", url: `${actuaryDocs}/STATISTICAL_UNCERTAINTY.md` },
      { label: "Hypothetical pricing", url: `${actuaryDocs}/PRICING_SCENARIOS.md` },
      { label: "Risk simulation assumptions", url: `${actuaryDocs}/RISK_SIMULATION.md` },
      { label: "Responsible pricing and model card", url: `${actuaryDocs}/MODEL_CARD.md` },
      { label: "Project limitations", url: `${actuaryDocs}/LIMITATIONS.md` },
      { label: "OpenML frequency dataset · 41214", url: "https://www.openml.org/d/41214" },
      { label: "OpenML severity dataset · 41215", url: "https://www.openml.org/d/41215" },
    ],
  },
];
