export default {
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    // The test environment that will be used for testing
    testEnvironment: 'node',
    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>/tests/**/*.spec.ts'],
    // The module file extensions that Jest should look for
    moduleFileExtensions: ['js', 'json', 'ts'],
    // A list of paths to modules that Jest should use when resolving modules
    modulePaths: ['<rootDir>/src/'],
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1',
    },
  };
  