import Droparea from "./components/Droparea";
import Inputarea from "./components/Inputarea";
import Tablearea from "./components/Tablearea";

function App() {
  return (
    <div className="container">
        <div className="row align-items-center m-5 p-3 area">
          <Droparea />
          <Inputarea />
          <Tablearea />
        </div>
    </div>
  )
}

export default App;