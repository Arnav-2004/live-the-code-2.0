import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Swap.css";
const Swap = () => {
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

  const onDigitalBitsClick = useCallback(() => {
    navigate("/home-page");
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
    <div className="swap">
      <div className="fire">
        <div className="profile" />
      </div>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="desktop-3">
        <div className="desktop-3-child" />
        <button className="desktop-3-item" />
        <div className="desktop-3-inner" />
        <button className="rectangle-button" />
        <div className="rectangle-parent">
          <div className="frame-child" />
          <b className="swap-to">Swap To:</b>
          <button className="share">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
          <button className="info">
            <img className="vector-icon" alt="" src="/vector1.svg" />
          </button>
          <button className="chart">
            <img className="vector-icon" alt="" src="/vector2.svg" />
          </button>
          <button className="more">
            <img className="vector-icon" alt="" src="/vector3.svg" />
          </button>
          <b className="crypto">Crypto</b>
          <div className="connect-wallet-parent">
            <button className="connect-wallet" onClick={connectWallet}>
              <b className="connect-wallet1">{walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
              0,
              3
            )}..`
            : "Connect Wallet"}</b>
            </button>
            <div className="frame-item" />
            <img className="vector-icon4" alt="" src="/vector4.svg" />
            <b className="convert">Convert</b>
            <div className="frame-inner" />
            <div className="previous-exchanges">PREVIOUS EXCHANGES</div>
            <div className="market-impact">
              <p className="market-impact1">MARKET IMPACT</p>
            </div>
            <div className="more-information">MORE INFORMATION</div>
            <div className="amount-exchanged">AMOUNT EXCHANGED</div>
            <img
              className="up-down-arrow-icon"
              alt=""
              src="/updown-arrow.svg"
            />
            <img className="vector-icon5" alt="" src="/vector5.svg" />
            <img className="vector-icon6" alt="" src="/vector5.svg" />
            <img className="vector-icon7" alt="" src="/vector5.svg" />
            <div className="div">******</div>
            <div className="div1">******</div>
            <div className="div2">******</div>
            <b className="balance">Balance :</b>
            <b className="balance1">Balance :</b>
            <img className="swap-f1-icon" alt="" src="/swap-f1.svg" />
            <img className="swap-f1-icon1" alt="" src="/swap-f11.svg" />
          </div>
          <div className="exchange-any-crypto-currency">
            Exchange any Crypto-Currency in Lowest Price
          </div>
        </div>
        <section className="footer">
          <div className="footer-child" />
          <b className="b">9116351683</b>
          <b className="all-rights-reserved">All Rights Reserved @ 2023</b>
          <b className="contact-us">{`Contact Us : `}</b>
          <button className="about-us">About Us</button>
          <b className="arnavrangwanigmailcom">arnavrangwani@gmail.com</b>
          <img className="vector-icon8" alt="" src="/vector6.svg" />
          <button className="linkdin-f">
            <img className="vector-icon" alt="" src="/linkdinf.svg" />
          </button>
          <button className="instaf">
            <img className="vector-icon" alt="" src="/vector7.svg" />
          </button>
          <button className="gitf">
            <img className="vector-icon" alt="" src="/vector8.svg" />
          </button>
        </section>
        <section className="cyyy-1" />
        <h2 className="vdk">VDK</h2>
        <b className="inr">/INR</b>
        <img className="solana-1-icon" alt="" src="/solana-1@2x.png" />
        <div className="polygon">POLYGON</div>
        <div className="solana">SOLANA</div>
        <img
          className="ethereum-logo-1-icon"
          alt=""
          src="/ethereumlogo-1@2x.png"
        />
        <div className="ethereum">ETHEREUM</div>
        <img className="polygon-3-icon" alt="" src="/polygon-3@2x.png" />
        <button className="desktop-3-child1" />
        <div className="our-esteemed-partners">OUR ESTEEMED PARTNERS</div>
        <div className="solana1">SOLANA</div>
        <img className="fire-icon" alt="" src="/fire.svg" />
        <b className="trending-soon">Trending Soon</b>
        <div className="solana2">
          <h2 className="sol">SOL</h2>
          <img className="solana-2-icon" alt="" src="/solana-2@2x.png" />
          <div className="usd">19.73 USD</div>
          <div className="div3">(18.89 %)</div>
        </div>
        <div className="polygon1">
          <h2 className="poly">POLY</h2>
          <img className="polygon-4-icon" alt="" src="/polygon-4@2x.png" />
          <div className="usd1">0.54 USD</div>
          <div className="div4">(1.04 %)</div>
        </div>
        <div className="ethereum1">
          <h2 className="eth">ETH</h2>
          <img
            className="ethereum-logo-2-icon"
            alt=""
            src="/ethereumlogo-2@2x.png"
          />
          <div className="usd2">1628.63 USD</div>
          <div className="div5">(8.89 %)</div>
        </div>
        <div className="bitcoin">
          <h2 className="btc">BTC</h2>
          <div className="div6">(-2.74%)</div>
          <img className="bitcoin-1-icon" alt="" src="/bitcoin-1@2x.png" />
          <div className="usd3">25,819.60 USD</div>
        </div>
        <header className="navbar">
          <div className="navbar-child" />
          <div className="navbar-item" />
          <button className="connect-wallet2" onClick={connectWallet}>
            <b className="connect-wallet3">{walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
              0,
              3
            )}..`
            : "Connect Wallet"}</b>
          </button>
          <div className="navbar-inner" />
          <button className="gits">
            <img className="vector-icon" alt="" src="/vector9.svg" />
          </button>
          <button className="notis">
            <img className="vector-icon" alt="" src="/vector10.svg" />
          </button>
          <img className="line-icon" alt="" src="/line-1.svg" />
          <button className="digitalbits" onClick={onDigitalBitsClick}>
            DigitalBits
          </button>
          <button className="staking" onClick={onStakingClick}>
            Staking
          </button>
          <button className="indian-flag">
            <img className="vector-icon13" alt="" src="/vector11.svg" />
            <img className="vector-icon14" alt="" src="/vector12.svg" />
            <img className="vector-icon15" alt="" src="/vector13.svg" />
            <img className="vector-icon16" alt="" src="/vector14.svg" />
            <img className="vector-icon17" alt="" src="/vector15.svg" />
            <img className="vector-icon18" alt="" src="/vector16.svg" />
            <img className="vector-icon19" alt="" src="/vector17.svg" />
            <img className="group-icon" alt="" src="/group.svg" />
            <img className="group-icon1" alt="" src="/group1.svg" />
            <img className="group-icon2" alt="" src="/group2.svg" />
          </button>
          <button className="faucet" onClick={onFaucetClick}>
            Faucet
          </button>
          <button className="exchange">Exchange</button>
          <button className="image-2" onClick={onImage2Click} />
        </header>
      </div>
    </div>
  );
};

export default Swap;
