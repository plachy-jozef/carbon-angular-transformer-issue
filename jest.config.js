const esModules = [
  'carbon-components-angular',
  '@carbon/icons-angular',
  // '@carbon/utils-position',
  // '@carbon/charts'
].join('|');

console.log('here', esModules)

let config = {
  preset: 'jest-preset-angular',

  // ___________________________________________________
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  // ---------------------------------------------------

  globalSetup: 'jest-preset-angular/global-setup',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },

  roots: ['<rootDir>/src/'],
  // regexp for how should end the file where tests are written
  testMatch: ['**/+(*.)+(spec).+(ts)'],

  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)',

    // https://gist.github.ibm.com/Steven-Massola/15c89c35b0a9129076725f2f588b0e4d
    // this should take icons-angular module and transform it, but causing different error
    // "SyntaxError: Cannot use import statement outside a module"
    `/node_modules/(?!${esModules})/`,
    // `/node_modules/(?!@carbon/icons-angular)`
  ],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',

    // '^.+\\.js$': 'babel-jest',
    // '^.+\\.(ts|html)$': 'ts-jest',
    // '^.+\\.(mjs|svg)$': 'jest-preset-angular',
  },

  // to setup jest coverage
  // ___________________________________________________________________________________
  collectCoverage: true,
  coverageReporters: ['html', 'clover', 'json', 'lcov', ['text', {'skipFull': true}]],
  coverageDirectory: 'coverage/my-app',
  testPathIgnorePatterns: [],
};

if (process.env.DEBUG_TESTS) {
  console.log('DEBUG TEST MODE Logs are open');
  config = {...config, reporters: ['default']};
}

module.exports = config;
