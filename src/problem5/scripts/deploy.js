require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const AccountBalance = await hre.ethers.getContractFactory("AccountBalance");
  const accountBalance = await AccountBalance.deploy();

  await accountBalance.deployed();

  console.log("AccountBalance deployed to:", accountBalance.address);
  fs.writeFileSync(".env", `ACCOUNT_BALANCE="${accountBalance.address}"`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
