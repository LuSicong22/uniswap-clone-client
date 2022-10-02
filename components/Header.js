import React, { useState, useEffect } from "react";
import Image from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethLogo from "../assets/eth.png";
import uniswapLogo from "../assets/uniswap.png";

const style = {};

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("Swap");
  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <img src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>
    </div>
  );
};

export default Header;
