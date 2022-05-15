require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { mnemonic } = require("./secrets.json");
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const keys = [process.env.PROBLEM_5_KEY];


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // throwOnCallFailures: true,
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic},
      // provider: () => new HDWalletProvider(keys, "https://data-seed-prebsc-1-s1.binance.org:8545"),
      // network_id: 97,
      // confirmations: 10,
      // timeoutBlocks: 200,
      // skipDryRun: true
    }
  },
  settings: {
    optimizer: {
      enabled: true
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
