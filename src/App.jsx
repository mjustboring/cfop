import "./app.css";
import { oll } from "./data/oll";
import { pll } from "./data/pll";
import { f2l } from "./data/f2l";
import OLL from "./components/OLL";
import PLL from "./components/PLL";
import F2L from "./components/F2L";

import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("oll");
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", () => {
      currentScrollPosition = window.pageYOffset;
      if (previousScrollPosition < currentScrollPosition) {
        setShow(false);
      } else if (previousScrollPosition > currentScrollPosition) {
        setShow(true);
      }
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <div className="App">
      {page == "oll" && (
        <>
          <header className={`${!show && "hide"}`}>
            <img src={require("./assets/oll/OLL.svg").default} />
            <div>Orientation of Last Layer</div>
          </header>
          <main>{oll.map(OLL)}</main>
        </>
      )}
      {page == "pll" && (
        <>
          <header className={`${!show && "hide"}`}>
            <img src={require("./assets/pll/PLL.svg").default} />
            <div>Permutation of Last Layer</div>
          </header>
          <main>{pll.map(PLL)}</main>
        </>
      )}
      {page == "f2l" && (
        <>
          <header className={`${!show && "hide"}`}>
            <img src={require("./assets/f2l/F2L.svg").default} />
            <div>First Two Layers</div>
          </header>
          <main>{f2l.map(F2L)}</main>
        </>
      )}
      <div className={`pageNav ${!show && "hide"}`}>
        <button
          className={`ollPage page ${page == "oll" && "active"}`}
          onClick={() => {
            setPage("oll");
            setShow(true);
          }}
        >
          OLL
        </button>
        <button
          className={`ollPage page ${page == "pll" && "active"}`}
          onClick={() => {
            setPage("pll");
            setShow(true);
          }}
        >
          PLL
        </button>
        <button
          className={`ollPage page ${page == "f2l" && "active"}`}
          onClick={() => {
            setPage("f2l");
            setShow(true);
          }}
        >
          F2L
        </button>
      </div>
    </div>
  );
}

export default App;
