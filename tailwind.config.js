/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Space Grotesk", "sans-serif"],
        headerFont: ["ClashDisplay-Semibold", "sans-serif"],
      },
      colors: {
        primary: "#12141D",
        secondary: "#4F00A3",
        spanBg: "#DAD0E8",
        borderLine: "#BCBCBC",
        circleBg: "#DE5AF9",
        inputColor: "#ACB8D0",
        productSectionBg: "#221C3F",
        strategyBg: "#EBE8F0",
        subColor: "#312A4F",
      },
      boxShadow: {
        heroIllustration:
          "0px 4px 20px -2px rgba(50, 50, 71, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.10)",
        folderShadow: "0px 4px 60px 0 rgba(0, 0, 0, 0.08)",
        motoBackground:
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
