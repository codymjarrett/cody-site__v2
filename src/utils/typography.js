import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '500',
        '600',
        '700',
      ],
    },
    // {
    //     name: 'Indie Flower'
    // }
]
})
export default typography