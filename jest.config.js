/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['text'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/**/errors.ts',
    '!src/**/types.ts',
    '!src/**/endpoints.ts',
    '!src/**/client.ts',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-esm/'],
  // coverageThreshold: {
  //   global: {
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //     statements: 50,
  //   },
  // },
};
