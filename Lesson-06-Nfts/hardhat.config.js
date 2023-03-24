require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const BNBSCAN_API_KEY = process.env.BNBSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;

module.exports = {
  solidity: "0.8.18",  
  networks: {
    hardhat: {
        chainId: 31337,
        blockConfirmations: 1,
    },
    bnb_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY, PRIVATE_KEY2]
    }
  },
  etherscan: {
    apiKey: BNBSCAN_API_KEY,
},
};
