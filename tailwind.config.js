module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
    daisyui: {
        themes: ["night", "dracula", "dark", "forest"],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
