const multiSig = artifacts.require("MultiSigWithThreshold");

module.exports = function (deployer) {
  deployer.deploy(multiSig);
};
