import React from 'react';

const Progrescarts = ({cart, completed, setCompleted, removeFromSelectIssue, removeFromAllIssues}) => {

    const handleCompletedBtn = (cartInfo) =>{
        setCompleted([...completed,cartInfo]);
        removeFromSelectIssue(cartInfo);
        removeFromAllIssues(cartInfo);
    }

    return (
        <div className='bg-white mt-3 p-3 rounded-lg space-y-3'>
            <h1 className='font-medium text-[18px]'>{cart.title}</h1>
            <button onClick={() => handleCompletedBtn(cart)} className='bg-[#02A53B] text-white font-semibold w-full py-2 rounded-lg cursor-pointer'>Complete</button>
        </div>
    );
};

export default Progrescarts;