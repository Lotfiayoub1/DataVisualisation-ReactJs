import "./App.css";
import Navebar from "./components/Navebar";

import Chart from "./components/Chart";
import Sidebar from "./components/Sidebar";
import LineChart from "./components/LineChart";
import Cercle from "./components/Cercle";
function App() {
  return (
    <div className="App">
      <Navebar />
      {/* i have to add a sidebar  */}
      <div className="BarChart">
        <Sidebar />

        <Chart />
        <Cercle />
      </div>
      <div className="line">
        <Sidebar />
        <LineChart />
      </div>
    </div>
  );
}

export default App;
