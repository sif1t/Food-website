import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  return (
      <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
         {/* lest side  */}
        <div className='flex items-center'>
         <div className=' cursor-pointer'>
            <AiOutlineMenu size={30}/>
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
         </h1>
         <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
              <p className='bg-black text-white rounded-full p-2'>Delivery</p>
              <p className='p-2'>Pick  up</p>
         </div>
      </div>
      {/* search input  */}
      
    </div>
  )
}

export default Navbar
