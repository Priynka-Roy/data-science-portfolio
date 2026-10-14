# Independent content, recruiter, and privacy review

Reviewed 14 October 2026 against the supplied task, original résumé text/link annotations, current upstream project documentation, typed portfolio content, homepage/case-study TSX, public images, and public CV.

## Findings

- **Recruiter clarity:** The homepage clearly identifies an MSc Statistics student, University of Turku, location, quantitative interests, and two independent industrial projects. Working apps, source repositories, readable case studies, publication, and direct contact/CV actions support a concrete assessment. No professional industrial employment or partner endorsement is invented.
- **Scientific content:** IndustrialGuard distinguishes retrospective event overlap from reliable failure forecasting, identifies the selected policy, and discloses sparse reports and unannotated alert burden. EnerTwin distinguishes original point forecasts from reused V2 evaluation, fixed/default from wider alternative bands, pointwise from full-day coverage, finite-set feasibility from unseen risk, and modeled costs from actual factory savings. No material unsupported claim was found in the typed content.
- **Education/research:** Degree dates and award names follow supplied sources. Current master's research is explicitly ongoing; no completed thesis or precise public title is invented. An in-progress DataCamp track is not presented as Microsoft certification.
- **Privacy:** The public two-page CV has no detected residential-address, birth-date, telephone text, or telephone URI annotations. The private original PDF is excluded by `.gitignore`; the public CV is separately generated. All three public JPEGs have empty EXIF metadata. Contact information is limited to user-authorized email, city/country, and verified professional-profile links.
- **Source traceability:** Both case studies expose current GitHub methodology/results/limitations and UCI attribution links. Portrait and screenshots are authentic supplied/upstream images. LinkedIn and Scholar URLs are verified from original résumé annotations, not invented usernames.

## Actionable wording finding

The shared case-study results eyebrow initially read “Measured, not assumed.” This is too broad for EnerTwin's hypothetical-workload feasibility results. Prefer “Computed evidence” or “Reported results” while keeping per-result qualifiers. The wording was corrected to “Computed evidence” before publication.

## Public app HTTP check

Both user-supplied HTTPS Streamlit app addresses returned HTTP 200 at their original URLs with a Streamlit Community Cloud JavaScript wrapper/root shell when accessed using a cookie-aware HTTP client. Each response was 9,782 bytes. A client without cookie handling encountered Streamlit's 303 redirect loop. No “App not found,” sign-in, or sleep marker was present in the successful shells.

The shell imports Community Cloud navigation/profile/iframe assets rather than project-specific text. These checks verify publicly reachable cloud wrapper endpoints, not full rendered application execution or analytical correctness. Browser rendering/WebSocket checks belong to separate end-to-end QA; this review does not infer them from a generic HTTP 200 response.

## Scope and remaining verification

No content changes were necessary. Responsive design, interaction, visual layout, WCAG conformance, production build, metadata deployment, CI, and actual Vercel accessibility are separate engineering/browser checks. This review does not certify them from static TSX inspection. Professional content and privacy are suitable for publication once the results eyebrow is clarified and deployment QA is complete.
