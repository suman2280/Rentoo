import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
     <div className='flex flex-col sm:flex-row border border-gray-400'>
        <div className='w-full sm:1/2 flex items-center py-10 sm:py-0'>
            <div className='text-[#41414141]'>
                <div className='flex items-center gap-2'>
                  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                  <p className='font-bold text-sm md:text-base text-[#414141]'>Our Best Choice</p>
                </div>
                <div className='flex items-center gap-2'>
                  <p className='font-semibold text-sm md:text-base text-[#414141]'>Book Now</p>
                  <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Right side*/}
        <img className='w-full sm:w-1/2' src={assets.Activa} alt="" />
    </div>
  )
}

export default Hero