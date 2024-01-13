import "./App.css";
import { oll } from "./data/oll";
import { pll } from "./data/pll";
import { f2l } from "./data/f2l";
import { OLL } from "./components/oll";
import { PLL } from "./components/pll";
import { F2L } from "./components/f2l";

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
