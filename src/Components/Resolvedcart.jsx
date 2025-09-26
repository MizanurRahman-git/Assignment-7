import React from 'react';
import checkimg from '../assets/icons8-checkmark-64.png'
import { toast } from 'react-toastify';

const Resolvedcart = ({completeData, removeFromCompleted}) => {
    return (
        <div className='bg-white mt-3 p-3 rounded-lg space-y-3 shadow-xl border-1 border-gray-200'>
            <h1 className='font-medium text-[16px]'>{completeData.title}</h1>

            <div className='flex justify-between items-center'>
                <p className='flex items-center space-x-2'><span><img className='w-5 ' src="https://i.ibb.co.com/7xdh8kzf/icons8-check-30.png"/></span> <span className='text-[#02A53B] font-medium'>Completed</span></p>

                <p onClick={() => { toast(<div className='flex items-center gap-2'>
                                    <img className='w-6 h-6' src={checkimg}/>
                                    <h1>Removed!</h1>
                                </div>);
                    removeFromCompleted(completeData)}} className='cursor-pointer text-md text-[#627382]'>Click To Remove</p>
            </div>
        </div>
    );
};

export default Resolvedcart;