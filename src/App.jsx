import "./App.css";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import charactersJson from "./components/json/characters.json";


function App() {
  return (
    <>
      <h1>Dropdown menu</h1>
      <DropDownMenu characters={charactersJson}/>
    </>
  );
}

export default App;
