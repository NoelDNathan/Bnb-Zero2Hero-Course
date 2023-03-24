// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4; // change to ^0.8;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // Unnecessary import

contract BadLotteryGame { 
    // The price amount is never set to anything
    uint256 public prizeAmount;         // payout amount
    address payable[] public players;    
    uint256 public num_players;        
    address payable[] public prize_winners; 
    event winnersPaid(uint256);

    constructor() {}

    function addNewPlayer(address payable _playerAddress) public payable {
        if (msg.value == 500000) {
            players.push(_playerAddress);
        }
        num_players++;
        if (num_players > 50) {
            // the prize amount is 0 
            emit winnersPaid(prizeAmount);
        }
    }

    // This function should be onlyOwner, not necessary
    function pickWinner(address payable _winner) public { 
        // Miners can manipulate the timestamp to their advantage
        // Use chainlink VRF to generate random number
        if (block.timestamp % 15 == 0){    // use timestamp for random number

            prize_winners.push(_winner);
        }          
    }

    function payout() public {

        // Force feeding vulnerable
        if (address(this).balance == 500000 * 100) {
            uint256 amountToPay = prize_winners.length / 100; // don't has sense
            distributePrize(amountToPay);
        }
    }

    function distributePrize(uint256 _amount) public {
        // aretmetic iss error, it should be i < prize_winners.length
        for (uint256 i = 0; i <= prize_winners.length; i++)  {
            prize_winners[i].transfer(_amount); // transfer is not recommended
            // (bool sent, bytes memory data) = _to.call{value: msg.value}("");
            // require(sent, "Failed to send Ether");
        }
    }
}