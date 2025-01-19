import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SinUp from "./Pages/SignUp"
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}  />
      <Route  path="/signin" element={<SignIn/>}  />
      <Route  path="/signup" element={<SinUp/>}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App
