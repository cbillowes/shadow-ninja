const purgeApp = process.env.NODE_ENV === "production"
      ? "./public/js/shadow-ninja.js"
      : "./public/js/cljs-runtime/*.js"

module.exports = {
  purge: [purgeApp,
          "./src/**/*.js",
          "./resources/**/*",
          "./node_modules/**/*",
          "./public/index.html",
         ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
