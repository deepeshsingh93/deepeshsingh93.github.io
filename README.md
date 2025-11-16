# Deepesh Singh - Portfolio Website

A modern, responsive, and interactive single-page portfolio website showcasing professional experience, skills, projects, and publications.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Typing animation for professional tagline
  - Smooth scrolling navigation
  - Scroll-triggered reveal animations
  - Animated statistics counters
  - Custom cursor trail (desktop only)
  - Particle background effects
- **Comprehensive Sections**:
  - Hero section with animated introduction
  - About section with key statistics
  - Skills showcase with 12+ technology areas
  - Detailed professional experience timeline
  - Featured projects with impact metrics
  - Publications and public talks
  - Education and certifications
  - Contact form and information

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. That's it! No build process required.

## 🎨 Customization Guide

### Replace Profile Photo

1. Replace the placeholder image URL in `index.html` (line ~57):
   ```html
   <img
     src="https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=DS"
     alt="Deepesh Singh"
     class="profile-img"
   />
   ```
   With your actual photo:
   ```html
   <img src="your-photo.jpg" alt="Deepesh Singh" class="profile-img" />
   ```

### Update Colors

Edit CSS variables in `styles.css` (lines 2-20):

```css
:root {
  --primary-color: #4f46e5; /* Change to your preferred primary color */
  --secondary-color: #06b6d4; /* Change to your preferred secondary color */
  /* ... other colors ... */
}
```

### Add Your Resume PDF

1. Place your resume PDF in the same folder
2. Update the download link (if you want to add one)

### Modify Content

- **Hero Section**: Edit lines 46-104 in `index.html`
- **About Section**: Edit lines 106-147 in `index.html`
- **Skills**: Edit lines 149-280 in `index.html`
- **Experience**: Edit lines 282-390 in `index.html`
- **Projects**: Edit lines 392-565 in `index.html`
- **Publications**: Edit lines 567-658 in `index.html`
- **Education**: Edit lines 660-710 in `index.html`
- **Contact**: Edit lines 712-789 in `index.html`

### Add Company Logos

Replace Font Awesome icons with actual company logos:

```html
<!-- Replace -->
<div class="company-logo">
  <i class="fas fa-beer"></i>
</div>

<!-- With -->
<div class="company-logo">
  <img src="company-logo.png" alt="Company Name" />
</div>
```

## 📁 File Structure

```
deepesh_profile_website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive JavaScript
├── README.md           # This file
└── Deepesh_Singh_Nov2025.pdf  # Your resume
```

## 🌐 Deployment Options

### GitHub Pages (Recommended)

1. Create a GitHub repository
2. Push these files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Create account at netlify.com
2. Drag and drop the folder
3. Site goes live instantly

### Vercel

1. Create account at vercel.com
2. Import your GitHub repository
3. Deploy with one click

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## ✨ Interactive Features

### Typing Animation

The hero section displays rotating professional titles with a typing effect.

### Scroll Animations

Elements fade in and slide up as you scroll down the page.

### Statistics Counter

Numbers animate when they come into view.

### Smooth Navigation

Click any navigation link for smooth scrolling to that section.

### Contact Form

Form uses mailto protocol - opens user's default email client.

### Easter Egg

Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, Grid, Flexbox
- **JavaScript (Vanilla)**: No frameworks, pure JS
- **Font Awesome**: Icons
- **Google Fonts**: Inter & Poppins fonts

## 📊 Performance

- Lightweight: ~100KB total (before images)
- Fast loading: No external dependencies except fonts/icons
- Optimized animations: GPU-accelerated transforms
- Lazy loading: Images load on demand

## 🎨 Color Scheme

- **Primary**: Indigo (#4F46E5)
- **Secondary**: Cyan (#06B6D4)
- **Accent**: Amber (#F59E0B)
- **Background**: Dark slate (#0F172A, #020617)
- **Text**: Cool grays (#F8FAFC, #CBD5E1)

## 📝 Adding New Sections

1. Add HTML section in `index.html`:

```html
<section id="new-section" class="new-section">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <!-- Your content -->
  </div>
</section>
```

2. Add navigation link:

```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

3. Add styling in `styles.css`:

```css
.new-section {
  /* Your styles */
}
```

## 🐛 Troubleshooting

**Images not loading?**

- Check file paths are correct
- Ensure images are in the same folder or update paths

**Fonts not working?**

- Check internet connection (fonts load from Google Fonts)
- Alternative: Download and host fonts locally

**Animations not smooth?**

- Check browser supports CSS transforms
- Disable animations in styles.css if needed

## 📞 Support

For questions or issues:

- Email: deepeshsingh93@outlook.com
- LinkedIn: https://www.linkedin.com/in/deepeshsinghiiitm/

## 📄 License

Feel free to use this template for your own portfolio. Attribution appreciated but not required!

---

**Built with ❤️, data, and code** by Deepesh Kumar Singh
