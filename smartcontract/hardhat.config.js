require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;



module.exports = {
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};