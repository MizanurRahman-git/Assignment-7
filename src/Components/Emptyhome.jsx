import React from 'react';
import nodata from '../assets/No-Data.png'

const Emptyhome = () => {
    return (
        <div className='text-center mt-10'>
            <img className='w-[250px] rounded-t-full' src={nodata}/>

            <h1 className='text-2xl font-bold mt-3'>Data Not Available</h1>
            <p>Here is no data to show you right now.</p>
        </div>
    );
};

export default Emptyhome;