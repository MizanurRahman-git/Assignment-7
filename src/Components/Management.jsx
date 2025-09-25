import React, { use, useState } from 'react';
import Container from './Container';
import Customers from './Customers';
import Progrescarts from './Progrescarts';
import Resolvedcart from './Resolvedcart';

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
      <div className="flex justify-between gap-7 ">
        <div className="border-1 w-[700px] h-[230px] flex flex-col justify-center items-center bg-amber-200 rounded-2xl text-white ">
          <h1 className="text-[24px] font-semibold">In-Progress</h1>
          <p className="font-bold text-[60px] ">{selectIssue.length}</p>
        </div>
        <div className="border-1 w-[700px] h-[230px] flex flex-col justify-center items-center bg-gray-400 rounded-2xl text-white ">
          <h1 className="text-[24px] font-semibold">Resolved</h1>
          <p className="font-bold text-[60px] ">{completed.length}</p>
        </div>
      </div>
    </Container>

    <Container>
        <div className='grid grid-cols-12 space-x-7 mt-16'>

            <div className='col-span-9 border'>
            <h1 className='font-semibold text-[24px]'>Customer Tickets</h1>
            <div className='grid grid-cols-2 space-x-4 space-y-4 mt-2'>
            {
                allIssues.map(data=> <Customers key={data.id} data={data} selectIssue={selectIssue} setSelectIssue={setSelectIssue} />)
            }
            </div>
            </div>

            <div className='border col-span-3'>
                <div>
                    <h1 className='font-semibold text-[24px]'>Task Status</h1>
                    <div>
                        {
                            selectIssue.map(cart => <Progrescarts key={cart.id} cart={cart} completed={completed} setCompleted={setCompleted} removeFromSelectIssue={removeFromSelectIssue} removeFromAllIssues={removeFromAllIssues}  />)
                        }
                    </div>
                </div>
                <div className='bg-white mt-3 p-3 rounded-xl'>
                    <h1 className='font-semibold text-[24px]'>Resolved Task</h1>
                    <div>
                        {
                            completed.map(completeData => <Resolvedcart key={completeData.id} completeData={completeData} removeFromCompleted={removeFromCompleted} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </Container>

    </div>


    );
};

export default Management;