# Training & Certifications integration

Reviewed 18 October 2026. Release target: the existing Priynka-Roy/data-science-portfolio repository and Vercel project prj_tCWj8zVvsUN0VzjI77hFSwZz67NC.

## Credential evidence and privacy

The supplied original `power bi certificate.pdf` was located in the portfolio root, extracted and visually rendered in full. It is a one-page DataCamp Statement of Accomplishment awarded to Priynka Roy for Data Analyst in Power BI, 50 HR, completed SEP 23, 2026, certificate #947,041. It contains the intended credential/name, provider logo and issuer signature, with no unrelated contact information, account secret, embedded link or private credential discovered.

The original remains unchanged and is now Git-ignored. The explicitly public copy is `/certificates/datacamp-power-bi-career-track.pdf`: 153,854 bytes, SHA-256 `82324fbad0d3319a9ce3bae1f92833013682468d022d8ed898ffd34224ed6545`. An automated test pins that hash. The preview JPEG is rendered directly from the supplied PDF, retaining the whole page and original appearance; no certificate text, logo or signature is generated or altered. The 1200×692 preview is 92,831 bytes and uses Next.js image optimization and lazy loading.

The public official [DataCamp career-track page](https://www.datacamp.com/tracks/data-analyst-in-power-bi), checked 18 October 2026, confirms the track title, 50-hour duration and coverage of preparation/transformation, Power Query, DAX, modeling, reports and dashboards. Marketing about PL-300 preparation is not treated as an awarded Microsoft certification. This record documents DataCamp career-track completion only.

## Implementation

- Typed records in `content/training.ts` and reusable server-rendered `components/TrainingCard.tsx`; optional preview does not reserve an empty column when absent.
- Homepage order: Home, About, Projects, Training, Skills, Education, Research, Contact. Numbered content sections now run 01–07. Individual project numbering is unchanged.
- Navigation adds Training and reuses existing mobile menu, active-section observation and keyboard/Escape behavior. The collapsible menu now applies at 900px and below to avoid crowded tablet labels; desktop label sizes are retained.
- White card, navy text, teal actions and existing tags/section styles. Desktop uses a horizontal summary/preview; mobile stacks content. Buttons open the original PDF and official public course page in new tabs with noopener/noreferrer, without forced download.
- Only Power Query and DAX are added to the existing skills group. Power BI is not duplicated there. No major skills redesign, unrelated metadata change, dependency or application-repository change.
- Existing case-study content, four project records, portrait, personal/academic/research details, public app URLs and CV-removal decision are preserved.

## Four review perspectives

- **Frontend:** Existing architecture reused; static content and optimized local assets, no client-state addition. New records can be added without rewriting the component.
- **UI/UX:** Desktop card visually inspected at 1440px; horizontal preview remains secondary to the credential text. Laptop/tablet/mobile layouts checked for widths, wrapping and safe action sizes. Tablet navigation uses the existing readable menu instead of shrinking text.
- **Recruiter:** Independent review found no credential/wording blockers. The record explicitly says Completed career track and DataCamp Statement of Accomplishment, and does not imply a Microsoft examination was passed.
- **QA:** 23 tests pass, including new section order/navigation/facts/date/numbering/link safety and original PDF hash. ESLint, TypeScript and production build pass. All four case routes remain statically rendered. Local desktop/mobile observations show no page overflow and buttons at least 44px high. Structural axe tests retain their existing jsdom color-contrast limitation; no full accessibility certification is claimed.

## Release boundary

The PR, merge and existing Vercel deployment are verified after these local checks. Public HTTP/browser verification and release proof are recorded in the pull-request description and delivery report; local checks alone do not establish deployment success. No server runtime-log audit or Lighthouse score is claimed.
