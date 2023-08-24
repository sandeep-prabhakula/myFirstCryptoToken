const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet")  
  const faucet = await Faucet.deploy("0xb6d7B65672A97136c85bAcAd2216736c3d0D0D42")
  const deployedCode = await faucet.getDeployedCode()
  // await sandeepToken.deployed()
  console.log('faucet deployedCode:  ', deployedCode)
  console.log("faucet Deployed:  ", await faucet.getAddress())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
