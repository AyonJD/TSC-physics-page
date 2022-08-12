module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F9D671",
          "secondary": "#006EDC",
          "accent": "#F04F36",
          "neutral": "#FBD540",
          "base-100": "#ffffff"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
