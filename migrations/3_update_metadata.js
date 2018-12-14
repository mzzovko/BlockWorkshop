var Token = artifacts.require('./Token.sol');
var Metadata = artifacts.require('./Metadata.sol');
let _ = '        ';

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata, {replace: true});
      let metadata = await Metadata.deployed();
      console.log(_ + 'Metadata deployed at: ' + metadata.address);

      // Deploy Token.sol
      let token = await Token.deployed();
      console.log(_ + 'Token deployed at: ' + token.address);

      await token.updateMetadata(metadata.address)
      console.log(_ + 'Token metadta updated to ' + metadata.address)
    } catch (error) {
      console.log(error);
    }
  });
};
