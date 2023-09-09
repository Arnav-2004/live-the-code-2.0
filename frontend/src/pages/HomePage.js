import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
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

  const onStartStakingClick = useCallback(() => {
    navigate("/stake");
  }, [navigate]);

  const onStartExchangeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStartExchange1Click = useCallback(() => {
    navigate("/faucet-page");
  }, [navigate]);

  const onExchangeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStakingClick = useCallback(() => {
    navigate("/stake");
  }, [navigate]);

  const onFaucetClick = useCallback(() => {
    navigate("/faucet-page");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="home-page">
      <main className="desktop-2">
        <section className="mep4l8lgdtwf0tob-1" />
        <h1 className="fastest-secure-container">
          <p className="fastest-secure">{`Fastest & secure`}</p>
          <p className="fastest-secure">Crypto marketplace</p>
        </h1>
        <button className="get-started" onClick={connectWallet}>
          <div className="get-started-child" />
          <b className="connect-wallet8">{walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
              0,
              3
            )}..`
            : "Connect Wallet"}</b>
        </button>
        <b className="the-most-trusted-container">
          <p className="fastest-secure">{`The most trusted and top Crypto Bank with a simple `}</p>
          <p className="fastest-secure">&nbsp;</p>
          <p className="fastest-secure">
            transaction flow and ambitious developer team
          </p>
        </b>
        <b className="guarantee">100 % Guarantee</b>
        <b className="safe-payment">Safe Payment</b>
        <b className="support">24/7 Support</b>
        <img className="vector-icon35" alt="" src="/vector33.svg" />
        <img className="vector-icon36" alt="" src="/vector34.svg" />
        <img className="vector-icon37" alt="" src="/vector33.svg" />
        <div className="learn-more">
          <img className="vector-icon38" alt="" src="/vector35.svg" />
          <b className="learn-more1">Learn more</b>
        </div>
        <button className="off">
          <div className="off-child" />
          <div className="off-for-new">20% off for new member</div>
        </button>
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        <h1 className="staking2">STAKING</h1>
        <h1 className="exchange2">EXCHANGE</h1>
        <button className="faucet2">FAUCET</button>
        <img className="image-5-icon" alt="" src="/image-5@2x.png" />
        <h2 className="staking-is-when">
          Staking is when you lock crypto assets for a set period of time to
          help support the operation of a blockchain. In return for staking your
          crypto, you earn more cryptocurrency.
        </h2>
        <h2 className="a-crypto-faucet">{`A crypto faucet is an app or a website that distributes small amounts of cryptocurrencies as a reward for completing easy tasks. `}</h2>
        <h2 className="a-cryptocurrency-exchange">
          A cryptocurrency exchange sounds simple — as it is just a platform
          where you can buy and sell different types of crypto.
        </h2>
        <button className="start-staking" onClick={onStartStakingClick}>
          <div className="start-staking-child" />
          <b className="start-staking1">Start Staking</b>
        </button>
        <img className="image-6-icon" alt="" src="/image-6@2x.png" />
        <button className="start-exchange" onClick={onStartExchangeClick}>
          <div className="start-exchange-child" />
          <b className="try-faucet">Start Exchange</b>
        </button>
        <button className="start-exchange2" onClick={onStartExchange1Click}>
          <div className="start-exchange-child" />
          <b className="try-faucet">Try FAUCET</b>
        </button>
      </main>
      <header className="navbar2">
        <input className="rectangle-input" type="text" />
        <div className="navbar-child5" />
        <div className="navbar-child6" />
        <button className="git">
          <img className="vector-icon39" alt="" src="/vector36.svg" />
        </button>
        <button className="noti">
          <img className="vector-icon39" alt="" src="/vector37.svg" />
        </button>
        <img className="navbar-child7" alt="" src="/line-12.svg" />
        <h2 className="digitalbits2">DigitalBits</h2>
        <button className="exchange3" onClick={onExchangeClick}>
          Exchange
        </button>
        <button className="staking3" onClick={onStakingClick}>
          Staking
        </button>
        <button className="indian-flag2">
          <img className="vector-icon41" alt="" src="/vector38.svg" />
          <img className="vector-icon42" alt="" src="/vector39.svg" />
          <img className="vector-icon43" alt="" src="/vector40.svg" />
          <img className="vector-icon44" alt="" src="/vector41.svg" />
          <img className="vector-icon45" alt="" src="/vector42.svg" />
          <img className="vector-icon46" alt="" src="/vector43.svg" />
          <img className="vector-icon47" alt="" src="/vector44.svg" />
          <img className="group-icon3" alt="" src="/group3.svg" />
          <img className="group-icon4" alt="" src="/group4.svg" />
          <img className="group-icon5" alt="" src="/group5.svg" />
        </button>
        <button className="faucet3" onClick={onFaucetClick}>
          Faucet
        </button>
        <h3 className="home">Home</h3>
      </header>
      <section className="footer2">
        <div className="footer-inner" />
        <b className="b2">9116351683</b>
        <b className="all-rights-reserved2">All Rights Reserved @ 2023</b>
        <b className="contact-us2">{`Contact Us : `}</b>
        <button className="about-us2">About Us</button>
        <b className="arnavrangwanigmailcom2">arnavrangwani@gmail.com</b>
        <img className="vector-icon48" alt="" src="/vector45.svg" />
        <button className="linkdin-f2">
          <img className="vector-icon39" alt="" src="/linkdinf2.svg" />
        </button>
        <button className="instaf2">
          <img className="vector-icon39" alt="" src="/vector46.svg" />
        </button>
        <button className="gitf2">
          <img className="vector-icon39" alt="" src="/vector47.svg" />
        </button>
      </section>
      <button className="image-22" onClick={onImage2Click} />
    </div>
  );
};

export default HomePage;
