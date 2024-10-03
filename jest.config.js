module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { useESM: true }],
  },
  collectCoverageFrom: ['application/**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@application/(.*)$': '<rootDir>/application/$1',
    '^@adapter/(.*)$': '<rootDir>/adapter/$1',
    '^@schema/(.*)$': '<rootDir>/schema/$1',
    '^@common/(.*)$': '<rootDir>/common/$1',
    '^@nestjs/common$': require.resolve('@nestjs/common'),
  },
};
