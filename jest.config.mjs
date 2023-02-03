export default {
  rootDir: '.',
  moduleFileExtensions: ['mjs', 'js'],
  setupFilesAfterEnv: ['./jest.setup.mjs'],
  testMatch: ['**/?(*.)spec.?js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/']
};
