const multisig = artifacts.require("MuiltSigWithThreshold");

module.exports = function (deployer) {
  deployer.deploy(multisig);
};
