import Dropdown from "./components/Dropdown.js";
import dropdownValueList from "./data/dropdownValueList.js";

function App() {

  return (
    <div className="App">
      <Dropdown list={dropdownValueList}/>
    </div>
  );
}

export default App;
