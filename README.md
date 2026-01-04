# DP5 Landing Page

A high-performance, Apple-level polished landing page built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Adding Your Logo

### Where to Add Your Logo

**File Location:** `/src/components/ui/Header.jsx`

**Line:** 58-63

### Instructions:

1. **Save your logo image** in the `/public` folder:
   - Example: `/public/logo.png` or `/public/logo.svg`
   - Recommended formats: SVG (best for scaling) or PNG with transparent background
   - Recommended size: 40x40px or larger (will be scaled down)

2. **Replace the placeholder logo** in `Header.jsx`:

**Current placeholder code:**
```jsx
{/* Logo placeholder - USER SHOULD REPLACE THIS */}
<div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
  <span className="text-white font-bold text-xl">D5</span>
</div>
```

**Replace with your logo:**
```jsx
<img
  src="/logo.png"
  alt="DP5 Logo"
  className="w-10 h-10 object-contain"
/>
```

Or if using SVG:
```jsx
<img
  src="/logo.svg"
  alt="DP5 Logo"
  className="w-10 h-10"
/>
```

### Complete Logo Section After Replacement:

```jsx
<a
  href="#"
  onClick={(e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }}
  className="flex items-center gap-3 group"
>
  {/* Your actual logo */}
  <img
    src="/logo.png"
    alt="DP5 Logo"
    className="w-10 h-10 object-contain"
  />
  <span className="text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors">
    DP5
  </span>
</a>
```

## 🎯 Customization

### Brand Colors

Update colors in `tailwind.config.js`:

```js
colors: {
  accent: {
    DEFAULT: '#0066FF',  // Change to your brand color
    hover: '#0052CC',
  },
}
```

### Typography

Font settings are in `src/styles/globals.css`:

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', system-ui, sans-serif;
```

### Content

All section content is in `/src/components/sections/`:
- `Hero.jsx` - Main headline and CTA
- `Problem.jsx` - Problem statement
- `Difference.jsx` - Three pillars
- And more...

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Custom cursor (desktop only)
- ✅ Interactive framework diagram
- ✅ Animated radar visualization
- ✅ Contact form with validation
- ✅ Glass morphism effects
- ✅ Fixed header with navigation
- ✅ Scroll progress bar

## 🧩 Project Structure

```
/src
  /app
    layout.jsx          # Root layout with Header
    page.jsx            # Main page with all sections
  /components
    /sections          # All page sections
    /ui               # Reusable UI components
  /hooks              # Custom React hooks
  /lib                # Utilities and validation
  /providers          # Context providers
  /styles             # Global CSS
```

## 📝 Navigation Links

The header navigation automatically scrolls to these sections:
- How It Works → `#how-it-works`
- Framework → `#framework`
- Services → `#services`
- Revenue Model → `#revenue-model`
- Contact → `#contact`

## 🔧 Form Submission

The contact form is in `/src/components/ui/ContactForm.jsx`.

Currently, it simulates a submission. To connect to a real backend:

1. Create an API endpoint at `/src/app/api/contact/route.js`
2. Update the `onSubmit` function in `ContactForm.jsx`

Example API route:
```js
// /src/app/api/contact/route.js
export async function POST(request) {
  const data = await request.json()

  // Send email, save to database, etc.

  return Response.json({ success: true })
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

## 📊 Performance

- Target Lighthouse Score: 90+
- Target Load Time: <2 seconds
- Optimized images with WebP
- Code splitting for optimal bundle size
- GPU-accelerated animations

## 🎨 Design System

- **Colors**: Black background with blue accent (#0066FF)
- **Typography**: SF Pro Display fallback to Inter
- **Spacing**: Consistent 8px grid system
- **Animations**: 400-600ms duration, ease-out easing
- **Border Radius**: 8px to 24px range

## 🐛 Troubleshooting

### Logo not showing?
- Check the file path in `/public` folder
- Ensure the image format is supported (.png, .svg, .jpg)
- Check browser console for errors

### Navigation not scrolling?
- Ensure section IDs match the href values in Header.jsx
- Check that smooth scroll is enabled

### Animations not working?
- Check if `prefers-reduced-motion` is enabled in your OS
- Verify Framer Motion is installed: `npm install framer-motion`

## 📄 License

Proprietary - DP5

---

Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion
