# Storage Code
```sol
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
```





# Storage Abi
```[
	# Start of retrieve function
	{
		"inputs": [], # It doesn't have input values
		"name": "retrieve",
		"outputs": [ # It returns a uint256 
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view", # This function doesn't mutate blockchain just read it.
		"type": "function"
	}, # End of retrieve function
	{  # Start of store funtion
		"inputs": [ # This function takes one uint256 as input
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [], # store function hasn't outputs
		"stateMutability": "nonpayable", # This function change the blockchain state but it can't recieve payments
		"type": "function"
	}
]
``` 


# Bytecode
```
608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea2646970667358221220397de06d5ccd2ff54e76dca8c148f70b3aa371577af089dca1c1996ade69288d64736f6c63430008120033
```