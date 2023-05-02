import * as path from 'path';

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
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
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
};
