const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

const Bridge = artifacts.require("Bridge");

module.exports = function (deployer) {
  deployer.deploy(Bridge);
};
