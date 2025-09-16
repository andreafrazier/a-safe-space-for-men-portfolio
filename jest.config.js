module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  moduleNameMapper: {
    // Main source directory mappings
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^~/(.*)$': '<rootDir>/$1',
    
    // Test utilities - fix the path resolution
    '^@/test-utils$': '<rootDir>/__tests__/utils/test-utils',
    '^@/mock-data$': '<rootDir>/__tests__/fixtures/mock-data',
    
    // Public assets
    '^@/public/(.*)$': '<rootDir>/public/$1',
  },
  
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/**/*.(test|spec).{js,jsx,ts,tsx}'
  ],
  
  collectCoverageFrom: [
    'src/app/**/*.{js,jsx,ts,tsx}',
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/lib/**/*.{js,jsx,ts,tsx}',
    'src/hooks/**/*.{js,jsx,ts,tsx}',
    'src/data/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/coverage/**',
    '!src/app/layout.tsx',
  ],
  
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    },
    'src/components/Header.tsx': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    'src/components/Footer.tsx': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    'src/app/page.tsx': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  testTimeout: 10000,
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/utils/',
    '<rootDir>/__tests__/fixtures/',
    '<rootDir>/coverage/'
  ],
  clearMocks: true,
  restoreMocks: true,
};