const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");

const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ERC721", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const BadgerNft = await ethers.getContractFactory("BadgerNft");
    const badgerNft = await BadgerNft.deploy();

    return { badgerNft, owner, addr1, addr2};
  }

  describe("Intereaction with Nfts", function () {
    it("Mint one Nft", async function () {
      const { badgerNft, owner, addr1, addr2 } = await loadFixture(deployFixture);
      console.log("badgerNft.address", badgerNft.address);
      const newMint = await badgerNft.connect(addr1).awardItem("New Mint");
      const newMintTx = await newMint.wait();
      
      expect(await badgerNft.balanceOf(addr1.address)).to.equal(1);
    });

    it("Transfer Nft", async function () {

      const { badgerNft, owner, addr1, addr2} = await loadFixture(deployFixture);
      const newMint = await badgerNft.connect(addr1).awardItem("New Mint");
      const newMintTx = await newMint.wait();

      const transfer = await badgerNft
        .connect(addr1)
        .transferFrom(addr1.address, addr2.address, 0);
      const transferTx = await transfer.wait();

      expect(await badgerNft.balanceOf(addr1.address)).to.equal(0);
      expect(await badgerNft.balanceOf(addr2.address)).to.equal(1);
    });
  });
});
