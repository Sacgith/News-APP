import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./components/Navb";
import News from "./components/News";
function App() {
  return(
    <>
    <Navb/>
    <News pageSize={5}/>
    </>
  )
}

export default App;