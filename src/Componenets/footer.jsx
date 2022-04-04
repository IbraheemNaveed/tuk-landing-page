import React from 'react'
import Logo from '../Assests/logo.svg';
import Moon from '../Assests/moon.svg';
import Dark from '../Assests/dark.svg';
import Tukicon from '../Assests/Tuk.svg'
export default function footer() {
  return (
    
    <>


<div className=' flex flex-col sm:flex-row justify-between text-[#ffffff]   border-y-2 border-[#374151]  mt-10 px-8 mb-4 '>

<div className=' flex flex-col mt-10  '>
<ul className='mx-8'>

    <li className='hover:cursor-pointer'>Components</li>
    <li className='hover:cursor-pointer'>Templates</li>
    <li className='hover:cursor-pointer'>Pricing</li>
    <li className='hover:cursor-pointer'>FAQ</li>
    <li className='hover:cursor-pointer'>Documents</li>
</ul>
</div>
<div className='flex flex-col mt-10'>
<ul className='mx-4'>

    <li className='hover:cursor-pointer'>Free Components</li>
    <li className='hover:cursor-pointer'>Roadmap</li>
    <li className='hover:cursor-pointer'>Blog</li>
    <li className='hover:cursor-pointer'>Blog</li>
</ul>
 
</div>
<div className='flex flex-col mt-10'>
    <button>Privacy policy</button>
    <button>Terms of service</button>
   
</div>

<div className='flex flex-col mt-10'> 
<img src={Logo} />

<div className='flex border-2 border-white rounded mt-10'>
<img className='mx-2 my-2 ' src={Moon}/>
<p className='mx-2 my-2 '>Dark</p>  
<img className='mx-2 my-2 ' src={Dark}/> 
</div>
</div>

</div>


<div className=' flex justify-center py-10 '>
    <img src={Tukicon} />
</div>

    </>
  )
}
