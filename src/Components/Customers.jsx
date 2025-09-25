import React from 'react';

const Customers = ({data, selectIssue, setSelectIssue}) => {


    const {id,title,description,customer,priority,status,createdAt} = data;

    const handleIssue = (customerData) =>{
        setSelectIssue([...selectIssue,customerData])
    }

    return (
        <div onClick={()=>handleIssue(data)} className='bg-white p-3 rounded-lg shadow-lg mb-12 mr-4 cursor-pointer'>
            <div className='flex justify-between'>
                <h1 className='font-medium text-[18px]'>{title}</h1>

                <p className={`flex items-center gap-2 py-1 px-4 rounded-full font-medium text-[16px] bg-[#B9F8CF]`}> {status == "Open" ?<img className='w-4 h-4' src="https://i.ibb.co.com/Vc74HC4V/Ellipse-22.png"/> : <img className='w-4 h-4' src="https://i.ibb.co.com/6cjKhTy0/Ellipse-22-1.png"/>}
                    
                    {status}
                    </p>
            </div>

            <p className='text-[#627382] my-2.5'>{description}</p>

            <div className='flex justify-between'>

                <div className='flex justify-between items-center gap-4'>
                    <p className='font-medium text-[#627382]'>#{id}</p>

                    <p className={`font-medium ${priority == "HIGH PRIORITY" && 'text-[#F83044]'} ${priority== "MEDIUM PRIORITY" && 'text-[#FEBB0C]'} ${priority == "LOW PRIORITY" && 'text-[#02A53B]'} `}>{priority}</p>
                </div>

                <div className='flex justify-between items-center gap-4 text-[#627382]'>
                    <p>{customer}</p>
                    <p className='flex items-center gap-1.5'><img src="https://i.ibb.co.com/HpXXHmmQ/ri-calendar-line.png"/> {createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Customers;