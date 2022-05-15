require("dotenv").config()
const {ethers} = require("ethers");
const AccountBalance = require("../artifacts/contracts/AcountBalance.sol/AccountBalance.json");

const ADDR = process.env.ACCOUNT_BALANCE;   // your contract address
const ABI = AccountBalance.abi;    // your contract ABI

const ADDRESS = ""; // some wallet address with token balance
const TOKENS = [""]

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
// const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");

const test = async () => {
  const code = await provider.getCode(ADDR);
  if(!code){
    console.log("code does not exist.");
  }
	const contract = new ethers.Contract(ADDR, ABI, provider);
  let balances;
  try {
      balances = await contract.getBalances(ADDRESS, TOKENS);        
  } catch (error) {
      console.error(error);
  }
	
	return balances;
};

test().then(console.log);
