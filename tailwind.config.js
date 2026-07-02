/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        hint: 'var(--hint)',
        border: 'var(--border)',
        rose: 'var(--rose)',
        sage: 'var(--sage)',
        sand: 'var(--sand)',
        sky: 'var(--sky)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'card-lg': '28px',
        'pill': '999px',
        'button': '999px',
      },
      spacing: {
        'section-y': 'clamp(64px, 10vh, 100px)',
        'section-x': 'clamp(24px, 6vw, 80px)',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '80': '80px',
        '100': '100px',
      },
    },
  },
  plugins: [],
}
