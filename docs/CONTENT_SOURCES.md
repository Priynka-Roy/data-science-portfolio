# Content provenance and publication boundaries

Initial source review: 13 October 2026. Current publication boundaries updated 17 October 2026. Content lives in typed `content/profile.ts` and `content/projects.ts`; personal source files remain local and excluded from the public repository. No source project repository was modified.

## Personal and academic information

The user-supplied résumé was read locally, including its PDF hyperlink annotations. It supports the name, city, email, degree dates, undergraduate research, publication, scholarships, Python/R/SPSS, Power BI, and Excel. The initial task supplied Statistics specialization, ongoing privacy/longitudinal research, career interests, and the initial public app addresses. Later owner instructions supply the four current repository names, public app addresses, basic SQL knowledge, and current thesis details. Education descriptions are interests/current studies rather than assertions that every suggested course has been completed.

Verified links extracted from the résumé:

- [GitHub](https://github.com/Priynka-Roy)
- [LinkedIn](https://linkedin.com/in/priynka-roy-b37757342)
- [Google Scholar](https://scholar.google.com/citations?user=ykybeRMAAAAJ&hl=en)
- [Publication DOI](https://doi.org/10.1186/s12982-024-00311-w)

“Research Scholarship” and “Merit Scholarship” follow the résumé's exact award names. The latter issuer is described there as “Faculty of Exact Science, Turku University”; the portfolio retains the singular faculty wording and standardizes the university name to University of Turku.

The original résumé’s “Microsoft Certified” wording was not accepted as evidence of an awarded Microsoft credential. On 18 October 2026, the owner supplied a DataCamp Statement of Accomplishment confirming the Data Analyst in Power BI career track was completed on September 23, 2026 (50 hours, #947,041). The new training record documents that DataCamp completion only; it does not imply Microsoft certification. See `TRAINING_REVIEW.md`. Its older MBSTU thesis description is not recast as the current Turku thesis. The initial task used conservative ongoing research wording. On 17 October 2026, the user supplied the current thesis title, “Privacy Risks in Synthetic Longitudinal Data: Disclosure Scenarios and Empirical Evaluation”, and period September 2026–Present. These are user-provided facts; no completed results are claimed.

Private contact/biographical fields from the original PDF are omitted. The original résumé is not a public download. The formerly generated public CV and its generator were removed on 17 October 2026 at the owner's request, with a byte-verified private backup outside the repository. Earlier Git and cache copies are not erased by this change. The portrait uses the authentic supplied photograph; cropping and browser image optimization do not replace or alter identity.

## IndustrialGuard AI

Current public GitHub content was read using read-only GitHub API requests, including the root README and nested methodology, V2 results, limitations, and case study. Source documents:

- [README](https://github.com/Priynka-Roy/Predictive-Maintenance-and-Equipment-Health-Monitoring/blob/main/README.md)
- [Methodology](https://github.com/Priynka-Roy/Predictive-Maintenance-and-Equipment-Health-Monitoring/blob/main/explainable-predictive-maintenance/docs/METHODOLOGY.md)
- [V2 results](https://github.com/Priynka-Roy/Predictive-Maintenance-and-Equipment-Health-Monitoring/blob/main/explainable-predictive-maintenance/docs/V2_RESULTS.md)
- [Limitations](https://github.com/Priynka-Roy/Predictive-Maintenance-and-Equipment-Health-Monitoring/blob/main/explainable-predictive-maintenance/docs/LIMITATIONS.md)
- [Case study](https://github.com/Priynka-Roy/Predictive-Maintenance-and-Equipment-Health-Monitoring/blob/main/explainable-predictive-maintenance/docs/PORTFOLIO_CASE_STUDY.md)

Published results identify the selected covariance policy explicitly: 0/1 April development overlaps; 1/3 retrospective overlaps; 15 unannotated episodes, or 0.16060 per unannotated observed day. The reduced Isolation Forest's 2/3 overlaps and 22 episodes are identified as a different, unselected policy. A descriptive 40-minute July warning is explicitly retrospective. Row counts are not failure sample sizes. No probability, RUL, prevented downtime, or realized savings claim is made.

The authentic image is copied from `explainable-predictive-maintenance/docs/assets/v2_overview.jpg` in the project repository. [UCI MetroPT-3 attribution](https://archive.ics.uci.edu/dataset/791/metropt+3+dataset) remains linked; original/derived dataset material uses CC BY 4.0, distinct from code licensing.

## EnerTwin AI

Current root README, V2 methodology, results, limitations, and case study were read via read-only GitHub API:

- [README](https://github.com/Priynka-Roy/Industrial-Energy-Analytics-and-Operations-Optimization/blob/main/README.md)
- [V2 methodology](https://github.com/Priynka-Roy/Industrial-Energy-Analytics-and-Operations-Optimization/blob/main/docs/V2_METHODOLOGY.md)
- [V2 results](https://github.com/Priynka-Roy/Industrial-Energy-Analytics-and-Operations-Optimization/blob/main/docs/V2_RESULTS.md)
- [Limitations](https://github.com/Priynka-Roy/Industrial-Energy-Analytics-and-Operations-Optimization/blob/main/docs/LIMITATIONS.md)
- [Case study](https://github.com/Priynka-Roy/Industrial-Energy-Analytics-and-Operations-Optimization/blob/main/docs/PORTFOLIO_CASE_STUDY.md)

Point MAE 10.870 and RMSE 19.408 kWh/interval refer to unchanged original forecasts; new V2 analysis of those dates is retrospective. Weekly seasonal MAE is 12.942. The rounded 16.02% relative MAE difference follows the documented original comparison, not a new experiment.

Default fixed 90% bands have 78.70% retrospective pointwise coverage and 41.63 kWh width. Alternative rolling pooled bands have 97.93% pointwise coverage and 79.04 kWh width, but 61.96% whole-day coverage. Their nominal six-hour score level is not a whole-day probability guarantee. The default was not replaced by selecting on reused test data.

At 700 kW robust issuance is 18/92; costs and violations are equal on paired feasible days. At 350/500 kW no robust schedule is issued. Infeasibility is not counted as safety and no robust-policy improvement is claimed. The €360/€332 example is hypothetical tariff cost with conserved energy, not observed factory savings. The simulator does not validate process physics; task/price/capacity/emissions assumptions remain explicit.

The authentic image is copied from `docs/assets/v2/forecast.jpg`. [UCI Steel Industry Energy Consumption attribution](https://archive.ics.uci.edu/dataset/851/steel+industry+energy+consumption) remains linked, under CC BY 4.0.

## Deliberate omissions and future updates

The initial portfolio prioritized two verified industrial projects; CreditRisk and ActuaryLab were subsequently added with their own pinned provenance documents. Older predictive-maintenance résumé items are not duplicated as additional independent achievements. No employer affiliation, partnership, industrial production deployment, thesis completion, citation count, or scholarship amount is invented. Suggestions of Jupyter, LaTeX, and econometrics are not treated as demonstrated tools/course completion without further evidence.

The task-supplied Streamlit URLs are linked directly. Public availability must be verified separately during site QA; a source README's older local-only wording does not override the user's new deployment URLs. Future revisions should re-read upstream project results rather than silently carrying metrics into a new model version.


## Professional refinement evidence — 17 October 2026

Scholarship names are source-supported. Award dates must come from explicit source evidence, never degree enrollment periods; any missing dates remain unresolved in `PROFESSIONAL_POLISH_REVIEW.md`. User-reported SQL is displayed at Basic level. Data preparation, integration and validation terminology must reflect actual repository workflows; enterprise ETL platforms and certifications are not inferred. The owner corrected the initially reversed financial repository names. Links now match verified application contents; ActuaryLab’s actual repository spelling is `Insuarance-and-Actuarial-Analytics`, as documented in `PROFESSIONAL_POLISH_REVIEW.md`. Source document paths and pinned revision identifiers in the financial-project provenance documents are preserved.
