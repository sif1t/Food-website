import React from 'react';

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 10/20</p>
                    <button className=' bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className=' bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1571162242324-f1607b1eceaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className=' bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1503485838016-53579610c389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGRlc3NlcnRzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='/'
                />
            </div>
        </div>
    );
};

export default HeadlineCards;