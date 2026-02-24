# Deployment Guide - GitHub Pages

## Overview
This portfolio is configured for GitHub Pages deployment. Follow these steps to get your site live.

## Prerequisites
- GitHub account
- Git installed locally
- Node.js and npm installed

## Step 1: Prepare Your Local Repository

```bash
# Navigate to your portfolio folder
cd Portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio commit"
```

## Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `Portfolio` (or your preferred name)
3. Choose "Public" (required for free GitHub Pages)
4. Don't initialize with README (you already have one)
5. Click "Create repository"

## Step 3: Connect Local to Remote

```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Push to main branch
git push -u origin main
```

## Step 4: Configure Vite for GitHub Pages

Update `vite.config.js` to set the correct base path:

```javascript
export default defineConfig({
  // ... other config
  base: '/Portfolio/',  // Change if using different repo name
});
```

If deploying to `yourusername.github.io` (user/org site), use:
```javascript
base: '/',
```

## Step 5: Update package.json Homepage

Update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/Portfolio",
  // ... rest of config
}
```

For user/org pages:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io",
  // ... rest of config
}
```

## Step 6: Deploy

### Option A: Automated Deployment (Recommended)

The project includes `gh-pages` configuration in `package.json`:

```bash
# Install if not already installed
npm install --save-dev gh-pages

# Deploy in one command
npm run deploy
```

This will:
1. Build your React app
2. Push the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will serve from that branch

### Option B: Manual Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Push this file, and it will auto-deploy on every push to main.

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" or "main" (depending on your setup)
   - Folder: Select "/ (root)"
4. Click "Save"

Wait 1-2 minutes for GitHub Pages to build.

## Step 8: Verify Deployment

Visit: `https://YOUR_USERNAME.github.io/Portfolio`

Your site should be live! This may take a few minutes.

## Troubleshooting

### 404 Errors on Page Navigation
**Problem**: Pages show 404 when navigating internally  
**Solution**: The portfolio uses `HashRouter` which prefixes routes with `#/`. This is correct for GitHub Pages.

### Sites Not Showing Public Files
**Problem**: GitHub Pages not detecting site  
**Solution**: 
- Check repository is Public (Settings → General)
- Ensure gh-pages branch exists in repository
- Wait 1-2 minutes for GitHub Pages to refresh

### Custom Domain (Optional)
To use a custom domain:

1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Go to repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Configure DNS records with your domain registrar:
   - `A` record: `185.199.108.153`
   - `A` record: `185.199.109.153`
   - `A` record: `185.199.110.153`
   - `A` record: `185.199.111.153`

(Latest records on [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site))

## Updating After Deployment

After you make changes:

```bash
# Stage changes
git add .

# Commit
git commit -m "Update portfolio content"

# Push to main
git push origin main

# Deploy
npm run deploy
```

Or if using GitHub Actions, just push to main and it auto-deploys!

## Performance Tips

1. **Keep asset sizes small**
   - Optimize images before adding
   - Use SVG for icons
   - Compress videos if added

2. **Monitor Lighthouse**
   - Run `npm run build` and serve with `npm run preview`
   - Check with Chrome DevTools → Lighthouse
   - Target 90+ scores

3. **Cache-busting**
   - Vite automatically adds hashes to filenames
   - Browsers will get latest version automatically

## Rollback (If Needed)

If something goes wrong:

```bash
# Revert to previous commit
git revert HEAD

# Push to main
git push origin main

# Deploy again
npm run deploy
```

## Additional Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Pages Docs - Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Configuring a Publishing Source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
