# CreditRisk AI portfolio evidence

The third portfolio case study was checked against the latest remote `main` of
[`Priynka-Roy/Insurance-and-Actuarial-Analytics`](https://github.com/Priynka-Roy/Credit-Risk-Analytics-and-Model-Validation)
on 15 October 2026. The inspected source commit was
[`c561888742e020a52448df28fffa6a1986bfbbc0`](https://github.com/Priynka-Roy/Credit-Risk-Analytics-and-Model-Validation/tree/c561888742e020a52448df28fffa6a1986bfbbc0).
Repository content was fetched through the authenticated GitHub API at this exact
commit. Case-study documentation links are pinned to it so the evidence remains
stable as the analytical project evolves. No files in the CreditRisk repository
were modified for this integration.

## Documents read

- `README.md`: source attribution, dataset, split, development protocol, original model scores, technology and interface.
- `docs/V2_RESULTS.md`: computed paired differences, calibration intervals, Monte Carlo scenarios and governance output.
- `docs/V2_MODEL_COMPARISON.md`: paired stratified bootstrap, difference direction, fixed fitted-model conditioning, 1,000 replicates, pointwise intervals and retrospective limitations.
- `docs/V2_CALIBRATION_UNCERTAINTY.md`: ordinary customer resampling, jointly estimated intercept/slope, interval endpoints and sparse-group limitations.
- `docs/V2_RISK_SIMULATION.md`: synthetic portfolio construction, assumed EAD/LGD/latent correlation, marginal invariance, VaR/ES definitions and Monte Carlo uncertainty.
- `docs/V2_MODEL_GOVERNANCE.md`: ten assumed educational criteria, diagnostic status, the hypothetical 0.80 AUC-floor example and required future evidence.
- `docs/MODEL_CARD.md`: selected model, no-additional-calibration choice, intended use and unsupported uses.
- `docs/LIMITATIONS.md`: historical geography, next-month target, no temporal/external validation, uncertainty, causal/fairness limits and hypothetical financial assumptions.
- `docs/PORTFOLIO_CASE_STUDY.md`: original cases A–D and retrospective/simulated V2 cases E–H.

## Verified numbers and their interpretation

| Portfolio claim | Source and scope |
|---|---|
| 30,000 records; 23 predictors; 6,636 events; 22.12% | README; historical Taiwan 2005 UCI dataset, next-month payment default |
| 15,000 / 4,500 / 4,500 / 6,000 split | README; frozen stratified customer training/validation/calibration/test split |
| Original four-model score table | README original V1 audit, preserved by V2; no fresh validation |
| Boosting ROC-AUC 0.7804; AP 0.5549; Brier 0.13499; log loss 0.42919 | README and model card; original historical 6,000-customer holdout, ROC-AUC is not accuracy |
| Calibration intercept −0.0141; slope 0.9845; slope interval [0.9240, 1.0459] | README and V2 calibration report; no additional recalibration selected |
| Boosting−L2 log-loss delta −0.008860 [−0.012153, −0.005617] | V2 results/comparison; retrospective conditional paired bootstrap |
| Boosting−L2 ROC-AUC delta +0.013040 [0.006656, 0.019037] | Same paired report and scope |
| Boosting−L2 Brier delta −0.002436 [−0.003512, −0.001375] | Same paired report and scope |
| KS delta +0.008589 [−0.002694, 0.019102] | Same paired report; interval includes zero, no equivalence claim |
| 100 training-only logistic refits | V2 results and model card; existing validation observations, not new evaluation data |
| 1,000 synthetic accounts; 5,000 simulated portfolios | V2 simulation/results; fixed rounded anonymous probability histogram |
| EAD 100,000 NTD/account; LGD 45%; latent rho 0 vs 0.15 | V2 simulation; all hypothetical assumptions, rho is not estimated default correlation |
| Shared analytical EL 9,933,705 NTD | V2 results; unchanged marginals/EAD/LGD imply unchanged analytical mean |
| Independent VaR95 10.8000m / ES95 11.0160m NTD | V2 results; hypothetical finite simulation |
| Common-factor VaR95 17.6850m / ES95 20.1152m NTD | V2 results; ES rounded from 20,115,180 NTD, hypothetical finite simulation |
| Ten educational governance criteria | V2 governance; illustrative tolerances, not official approval rules |

The 9,933,705 NTD V2 analytical mean differs slightly from the preserved V1 exact-customer
scenario baseline because the V2 synthetic portfolio uses rounded probabilities and
quantile selection. The site does not present this difference as savings or improvement.

## Authentic images

The following source screenshots are copied from that same remote commit and served
locally through Next.js image optimization. They are not generated or recreated charts.

| Source image | Portfolio asset |
|---|---|
| `docs/assets/overview.jpg` | `public/images/creditrisk-overview.jpg` |
| `docs/assets/calibration.jpg` | `public/images/creditrisk-calibration.jpg` |
| `docs/assets/v2/paired-comparison.jpg` | `public/images/creditrisk-paired-comparison.jpg` |
| `docs/assets/v2/risk-simulation.jpg` | `public/images/creditrisk-risk-simulation.jpg` |

Captions distinguish original historical evidence, retrospective V2 inference, and
hypothetical loss simulation. Accessible HTML tables provide the central numerical
results alongside the screenshots.

## Dataset and deployment links

Dataset attribution: Yeh, I. (2009). *Default of Credit Card Clients* [Dataset].
UCI Machine Learning Repository. [DOI 10.24432/C55S3H](https://doi.org/10.24432/C55S3H),
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The public app URL is the exact owner-supplied deployment URL:
[CreditRisk AI live application](https://creditrisk-ai-asquvlbgrsfevfur938zrk.streamlit.app/).
The inspected analytical README still describes a planned owner deployment and a
local link; it is not the source of this public URL. The portfolio does not modify
that README or infer public deployment from the repository's earlier wording.

## Content boundaries

No classification-accuracy, measured business-saving, bank employment/partnership,
regulatory certification, real borrower decision, observed loss, or external-validation
claim has been added. Educational governance and simulation assumptions are explicit.
The original IndustrialGuard AI and EnerTwin AI project entries are preserved
byte-for-byte, and no CV, photograph, or academic record is changed by this content work.
