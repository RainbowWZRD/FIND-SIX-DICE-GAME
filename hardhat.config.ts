import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    ethereum : {
      url: process.env.INFURA_ETH_MAINNET,
      accounts: [process.env.PRIVATE_KEY!],
    },
    bsc : {
      url: process.env.MORALIS_BSC_TESTNET,
      accounts: [process.env.PRIVATE_KEY!]
    },
    mumbay : {
      url : process.env.INFURA_POLYGON_TESTNET,
      accounts: [process.env.PRIVATE_KEY!],
    }
  },
};

export default config;
