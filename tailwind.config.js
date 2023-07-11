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
        outcomePText: "#E1E1E1",
        communityBg: "#FEF75D",
        greenGradient: "#14A800",
        greenGradient2: "#24ED2C",
        blogGradient: "#F98272",
        folderTextColor: "#555C63",
        folderBgColor: "#ffffff80",
        borderFolderBgColor: "#F0F0F0",
        readBlogColor: "#4F00A3",
        borderLine2: "#E1E1E1",
        tabTextColorHover: "#5925DC",
        tabTextbgHover: "#F4F3FF",
        tabBgColor: "#F2F4F7",
      },
      boxShadow: {
        heroIllustration:
          "0px 4px 20px -2px rgba(50, 50, 71, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.10)",
        folderShadow: "0px 4px 60px 0 rgba(0, 0, 0, 0.08)",
        testimonialShadow: "0px -1px 55px 0px rgba(59, 59, 59, 0.16)",
        testimonialShadow2:
          "drop-shadow(0px 11px 20px rgba(148, 148, 148, 0.26))",
      },
    },
  },
  plugins: [],
};
