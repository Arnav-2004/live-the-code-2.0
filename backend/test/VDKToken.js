import { expect } from "chai";
import { ethers as _ethers } from "hardhat";

describe("VDKToken contract", function () {
    let Token;
    let vdkToken;
    let owner;
    let addr1;
    let addr2;
    let tokenCap = 100000000;
    let tokenBlockReward = 50;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("VDKToken");
        [owner, addr1, addr2] = await _ethers.getSigners();
        vdkToken = await Token.deploy(tokenCap, tokenBlockReward);
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await vdkToken.owner()).to.equal(owner.address);
        });

        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await vdkToken.balanceOf(owner.address);
            expect(await vdkToken.totalSupply()).to.equal(ownerBalance);
        });

        it("Should set the max capped supply to the argument provided during deployment", async function () {
            const cap = await vdkToken.cap();
            expect(Number(_ethers.utils.formatEther(cap))).to.equal(tokenCap);
        });

        it("Should set the blockReward to the argument provided during deployment", async function () {
            const blockReward = await vdkToken.blockReward();
            expect(Number(_ethers.utils.formatEther(blockReward))).to.equal(tokenBlockReward);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            await vdkToken.transfer(addr1.address, 50);
            const addr1Balance = await vdkToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            await vdkToken.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await vdkToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        });

        it("Should fail if sender doesn't have enough tokens", async function () {
            const initialOwnerBalance = await vdkToken.balanceOf(owner.address);
            await expect(
                vdkToken.connect(addr1).transfer(owner.address, 1)
            ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

            expect(await vdkToken.balanceOf(owner.address)).to.equal(
                initialOwnerBalance
            );
        });

        it("Should update balances after transfers", async function () {
            const initialOwnerBalance = await vdkToken.balanceOf(owner.address);

            await vdkToken.transfer(addr1.address, 100);
            await vdkToken.transfer(addr2.address, 50);

            const finalOwnerBalance = await vdkToken.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

            const addr1Balance = await vdkToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(100);

            const addr2Balance = await vdkToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        });
    });
});
