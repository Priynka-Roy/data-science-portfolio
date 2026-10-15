# CreditRisk AI portfolio integration review

Reviewed 15 October 2026 on `feature/add-creditrisk-ai`.

## Five perspectives

- **Frontend engineering:** Existing typed data and static case-study route reused. Optional table/visual fields keep previous pages unchanged; no dependencies or client JavaScript added.
- **UI/UX:** Existing navy/teal identity, typography and card presentation preserved. The third 584px card is centered at 1440px; all cards are 350px wide at 390px. Tables scroll locally rather than overflowing the page; figures offer original-size links.
- **Banking analytics:** All nine requested source documents read at pinned CreditRisk commit c561888742e020a52448df28fffa6a1986bfbbc0. Original metrics checked against reports/results.json, including AP rounding. Historical holdout, retrospective V2 inference and hypothetical simulated losses are distinguished. No accuracy, regulatory, causal, financial-return or external-validation claims invented.
- **Recruiter presentation:** Business question precedes methods, three tables communicate evidence, real screenshots show the application, and limits explain appropriate interpretation. Five relevant skills added without banking employment or certifications.
- **QA:** Eleven tests pass, including card order/exact URLs, all case studies, image availability, contents anchors, mobile navigation/Escape focus, sitemap/canonical/OG generation, origin checks and axe structural accessibility. Lint, TypeScript and optimized production build pass. Local browser checks found no console warnings/errors, broken loaded images or horizontal overflow at 1440px/390px. Local HTTP audit returned 200 for all four public pages and 15 unique internal link/image destinations.

## Preservation checks

Original IndustrialGuard and EnerTwin content objects match the prior commit byte for byte. Public portrait and CV bytes match the prior commit. Original private CV/photo and academic records are untouched. User profile/about, education, research and contact content are unchanged.

## Deployment target

Use the existing `data-science-portfolio` Vercel project (`prj_tCWj8zVvsUN0VzjI77hFSwZz67NC`) and canonical https://data-science-portfolio-olive.vercel.app/. The new page is `/projects/creditrisk-ai`. Production verification follows PR merge; a successful local build alone does not establish deployment.

## Verification limits and future work

The axe checks run in jsdom with color contrast disabled; semantic and visual review do not constitute full WCAG certification. No Lighthouse score or assistive-technology certification is claimed. Streamlit demos can sleep after inactivity; CreditRisk was awakened and visibly rendered its V2 overview. Refresh evidence and screenshots when source project versions change. Optional future work is a manual screen-reader/contrast audit and a measured performance baseline.
