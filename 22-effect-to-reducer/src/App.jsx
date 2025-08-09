import React from 'react'
import UseEffect from './Components/UseEffect/UseEffect'
import FetchingUseState from './Components/UseEffect/fetchingUseState'
import BasicUseEffect from './Components/PracticeUseEffect/BasicUseEffect'
import UseEffectDependency from './Components/PracticeUseEffect/UseEffectDependency'
import FetchDataEffect from './Components/PracticeUseEffect/FetchDataEffect'
import ComponentA from './Components/PropDrilllling/ComponentA'
import Compoents1 from './Components/ContextAPI/Compoents1'
import PageOne from './Components/useContext/PageOne'
import UserConetxt from './Components/PracticeUseContext/UserConetxt'
// import UserProfile from './Components/PracticeUseContext/UserProfile'
import UpdateUser from './Components/PracticeUseContext/UpdateUser'
import  { UserProvider } from './Components/UserContextTask/UserContext'
// import UserProfile from './Components/UserContextTask/UserProfile'
import UpdateProfile from './Components/UserContextTask/UpdateProfile'
import { ProfileProvider } from './Components/TaskContext/UseraContext'
import ProfileRender from './Components/TaskContext/ProfileRender'
import ProfileUpdate from './Components/TaskContext/ProfileUpdate'
import UseReducer from './Components/UseReducer/UseReducer'
import Counter from './Components/PracticeUseReducer/Counter'
import InputReducer from './Components/PracticeUseReducer/InputReducer'

const App = () => {
  return (
    <div className='text-2xl text-center py-5'>
      <h1>App</h1>
      {/* <UseEffect /> */}
      {/* <FetchingUseState /> */}
      {/* <BasicUseEffect /> */}
      {/* <UseEffectDependency /> */}
      {/* <FetchDataEffect /> */}
      {/* <ComponentA /> */}
      {/* <Compoents1 /> */}
      {/* <PageOne /> */}
      {/* <UserConetxt /> */}
      {/* <UserProfile /> */}
      {/* <UpdateUser /> */}
      {/* <UserProvider>
        <UserProfile />
        <UpdateProfile />
      </UserProvider> */}
      {/* <ProfileProvider >
        <ProfileRender />
        <ProfileUpdate />
      </ProfileProvider> */}
      {/* <UseReducer /> */}
      {/* <Counter /> */}
      <InputReducer />
    </div>
  ) 
}

export default App
