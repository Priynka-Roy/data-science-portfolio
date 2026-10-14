# Public CV review

The website serves the newly authored `public/resume/priynka-roy-cv.pdf`, not the original supplied resume. The original is preserved locally and must remain excluded from Git and public build assets.

The public version retains the owner's name, city and country, expressly supplied public contact email, professional profile hyperlinks, education, research, scholarships, languages and evidence-supported project descriptions. It removes residential street address, date of birth, telephone details, and their hidden hyperlink annotations. No removed personal values are reproduced in this review or the generator.

Source verification used the original PDF's visible text and link annotations. LinkedIn and Google Scholar destinations came from those annotations; they are source-verified profile URLs, not invented usernames or claims about live account verification.

The source's DataCamp career-track entry is in progress. The public CV does not claim a completed Microsoft certification. An ambiguous earlier thesis heading is not treated as evidence of a completed master's degree; the current master's research wording follows the user's conservative privacy and longitudinal-data description. Award wording retains the original resume's exact institutional wording, including `Faculty of Exact Science, Turku University`.

IndustrialGuard AI is described as condition monitoring with sparse historical failure evidence, without reliability or savings claims. EnerTwin AI reports the original holdout metrics, keeps V2 retrospective evidence distinct, and does not present modeled scheduling differences as realized factory savings. The projects' public repository and app links come from the user's instructions.

`scripts/create_public_cv.py` regenerates the public PDF using ReportLab without reading the private original. The PDF uses selectable text and clickable links. QA checks page count, extracted content, metadata and hyperlink targets, then renders both pages for visual inspection. The generator contains only approved public content.
