import logo from "./logo.svg";
import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      <AddHouse />
      <Rentals />

      <br />
    </div>
  );
}

export default App;
