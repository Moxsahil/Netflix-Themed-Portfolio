import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        dropIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(30deg)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        fadeInUp: 'fadeInUp 0.5s ease-out',
        fadeSlideIn: 'fadeSlideIn 1s ease forwards',
        dropIn: 'dropIn 0.5s forwards ease-out',
        swing: 'swing 1s infinite ease-in-out'
      }
    },
  },
  plugins: [],
}
export default config