import React from 'react'
import {AiOutLineClose, AiOutLineMenu} from 'react-icons/ai'

const Navbar = () => {
   return(
      <div className='flex justify-bottom items-center h-24 max-w-[1240px] mx-auto px-4  text-yellow-100'>
         <h1 className= 'w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='flex'>
         <li className='p-4'>Home</li>
         <li className='p-4'>Company</li>
         <li className='p-4'>Services</li>
         <li className='p-4'>Products</li>
         <li className='p-4'>About</li>
         <li className='p-4'>Contact</li>
            </ul>
            <div>
               <AiOutLineMenu size={20} />
               <ul>
               <li className='p-4'>Products</li>
         <li className='p-4'>About</li>
         <li className='p-4'>Contact</li>
               </ul>
            </div>
      </div>
   )
}
export default Navbar