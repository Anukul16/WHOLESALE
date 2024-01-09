
import '../Stylesheet/Profilepage.css';
import user from '../Resources/profile.jpg'
import NextWeekSharpIcon from '@mui/icons-material/NextWeekSharp';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import ProfileInformation from '../Profilepage Components/ProfileInformation';
import Manageaddress from '../Profilepage Components/Manageaddress';
import { Routes, Route,NavLink,useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';

const Profilepage = () => {

    const navigate = useNavigate()
    
    useEffect(()=>{
        navigate('/profile-information')
    },[])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="row">
                            <div className="col-md-12 cols mb-3 d-flex justify-content-evenly align-items-center userdiv">
                                <div className="userimg-div d-flex justify-content-center align-items-center">
                                    <img src={user} alt="user" className='userimg' />
                                </div>
                                <p className='mt-2'>Hello,<br />Flipkart Customer</p>
                            </div>


                            <div className="col-md-12 cols">
                                <div className="orders d-flex justify-content-between align-items-center mt-3">
                                    <div className="d-flex ">
                                        <NextWeekSharpIcon className='ms-3' />
                                        <h5 className="ms-3">MY ORDERS</h5>
                                    </div>
                                    <ArrowForwardIosOutlinedIcon />
                                </div>
                                <hr className='text-black' />
                                <div className=''>
                                    <div className="d-flex">
                                        <Person2OutlinedIcon className='ms-3' />
                                        <h5 className='ms-3'>Account Settings</h5>
                                    </div>
                                    <ul className='ms-5 mt-3 uls'>
                                        <li className='lis'><NavLink to="/profile-information">Profile Information</NavLink></li>
                                        <li className='lis'><NavLink to="/manage-address">Manage Address</NavLink></li>

                                    </ul>
                                </div>
                                <hr className='text-black' />
                                <div className=''>
                                    <div className="d-flex">
                                        <FolderSharedIcon className='ms-3' />
                                        <h5 className='ms-3'>MY STUFFS</h5>
                                    </div>
                                    <ul className='ms-5 mt-3 uls'>
                                        <li>Noticfications</li>
                                        <li>Wishlist</li>
                                        <li>Coupons</li>
                                        <li>Review & Ratings</li>

                                    </ul>
                                </div>
                                <hr className='text-black' />
                                <div className=''>
                                    <div className="d-flex">
                                        <AccountBalanceWalletIcon className='ms-3' />
                                        <h5 className='ms-3'>Payments</h5>
                                    </div>
                                    <ul className='ms-5 mt-3 uls'>
                                        <li>Gift Cards</li>
                                        <li>Saved Upis</li>

                                    </ul>
                                </div>
                                <hr className='text-black' />
                                <div className=''>
                                    <div className="d-flex">
                                        <LogoutIcon className='ms-3' />
                                        <h5 className='ms-3'>Logout</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-8 offset-md-1 cols p-4 ms-3">

                        <Routes>
                            <Route path="/profile-information" element={<ProfileInformation />} />
                            <Route path="/manage-address" element={<Manageaddress />} />
                        </Routes>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Profilepage;
