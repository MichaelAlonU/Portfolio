# 🚀 Quick Bootstrap Portfolio - Getting Started

## ✅ What's Ready

Your complete, production-ready portfolio website is ready to use! Everything is built with **React, Vite, and Bootstrap** (no Tailwind CSS).

---

## 📦 Installation (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

This installs React, Vite, Bootstrap, and React Router.

### Step 2: Run Development Server
```bash
npm run dev
```

Opens automatically at `http://localhost:3000`

You can now:
- Edit files and see changes instantly (Hot Module Reload)
- Navigate to all pages: Home, About, Projects, Contact
- Test on mobile devices in browser DevTools

### Step 3: Build for Production
```bash
npm run build
```

Creates optimized build in `/dist` folder (ready for deployment)

---

## 🌐 Deploy to GitHub Pages (5 minutes)

### Prerequisites
- GitHub account
- Git installed locally

### Setup

1. **Update `package.json`**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/Portfolio",
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Select `gh-pages` branch
   - Save

5. **Done!** Visit `https://YOUR_USERNAME.github.io/Portfolio`

---

## ✏️ Customize Your Portfolio

### Change Colors
Edit `src/index.css` (lines 7-17):
```css
:root {
  --primary-navy: #0284c7;        /* Main color */
  --bg-dark: #0f172a;              /* Background */
  --text-primary: #f1f5f9;        /* Text color */
  /* ... etc ... */
}
```

### Update Content
Edit `src/data/portfolio.js`:
- Change project titles, descriptions, links
- Update skills and proficiency levels
- Modify about content
- Update contact information

### Edit Pages
- **Home**: `src/pages/Home.jsx`
- **About**: `src/pages/About.jsx`
- **Projects**: `src/pages/Projects.jsx`
- **Contact**: `src/pages/Contact.jsx`

---

## 📱 Bootstrap Classes Used

The portfolio uses Bootstrap 5 classes:
- `container-lg` - Max width container
- `row` / `col-*` - Grid system
- `btn` - Buttons
- `card` - Cards with padding
- `navbar` - Navigation
- `form-control` - Form inputs
- `text-*` - Text utilities (colors, sizes)
- Custom classes: `.badge-tech`, `.skill-bar`, `.glass-effect`

---

## 🎨 Design Defaults

- **Background**: Dark slate `#0f172a`
- **Text**: Light slate `#f1f5f9`
- **Primary Color**: Navy blue `#0284c7`
- **Font**: System fonts (Inter if available)
- **Spacing**: Bootstrap's default spacing scale

---

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Create optimized build
npm run preview      # View production build locally

# Deploy
npm run deploy       # Build & deploy to GitHub Pages
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/index.css` | All custom CSS + Bootstrap overrides |
| `src/data/portfolio.js` | All portfolio content |
| `src/pages/Home.jsx` | Hero section |
| `src/pages/About.jsx` | Skills & about |
| `src/pages/Projects.jsx` | Project showcase |
| `src/pages/Contact.jsx` | Contact form |
| `package.json` | Scripts & dependencies |
| `vite.config.js` | Build configuration |

---

## 🎯 Common Customizations

### Change Hero Text
`src/pages/Home.jsx` line 20:
```jsx
<h1>Hi, I'm <span>YOUR_NAME</span></h1>
```

### Update Tech Stack
`src/pages/Home.jsx` line 27:
```jsx
{['Your', 'Tech', 'Stack'].map((tech) => (
```

### Add Project
`src/data/portfolio.js`, add to `additional` array:
```javascript
{
  id: 4,
  title: 'Your Project Name',
  description: 'Project description',
  // ...
}
```

### Change Colors
`src/index.css` top section:
```css
:root {
  --primary-navy: #YOUR_COLOR;
}
```

---

## 🚨 Important Notes

### GitHub Pages URL Format
All links use `#/` prefix for hash routing:
- Home: `/#/`
- About: `/#/about`
- Projects: `/#/projects`
- Contact: `/#/contact`

This is **required** for GitHub Pages static hosting.

### Contact Form
Currently frontend-only. To make it send emails:
1. **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to form
2. **EmailJS**: Use their JavaScript library
3. **Custom Backend**: Build Node.js/Express API

### Mobile Menu
Mobile menu automatically closes when clicking a link (by design).

---

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### TypeError: Cannot find module 'bootstrap'
```bash
npm install bootstrap
```

### GitHub Pages Shows 404
- Make sure `gh-pages` branch exists
- Check `package.json` homepage is correct
- Wait 1-2 minutes after deploying

### Navbar Not Sticky
Already implemented! Works automatically on scroll.

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Bootstrap Documentation](https://getbootstrap.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router](https://reactrouter.com)

---

## ✨ Features Included

✅ Responsive Bootstrap grid
✅ Dark theme with custom colors
✅ Smooth scroll & animations
✅ Sticky navbar with scroll effect
✅ Hero section with gradients
✅ Skills progress bars
✅ Project showcases
✅ Contact form
✅ Social media links
✅ Mobile menu
✅ Fast Vite dev experience
✅ One-command deployment
✅ SEO optimized
✅ Production ready

---

## 🎉 You're All Set!

Your portfolio is:
1. ✅ Fully functional
2. ✅ Mobile responsive
3. ✅ Production-ready
4. ✅ One command away from live

**Next Step**: `npm run dev` to see it in action!

Questions? Check README.md or DEPLOYMENT.md for detailed docs.
