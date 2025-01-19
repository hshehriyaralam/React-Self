import React from 'react'
const AdminMessage = () => <h1 className='text-2xl  text-blue-900'> Welcome! Admin</h1>
const UserMessage = () => <h1 className='text-2xl  text-blue-900'> Welcome! User</h1>

function UserStatus({admin}) {
  return admin ? <AdminMessage /> : <UserMessage />
   
}

export default UserStatus;
