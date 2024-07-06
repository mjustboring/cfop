import "./pll.css";
import Algorithm from "./Algorithm";

const PLL = ({ name, subset, setup, algorithm, image }) => {
  return (
    <>
      <div className="pllContainer">
        <div className="pllIcon">
          <img src={image} />
        </div>
        <div className="pllBody">
          <div className="pllInfo">
            <div className="pllCase">{name}</div>
            <div className="pllSubset">({subset})</div>
          </div>
          <div className="pllSetupContainer">
            <div className="pllSetupHeading">Stp</div>
            <div className="pllSetupBody">{Algorithm(setup)}</div>
          </div>
          <div className="pllAlgContainer">
            <div className="pllAlgHeading">Alg</div>
            <div className="pllAlgBody">{algorithm.map(Algorithm)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PLL;
