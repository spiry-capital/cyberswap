const Migrations = artifacts.require('./Migrations.sol');
const MooniFactory = artifacts.require('./CyberFactory.sol');
// const Mooniswap = artifacts.require('./Mooniswap.sol');

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(CyberFactory);
    // deployer.deploy(Mooniswap);
};
