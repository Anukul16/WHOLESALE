import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import '../Stylesheet/Navbar.css';
import logo1 from '../Resources/flip.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
    return (
        <>
            <div className="container-fluid maindiv">
                <div className="row ">
                    <div className="col-md-3 d-flex">
                        <img src={logo1} alt="" className='logo' />
                    </div>

                    <div className="col-md-5 d-flex align-items-center">
                        <div className="inputwrapper position-relative">
                            <input
                                className="inputbox"
                                type="search"
                                placeholder="Search Products,Brand And More"
                                aria-label="Search"
                            />
                            <SearchIcon className="search-icon position-absolute end-0 top-50 translate-middle-y" />
                        </div>
                    </div>


                    <div className="col-md-2 text-center d-flex  align-items-center justify-content-center">
                        <div className="dropdown d-flex  justify-content-center  mt-1">
                            <AccountCircleIcon className='userIcon' />
                            <h5
                                className="dropdown-toggle mx-2"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Flipkart
                            </h5>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-2 d-flex align-items-center p-2">
                        <button type="button" class="btn btn-outline-primary  position-relative cartBtn d-flex">
                            <ShoppingCartIcon className='cartIcon'/>
                            <span class="position-absolute top-0  start-100 translate-middle p-2 bg-danger badge border border-light rounded-circle">
                                99+
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>

                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
