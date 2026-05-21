/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ivory: '#F5F1EA',
        sage: '#D8E8DC',
        navy: '#1A2640',
        gold: '#C9A84C',
        'gold-light': '#DDB84E',
        'navy-light': '#2a3d5e',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(30,42,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.04) 1px, transparent 1px)",
        'hero-gradient': 'linear-gradient(135deg, rgba(30,42,68,0.92) 0%, rgba(30,42,68,0.6) 50%, rgba(30,42,68,0.85) 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1E2A44 0%, #2e3f63 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A96B 0%, #e8c97b 100%)',
        'ivory-gradient': 'linear-gradient(135deg, #F6F3EE 0%, #DDE8E0 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(200,169,107,0.2)',
        'glow-sm': '0 0 20px rgba(200,169,107,0.15)',
        'glow-lg': '0 0 80px rgba(200,169,107,0.25)',
        'card': '0 1px 0 rgba(255,255,255,0.8), 0 4px 40px rgba(30,42,68,0.08)',
        'card-hover': '0 1px 0 rgba(255,255,255,1), 0 8px 60px rgba(30,42,68,0.14), 0 0 40px rgba(200,169,107,0.1)',
        'inner-top': 'inset 0 1px 0 rgba(255,255,255,0.8)',
        'navy': '0 4px 30px rgba(30,42,68,0.15)',
        'navy-lg': '0 8px 60px rgba(30,42,68,0.2)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
