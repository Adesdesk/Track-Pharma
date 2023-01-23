const { ethers } = require("hardhat");

async function main() {
  // Calling the contracts
const Accounts = await ethers.getContractFactory("Accounts");
const Items = await ethers.getContractFactory("Items");
const TrackPharma = await ethers.getContractFactory("TrackPharma");



// // Deploy the contract
// const accounts = await Accounts.deploy()
// const items = await Items.deploy()
const pharma = await TrackPharma.deploy("Team201", "Team201projects@gmail.com")


await pharma.deployed()

// print the contract address
console.log("TrackPharma deployed to: ", pharma.address);


  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(10000);


  // Verify the TrackPharma contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/TrackPharma.sol:TrackPharma",
    address: pharma.address,
    constructorArguments: ["Team201", "Team201projects@gmail.com"],
  });

  console.log("Verified TrackPharma ")
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});