/* eslint-env node */
module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['npm run lint', () => 'npm run lint:types'],
  '**/styles.ts': ['npm run lint:styles'],
};
