import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Button, Flex } from 'antd';
function App() {
  let Range = 1
  let [RangCount, setRangeCount] = useState(Range)
  let RangeInc = () => {
    let IncreaseRange = RangCount + 1;
    setRangeCount(IncreaseRange)
    
    
  }
  let RangeDec = () => {
    let DecreaseRange = RangCount - 1;
    setRangeCount(DecreaseRange)
    
  }
  let count = 5
  let [counter, setCounter] = useState(count)
  let countInc = () =>{
    
    setCounter((PreCounter ) => counter + RangCount )
    
    // console.log(counter);
    
  }
  let countDec = () => {
    let increaseCountRange = counter - RangCount
    setCounter(increaseCountRange)
  }
  return (
   <div className='w-2/5 h-96 bg-slate-950 ms-auto me-auto mt-20 rounded-2xl shadow-lg shadow-indigo-500/70  '>
    <br />
    <h1 className='text-4xl text-center mt-3 text-slate-300  font-serif font-bold '>Counter</h1>
    <br />
    <div className='flex  items-center  justify-center mt-4 gap-9'>
    <Button type="primary" className=' w-28  bg-purple-900 shadow-lg shadow-purple-500/50 text-cyan-80 text-base font-semibold rounded-2xl  font-serif' onClick={RangeInc}  >
    Inc Range</Button>
   <p className='text-3xl font-serif	text-slate-300'>{RangCount}</p>
   <Button type="primary" className=' w-28  bg-purple-900 shadow-lg shadow-purple-500/50  text-base font-semibold rounded-2xl text-cyan-80 font-serif' onClick={RangeDec}  >Dec Range</Button>
   </div>
   <br />
   <h2 className='text-slate-300  font-serif font-bold text-center text-3xl mt-5'>Count : {counter} </h2>
   <div className='flex  items-center  justify-center mt-7 gap-20' >
   <Button type="primary" className=' w-28  bg-amber-950 shadow-lg shadow-amber-500/20 text-cyan-80 text-base font-semibold rounded-2xl  font-serif' onClick={countInc} > Inc Count</Button>
   <Button type="primary" className=' w-28  bg-amber-950 shadow-lg shadow-amber-500/20 text-cyan-80 text-base font-semibold rounded-2xl  font-serif' onClick={countDec}   > Dec Count</Button>
   </div>
   </div>
  )
}

export default App
