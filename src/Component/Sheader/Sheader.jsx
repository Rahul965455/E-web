import React from "react";
import "./Sheader.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Fixed from "../Fixexheader/Fixed";
const Sheader = () => {
  return (
    <>
      <header className="first">
        <nav>
          <ul>
            <li>24/7 CUSTOMER SERVICE</li>
            <li>LIFETIME WARRANTY</li>
            <li>FREE INTERNATIONAL SHIPPING</li>
            <li>100% MONEYBACK GUARANTEE</li>
          </ul>
        </nav>
      </header>
      <div className="emoji">
        <div className="icons">
          <div>
            <SearchIcon />
          </div>
          <div>
            <PersonOutlineIcon />
          </div>
          <div>
            <FavoriteBorderIcon />
          </div>
          <div>
            <LocalMallIcon />
          </div>
        </div>

      </div>
    <Fixed/>
    </>
  );
};

export default Sheader;
