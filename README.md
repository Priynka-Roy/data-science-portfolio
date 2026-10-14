# Priynka Roy — Data Science Portfolio

A professional portfolio for Priynka Roy, an MSc Mathematics and Statistics student specializing in Statistics at the University of Turku, Finland.

The website presents statistical research and two completed industrial data science projects with their current V2 evidence, methods, and limitations.

## Featured applications

- [IndustrialGuard AI — live application](https://industrialguard-predictive-maintenance-fm5zvs3pfvs.streamlit.app/) · [source](https://github.com/Priynka-Roy/industrialguard-explainable-predictive-maintenance)
- [EnerTwin AI — live application](https://enertwin-industrial-energy-digital-twin-a2rgv4nwanli6udcl9egvr.streamlit.app/) · [source](https://github.com/Priynka-Roy/enertwin-industrial-energy-digital-twin)

IndustrialGuard provides historical equipment condition monitoring; anomaly evidence does not establish reliable failure forecasting. EnerTwin uses hypothetical workloads, tariffs, and operating constraints; modeled costs are not realized factory savings.

## Run locally

Requires Node.js 24 and pnpm 11.25.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [the local preview](http://localhost:3000). This address works only on the computer running the server.

```sh
pnpm lint
pnpm build
pnpm typecheck
pnpm test
pnpm start
```

## Architecture

Next.js App Router, TypeScript, Tailwind CSS, self-hosted Inter, Lucide icons, and Next.js image optimization. Homepage and project case studies are statically rendered. The mobile navigation is the only interactive client component. No tracking, authentication, database, or contact service is required.

- `app/`: homepage, generated project routes, metadata, sitemap, robots, social image
- `components/`: navigation, reusable sections, project cards, case studies, footer
- `content/profile.ts`: editable professional information, education, research, skills
- `content/projects.ts`: source-backed case studies, computed results, limitations
- `public/images/`: authentic portrait and screenshots from the project repositories
- `public/resume/priynka-roy-cv.pdf`: public-safe, two-page CV
- `tests/`: navigation, content, asset, origin-validation, and structural accessibility tests
- `.github/workflows/ci.yml`: reproducible installation, lint, build, typecheck, tests
- `docs/`: content provenance, privacy review, final review and deployment verification

## Privacy and assets

The supplied original resume and photo remain local and are explicitly Git-ignored. Only the reviewed public CV and an approved portrait copy are served. The CV excludes residential address, date of birth, and telephone number. The portrait retains the owner's appearance and is framed with CSS rather than face alteration.

The MIT license applies to source code; Priynka Roy's photograph, CV, personal content, and third-party application screenshots are excluded from that license. Screenshots retain their source project rights.

## Deployment

Deploy the repository root as a Next.js project on Vercel with Node.js 24. Canonical metadata uses the platform's actual production hostname, or the optional `NEXT_PUBLIC_SITE_URL` HTTPS origin after a verified domain is assigned. Local builds omit canonical URLs; a local-only social image URL warning is expected when no public origin is configured.

Read `docs/DEPLOYMENT.md` for the verified deployment status. Edit factual content in the typed content files; regenerate the public CV with `scripts/create_public_cv.py` only after reviewing its content and rendering both pages.
