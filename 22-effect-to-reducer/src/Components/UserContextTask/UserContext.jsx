import { useState } from 'react'
import { createContext } from 'react'
const UserContext = createContext()
const UserProvider = ({children}) => {
    const [user, setUser] = useState({name : "Sherry"})
    const updateUser = (newName) => {
        setUser({name: newName})
    }
    return <UserContext.Provider value={{user, updateUser}} >
        {children}
    </UserContext.Provider>
}
export  {UserContext, UserProvider} 