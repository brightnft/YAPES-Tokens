const sleepTime = async(time)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve()},time)
  })
}


const main = async()=>{

  try{
    const [signer] = await hre.ethers.getSigners();
    const getContract = await hre.ethers.getContractFactory('mintToken')
    const tokenContract = await getContract.deploy()

    console.log('contract deployer -> ',signer.address)
    console.log('contract address -> ',tokenContract.target)

    console.log('wait for 30 sec')
    await sleepTime(30000)

    // verifying contract
    await hre.run("verify:verify", {
      address: tokenContract.target,
      constructorArguments: [],
    });
    
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

const runMain = async()=>{
  await main()
}

runMain()

// 0x387CCC3E7A3c37E0B5Ec3759A0ad335D653548c6