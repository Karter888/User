import React, {useState} from 'react'
import {AiOutLineClose, AiOutLineMenu} from 'react-icons/ai'

const Navbar = () => {
   const [nav, setNav] = useState[false]

   const handleNav = () => {
      setNav(!nav)
   }

   return(
      <div className='flex justify-bottom items-center h-24 max-w-[1240px] mx-auto px-4  text-yellow-100'>
         <h1 className= 'w-full text-3xl font-bold text-[#00df9a] m-8'>REACT.</h1>
      <ul className='flex'>
         <li className='p-4'>Home</li>
         <li className='p-4'>Company</li>
         <li className='p-4'>Services</li>
         <li className='p-4'>Products</li>
         <li className='p-4'>About</li>
            </ul>

            onClick={handleNav}>
               {!nav ? <AiOutLineClose size={20}/> : <AiOutLineMenu size={20} />}
               
             >

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left=[-100]'}>
            <h1 className= 'w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
               <ul className=' uppercase p-4'>
               <li className='p-4 border-b border-gray-600'>Home</li>
         <li className='p-4 border-b border-gray-600'>Company</li>
         <li className='p-4 border-b border-gray-600'>Services</li>
         <li className='p-4 border-b border-gray-600'>Products</li>
         <li className='p-4 '>About</li>
               </ul>
            </div>
      </div>
   )
}
ult Navbar;