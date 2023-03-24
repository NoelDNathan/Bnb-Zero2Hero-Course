// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BadgerCoin is ERC20 {
    address private deployer;
    constructor() ERC20("BadgerCoin", "BC") {
        _mint(msg.sender, 1000000 * (10 ** decimals())); // 1 million tokens, 18 decimals
        deployer = msg.sender;
    }
    function getOwner() public view returns (address) {
        return deployer;
    }
}