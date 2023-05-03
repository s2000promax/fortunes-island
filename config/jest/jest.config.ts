import * as path from 'path';

const modulesToTranspile = [
  'core',
  'client',
  // 'validator', // importing ES6 code for tree shaking
];

/**
 * Babylon js is only needed in frontend.
 * next@10.2.3 with next-transpile-modules@7.3.0 must have this disabled
 * use dynamic import instead to avoid rendering Babylon server side and slowing down development.
 */
modulesToTranspile.push('react-babylonjs'); // required for Jest test
modulesToTranspile.push('@babylonjs'); // required for Jest test


export default {
  globals: {
    _IS_DEV_: true,
    _API_: '',
    _PROJECT_: 'jest',
  },
  verbose: true,
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  modulePaths: [
    '<rootDir>src',
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg)': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      outputPath: '<rootDir>/reports/unit/report.html',
      pageTitle: 'Test Report',
      includeFailureMsg: true,
    }],
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${modulesToTranspile.join('|')})/)`,
  ],
};
