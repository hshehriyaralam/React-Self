import LaernComponents from './LearnComponets/LearnComponents'
import Expression from './JSX/Expression'
import Lists from "./LISTS/Lists"
function App() {
  

  return (
    <div className='flex  flex-col gap-1'>
    <LaernComponents text="Components" />
    <Expression text={'Expression in JSX'} />
    <Lists text={"List in React"} />

    </div>
  )
}

export default App
