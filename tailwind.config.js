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
        contactTextColor: "#ACB8D0",
        contactTextColor2: "#5A7184;",
        contactTextColor3: " #232340",
        contactBorder: "#DFE3EF",
        contactPlaceholder: "#ACB8D0",
        contactInputText: "#5A7184",
        communityFolderText: "#475467",
        communityFolderText2: "#874FFF",
        navBarTextColor: "#8B8B8B",
      },
      boxShadow: {
        heroIllustration:
          "0px 4px 20px -2px rgba(50, 50, 71, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.10)",
        folderShadow: "0px 4px 60px 0 rgba(0, 0, 0, 0.08)",
        testimonialShadow: "0px -1px 55px 0px rgba(59, 59, 59, 0.16)",
        testimonialShadow2:
          "drop-shadow(0px 11px 20px rgba(148, 148, 148, 0.26))",
        contactInputShadow: "0px 15px 50px 0px rgba(21, 37, 72, 0.10)",
        communityShadow: "-5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset;",
      },
      backgroundImage: {
        gradientRadial:
          "radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)",
        gradientRadial2:
          "radial-gradient(113.60% 146.19% at -6.63% 0.00%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
