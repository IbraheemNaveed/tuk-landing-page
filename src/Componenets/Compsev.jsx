import React from 'react'
import LineP from '../Assests/linep.svg';

export default function Compsev() {
  return (
    <>
        <div className=' flex justify-center mt-8  '>
    <img   src={LineP}/>
   </div>
   <div className=' text-center w-full sm:w-10/12 mx-auto  ' >
   <h1 className=' mt-8 text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r  from-[#FFAEC1] to-[#FF7293] ' >Powerful Features</h1>
 
  </div>
  <div className=' bg-[#6B7280] flex flex-col sm:flex-row justify-between items-center w-[200px] sm:w-[600px] h-[56px] rounded mx-auto '>
    <div  > <input className='bg-[#6B7280] text-[16px] mx-4 ' type={"email"} placeholder={"johnnyappleseed@gmail.com"}/></div>
    <div ><button className='bg-[#FFFFFF] rounded text-[#FF3565] mx-4 w-[80px] sm:w-[120px] h-[40px]'>Join Now</button></div>
   </div>
    </>
  )
}
