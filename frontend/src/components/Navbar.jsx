import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";

const Navbar = () => {

  const [visible,setVisible]=useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <h1 className=''>Rentooo</h1>
        <ul className='hidden sm:flex gap-5 textsm text-gray-700 '>
          <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
          </NavLink>
          <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          </ul>


          <div className='flex items-center gap-6 cursor-pointer'>
          <CiSearch />

          <Link to='/cart' className='relative w-5 min-w-5'>
          <CiShoppingCart /> 
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
         
          </Link>
         <div onClick={()=>setVisible(true)} className='w-5 cursor-pointer'><CgProfile /></div>
          </div>
          {/* Sidebar menu for smaler screen*/}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' :'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
              <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <div className='h-4'><IoIosArrowRoundBack />
                <div className='group-hover:block absolute dropdown right-0 pt-4 '>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded'>
                   
                  <NavLink to='' className="flex flex-col items-center gap-1">
                     <p>My Profile</p>
                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                         </NavLink>
                    
                    <NavLink to='/rides' className="flex flex-col items-center gap-1">
                     <p>Rides</p>
                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                         </NavLink>
                         <NavLink to='' className="flex flex-col items-center gap-1">

                     <p>Logout</p>
                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                         </NavLink>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>

    
  )
}

export default Navbar