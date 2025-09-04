# Ethan Dietrich - Personal Website

A modern, Tron-style personal website built with HTML, CSS, and JavaScript. Features a dark theme with bright cyan/blue accents, interactive navigation, and an embedded travel map.

## 🌟 Features

### Design
- **Tron-style Theme**: Dark colors with bright cyan (#00ffff) and blue (#0080ff) accents
- **Animated Background**: Moving stars and twinkling effects
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Typography**: Orbitron font for headings, Roboto for body text

### Pages
1. **Home Page**: Hero section with animated circuit board, facts about you, and contact information
2. **Resume Page**: Complete professional experience, education, projects, and skills
3. **Travel Map Page**: Interactive Google Maps with your travel locations and photo gallery

### Interactive Elements
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Interactive Map**: Google Maps integration with custom Tron styling
- **Photo Gallery**: Hover effects and click interactions
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Scroll Animations**: Elements fade in as you scroll

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- No external APIs or payments required!

### Setup
1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **That's it!** The site is ready to use

### Local Development
1. Open `index.html` in your web browser
2. The site works completely locally with no external dependencies

### Deployment
The site is ready for deployment to any static hosting service:

- **AWS S3 + CloudFront** (as mentioned in your resume)
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any web server**

## 🗺️ Travel Adventures Section

### Features
- **Travel Statistics**: Visual display of countries, cities, and continents visited
- **Photo Gallery**: Interactive gallery with location details and coordinates
- **Travel Timeline**: Chronological timeline of your travel journey with descriptive tags
- **Future Plans**: Section showcasing upcoming travel and career opportunities

### Adding New Locations
Edit the travel section in `index.html` to add new locations:

1. **Add to Gallery**: Copy and modify the gallery-item structure
2. **Add to Timeline**: Copy and modify the timeline-item structure
3. **Update Statistics**: Modify the numbers in the travel-stats section

### Adding Photos
- Replace the Unsplash image URLs with your own photos
- Upload images to your hosting service or use a CDN
- Recommended image size: 400x300px or similar aspect ratio

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `styles.css`:

```css
:root {
    --primary-bg: #0a0a0a;        /* Main background */
    --secondary-bg: #111111;       /* Secondary background */
    --accent-color: #00ffff;       /* Primary accent (cyan) */
    --accent-secondary: #0080ff;   /* Secondary accent (blue) */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #cccccc;     /* Secondary text */
    --border-color: #00ffff;       /* Border color */
}
```

### Fonts
- **Headings**: Orbitron (futuristic, tech feel)
- **Body**: Roboto (clean, readable)

### Animations
- Circuit board animations in the hero section
- Scroll-triggered fade-in effects
- Hover effects on cards and buttons
- Parallax background effects

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern CSS with Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **No External Dependencies**: Completely self-contained

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Debounced scroll events
- Optimized animations
- Lazy loading for images
- Efficient DOM manipulation

## 📝 Content Updates

### Resume Updates
Edit the resume section in `index.html` to keep your experience current.

### Adding New Sections
1. Add new section to HTML with appropriate ID
2. Add navigation link
3. Update JavaScript navigation logic if needed

### Adding New Features
The modular structure makes it easy to add new features:
- New pages: Add sections and navigation
- New animations: Extend CSS animations
- New interactions: Add JavaScript event handlers

## 🚀 Deployment to AWS

Since you mentioned AWS experience, here's how to deploy:

### S3 + CloudFront Setup
1. **Create S3 bucket** with static website hosting enabled
2. **Upload all files** to the bucket
3. **Create CloudFront distribution** pointing to S3
4. **Configure Route 53** for custom domain (optional)
5. **Set up HTTPS** with CloudFront

### AWS CLI Commands
```bash
# Sync files to S3
aws s3 sync . s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🤝 Contributing

Feel free to fork and customize this template for your own use. The code is well-commented and modular for easy modification.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Ensure all files are in the same directory
2. Check browser console for JavaScript errors
3. Verify that your hosting service supports static websites
4. Make sure you're using a modern browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)

## 🔮 Future Enhancements

Potential improvements you could add:
- Blog section
- Portfolio gallery
- Contact form with backend
- Dark/light theme toggle
- More interactive animations
- Social media integration
- Analytics tracking

---

Built with ❤️ and modern web technologies. Enjoy your new personal website!
