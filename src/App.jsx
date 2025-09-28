import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChrt from './components/MarksChrt/MarksChrt'




const PricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')


function App() {
  

  return (
    <>
     <header>
      <NavBar></NavBar>

       {/* <DaisyNav></DaisyNav> */}

     </header>
     <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <MarksChrt marksPromise={marksPromise}></MarksChrt>

      </Suspense>


      <ResultChart></ResultChart>

     </main>
     
     
    </>
  )
}

export default App
