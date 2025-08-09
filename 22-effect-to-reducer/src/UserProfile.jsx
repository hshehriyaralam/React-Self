import { UserContext } from "./Components/UserContextTask/UserContext"
import { useContext } from "react"
const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>User : {user.name}</h1>
    </div>
  )
}
export default UserProfile
