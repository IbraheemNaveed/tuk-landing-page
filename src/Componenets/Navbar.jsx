import React from 'react'

import { useState,useRef } from 'react'
import HamburgerIcon from '../Assests/Hamburger.svg'
import CloseIcon from '../Assests/Close.svg'
import Tukicon from '../Assests/Tuk.svg'
// import { a } from 'react-router-dom'
  

export default function Navbar() {

    // const [currentState, setState]=useState(HamburgerIcon);
    // const [currentOp,setOpacity]=useState(0)
    // const [currentTop, setTop]=useState("-400px")
   const [isActive, setActive]=useState(false)
const hamburgerIcon=useRef(null);
const mobileNavBar=useRef(null);
    const mobileNavHandler=()=>{
      

   console.log(hamburgerIcon.current);
   hamburgerIcon.current.classList.toggle("active");
   if(hamburgerIcon.current.classList.contains("active")){
    //    mobileNavBar.current.classList.remove("top-[80px]")
       mobileNavBar.current.classList.add("left-[-800px]")
       mobileNavBar.current.classList.remove("left-[0px]")
      //  mobileNavBar.current.classList.remove("top-[80px]")
       hamburgerIcon.current.src=HamburgerIcon
   
      
   }
   else{
        //  mobileNavBar.current.classList.add("top-[80px]")
        
        
         mobileNavBar.current.classList.remove("left-[-800px]")
          mobileNavBar.current.classList.add("left-[0px]")

            hamburgerIcon.current.src=CloseIcon
   }

        

    }
  return (
      
   

    
    <>
      

     
      <nav className="p-5   md:flex firstBackgroundProperty">
        <div className="flex justify-between lg:w-full  ">
        <div className='flex mx-4 lg:mx-52'>

        
        <img  src= {Tukicon} />
           
         
    
           <img src={HamburgerIcon} ref={hamburgerIcon} alt="" onClick={mobileNavHandler} className=" invert w-[30px] absolute right-2 lg:hidden" />
           <ul  className={`deskstop-nav lg:flex  hidden   md:items-center z-10 opacity-100 lg:z-auto lg:static absolute mx-10 md:py-0 py-4  md:pl-0 pl-7 lg:opacity-100   text-black  transition-all ease-in duration-500  `} >
          <li className=" w-max mx-4 my-6 md:my-0">
            <a href="/" className="text-[14px] hover:text-cyan-500 text-[#ffffff] hover:underline-offset-4 hover:underline duration-500">Home</a>
          </li>
          <li className="mx-6 w-max  my-6 md:my-0">
            <a href="about" className="text-[14px] hover:text-cyan-500 duration-500 text-[#ffffff] hover:underline-offset-4 hover:underline">About Us</a>
          </li>
          <li className="mx-6 w-max my-6 md:my-0">
            <a href="working" className="text-[14px] hover:text-cyan-500 duration-500 text-[#ffffff] hover:underline-offset-4 hover:underline">How it works</a>
          </li>
          <li className="mx-6 w-max my-6 md:my-0">
            <a href="contact" className="text-[14px] hover:text-cyan-500 text-[#ffffff] duration-500 hover:underline-offset-4 hover:underline">Contact Us</a>
          </li>
          <li className="mx-6 w-max my-6 md:my-0">
            <a href="help" className="text-[14px] hover:text-cyan-500 text-[#ffffff] duration-500 hover:underline-offset-4 hover:underline active:">Help</a>
          </li>
          
        
          
    <h2 className=""></h2>
        </ul>
        </div>
        
        <div className=' hidden lg:block'> 
         <button className=' border-2 px-6 py-3 text-[#FFFFFF] bg-gradient-to-br from-[#666262]/100 to-[#ccc7c7]  ' >VIEW PRICING</button>
         </div>
        
        </div>
    
       
      </nav>
       <ul ref={mobileNavBar} className={`mobile-navbar  lg:hidden w-[80vw] h-[100vh]  lg:items-center z-10 opacity-100 lg:z-auto lg:static absolute  lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 md:opacity-100  left-[-800px]  text-black  bg-white transition-all ease-in duration-500  lg:mx-[60px] `} >
          <li className="mx-2 my-6 md:my-0">
            <a href="/" className="text-xl hover:text-cyan-500 hover:underline-offset-4 hover:underline duration-500">Home</a>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <a href="about" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">About Us</a>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <a href="working" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">How it works</a>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <a href="contact" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">Contact Us</a>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <a href="help" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline active:">Help</a>
          </li>
    
    <button className=' border-2 text-[#FFFFFF] mx-4  bg-gradient-to-br from-[#666262]/100 to-[#ccc7c7] ' >VIEW PRICING</button>
          
    <h2 className=""></h2>
        </ul>
        
       {/* <script>
        function Menu(e){
          let list = document.querySelector('ul');
          e.name === 'menu' ? (e.name = "close",list.classNameList.add('top-[80px]') , list.classNameList.add('opacity-100')) :( e.name = "menu" ,list.classNameList.remove('top-[80px]'),list.classNameList.remove('opacity-100'))
        }
      </script> */}
      </>
    
    
     
    
   
  )
}
