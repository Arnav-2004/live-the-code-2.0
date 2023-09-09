import { ethers } from "hardhat";

async function main() {
  const VDKToken = await ethers.getContractFactory("VDKToken");
  const vdkToken = await VDKToken.deploy(100000000, 50);
  await VDKToken.deploy();
  console.log("VDK Token deployed: ", vdkToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
