/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          secondary: '#0A0A0A',
          tertiary: '#141414',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          tertiary: '#666666',
        },
        accent: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
        },
        success: '#00D084',
        error: '#FF3B30',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
        '4xl': '128px',
        '5xl': '160px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero-desktop': ['96px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-tablet': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-desktop': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-tablet': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-mobile': ['32px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'gradient-shift': 'gradient 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
}
