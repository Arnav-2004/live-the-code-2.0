import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Unstaking.css";
const Unstaking = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const navigate = useNavigate();

  const onDigitalbitsClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onFaucetClick = useCallback(() => {
    navigate("/faucet-page");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onExchangeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSTAKEClick = useCallback(() => {
    navigate("/stake");
  }, [navigate]);

  return (
    <div className="unstaking">
      <header className="navbar3">
        <div className="navbar-child8" />
        <div className="navbar-child9" />
        <button className="connect-wallet9" onClick={connectWallet}>
          <b className="connect-wallet10" >{walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
              0,
              3
            )}..`
            : "Connect Wallet"}</b>
        </button>
        <div className="navbar-child10" />
        <button className="gits2">
          <img className="vector-icon51" alt="" src="/vector48.svg" />
        </button>
        <button className="notis2">
          <img className="vector-icon51" alt="" src="/vector49.svg" />
        </button>
        <img className="navbar-child11" alt="" src="/line-13.svg" />
        <button className="digitalbits3" onClick={onDigitalbitsClick}>
          Digitalbits
        </button>
        <b className="unstaking1">Unstaking</b>
        <button className="indian-flag3">
          <img className="vector-icon53" alt="" src="/vector50.svg" />
          <img className="vector-icon54" alt="" src="/vector51.svg" />
          <img className="vector-icon55" alt="" src="/vector52.svg" />
          <img className="vector-icon56" alt="" src="/vector53.svg" />
          <img className="vector-icon57" alt="" src="/vector54.svg" />
          <img className="vector-icon58" alt="" src="/vector55.svg" />
          <img className="vector-icon59" alt="" src="/vector56.svg" />
          <img className="group-icon6" alt="" src="/group6.svg" />
          <img className="group-icon7" alt="" src="/group7.svg" />
          <img className="group-icon8" alt="" src="/group8.svg" />
        </button>
        <button className="faucet4" onClick={onFaucetClick}>
          Faucet
        </button>
        <button className="image-23" onClick={onImage2Click} />
        <button className="exchange4" onClick={onExchangeClick}>
          Exchange
        </button>
      </header>
      <img className="unstaking-child" alt="" src="/rectangle-1.svg" />
      <img className="unstaking-item" alt="" src="/rectangle-3.svg" />
      <div className="vdkk">
        <div className="eth1">ETH</div>
        <div className="div7">0</div>
        <img className="image-1-icon1" alt="" src="/image-11@2x.png" />
      </div>
      <div className="vdkk1">
        <div className="eth1">BTC</div>
        <div className="div7">0</div>
        <img className="image-1-icon2" alt="" src="/image-12@2x.png" />
      </div>
      <div className="vdkk2">
        <div className="matic">MATIC</div>
        <div className="div7">0</div>
        <img className="image-1-icon3" alt="" src="/image-13@2x.png" />
      </div>
      <div className="div10">0</div>
      <div className="sol1">SOL</div>
      <div className="vdkk3">
        <div className="eth1">VDK</div>
        <div className="div7">0</div>
        <img className="image-1-icon4" alt="" src="/image-14@2x.png" />
      </div>
      <div className="balance2">Balance</div>
      <div className="stats">Stats</div>
      <div className="unstaking-inner" />
      <button className="stake" onClick={onSTAKEClick}>
        <button className="stake1">Stake</button>
      </button>
      <div className="unstaking-child1" />
      <button className="unstake">Unstake</button>
      <div className="unstaking-child2" />
      <div className="vdk-326">67,874 VDK = $32.6 M</div>
      <div className="unstaking-child3" />
      <div className="total-staked-vdk">Total Staked VDK</div>
      <div className="unstaking-child4" />
      <div className="div12">69.96%</div>
      <div className="unstaking-child5" />
      <div className="aug">AUG</div>
      <div className="line-div" />
      <div className="unstaking-child6" />
      <div className="div13">1,345</div>
      <div className="unstaking-child7" />
      <div className="no-of-stakers">No. of Stakers</div>
      <div className="stake2">
        <img className="stake-child" alt="" src="/rectangle-2.svg" />
        <button className="stake3">
          <div className="stake-item" />
          <b className="unstake1">Unstake</b>
        </button>
        <b className="unstake2">Unstake</b>
        <input className="stake-inner" type="text" />
        <div className="stake-child1" />
        <div className="max">Max</div>
        <div className="div14">0.00</div>
        <div className="staking-apr">Staking APR</div>
        <div className="div15">5.7%</div>
        <div className="vddk-1">1 VDDK = 1 BTC</div>
        <div className="vdk2">0 VDK</div>
        <div className="exchange-rate">Exchange Rate</div>
        <div className="you-will-receive">You will receive</div>
        <img className="vector-icon60" alt="" src="/vector57.svg" />
        <button className="image-6" />
      </div>
      <div className="unstaking-child8" />
      <div className="unstaking-child9" />
      <div className="unstaking-child10" />
      <div className="unstaking-child11" />
      <div className="unstaking-child12" />
      <img className="solana-1-icon1" alt="" src="/solana-11@2x.png" />
      <div className="vdk3">0 VDK</div>
      <div className="unclaimed-rewards">Unclaimed Rewards</div>
      <div className="unstaking-child13" />
      <div className="claim-now">Claim Now!</div>
      <h1 className="unstake-vdk">UNSTAKE VDK</h1>
      <section className="footer3">
        <div className="footer-child1" />
        <b className="b3">9116351683</b>
        <b className="all-rights-reserved3">All Rights Reserved @ 2023</b>
        <b className="contact-us3">{`Contact Us : `}</b>
        <button className="about-us3">About Us</button>
        <b className="arnavrangwanigmailcom3">arnavrangwani@gmail.com</b>
        <img className="vector-icon61" alt="" src="/vector58.svg" />
        <button className="linkdin-f3">
          <img className="vector-icon51" alt="" src="/linkdinf3.svg" />
        </button>
        <button className="instaf3">
          <img className="vector-icon51" alt="" src="/vector59.svg" />
        </button>
        <button className="gitf3">
          <img className="vector-icon51" alt="" src="/vector60.svg" />
        </button>
      </section>
    </div>
  );
};

export default Unstaking;
