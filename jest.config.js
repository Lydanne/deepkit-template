const hq = require("alias-hq");

module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "node",
  resolver: "@deepkit/framework/resolve",
  testMatch: ["**/*.spec.ts"],
  moduleNameMapper: hq.get("jest"),
};
