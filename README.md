# Portfolio Website

A clean, modern personal portfolio built with plain HTML, CSS, and JavaScript. No build step required — open it in any browser.

## Sections

- **Hero** — intro with call-to-action buttons
- **About** — bio and tech stack
- **Projects** — featured work with tags and links
- **Skills** — grouped skill tags
- **Contact** — email CTA and social links

## Getting Started

1. Open `index.html` in your browser (double-click the file, or right-click → Open with).
2. Customize the content in `index.html` — search for "Your Name" and replace placeholder text.
3. Update links (GitHub, LinkedIn, email) throughout the file.
4. Add your photo by replacing the `.about__image-placeholder` div with an `<img>` tag:

```html
<div class="about__image-frame">
  <div class="about__image-placeholder">
    <img src="images/your-photo.jpg" alt="Your Name">
  </div>
</div>
```

## Project Structure

```
portfolio/
├── index.html       # Main page
├── css/
│   └── styles.css   # All styles
├── js/
│   └── main.js      # Nav, scroll effects, animations
└── README.md
```

## Customization

| What to change | Where |
|----------------|-------|
| Name, title, bio | `index.html` |
| Colors & fonts | `:root` variables in `css/styles.css` |
| Projects | `.project-card` blocks in `index.html` |
| Skills | `.skills__group` sections in `index.html` |

The default accent color is cyan (`#22d3ee`). Edit the `--accent` CSS variable to match your brand.

## Deploying

You can host this for free on:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/) — drag and drop the folder
- [Vercel](https://vercel.com/) — import the folder as a static site

## Optional: Upgrade to Next.js

If you install [Node.js](https://nodejs.org/), you can migrate to a Next.js + Tailwind setup for easier content management and deployment. Ask in Cursor and we can scaffold that version.
