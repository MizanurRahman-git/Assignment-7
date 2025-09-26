import { Suspense } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer'
import Management from './Components/Management'
import Navber from './Components/Navber'


const dataFetch = async() =>{
  const result = await fetch('/customers.json')
  return result.json();
}

function App() {

  const fetchPromise = dataFetch()

  return (
    <div>
      <Navber />

      <div className='bg-[#f5f5f5] py-18'>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Management fetchPromise={fetchPromise} />
        </Suspense>
      </div>

      <Footer />

    <ToastContainer />

    </div>
  )
}

export default App
