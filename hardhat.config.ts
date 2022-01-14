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
    'thunder-testnet': {
           url: 'https://testnet-rpc.thundercore.com',
         chainId: 18,
         gas: 90000000,
         gasPrice: 1e9,
         accounts: [process.env.PRIVATE_KEY!],
     },
       'thunder-mainnet': {
           url: 'https://mainnet-rpc.thundercore.com',
         chainId: 108,
         gas: 90000000,
         gasPrice: 1e9,
         accounts: [process.env.PRIVATE_KEY!],
     },
  },
};

export default config;
