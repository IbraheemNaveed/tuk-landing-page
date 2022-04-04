import React from 'react'
import GroupONE from '../Assests/Groupone.svg'
import PlateImg from '../Assests/Plateimg.png';
export default function header() {
  return (
      <>
    <div className='w-full sm:w-10/12 mx-auto'>
    <h1 className=' text-center font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-br from-[#7DD3FC] to-[#3B82F6] '>MODA Admin Dashboard Template</h1>
    <p className='text-[#9CA3AF] text-center font-normal px-8 sm:px-16   '>A one-of-its kind Dashboard Template with almost 100 Screens. Every screen is highly detailed with interactions embedded down to the smallest component.</p>
    <div className=' flex-col flex justify-center sm:flex-row   mt-3.5 '>
    <button className=' border-0 text-[#FFFFFF] mx-4  bg-gradient-to-br from-[#7DD3FC]/20 to-[#95a3b8]  px-8 py-4 ' >Buy Now at $79</button>
    <button className=' border-0 text-[#FFFFFF] mx-4 bg-[#666262] px-8 py-4  ' >VIEW PRICING</button>
    </div>
    
    </div>
    <div className=' sm:px-32 mt-20 px-4 mb-6  shadow-lg-[#FFFFFF] '>
    <img src={GroupONE}/>
    </div>
    <div className=' -mt-24 '>
    
    </div>
    </>
  )
}
