import React from 'react'
import Slidee from '../Assests/slide.png';

export default function CompSix() {
  return (
    <>
 <div className=' flex flex-col sm:flex-row justify-between mt-16 '>
<div className=' text-[#ffffff]  py-10 px-10 '  >
    <h1 className=' text-2xl font-bold  '>One Time Payment.<br/>
Lifetime Access.</h1>
    <p className=' py-5 '>
    Simple and Transparent Pricing. No BS.
    </p>
    <p className=' py-2 '>
    <ul className=' list-disc ' >
  <li>90+ Screens </li>
  <li>200+ Components</li>
  <li>HTML & TailwindCSS</li>
  <li>Premium Support</li>
  <li>
Use on Unlimited Projects</li>
  
</ul>  
    
</p>
    <button className=' mt-6 border-0 text-[#FFFFFF] mx-4  bg-gradient-to-br from-[#7DD3FC]/100 to-[#3B82F6]/100  sm:px-8 sm:py-4 px-3 py-2 ' >Buy Now at $79</button>
   
</div>

<div >
<img src={Slidee}/>

</div>
</div>
    </>
  )
}
