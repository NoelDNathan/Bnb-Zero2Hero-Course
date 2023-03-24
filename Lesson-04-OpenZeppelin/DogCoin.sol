
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract DogCoin {

    struct Payment {
        address recipient;
        uint amount;
    }

    uint256 private totalSupply = 2 * 10**6 * 10**18;

    address private owner;

    mapping (address => uint) balances;
    mapping (address => Payment[]) public payments;

    event DogCoin_IncreaseSupply(uint newTotalSupply);
    event DogCoint_Transfer(address from, address to, uint amount);

    constructor() {
        owner = msg.sender;
        balances[owner] = totalSupply;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
        
    
    function increaseSupply() public  onlyOwner{
        totalSupply += 1000;
        emit DogCoin_IncreaseSupply(totalSupply);
    }
    
    // Why do we not need the sender's address here ? You must use the msg.sender
    // What would be the implication of having the sender's address as a parameter?
    // A bad actor can transfer tokens from address that is not his

    function transfer(address _to, uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Not enough balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
        payments[msg.sender].push(Payment(_to, _amount));
        emit DogCoint_Transfer(msg.sender, _to, _amount);
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function balanceOf(address _user) public view returns (uint256) {
        return balances[_user];
    }
}