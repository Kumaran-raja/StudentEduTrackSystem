import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CiGrid42 } from "react-icons/ci";
import { TbFileAnalytics } from "react-icons/tb";
import './NavBar.css'
import logo from './logo.png'
import { IoMdSettings } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import Mainpage from './MainPage'

function NavBar() {
  return (
    <div style={{display:"grid" ,gridTemplateColumns:"15% 85%"}}>
      <div className='NavBar' >
              <img src={logo} className='logo'/>
              <BsFillPersonFill className='images'/>
              <p className='text'>Student Management</p>
              <FaInbox className='images'/>
              <p className='text'>Financial Management</p>
              <BiSolidOffer className='images'/>
              <p className='text'>Quality Control Management</p>
              <CiGrid42 className='images'/>
              <p className='text'>Report Delivery Management</p>
              <TbFileAnalytics className='images'/>
              <p className='text'>Attendance</p>
              <div style={{display:"flex",gap:"20px",display:"flex",justifyContent:"center",marginTop:"20px",color:"white",padding:"8px"}}>
                <FaCircleQuestion className='botImg'/>
                <IoMdSettings className='botImg'/>
                <IoMdExit className='botImg'/>

              </div>
        </div>
    <Mainpage/>


    </div>
  )
}

export default NavBar