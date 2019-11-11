import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  bodyFontFamily: ["Work Sans", "sans-serif"],
  boldWeight: "700",
  googleFonts: [
    {
      name: "Work Sans",
      styles: ["400", "500", "600", "700"],
    },
    {
      name: "Indie Flower",
      styles: ["400"],
    },
  ],
})
export default typography
