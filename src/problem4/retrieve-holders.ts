import { ethers } from "ethers";
import bep20abi from "./BEP20.json";

const providerAddr = "https://bsc-dataseed.binance.org/";
const tokenContract = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const addressList = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5"
]

const provider = new ethers.providers.JsonRpcProvider(providerAddr);

const SWTH = new ethers.Contract(tokenContract, bep20abi, provider);

addressList.forEach(async (addr) => {
  const balance: ethers.BigNumber = await SWTH.balanceOf(addr)
  console.log(`${addr} ${ethers.utils.formatUnits(balance, 8)}`);
});


