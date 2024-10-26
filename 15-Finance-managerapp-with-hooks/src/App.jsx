import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [Amount, setAmount ]  = useState()
 const [Type , setType] = useState ("income")
 const [Transaction , setTransaction] = useState([])


 let handleTransection = () => {
  setTransaction([...Transaction, {Amount,Type}])
  setAmount("")
 }
 let TotalIncome = Transaction.reduce((acc, tarnsaction) =>tarnsaction.Type === "income" ? acc + Number(tarnsaction.Amount) : acc, 0);

 let TotalExpense = Transaction.reduce((acc, tarnsaction) =>tarnsaction.Type === "expense" ? acc + Number(tarnsaction.Amount) : acc, 0);

 let Balance = TotalIncome - TotalExpense
 
  return (
  <div className='bg-teal-900  text-normal  w-full h-screen flex justify-center items-center flex-col'>
    <div className='flex gap-x-10'>
      <div className='text-2xl text-white text-center border border-gray-500 rounded-xl w-48 py-2'>
        <h1>Total Income</h1>
        <h1>{TotalIncome}</h1>
      </div>
      <div className='text-2xl text-white text-center border border-gray-500 rounded-xl w-48 py-2'>
        <h1>Total Expense</h1>
        <h1>{TotalExpense}</h1>
      </div>
       <div className={`text-2xl text-white text-center border border-gray-500 rounded-xl w-48 py-2 ${Balance > 0 ? "bg-green-900" : "bg-rose-500"}`}>
        <h1>Balance</h1>
        <h1>{Balance}</h1>
      </div>
    </div>
    <div className='w-11/12 h-48 flex items-center justify-center '>
      <input type="number"   value={Amount}  onChange={(e) => setAmount(e.target.value)} className='border border-2 w-60 h-16 py-1 px-2  rounded-xl border-red-900 m-3 outline-none ' placeholder='Enter Your Finance' />
      <select value={Type} onChange={(e) => setType(e.target.value)} className='m-2 py-4 bg-transparent  outline-none text-white  text-2xl'>
      <option className='text-black' value="income">Income</option>
      <option className='text-black' value="expense">Expense</option>
      </select>
      <button onClick={handleTransection}
       className='p-2 px-5 border border-gray-900 rounded-xl bg-blue-800'>Submitt</button>
         </div>


       <div className='flex gap-5'>
        {Transaction.map((data, index) => {
          return (
            <div className='text-2xl text-white border border-gray-900 flex  gap-x-10 px-10 p-2 mt-2' key={index} >
              <h1 className='text-white'  >Amount {data.Amount}</h1>
              <h1 className={`${data.Type === 'income' ? "text-green-600" : "text-rose-500"}`}  >Type  {data.Type}</h1>
              </div>
          )
        })}
       </div>
  </div> 
  )
}

export default App
