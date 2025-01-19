import React from 'react'

function UserLists() {
    const UserList = [
        {
            id : 1,
            name : "Daniyal",
            age : 21
            
        },
        {
            id : 2,
            name : "Zain",
            age : 22
            
        },
        {
            id : 3,
            name : "Talat",
            age : 24
            
        },
        {
            id : 4,
            name : "Tasneem",
            age : 24
            
        }, {
            id : 5,
            name : "Ahmad",
            age : 16
            
        },
    ]
  return (
    <div className='text-red-900'>
      {UserList.map(({name, age, id}) => (
        <ul key={id}>
            <li>{name}  {age}</li>
            {/* <li>{age}</li> */}
        </ul>
      ))}
    </div>
  )
}

export default UserLists
