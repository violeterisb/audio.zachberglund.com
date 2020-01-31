import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Overpass", "sans-serif"],
  bodyFontFamily: ["Overpass", "sans-serif"],
  googleFonts: [
    {
      name: 'Overpass',
      styles: [
        '200',
        '400',
        '500',
      ],
    }
  ]
})
export default typography