// backend/services/web3Service.js
const { ethers } = require('ethers');
require('dotenv').config();

const abi = [
  'function message() view returns (string)',
  'function updateMessage(string memory) public',
];

const provider = new ethers.providers.InfuraProvider(
  'sepolia',
  process.env.INFURA_API_KEY
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

exports.getMessage = async () => {
  return await contract.message();
};

exports.updateMessage = async (newMsg) => {
  const tx = await contract.updateMessage(newMsg);
  await tx.wait();
  return tx.hash;
};
exports.getTransaction = async (txHash) => {
  return await provider.getTransaction(txHash);
};
exports.getTransactionReceipt = async (txHash) => {
  return await provider.getTransactionReceipt(txHash);
};
exports.getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};
