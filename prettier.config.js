/** @type {import('prettier').Options} */
module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  tailwindFunctions: ['clsx', 'cn'],
  tailwindConfig: './tailwind.config.ts',
  plugins: ['prettier-plugin-tailwindcss'],
};
