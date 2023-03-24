const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("DogCoin", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const DogCoin = await ethers.getContractFactory("DogCoin");
    const dogCoin = await DogCoin.deploy();
    const initialSupply = ethers.utils.parseEther((2* 10**6).toString());

    return { dogCoin, owner, otherAccount, initialSupply };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { dogCoin, owner } = await loadFixture(deployFixture);

      expect(await dogCoin.getOwner()).to.equal(owner.address);
    });

    it("The initial supply is 1000000000000000000000000", async function () {
      const { dogCoin, owner, otherAccount, initialSupply } = await loadFixture(deployFixture);

      expect(await dogCoin.getTotalSupply()).to.equal(initialSupply);
    });
  
  });
  describe("Transfer", function () {
    it("Should transfer tokens between accounts", async function () {
      const { dogCoin, owner, otherAccount } = await loadFixture(
        deployFixture
      );

      await expect(dogCoin.transfer(otherAccount.address, 100))
      .to.emit(dogCoin, "Transfer").withArgs(owner.address, otherAccount.address, 100);

      expect(await dogCoin.balanceOf(otherAccount.address)).to.equal(100);
    })
  })

  describe("IncreaseSupply", function () {
    it("Should increase the supply", async function () {
      const { dogCoin, owner, otherAccount, initialSupply } = await loadFixture(
        deployFixture
      );
      
      expect(await dogCoin.getTotalSupply()).to.equal(initialSupply);

      await expect(dogCoin.increaseSupply())
      .to.emit(dogCoin, "IncreaseSupply").withArgs(initialSupply.add(1000));

      expect(await dogCoin.getTotalSupply()).to.equal(initialSupply.add(1000));
    })
  })


})
