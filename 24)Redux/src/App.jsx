import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './app/feature/count/countSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="text-cneter p-5">
      <p  className="text-2xl font-bold">Count : {count} </p>
      <button className="px-4 py-0.5 rounded-xl border mx-4"  onClick={() => dispatch(increment())} >+1</button>
      <button className="px-4 py-0.5 rounded-xl  border"  onClick={() => dispatch(decrement())} >-1</button>
    </div>
  )
}

export default App
