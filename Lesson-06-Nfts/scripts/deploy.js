const hre = require("hardhat");

async function main() {
  
  const BadgerNft = await hre.ethers.getContractFactory("BadgerNft");
  const badgerNft = await BadgerNft.deploy();

  await badgerNft.deployed();

  console.log(
    `BadgerNft deployed to ${badgerNft.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
