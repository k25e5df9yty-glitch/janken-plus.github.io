# Janken Plus

This repository hosts a simple [Next.js](https://nextjs.org/) application that demonstrates a counter built with Redux and Material UI. It is configured for static export and deployment to GitHub Pages.

## Prerequisites
- Node.js 20+
- npm

## Installation
```bash
npm install
```

## Common npm scripts
- `npm run dev` – start the local development server.
- `npm run build` – generate the static site in the `out/` directory.

## Running locally
1. Install dependencies with `npm install`.
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to `http://localhost:3000` to view the app.

## Deployment
Pushing to the `master` branch triggers the [GitHub Actions workflow](.github/workflows/pages.yml). The workflow installs dependencies, runs `npm run build` to export the site, and publishes the `out/` directory to GitHub Pages.

## Contributing
1. Fork the repository and create a feature branch.
2. Make your changes and ensure the project builds.
3. Commit your work and open a pull request for review.

