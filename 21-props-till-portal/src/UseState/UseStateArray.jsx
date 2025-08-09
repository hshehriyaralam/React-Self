import {useState} from 'react'

function UseStateArray() {
    const [friends, setFriends] = useState(["Ali",'Daniyal'])

    const AddNew = () => {
        setFriends([...friends , "Hamza"])
    }


    const Remove = () => setFriends(friends.filter( (f) => f === "Ali"))

    const Update = () => setFriends(friends.map((f) => f === "Daniyal" ? "Daniyal Israel" : f ))
  return (
    <div className='text-2xl text-center my-10'>
      <h1>useState with Array</h1>
      {friends.map((f) => (
        <li>{f}</li>
      ))}
      <button className='p-3 border border-gray-500 mt-5' onClick={AddNew}>Add New Friend</button>
      <button className='p-3 border border-gray-500 mt-5' onClick={Remove}>Remove Friend</button>
      <button className='p-3 border border-gray-500 mt-5' onClick={Update}>Update Friend</button>
    </div>
  )
}

export default UseStateArray
 