Date: 07/03/2022

# Questions
1. How many users are holding the pancake swap token 'cake' ?

2. Approximately, how many unique addresses are there ?

3. Who validated the first block after the genesis block ?

4. Roughly how many transactions are pending?

5. Which contract is consuming most gas ?

6. How much gas is needed to have a transaction get in a block within 5 10 s ?

7. What is special about this transaction 0x1bfbff8411ed44e609d911476b0d35a28284545b690902806ea0a7ff0453e93?



# Solution
Currently, they are 1,332,204 a holders and unique address staking cake token.

The Genesis block validator: 0xffffFFFfFFffffffffffffffFfFFFfffFFFfFFfE

The 1st block validator: 0x2a7cdd959bFe8D9487B2a43B33565295a698F7e2 (Sigm8)

The number of pending transaction in bnb-chain usually are less than 200.

The contract consuming more gas is:

```
PancakeSwap: Router v2 0x10ED43C718714eb63d5aA57B78B54704E256024E
```

The gas need to validate transaction in 5-10 seconds is 5 Gwei at this time.


What is special about this transaction 0x1bfbff8411ed44e609d911476b0d35a28284545b690902806ea0a7ff0453e93?
This transaction come from an interaction with  PancakeSwap Router v2 contract (0x10ED43C718714eb63d5aA57B78B54704E256024E)
