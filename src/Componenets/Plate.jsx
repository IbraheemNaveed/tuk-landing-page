import React from 'react'
import Line from '../Assests/Line.svg';
import Rectangle from '../Assests/Rectangle.png';
import ArrowL from '../Assests/Arrowl.svg';
import ArrowR from '../Assests/Arrowr.svg';

export default function Plate() {
  return (

<>
<div className=' flex justify-center mt-28 text-center '  >
 
 <img  className=' mt-10 ' src={Line}/>
</div>
<div className=' text-center w-full sm:w-10/12 mx-auto  ' >
<h1 className=' text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-br from-[#E879F9] to-[#C084FC] ' >KickStart your next Project</h1>
<p className=' pt-5 text-lg text-[#9CA3AF]' >Don’t waste time in starting your next project from scratch. With over 100 screens and multiple pages, choose the one that suits your needs and start editing right away.</p>
</div>
<div className=' sm:px-52 px-2 mt-16  relative  '>
    <img className='  ' src={Rectangle} />
    <div className='  absolute top-[50%] left-[50%] translate-x-[-50%] text-white border border-[#ffffff]'> <p>Video Placeholder</p> </div>
</div>
<div className=' flex justify-center mt-14 '>
<img src={Line}/>

</div>
<div className='text-center w-full sm:w-10/12 mx-auto mt-8'>
<h1 className='font-bold text-5xl text-transparent  bg-clip-text bg-gradient-to-br from-[#4ADE80] to-[#2DD4BF]' >7 Different Applications</h1>
<p className=' mt-5 text-sm text-[#ffffff]'>Don’t waste time in starting your next project from scratch. With over 100 screens and multiple pages, choose the one that suits your needs and start editing right away.</p>
</div>
<div className=' flex justify-center items-center mt-6 '>

<div className="text-white/40 hover:text-white">
<svg width="49" height="16" viewBox="0 0 49 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538404 7.04738 0.538404 6.65685 0.928928L0.292893 7.29289ZM49 7L1 7L1 9L49 9L49 7Z" />
</svg>

</div>
<button className=' border-2 bg-clip-border px-14 py-4 border-[#4ADE80] text-[#FFFFFF] mx-4 bg-[#4ADE80]/10   ' >Ecommerce</button>
<div className="text-white/40 hover:text-white">
<svg width="49" height="16" viewBox="0 0 49 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M48.7071 8.70711C49.0976 8.31658 49.0976 7.68342 48.7071 7.29289L42.3431 0.928932C41.9526 0.538408 41.3195 0.538408 40.9289 0.928932C40.5384 1.31946 40.5384 1.95262 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM0 9H48V7H0V9Z" />
</svg>

</div>


</div>


</>
  )
}
