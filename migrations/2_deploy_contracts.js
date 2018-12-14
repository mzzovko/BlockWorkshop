var Token = artifacts.require('./Token.sol')
var Metadata = artifacts.require('./Metadata.sol')
let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata)
      let metadata = await Metadata.deployed()
      console.log(_ + 'Metadata deployed at: ' + metadata.address)

      // Deploy Token.sol
      await deployer.deploy(Token, "Token name", "Token symbol", metadata.address)
      let token = await Token.deployed()
      console.log(_ + 'Token deployed at: ' + token.address)

    } catch (error) {
      console.log(error)
    }
  })
}
