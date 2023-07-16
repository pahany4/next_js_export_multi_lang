module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}

/*

const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "ar"],
    defaultLocale: "default",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};

*/
