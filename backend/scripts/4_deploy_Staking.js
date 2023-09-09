import { ethers } from "hardhat";

async function main() {
  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy("0x9C97D1Bab2dc0eBEb4796e4B9736d0e1d98C4b1F");

  await staking.deployed();

  console.log("Staking contract deployed: ", staking.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
