# Staging Environment Setup

## Overview
This repository now has a staging environment for testing changes before deploying to production.

## Branches

- **`main`** - Production branch, deploys to: https://ciuc123.github.io/oferta-bbischool.ro/
- **`staging`** - Staging branch for testing, deploys to the same URL when configured

## How to Use Staging

### 1. Create the Staging Branch
```bash
git checkout -b staging
git push origin staging
```

### 2. Deploy Changes to Staging
To test changes before merging to production:

```bash
# Make your changes
git checkout staging
git merge your-feature-branch
git push origin staging
```

The staging workflow will automatically:
- Install dependencies
- Run the build process (`npm run build`)
- Generate the DOCX file
- Deploy to GitHub Pages

### 3. View Staging Site
After pushing to `staging`, the GitHub Actions workflow will deploy the site. You can view the deployment progress in the "Actions" tab.

**Note:** GitHub Pages only supports one deployment per repository by default. To have separate staging and production URLs, you would need:
- A separate repository for staging, OR
- Use GitHub Environments with branch protection rules

### 4. Promote Staging to Production
Once you've verified the changes in staging:

```bash
git checkout main
git merge staging
git push origin main
```

## Current Setup

### Production Deployment
- **Branch:** `main`
- **Workflow:** `.github/workflows/deploy.yml`
- **URL:** https://ciuc123.github.io/oferta-bbischool.ro/

### Staging Deployment
- **Branch:** `staging`
- **Workflow:** `.github/workflows/deploy-staging.yml`
- **URL:** Same as production (GitHub Pages limitation)

## Alternative: Separate Staging Repository

For a true separate staging URL, you can:
1. Fork this repository to `oferta-bbischool-staging`
2. Push to the staging repo for testing
3. The staging URL would be: `https://ciuc123.github.io/oferta-bbischool-staging/`

## Workflows

Both workflows now include:
- Node.js setup
- Dependency installation
- Build process execution
- DOCX generation
- Deployment to GitHub Pages
