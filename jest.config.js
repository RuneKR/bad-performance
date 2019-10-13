module.exports = {
  "projects": ["<rootDir>/packages/node_modules/@org/*"],
  "coverageReporters": [
      "json", "text"
  ],
  "collectCoverage": true,
  "coverageDirectory": "./jest-reports/coverage",
  "coverageThreshold": {
      "global": {
          "branches": 80,
          "functions": 80,
          "lines": 80,
          "statements": 80
      }
  }
}