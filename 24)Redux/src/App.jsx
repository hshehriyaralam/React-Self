import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './app/feature/count/countSlice'
import {useGetPostsQuery, useAddPostMutation } from '../src/app/services/api'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const {data , error, isLoading} = useGetPostsQuery()
   const [addPost] = useAddPostMutation()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  
  return (
    <div className="text-cneter p-5">
      <p  className="text-2xl font-bold">Count : {count} </p>
      <button className="px-4 py-0.5 rounded-xl border mx-4"  onClick={() => dispatch(increment())} >+1</button>
      <button className="px-4 py-0.5 rounded-xl  border"  onClick={() => dispatch(decrement())} >-1</button>
       <h1>Posts</h1>
      {data.map((post) => (
        <p 
         className='border p-2 my-2'
          key={post.id}>{post.title}</p>
      ))}

      <button
        onClick={() =>
          addPost({ title: 'New Post', body: 'Hello RTK Query', userId: 1 })
        }
      ></button>
    </div>
  )
}

export default App
