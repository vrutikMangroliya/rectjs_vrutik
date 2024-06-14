/* eslint-disable no-unused-vars */
import React from 'react'
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { RiPinterestFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { BsPerson } from "react-icons/bs";
import logo from "../assets/web_logo.png"



const Navbar = () => {

    return (


         <div >

            <div className='flex bg-gray-100 px-10 py-8 justify-around items-center text-black relative font-10px'>

                <div className=' flex  ml-5 absolute left-0  '>
                    <i className='mr-1 mt-2 '> <FiPhoneOutgoing /></i>
                    <h5 className='ml-2 ' >(+39) 35 2568 4593</h5>
                </div>

                <div className=' flex  absolute left-[15%] w-[20%] p-5'>
                    <i className='mx-2 mt-2'><MdOutlineLocalPostOffice /></i>
                    <h6>hello@domain.com</h6>
                </div>

                <div className='absolute ml-30'> free shipping all orders over $79
                    <span className='  bg-semil px-1  rounded-sm
                ml-6 font-2px font-semibold text-white'>Shop Now !</span>
                </div>

                <div className='absolute right-[10px] w-[20%] text-sm'>English </div>
                <div className='absolute right-[5px] w-[15%] text-sm'>Used </div>
                <div className=' flex absolute right-0 mr-4  '>
                    <i className='mr-5 hover:scale-75 translate-x-4 skew-y-3 '>< TiSocialFacebook /></i>
                    <i className='mr-5 hover:scale-75 translate-x-4 skew-y-3 '><FaTwitter /></i>
                    <i className='mr-5 hover:scale-75 translate-x-4 skew-y-3 '><TfiYoutube /></i>
                    <i className='mr-5 hover:scale-75 translate-x-4 skew-y-3 '><RiPinterestFill /></i>
                </div>

            </div>
            <br />
            <div className='flex bg-white px-15 py-7 justify-around items-center  relative text-gray-700 border-b-4'>
                <div className='absolute left-5'>
                    <Link to="/">
                        <img className='w-18% max-w-32 ' src={logo} alt="" />
                    </Link>
                </div>
                <div className='absolute left-13 '>

                    <ul className='flex space-x-10 '>
                        <li>
                            <Link className='text-lg hover:text-green-900' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/shoppage">Shop</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/page">Page</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/Axios">Axios</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/Data">Data</Link>
                        </li>

                    </ul>

                </div>

                <div className='flex absolute   p-5  right-[100px] '>
                     <i className='mr-1 mt-1.5'> <BsPerson /></i> 
                    <Link className='ml-4' to="/Login"> Login / Register </Link>
                </div>

            </div>

            
        </div>
    )
}

export default Navbar
// className='text-xl font-semibold hover:border 






