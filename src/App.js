import "./App.css";
import { cities } from "./data/data";
import MyCard from "./components/Card";

function App() {
  return (
    <div className="App">
      <MyCard data={cities} />
    </div>
  );
}
 
export default App;
