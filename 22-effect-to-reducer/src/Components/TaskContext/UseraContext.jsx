import { useContext, useState, createContext } from "react";

const ProfileContext = createContext()

const ProfileProvider = ({children}) =>{
    const [profile, setProfile] = useState({name : "Sherry"})
    const updateProile = (newName) => {
        setProfile({name : newName})
    }
    return(
        <ProfileContext.Provider value={{profile, updateProile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export {ProfileContext, ProfileProvider}