# ActuaryLab AI portfolio content provenance

Reviewed on 16 October 2026. This update integrates the completed Version 1 project; it does not implement Version 2 or modify the ActuaryLab repository.

## Frozen source snapshot

Repository: [Priynka-Roy/Credit-Risk-Analytics-and-Model-Validation](https://github.com/Priynka-Roy/Insuarance-and-Actuarial-Analytics).

Current remote `main` was resolved through GitHub API to **`726b2474f9a93aee2e99a6bebca6148584618013`**. All 17 requested source files below were fetched through the API at that exact revision and read before writing the portfolio entry. Case-study evidence links use this immutable revision.

The authoritative computed artifact is [reports/results.json](https://github.com/Priynka-Roy/Insuarance-and-Actuarial-Analytics/blob/726b2474f9a93aee2e99a6bebca6148584618013/reports/results.json). Documentation was checked against it, rather than choosing favorable descriptions.

Files reviewed:

- `README.md`
- `docs/DATA_CARD.md`
- `docs/DATA_RECONCILIATION.md`
- `docs/METHODOLOGY.md`
- `docs/FREQUENCY_MODELING.md`
- `docs/SEVERITY_MODELING.md`
- `docs/PURE_PREMIUM.md`
- `docs/MODEL_VALIDATION.md`
- `docs/STATISTICAL_UNCERTAINTY.md`
- `docs/PRICING_SCENARIOS.md`
- `docs/RISK_SIMULATION.md`
- `docs/RESPONSIBLE_PRICING.md`
- `docs/MODEL_CARD.md`
- `docs/LIMITATIONS.md`
- `docs/PORTFOLIO_CASE_STUDY.md`
- `docs/FINAL_REVIEW.md`
- `reports/results.json`

## Numeric checks and interpretation

| Portfolio statement | Computed-artifact field or record | Checked value |
|---|---|---|
| Original frequency population | `audit.frequency_rows` | 678,013 policies |
| Primary reconciled population | `summary.policies` | 668,896 policies |
| Primary exposure | `summary.exposure_years` | 353,893.168 exposure-years (rounded to 3 decimals) |
| Positive linked payments | `summary.claims` | 26,443 |
| Primary recorded payment | `summary.claim_amount` | 59,908,673.17 SMU |
| Unmatched, repeated, inconsistent records | `audit.unmatched_claim_records`, `duplicate_claim_records_retained`, `inconsistent_claim_counts` | 195; 255 retained; 9,117 policies |
| Poisson GLM holdout deviance | `models.frequency`, model `Poisson GLM`, `test.poisson_deviance_per_exposure` | 0.4613832482 |
| Selected frequency holdout deviance | `models.frequency`, model `Poisson HGB leaves=15`, same score field | 0.4493734312 |
| Selected severity holdout deviance | `models.severity`, model `Gamma GLM alpha=0.1`, `test.gamma_deviance` | 2.0256857437 |
| Selected two-part holdout deviance | `models.pure_premium`, selected model, `test.tweedie_deviance_p1_5` | 80.4631834001 |
| Best direct Tweedie holdout deviance | `models.pure_premium`, model `Tweedie p=1.7 alpha=0.1`, same common-power score | 86.3928639413 |
| Paired frequency point difference | `uncertainty.paired_point_estimates.frequency_deviance_difference` | −0.0120098171 |
| Conditional frequency interval | `uncertainty.paired.frequency_deviance_difference` | [−0.0149540958, −0.0093640867] |
| Aggregate holdout costs | Selected two-part `test.observed_loss`, `expected_loss` | 13,477,614.76; 11,389,868.69 SMU |
| Aggregate underprediction | Negated selected two-part `test.aggregate_relative_error` | 15.4904715%, displayed 15.49% |
| Premium O/E interval | `uncertainty.intervals.premium_oe` | [0.7809451054, 1.9784163651] |
| Observed pure-premium interval | `uncertainty.intervals.pure_premium` | [125.0981025820, 316.6872871360] SMU/exposure-year |
| Hypothetical premium | `pricing.assumed_portfolio_premium` | 367,856.785944065 SMU |

Split counts, large-loss proportion and supporting interpretations are also cross-checked against the computed artifact and methodology. The five-row model table deliberately separates targets; its rows do not create a cross-target deviance leaderboard. Selection remains validation-only, with the negative holdout calibration finding prominently retained.

The seven simulation rows below are copied from corresponding named records in `simulation.scenarios`, rounded to two decimals:

| Assumed scenario | Analytical expected loss · SMU | VaR95 · SMU | ES95 · SMU |
|---|---:|---:|---:|
| Baseline independent Gamma | 262,754.85 | 512,611.75 | 611,360.58 |
| Frequency +20% | 315,305.82 | 581,382.03 | 681,867.61 |
| Severity +20% | 315,305.82 | 615,134.10 | 733,632.70 |
| Combined +20% frequency/severity | 378,366.98 | 697,658.44 | 818,241.13 |
| Lognormal severity, same means | 262,754.85 | 341,976.14 | 367,810.71 |
| Shared frequency shock, mean preserved | 262,754.85 | 575,154.90 | 702,798.17 |
| Younger synthetic profile weight 50% | 307,195.98 | 583,399.50 | 688,858.81 |

Each uses 1,000 synthetic one-year policies and 10,000 simulations. Baseline expected loss ratio is 71.4285714%; combined stress is 102.8571429% with assumed premium fixed. Baseline Monte Carlo mean is 263,178.439467 SMU and mean SE is 1,346.053469 SMU. Gamma/lognormal and common-shock contrasts are explicit assumptions, not an empirical claim that the lower-tail model is more accurate.

## Source discrepancies resolved

The brief's requested numeric values agree with the current computed results at their stated precision. No favorable substitution or numerical correction was needed.

The source README and portfolio-copy document still say public deployment is a separate step and assert no live URL. The owner's current instruction supplies the now-public application URL, which takes precedence for this deployment fact:

[Public ActuaryLab AI application](https://actuarylab-ai-insurance-pricing-risk-hr7wfi9w5xtdycwvvyjuxp.streamlit.app/).

The source's upstream narrative count of 677,991 differs from the downloaded count of 678,013. The portfolio uses the measured original count and clearly distinguishes it from the reconciled 668,896-policy cohort. It does not imply missing claims were recovered or excluded costs were zero.

## Images and public copy

Four authentic project screenshots are used, with descriptive alt text and contextual captions:

- `docs/assets/overview.jpg` → `/images/actuarylab-overview.jpg`: homepage card and case-study hero.
- `docs/assets/frequency.jpg` → `/images/actuarylab-frequency.jpg`: methodology visual.
- `docs/assets/pricing.jpg` → `/images/actuarylab-pricing.jpg`: hypothetical pricing visual.
- `docs/assets/risk-simulation.jpg` → `/images/actuarylab-risk-simulation.jpg`: simulated loss visual.

All screenshot source paths belong to the reviewed project revision. No financial graphics or application screens were invented. Next.js Image follows the existing optimization and responsive conventions.

The entry preserves source monetary units, reconciled-population selection bias, conditional-bootstrap scope, 15.49% holdout underprediction, heavy-tail uncertainty, assumed simulation tails, and responsible pricing constraints. It claims no commercial quote service, insurer partnership, professional actuarial credentials, current Finnish pricing validity, profitability, regulatory approval, or external independent validation.

The first three structured project objects were retained byte-for-byte when the fourth object was appended. This provenance document and `content/projects.ts` are the content specialist's complete edit scope.
