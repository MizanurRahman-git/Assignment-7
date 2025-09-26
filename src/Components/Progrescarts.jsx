import React from 'react';
import checkimg from '../assets/icons8-checkmark-64.png'
import { toast } from 'react-toastify';

const Progrescarts = ({cart, completed, setCompleted, removeFromSelectIssue, removeFromAllIssues}) => {

    const handleCompletedBtn = (cartInfo) =>{
        toast(<div className='flex items-center gap-2'>
                    <img className='w-6 h-6' src={checkimg}/>
                    <h1>Completed!</h1>
                </div>);
        setCompleted([...completed,cartInfo]);
        removeFromSelectIssue(cartInfo);
        removeFromAllIssues(cartInfo);
    }

    return (
        <div className='bg-white mt-3 p-3 rounded-lg space-y-3 shadow-lg border-1 border-gray-200'>
            <h1 className='font-medium text-[18px]'>{cart.title}</h1>
            <button onClick={() => handleCompletedBtn(cart)} className='bg-[#02A53B] text-white font-semibold w-full py-2 rounded-lg cursor-pointer'>Complete</button>
        </div>
    );
};

export default Progrescarts;