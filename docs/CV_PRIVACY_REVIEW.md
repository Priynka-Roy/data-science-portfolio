# Public CV removal and privacy boundaries

Updated 17 October 2026 at the owner's explicit request.

## Current publication policy

The portfolio no longer publishes a CV. The generated `public/resume/priynka-roy-cv.pdf` and the obsolete `scripts/create_public_cv.py` generator are removed. The owner will tailor CVs separately for individual job applications; no replacement CV is created by this task.

Before removal, the public PDF was copied outside the repository to a private backup directory with directory mode 700 and file mode 600. Its bytes were verified against the public source before deletion. The original ignored source `Priynka-Roy-Resume.pdf` is preserved untouched. Neither document belongs in public assets or future commits.

## Historical context

The earlier portfolio served a separately generated two-page PDF, excluding residential address, date of birth, telephone values, and hidden telephone hyperlinks from the source resume. That review applied to the historical document, not to a current public download. The previously recorded source verification of professional profile links, education, publication and award names remains valid evidence for website content.

Removing the file from current source and a new deployment does **not** remove earlier Git copies, historical Vercel deployments, browser caches, search-engine caches, or third-party archives. Git history has not been rewritten. History rewriting would require separate explicit approval and still could not guarantee removal of independently retained copies.

## Release verification

Verify the homepage and case studies expose no CV download links, and that `/resume/priynka-roy-cv.pdf` returns 404 on the new production deployment. Local asset removal alone does not establish production removal. Final test and deployment results are recorded by the release reviewer after verification.
