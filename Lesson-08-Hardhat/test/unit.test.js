const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Badger Coin", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploy() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const BadgerCoin = await ethers.getContractFactory("BadgerCoin");
    const badgerCoin = await BadgerCoin.deploy();

    return { badgerCoin, owner, otherAccount };
  }

  describe("Supply", function () {
    it("The initially supply is 1.000.000", async function () {
      const { badgerCoin } = await loadFixture(deploy);
      const totalSupply = await badgerCoin.totalSupply();
      const expectedSupply = ethers.utils.parseEther("1000000");
      expect(totalSupply).to.equal(expectedSupply);
    });

    it("It has 18 decimals", async function () {
      const { badgerCoin } = await loadFixture(deploy);
      const decimals = await badgerCoin.decimals();
      expect(decimals).to.equal(18);
    });

  });
  describe("Balance and transfer", function () {
    it("The deployer has all the initial balance", async function () {
      const { badgerCoin, owner, otherAccount } = await loadFixture(deploy);
      const balance = await badgerCoin.balanceOf(owner.address);
      const expectedBalance = ethers.utils.parseEther("1000000");
      expect(balance).to.equal(expectedBalance);
    
    });

    it("It can transfer tokens", async function () {
      const { badgerCoin, owner, otherAccount } = await loadFixture(deploy);
      const amount = ethers.utils.parseEther("100");
      await badgerCoin.transfer(otherAccount.address, amount);
      const balance = await badgerCoin.balanceOf(otherAccount.address);
      expect(balance).to.equal(amount);
    });

    it("Return an error when someone transfers more tokens that they own", async function () {
      const { badgerCoin, owner, otherAccount } = await loadFixture(deploy);
      const amount = ethers.utils.parseEther("1000001");
      await expect(badgerCoin.transfer(otherAccount.address, amount)).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    
    })
  })

})
   
  
