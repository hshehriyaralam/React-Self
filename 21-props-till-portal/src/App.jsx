import Props from "./Props/Props"
import Person from "./Person/Person"
import Product from "./Product/Product"
import Card from "./Card/Card"
import Password from "./ConditionRendering/Password"
import ConditionCard from "./ConditionRendering/ConditionCard"
import Weather from "./ConditionRendering/Weather"
import UserStatus from "./ConditionRendering/UserStatus"
import Greeting from "./ConditionRendering/Greeting"
function App() {
  return (
    <>
      {/* <h1 className="text-red-900">HEl0olkh</h1>
      <Props name="Shery" age={20} isMarried={"No"} />
      <Person name={"Izhan"} age={18} />
      <Product name={"Haedphones"} price={499} /> */}
      {/* <Card>
        <h1>This is Card</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, rem!</p>
      </Card> */}
      {/* <Card>
        <h1>2nd</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto?</p>
      </Card>
      <Card>
        <h1>2nd</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto?</p>
      </Card> */}
      {/* <Password />
      <ConditionCard />
      <Weather weather={26} /> */}
      <UserStatus admin={true} />
      <Greeting Morning={false} />
    </>
  )
}

export default App
