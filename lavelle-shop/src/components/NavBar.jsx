import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../styles/NavBar.css';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {

    const icons = document.querySelectorAll(".nav-btn-navbar");
    icons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        icon.classList.toggle("open");
      });
    });

    return (
        <div className='container-navbar'>
            <div className='wrapper-navbar'>
                <div className='left-navbar'>
                    <span className='language-navbar'>EN</span>
                    <input className='input-navbar' placeholder="Search" />
                    {/* <SearchIcon style={{color:"gray", fontSize:16}} /> */}
                </div>
                <div className='center-navbar'>
                    <Link className='link-navbar' to='/'>
                        <h1 className='logo-navbar'>Lavelle Shop</h1>
                    </Link>
                </div>
                <div className='right-navbar'>
                    <div className='links-menu'>
                        <Link className='link-navbar' to='/register'>
                            <div className='menuItem-navbar'>REGISTER</div>
                        </Link>
                        <Link className='link-navbar' to='/login'>
                            <div className='menuItem-navbar'>SIGN IN</div>
                        </Link>
                    </div>
                    {/* <Link className='link-navbar' to='/cart'> */}
                        <div  className='menuItemCart-navbar'>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </div>
                    {/* </Link> */}
                    <button type="button" className="nav-btn-navbar">
                        <FaBars className="nav-icon-navbar" />
                    </button>

                    {/* <div className='nav'>
                        <input type="checkbox" id="click" />
                        <label for="click" className="menu-btn">
                            <FaBars className="nav-icon" />
                        </label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;