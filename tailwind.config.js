module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "4/7": "30%",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-hover",
      ],
      boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
      margin: ["hover", "focus"],
    },
  },
  plugins: [],
};
