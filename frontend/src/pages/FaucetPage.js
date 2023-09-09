import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import faucetContract from "../faucet";
import "./FaucetPage.css";

const FaucetPage = () => {
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

  const onExchangeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="faucet-page">
      <div className="desktop-1">
        <section className="desktop-1-child" />
        <section className="vdk-faucet">VDK FAUCET</section>
        <input className="desktop-1-item" type="text" />
        <button className="connect-wallet4">
          <b className="send-me-vdk">SEND ME VDK</b>
        </button>
        <section className="transction">
          <div className="connect-wallet5">
            <b className="your-transactions">{`Your Transactions `}</b>
            <a
              className="x7c80bbf4f4521f30fd689a24f0999"
              href="https://mumbai.polygonscan.com/tx/0x7c80bbf4f4521f30fd689a24f09996d5faf2bf06e14149792db358faf528c47a"
              target="_blank"
            >
              0x7c80bbf4f4521f30fd689a24f09996d5faf2bf06e14149792db358faf528c47a
            </a>
          </div>
        </section>
        <img className="desktop-1-inner" alt="" src="/line-2.svg" />
        <header className="navbar1">
          <div className="rectangle-div" />
          <div className="navbar-child1" />
          <button className="connect-wallet6" onClick={connectWallet}>
            <b className="connect-wallet7">{walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
              0,
              3
            )}..`
            : "Connect Wallet"}</b>
          </button>
          <div className="navbar-child2" />
          <button className="gits1">
            <img className="vector-icon20" alt="" src="/vector18.svg" />
          </button>
          <button className="notis1">
            <img className="vector-icon20" alt="" src="/vector19.svg" />
          </button>
          <img className="navbar-child3" alt="" src="/line-11.svg" />
          <button className="digitalbits1" onClick={onDigitalBitsClick}>
            DigitalBits
          </button>
          <button className="staking1" onClick={onStakingClick}>
            Staking
          </button>
          <button className="indian-flag1">
            <img className="vector-icon22" alt="" src="/vector20.svg" />
            <img className="vector-icon23" alt="" src="/vector21.svg" />
            <img className="vector-icon24" alt="" src="/vector22.svg" />
            <img className="vector-icon25" alt="" src="/vector23.svg" />
            <img className="vector-icon26" alt="" src="/vector24.svg" />
            <img className="vector-icon27" alt="" src="/vector25.svg" />
            <img className="vector-icon28" alt="" src="/vector26.svg" />
            <img className="vector-icon29" alt="" src="/vector27.svg" />
            <img className="vector-icon30" alt="" src="/vector28.svg" />
            <img className="vector-icon31" alt="" src="/vector29.svg" />
          </button>
          <button className="faucet1" onClick={onFaucetClick}>
            Faucet
          </button>
          <div className="navbar-child4" />
          <button className="exchange1" onClick={onExchangeClick}>
            Exchange
          </button>
          <button className="image-21" onClick={onImage2Click} />
        </header>
      </div>
      <div className="fast-and-reliable-container">
        <p className="fast-and-reliable">Fast and reliable. 0.2 VDK/day.</p>
      </div>
      <section className="footer1">
        <div className="footer-item" />
        <div className="frame">
          <b className="b1">9116351683</b>
          <b className="all-rights-reserved1">All Rights Reserved @ 2023</b>
          <b className="contact-us1">{`Contact Us : `}</b>
          <button className="about-us1">About Us</button>
          <b className="arnavrangwanigmailcom1">arnavrangwani@gmail.com</b>
          <img className="vector-icon32" alt="" src="/vector30.svg" />
          <button className="linkdin-f1">
            <img className="vector-icon20" alt="" src="/linkdinf1.svg" />
          </button>
          <button className="instaf1">
            <img className="vector-icon20" alt="" src="/vector31.svg" />
          </button>
          <button className="gitf1">
            <img className="vector-icon20" alt="" src="/vector32.svg" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FaucetPage;
