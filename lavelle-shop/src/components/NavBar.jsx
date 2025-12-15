import React, { useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../styles/NavBar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-navbar">
      <div className="wrapper-navbar">
        <div className="left-navbar">
          <span className="language-navbar">EN</span>
          <input className="input-navbar" placeholder="Search" />
          {/* <SearchIcon style={{color:"gray", fontSize:16}} /> */}
        </div>
        <div className="center-navbar">
          <Link className="link-navbar" to="/">
            <h1 className="logo-navbar">VIU Shop</h1>
          </Link>
        </div>
        <div className="right-navbar">
            <div className='navbar'>
                
                <div className="menu-itemcart-navbar">
                    <Badge badgeContent={0} color="primary">
                    <ShoppingCartOutlinedIcon />
                    </Badge>
                </div>

                <div className={`nav-items ${isOpen && "open"}`}>
                    <div className="links-menu">
                        <div className="menu-item-navbar">
                            REGISTER
                        </div>
                    
                        <div className="menu-item-navbar">
                            SIGN IN
                        </div>
                    </div>
                </div>
                  <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <FaBars className="nav-icon-navbar" />
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
