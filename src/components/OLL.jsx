import "./oll.css";
import Algorithm from "./Algorithm";

const OLL = ({ name, subset, setup, algorithm, image }) => {
  return (
    <>
      <div className="ollContainer">
        <div className="ollIcon">
          <img src={image} />
        </div>
        <div className="ollBody">
          <div className="ollInfo">
            <div className="ollCase">{name}</div>
            <div className="ollSubset">({subset})</div>
          </div>
          <div className="ollSetupContainer">
            <div className="ollSetupHeading">Stp</div>
            <div className="ollSetupBody">{Algorithm(setup)}</div>
          </div>
          <div className="ollAlgContainer">
            <div className="ollAlgHeading">Alg</div>
            <div className="ollAlgBody">{Algorithm(algorithm)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OLL;
