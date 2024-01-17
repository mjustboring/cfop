import "./app.css";
import "./theme.css"
import { oll } from "./data/oll";
import { pll } from "./data/pll";
import { f2l } from "./data/f2l";
import OLL from "./components/OLL";
import PLL from "./components/PLL";
import F2L from "./components/F2L";

function App() {
  return (
    <div className="App">
      <h3>Orientation of the Last Layer</h3>
      {oll.map(OLL)}
      <hr />
      <h3>Permutation of the Last Layer</h3>
      {pll.map(PLL)}
      <hr />
      <h3>First Two Layers</h3>
      {f2l.map(F2L)}
    </div>
  );
}

export default App;
