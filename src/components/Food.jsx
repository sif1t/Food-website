import React, { useState } from 'react'
import { data } from '../data/data.js'
const Food = () => {
    const [foods, setFoods] = useState(data)
    //    filter type burger/pizza/etc  
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-sky-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* filter row  */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* filter type  */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Chicken</button>
                        <button onClick={() => filterType('stack')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Stack</button>
                        <button onClick={() => filterType('fish')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Fish</button>
                        <button onClick={() => filterType('drinks')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Dirinks</button>
                        <button onClick={() => filterType('cake')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Cake</button>
                    </div>
                </div>
                {/* filter price  */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$$$</button>
                        <button onClick={() => filterPrice('$$$$$')} className='m-1 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>$$$$$</button>
                    </div>
                </div>
            </div>

            {/* display food  */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-sky-600 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Food
