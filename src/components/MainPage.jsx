import React, { useEffect, useState } from 'react'
import './MainPage.css'
import { BsFillPersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { TbFileAnalytics } from "react-icons/tb";
function MainPage() {
    const [regularCount,setRegularCount]=useState(0);
    const [remedialCount,setRemidialCount]=useState(0);
    const [paidCount,setpaidCount]=useState(0);
    useEffect(()=>{
        const intervel1=setTimeout(()=>{
            setRegularCount((count)=>{
                if(count>264){
                    clearInterval(intervel1)
                    return count;
                }
                else{
                    return count=count+1;
                }


            })
        
        },1000)
        const intervel2 =setTimeout(()=>{
            setRemidialCount((count2)=>{
                if(count2>104){
                    clearInterval(intervel2)
                    return count2;
                }
                else{
                    return count2=count2+1
                }
            })
           
        },500)
        const intervel3= setTimeout(()=>{
           
            setpaidCount((count3)=>{
                if(count3>224){
                    clearInterval(intervel3)
                    return count3;
                }
                else{
                    return count3=count3+1;
                }
            })
        },2000)
    })
  return (
    <div>
        <h1 className='title'>Student Management</h1>
        <div className='cent'>
            <div style={{display:"flex", backgroundColor:"orange"}} className='box'>
                <div>
                <BsFillPersonFill className='main_images'/>
                </div>
                <div>
                    <h1 className='count'>
                        {regularCount}
                    </h1>
                    <p className='count'>Regular Student</p>
                </div>
            </div>
            <div style={{display:"flex", backgroundColor:"purple"}} className='box'>
                <div>
                <BsFillPersonFill className='main_images'/>
                </div>
                <div>
                    <h1 className='count'>
                        {remedialCount}
                    </h1>
                    <p className='count'>Remedial Student</p>
                </div>
            </div>
            <div style={{display:"flex", backgroundColor:"green"}} className='box'>
                <div>
                <BsFillPersonFill className='main_images'/>
                </div>
                <div>
                    <h1 className='count'>
                        {paidCount}
                    </h1>
                    <p className='count'>In Paid Clubs</p>
                </div>
            </div>

        </div>
        <hr style={{marginTop:"20px"}}/>
       
       <h3 style={{textAlign:"center"}}>Menu</h3>
       <div className='cent'>
            <div>
                <BsFillPersonFill className='second_images'/>
                <p>Regular Enrollment</p>
            </div>
            <div>
                <FaBook className='second_images'/>
                <p>Remedial Enrollment</p>
            </div>
            <div>
            <FaPerson className='second_images'/>
                <p>Club Management</p>
            </div>
       </div>
       <div className='cent'>
            <div>
                <FaBookOpenReader className='second_images'/>
                <p>Classroom Management</p>
            </div>
            <div>
                <MdEmail className='second_images'/>
                <p>SMS / EMAIL</p>
            </div>
            <div>
                <TbFileAnalytics className='second_images'/>
                <p>Attendance</p>
            </div>
       </div>
       <div className='cent'>
            <div>
               
            </div>
            <div>
                <FaBuilding className='second_images'/>
                <p>Client</p>
            </div>
            <div>
           
            </div>
       </div>
    </div>
  )
}

export default MainPage