require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  networks: {
    hardhat: {
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/d2504a64e8174fbf9e0f3d8297e8f799`,
      accounts: [`6fd5def1ef836ce7fe64632079294059095ce4199ae58ceb3bd710216c94fb13`]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/d2504a64e8174fbf9e0f3d8297e8f799`,
      accounts: [`6fd5def1ef836ce7fe64632079294059095ce4199ae58ceb3bd710216c94fb13`]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};