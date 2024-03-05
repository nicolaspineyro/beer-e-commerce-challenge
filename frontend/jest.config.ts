export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^styles/(.*)$": "<rootDir>/src/styles/$1",
    "^routes/(.*)$": "<rootDir>/src/routes/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^lib/(.*)$": "<rootDir>/src/lib/$1",
  },
};
