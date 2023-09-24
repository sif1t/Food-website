import React from 'react'
import { data } from '../data/data.js'
const Food = () => {
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
           <h1 className='text-sky-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

           {/* filter row  */}
           <div className='flex flex-col lg:flex-row justify-between'> 
              {/* filter type  */}
              <div>
                  <p className='font-bold text-gray-700'>Filter Type</p>
                  <div className='flex justify-between flex-wrap'>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>All</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Burgers</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Pizza</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Salads</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Chicken</button>
                  </div>
              </div>
              {/* filter price  */}
              <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$$</button>
                      <button className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$$$</button>
                </div>
              </div>
           </div>

        {/* display food  */}
       <div>
        
       </div>



        </div>
    )
}

export default Food
