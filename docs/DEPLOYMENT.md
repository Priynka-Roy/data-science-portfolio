# Historical production deployment and verification

Verified 14 October 2026.

This is evidence from the initial two-project release, not a statement of the latest production contents. Subsequent integrations added CreditRisk and ActuaryLab. The 17 October 2026 refinement removes public CV downloads and modernizes professional content; final deployment verification must confirm that release separately.

- Public canonical website: https://data-science-portfolio-olive.vercel.app/
- Owner-name alias: https://data-science-portfolio-priynka-roy.vercel.app/
- GitHub: https://github.com/Priynka-Roy/data-science-portfolio
- Vercel project: data-science-portfolio, Priynka Roy account
- Production deployment: dpl_3UxQK2KC9ZRXoZLXpbDNVFWWNcDY
- Source revision: e62f5dba77fac24b6b2ae9ef924e19bd82d99ea6
- GitHub Actions: https://github.com/Priynka-Roy/data-science-portfolio/actions/runs/38512737159

The authenticated Vercel Git-source deployment built the main branch directly from the new public GitHub repository. Framework: Next.js, repository root, Node.js 24, pnpm 11.25. No paid resources were provisioned. Public access is enabled for this portfolio.

## Verified flow

Unauthenticated HTTPS requests returned HTTP 200 for the homepage, both project case studies, public CV, all three images, social image, robots.txt, and sitemap.xml. The CV response is application/pdf and 8,111 bytes. Canonical and social-image URLs use the actual Vercel production hostname; no localhost metadata is emitted in production. Sitemap contains all three public pages.

Browser checks confirmed the homepage, real portrait, both screenshots, mobile menu, Escape focus restoration, anchor navigation, and case-study navigation. Desktop (1440 px), tablet (768 px), and mobile (390 px) showed no horizontal overflow. No captured portfolio console errors or warnings were present. The portrait preserves head, face, mouth, and shoulders without appearance alteration.

Both linked Streamlit apps initially displayed their inactivity sleep screen. They were awakened through their public UI, and both subsequently displayed their project-specific navigation and overview content. Streamlit may sleep again when unused; that is hosting behavior outside this portfolio.

## Automated checks and limits

Seven tests pass, covering all homepage sections, anchors, mobile menu and focus, both case-study contents and links, actual public assets, private-file exclusions, HTTPS origin validation, and axe structural accessibility checks. Lint and TypeScript checks pass without warnings/errors. Local production build and GitHub Actions succeed.

The axe check runs in jsdom with color contrast disabled because that environment lacks browser layout. Visible focus, semantic structure, descriptive links, reduced-motion CSS, and responsive layouts were reviewed separately. This is not a full WCAG certification or assistive-technology audit. A Lighthouse benchmark was not run, and no numerical performance score is claimed.

The Vercel connector's build-log endpoint denied access, but deployment status, successful public responses, and browser rendering independently confirmed deployment. No additional owner action is required to use the published site.

## Future updates

Edit content/profile.ts and content/projects.ts for factual changes. The public CV and generator are now removed; keep all private resumes outside public build assets. Do not restore a public CV without a new owner instruction. Refresh case-study evidence and screenshots when the underlying projects change. A custom domain is optional; verify it before setting NEXT_PUBLIC_SITE_URL.
