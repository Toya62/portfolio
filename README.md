# Toyanath Pandey — Portfolio

A personal portfolio presenting my software engineering experience, education,
certifications and selected projects in backend development, data engineering
and systems programming.

**Website:** [toyanathpandey.com.np](https://toyanathpandey.com.np/)  
**GitHub:** [Toya62](https://github.com/Toya62)  
**LinkedIn:** [pandeytoya](https://www.linkedin.com/in/pandeytoya)

## Technology

- Astro, React and TypeScript
- Tailwind CSS
- GitHub Actions and GitHub Pages

## Run locally

Requirements: Node.js 22.12 or later and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm exec astro dev
```

Open the local address displayed in the terminal.

## Update and deploy

- Profile content: `src/data/resume.tsx`
- Site URL and theme: `src/data/config.ts`
- Portrait: `public/portrait.jpg`

Run `pnpm exec astro check` to check types and `pnpm exec astro build` to build
the static site. Push changes to `main` to deploy through GitHub Actions.
Domain changes also need to be configured in GitHub Pages and DNS.

## Credits and license

Built from [Starfolio](https://github.com/webrating/starfolio), an MIT-licensed
portfolio template. See [LICENSE](LICENSE) for the template license.
