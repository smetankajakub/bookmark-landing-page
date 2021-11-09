module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
          primary: {
            soft: {
              blue: '#5368df',
              red: 'hsl(0, 94%, 66%)'
            },
          },
          neutral: {
            blue: {
              grayish: 'hsl(229, 8%, 60%)',
              dark: 'hsl(229, 31%, 21%)'
            }
          }
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// --color-primary-soft-blue: #5368df;
// --color-primary-soft-red: hsl(0, 94%, 66%);
// --color-neutral-grayish-blue: hsl(229, 8%, 60%);
// --color-primary-dark-blue: hsl(229, 31%, 21%);