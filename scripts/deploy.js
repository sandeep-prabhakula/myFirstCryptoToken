const hre = require("hardhat");

async function main() {
  const SandeepToken = await hre.ethers.getContractFactory("SandeepToken")  
  const sandeepToken = await SandeepToken.deploy(100000,50)
  const deployedCode = await sandeepToken.getDeployedCode()
  // await sandeepToken.deployed()
  console.log('deployedCode:  ', deployedCode)
  console.log("Sandeep Token Deployed", await sandeepToken.getAddress())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
