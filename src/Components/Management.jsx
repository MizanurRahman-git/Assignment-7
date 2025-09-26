import React, { use, useState } from 'react';
import bgimg from '../assets/vector1.png'
import Container from './Container';
import Customers from './Customers';
import Progrescarts from './Progrescarts';
import Resolvedcart from './Resolvedcart';
import Emptytask from './Emptytask';
import Emptyhome from './Emptyhome';

const Management = ({fetchPromise}) => {
    const initialData = use(fetchPromise)

    const [allIssues, setAllIssues] = useState(initialData)

    const [selectIssue, setSelectIssue] = useState([])

    const [completed, setCompleted] = useState([])

    const removeFromAllIssues = (a) => {
        const allIssuesFilter = allIssues.filter(issue => issue.id !== a.id);
        setAllIssues(allIssuesFilter)
    }

    const removeFromSelectIssue = (p) => {
        const selectDataFilter = selectIssue.filter(customer => customer.id !== p.id)
        setSelectIssue(selectDataFilter)
    }
    const removeFromCompleted = (c) => {
        const completedDataFilter = completed.filter(com => com.id !== c.id)
        setCompleted(completedDataFilter)
    }


    return (
    <div>
    <Container>
      <div className="flex flex-col lg:flex-row md:justify-between gap-7 ">

        <div className="border-1 lg:w-[700px] lg:h-[230px] flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl text-white gap-7">
            <img className='hidden md:block  lg:w-[250px] lg:h-[250px]' src={bgimg}/>
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-[24px] font-semibold">In-Progress</h1>
            <p className="font-bold text-[60px] ">{selectIssue.length}</p>
          </div>
          <img className="hidden md:block -scale-x-100 lg:w-[250px] lg:h-[250px]" src={bgimg}/>
        </div>

        <div className="border-1 lg:w-[700px] lg:h-[230px] flex justify-center items-center bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-2xl text-white gap-10">
            <img className='hidden md:block lg:w-[250px] lg:h-[250px]' src={bgimg}/>
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-[24px] font-semibold">Resolved</h1>
          <p className="font-bold text-[60px] ">{completed.length}</p>
          </div>
          <img className='hidden md:block -scale-x-100 lg:w-[250px] lg:h-[250px]' src={bgimg}/>
        </div>
      </div>
    </Container>

    <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 p-3 xl:p-0 space-x-7 mt-16'>

            <div className='mx-auto lg:col-span-9 order-2 lg:order-none '>
            <h1 className='font-semibold text-[24px]'>Customer Tickets</h1>
            { allIssues.length == 0 ? <Emptyhome/> : <div className='grid lg:grid-cols-2 lg:space-x-4 lg:space-y-4 mt-2'>
            {
                allIssues.map(data=> <Customers key={data.id} data={data} selectIssue={selectIssue} setSelectIssue={setSelectIssue} />)
            }
            </div>}
            </div>

            <div className='col-span-3 order-1 lg:order-none'>
                <div className='p-3 bg-white rounded-xl'>
                    <h1 className='font-semibold text-[24px]'>Task Status</h1>
                    {selectIssue.length == 0 ? <Emptytask/> : <div>
                        {
                            selectIssue.map(cart => <Progrescarts key={cart.id} cart={cart} completed={completed} setCompleted={setCompleted} removeFromSelectIssue={removeFromSelectIssue} removeFromAllIssues={removeFromAllIssues}  />)
                        }
                    </div>}
                </div>
                <div className='bg-white my-8 p-3 rounded-xl'>
                    <h1 className='font-semibold text-[24px]'>Resolved Task</h1>
                    {completed.length == 0 ? <h1 className='text-[#627382] mt-2'>No resolved tasks yet.</h1> : <div>
                        {
                            completed.map(completeData => <Resolvedcart key={completeData.id} completeData={completeData} removeFromCompleted={removeFromCompleted} />)
                        }
                    </div>}
                </div>
            </div>
        </div>
    </Container>

    </div>


    );
};

export default Management;