# AI Code Translator Website

This is a landing page for the AI Code Translator application, showcasing its features, benefits, and providing download options.

## Project Structure

```
AI_Translator_Website/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── logo.svg
│   └── translator-screenshot.png
├── index.html
└── README.md
```

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Modern, clean UI with gradient accents
- Interactive code examples demonstrating translation capabilities
- Animated elements for enhanced user experience
- Newsletter subscription form
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with CSS variables and flexbox/grid layouts)
- JavaScript (vanilla JS, no frameworks)
- Font Awesome for icons
- Google Fonts for typography
- Highlight.js for code syntax highlighting

## Getting Started

To view the website locally:

1. Clone this repository or download the files
2. Open `index.html` in your web browser

## Customization

### Changing Colors

The color scheme can be easily modified by editing the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --accent-color: #00c9a7;
    /* other variables */
}
```

### Adding More Code Examples

To add more code examples to the demo rotation, edit the `codeExamples` array in `js/script.js`.

### Updating Content

All content is contained within the `index.html` file and can be modified directly.

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

This website is designed to be deployed on GitHub Pages. To deploy:

1. Create a new GitHub repository (e.g., `ai-code-translator-website`)
2. Initialize git in this directory and push the code to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-code-translator-website.git
   git push -u origin main
   ```
3. Go to the repository settings on GitHub
4. Navigate to the "Pages" section
5. Select the branch to deploy (usually `main`)
6. Click "Save"
7. Your site will be published at `https://yourusername.github.io/ai-code-translator-website/`

### Custom Domain (Optional)

To use a custom domain:
1. Purchase a domain from a domain registrar
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name
4. Update your domain's DNS settings to point to GitHub Pages
5. Wait for DNS propagation (can take up to 24 hours)
