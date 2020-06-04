const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

const plugins = [
  "tailwindcss",
  "postcss-preset-env",
  ...(isProd
    ? [
        "@fullhuman/postcss-purgecss",
        {
          content: [
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}"
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }
      ]
    : []),
  "postcss-preset-env"
];
module.exports = {
  plugins
};
