import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Stake.css";
const Stake = () => {
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

  const onUnstakeClick = useCallback(() => {
    navigate("/unstaking");
  }, [navigate]);

  return (
    <div className="stake4">
      <header className="navbar4">
        <div className="navbar-child12" />
        <div className="navbar-child13" />
        <button className="connect-wallet11" onClick={connectWallet}>
          <b className="connect-wallet12">{walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
              0,
              3
            )}..`
            : "Connect Wallet"}</b>
        </button>
        <div className="navbar-child14" />
        <button className="gits3">
          <img className="vector-icon64" alt="" src="/vector48.svg" />
        </button>
        <button className="notis3">
          <img className="vector-icon64" alt="" src="/vector49.svg" />
        </button>
        <img className="navbar-child15" alt="" src="/line-13.svg" />
        <button className="digitalbits4" onClick={onDigitalbitsClick}>
          DigitalBits
        </button>
        <b className="staking4">Staking</b>
        <button className="indian-flag4">
          <img className="vector-icon66" alt="" src="/vector50.svg" />
          <img className="vector-icon67" alt="" src="/vector51.svg" />
          <img className="vector-icon68" alt="" src="/vector52.svg" />
          <img className="vector-icon69" alt="" src="/vector53.svg" />
          <img className="vector-icon70" alt="" src="/vector54.svg" />
          <img className="vector-icon71" alt="" src="/vector55.svg" />
          <img className="vector-icon72" alt="" src="/vector61.svg" />
          <img className="group-icon9" alt="" src="/group6.svg" />
          <img className="group-icon10" alt="" src="/group9.svg" />
          <img className="group-icon11" alt="" src="/group10.svg" />
        </button>
        <button className="faucet5" onClick={onFaucetClick}>
          Faucet
        </button>
        <button className="image-24" onClick={onImage2Click} />
        <button className="exchange5" onClick={onExchangeClick}>
          Exchange
        </button>
      </header>
      <img className="rectangle-icon" alt="" src="/rectangle-1.svg" />
      <img className="stake-child2" alt="" src="/rectangle-3.svg" />
      <div className="vdkk4">
        <div className="eth2">ETH</div>
        <div className="div16">0</div>
        <img className="image-1-icon5" alt="" src="/image-11@2x.png" />
      </div>
      <div className="vdkk5">
        <div className="eth2">BTC</div>
        <div className="div16">0</div>
        <img className="image-1-icon6" alt="" src="/image-12@2x.png" />
      </div>
      <div className="vdkk6">
        <div className="matic1">MATIC</div>
        <div className="div16">0</div>
        <img className="image-1-icon7" alt="" src="/image-13@2x.png" />
      </div>
      <div className="div19">0</div>
      <div className="sol2">SOL</div>
      <div className="vdkk7">
        <div className="eth2">VDK</div>
        <div className="div16">0</div>
        <img className="image-1-icon8" alt="" src="/image-14@2x.png" />
      </div>
      <div className="balance3">Balance</div>
      <div className="stats1">Stats</div>
      <div className="stake-child3" />
      <button className="stake5">
        <div className="stake-child4" />
        <b className="stake6">Stake</b>
      </button>
      <button className="unstake3" onClick={onUnstakeClick}>
        Unstake
      </button>
      <div className="stake-child5" />
      <div className="vdk-3261">67,874 VDK = $32.6 M</div>
      <div className="stake-child6" />
      <div className="total-staked-vdk1">Total Staked VDK</div>
      <div className="stake-child7" />
      <div className="div21">69.96%</div>
      <div className="stake-child8" />
      <div className="aug1">AUG</div>
      <div className="stake-child9" />
      <div className="stake-child10" />
      <div className="div22">1,345</div>
      <div className="stake-child11" />
      <div className="no-of-stakers1">No. of Stakers</div>
      <div className="stake7">
        <img className="stake-child12" alt="" src="/rectangle-2.svg" />
        <button className="stake8">
          <div className="stake-child13" />
          <b className="stake9">Stake</b>
        </button>
        <b className="stake10">Stake</b>
        <input className="stake-child14" type="text" />
        <div className="stake-child15" />
        <div className="max1">Max</div>
        <div className="div23">0.00</div>
        <div className="staking-apr1">Staking APR</div>
        <div className="div24">5.7%</div>
        <div className="vddk-11">1 VDDK = 1 BTC</div>
        <div className="vdk5">0 VDK</div>
        <div className="exchange-rate1">Exchange Rate</div>
        <div className="you-will-receive1">You will receive</div>
        <img className="vector-icon73" alt="" src="/vector62.svg" />
        <button className="image-61" />
      </div>
      <div className="stake-child16" />
      <div className="stake-child17" />
      <div className="stake-child18" />
      <div className="stake-child19" />
      <div className="stake-child20" />
      <img className="solana-1-icon2" alt="" src="/solana-11@2x.png" />
      <div className="vdk6">0 VDK</div>
      <div className="unclaimed-rewards1">Unclaimed Rewards</div>
      <div className="stake-child21" />
      <div className="claim-now1">Claim Now!</div>
      <h1 className="stake-vdk">STAKE VDK</h1>
      <section className="footer4">
        <div className="footer-child2" />
        <b className="b4">9116351683</b>
        <b className="all-rights-reserved4">All Rights Reserved @ 2023</b>
        <b className="contact-us4">{`Contact Us : `}</b>
        <button className="about-us4">About Us</button>
        <b className="arnavrangwanigmailcom4">arnavrangwani@gmail.com</b>
        <img className="vector-icon74" alt="" src="/vector58.svg" />
        <button className="linkdin-f4">
          <img className="vector-icon64" alt="" src="/linkdinf4.svg" />
        </button>
        <button className="instaf4">
          <img className="vector-icon64" alt="" src="/vector59.svg" />
        </button>
        <button className="gitf4">
          <img className="vector-icon64" alt="" src="/vector63.svg" />
        </button>
      </section>
    </div>
  );
};

export default Stake;
