module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "30em",
      // => @media (min-width: 480px) { ... }
      sm: "40em",
      // => @media (min-width: 640px) { ... }
      md: "48em",
      // => @media (min-width: 768px) { ... }
      lg: "64em",
      // => @media (min-width: 1024px) { ... }
      xl: "80em",
      // => @media (min-width: 1280px) { ... }
      "2xl": "96em",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        0: "#eeeeee",
        100: "#636366",

        900: "#1d1d1d",
      },
      yellow: "#fdbb30",
      pink: "#f6ddd1",
    },

    fontFamily: {
      "core-sans": ["Core Sans A45 Regular", "Open Sans"],
    },
    extend: {
      letterSpacing: {
        menu: "0.222em",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      backgroundImage: {
        editor: "url('/assets/images/general/editor-background.svg')",
      },
    },
  },
  plugins: [],
}
