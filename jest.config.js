module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
