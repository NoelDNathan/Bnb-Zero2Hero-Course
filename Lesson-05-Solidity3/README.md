# Lesson 6 
## Contract
One example of the contract deployed and verify to bnb-testnet-chain:
[Contract ](https://testnet.bscscan.com/address/0x5695e47B4a23E0d0F9095e028662922a51EcB9b8#code)

Address: 0x5695e47B4a23E0d0F9095e028662922a51EcB9b8


## Deployment and verification
The following commands deploy and verify the contract on bnb-testnet-chain:
```
npx hardhat run ./scripts/deploy.js --network bnb_testnet

npx hardhat  verify --network bnb_testnet  "contract address"
```