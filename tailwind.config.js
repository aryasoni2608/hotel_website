module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
    variants: {
      display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
    },
  
    theme: {
  
      screens: {
        'sm': '340px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
  
  
      extend: {
        backgroundImage: {
          'hero-img':'url("./components/assets/travel.jpg")',
          'pricing-bg':'url("./components/assets/pbg.jpg")',
          'info-bg':'url("./components/assets/Info.jpg")',
          'hotel1':'url("./components/assets/hotel1.jpg")',
          'hotel2':'url("./components/assets/hotel2.jpg")',
          'hotel3':'url("./components/assets/hotel3.jpg")',
          'hotel4':'url("./components/assets/hotel4.jpg")',
        },
        zIndex: {
          '10000':'10000'
        }
      },
    },
    plugins: [require('tailwindcss-children'),],
  }