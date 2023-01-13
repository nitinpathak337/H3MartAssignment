import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import Navbar from "../Navbar";
import Table from "../Table";

import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content-bg">
        <header className="stats">
          <div className="stat">
            <p className="stat-heading">MARKET CAP</p>
            <p className="stat-value">$1.65T</p>
          </div>
          <div className="stat">
            <p className="stat-heading">EXCHANGE VOL</p>
            <p className="stat-value">$130.29B</p>
          </div>
          <div className="stat">
            <p className="stat-heading">ASSETS</p>
            <p className="stat-value">1,737</p>
          </div>
          <div className="stat">
            <p className="stat-heading">EXCHANGES</p>
            <p className="stat-value">90</p>
          </div>
          <div className="stat">
            <p className="stat-heading">MARKETS</p>
            <p className="stat-value">10,085</p>
          </div>
          <div className="stat">
            <p className="stat-heading">BTC DOM INDEX</p>
            <p className="stat-value">45.0%</p>
          </div>
        </header>
        <Table />
        <footer className="stats footer">
          <h1 className="stat-value">Follow Us</h1>
          <div className="social-icons-container">
            <BsTwitter fill="white" size="25" />
            <AiFillFacebook fill="white" size="25" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
