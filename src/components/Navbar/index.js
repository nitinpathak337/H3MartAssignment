import { BiSearch } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-options">
        <p>Coins</p>
        <p>Exchanges</p>
        <p>Charts</p>
        <p>Swap</p>
      </div>

      <img
        src="https://coincap.io/static/logos/black.svg"
        alt="logo"
        className="logo"
      />

      <div className="nav-options right">
        <BiSearch />
        <AiFillSetting />
        <button type="button" className="nav-button">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
