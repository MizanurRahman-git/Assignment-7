import React from 'react';
import { toast } from 'react-toastify';
import checkimg from '../assets/icons8-checkmark-64.png'

const Customers = ({data, selectIssue, setSelectIssue}) => {


    const {id,title,description,customer,priority,status,createdAt} = data;

    const handleIssue = (customerData) =>{
        toast(<div className='flex items-center gap-2'>
            <img className='w-6 h-6' src={checkimg}/>
            <h1>In Progress!</h1>
        </div>)
        setSelectIssue([...selectIssue,customerData])
    }

    return (
        <div onClick={()=>handleIssue(data)} className='bg-white p-3 rounded-lg shadow-lg mb-6 lg:mb-12 lg:mr-4 cursor-pointer'>
            <div className='flex justify-between'>
                <h1 className='font-medium text-md md:text-[18px]'>{title}</h1>

                <p className={`flex items-center gap-2 py-1 px-4 rounded-full font-medium text-sm sm:text-[16px] bg-[#B9F8CF]`}> {status == "Open" ?<img className='w-4 h-4' src="https://i.ibb.co.com/Vc74HC4V/Ellipse-22.png"/> : <img className='w-4 h-4' src="https://i.ibb.co.com/6cjKhTy0/Ellipse-22-1.png"/>}
                    
                    {status}
                    </p>
            </div>

            <p className='text-[#627382] my-2.5'>{description}</p>

            <div className='flex justify-between gap-4 sm:gap-0'>

                <div className='flex justify-between items-center gap-2 sm:gap-4'>
                    <p className='font-medium text-[#627382]'>#{id}</p>

                    <p className={`font-medium ${priority == "HIGH PRIORITY" && 'text-[#F83044]'} ${priority== "MEDIUM PRIORITY" && 'text-[#FEBB0C]'} ${priority == "LOW PRIORITY" && 'text-[#02A53B]'} `}>{priority}</p>
                </div>

                <div className='flex justify-between items-center sm:gap-4 gap-2 text-[#627382]'>
                    <p>{customer}</p>
                    <p className='flex items-center gap-1.5'><img src="https://i.ibb.co.com/HpXXHmmQ/ri-calendar-line.png"/> {createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Customers;