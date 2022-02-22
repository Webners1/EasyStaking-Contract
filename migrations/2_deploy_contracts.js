var EasyStaking = artifacts.require("./EasyStaking.sol");

module.exports = function(deployer) {  // * @dev Initializes the contract.
 let owner = deployer // * @param _owner The owner of the contract.
 let tokenAddress = "0x0" // * @param _tokenAddress The address of the STAKE token contract.
 let LiquidityProviderAdress="0x0" // * @param _liquidityProvidersRewardAddress The address for the Liquidity Providers reward.
 let FeePercentage = 10 // * @param _fee The fee of the forced withdrawal (in percentage).
 let withdrawLockDuration = '1645555757' // * @param _withdrawalLockDuration The time from the request after which the withdrawal will be available (in seconds).
 let withdrawunLockDuration = '1645595757'// * @param _withdrawalUnlockDuration The time during which the withdrawal will be available from the moment of unlocking (in seconds).
 let totalSupplyFactor =10  // * @param _totalSupplyFactor Total supply factor for calculating emission rate (in percentage).
 //"should be less than or equal to a half of the maximum emission rate"
let _sigmoidParamA = 2// * @param _sigmoidParamA Sigmoid parameter A.
  let _sigmoidParamB =3 // * @param _sigmoidParamB Sigmoid parameter B.
  let _sigmoidParamC =4 // * @param _sigmoidParamC Sigmoid parameter C.
let EasyStake =  await deployer.deploy(EasyStaking);
await EasyStake.initialize(owner,tokenAddress,LiquidityProviderAdress,FeePercentage,withdrawLockDuration,withdrawunLockDuration,totalSupplyFactor,_sigmoidParamA,_sigmoidParamB,_sigmoidParamC)
};
