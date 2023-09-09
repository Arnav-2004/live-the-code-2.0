import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Swap from "./pages/Swap";
import FaucetPage from "./pages/FaucetPage";
import HomePage from "./pages/HomePage";
import Unstaking from "./pages/Unstaking";
import Stake from "./pages/Stake";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/faucet-page":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/unstaking":
        title = "";
        metaDescription = "";
        break;
      case "/stake":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Swap />} />
      <Route path="/faucet-page" element={<FaucetPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/unstaking" element={<Unstaking />} />
      <Route path="/stake" element={<Stake />} />
    </Routes>
  );
}
export default App;
