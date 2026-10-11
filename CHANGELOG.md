# Changelog

All notable changes to this project are documented in this file.

## [2026.10] - 2026-10-12

- dominique-mcclaney-portfolio is a public React + Vite portfolio site (dark luxury theme, Tailwind v4, Framer Motion, React Router with six pages, React Helmet Async SEO and a client-side chatbot). Content lives in src/data/resumeData.js.
- State: unchanged since the initial commit and a Vercel peer-dependency fix in February 2026; no live URL is stated in the README.
- Re-reviewed October 2026: README, file tree and commit history re-read; documentation and version metadata only, no code changes. External links checked: github.com/MccDom1 returns 200; the LinkedIn profile returns 405 to automated requests (bot blocking, not necessarily dead); the .git clone URL is not browsable. None point at our own resources, so none were changed.
- README states an MIT License but the repo had no LICENSE file; a standard MIT LICENSE was added in this release.
- Known gaps: no tests or CI.

## [2026.09] - 2026-09-16

- Maintenance review of dominique-mcclaney-portfolio — a personal portfolio website (dark luxury tech theme) presenting skills, experience, education, projects and honors.
- Status: React + Vite SPA styled with Tailwind CSS v4, using React Router DOM for six pages (Home, Experience, Education, Projects, Honors, Contact), Framer Motion transitions, React Helmet Async for per-page SEO, and a client-side Chatbot component. Portfolio content is centralised in `src/data/resumeData.js`. Configured for Vercel via `vercel.json` and `.npmrc`; no live URL is stated in the README.
- Reviewed September 2026: documentation refreshed, changelog started, and the package version bumped for the v2026.09 maintenance tag. No component or content code was changed.
- Known gaps: README states an MIT License but no LICENSE file exists in the repo; no CHANGELOG before this release; no tests or CI workflow committed; package.json version had never been set above 0.0.0.
