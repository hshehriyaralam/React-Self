import React from 'react'

const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Passwordfunc = ({isValid}) => {
  return isValid ? <ValidPassword/> : <InvalidPassword />
}
function Password() {
  return (
    <div className='text-2xl text-center'>
      <Passwordfunc isValid={false} />
    </div>
  )
}

export default Password
