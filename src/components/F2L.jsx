import "./f2l.css";
import Algorithm from "./Algorithm";

const F2L = ({ name, subset, setup, algorithm, image }) => {
  return (
    <>
      <div className="f2lContainer">
        <div className="f2lInfo">
          <div className="f2lCase">{name}</div>
          <div className="f2lIcon">
            <img src={image} />
          </div>
          <div className="f2lSubset">{subset}</div>
        </div>
        <div className="f2lBody">
          <div className="f2lSetupContainer">
            <div className="f2lSetupHeading">Setup</div>
            <div className="f2lSetupBody">{Algorithm(setup)}</div>
          </div>
          <hr />
          <div className="f2lAlgContainer">
            <div className="f2lAlgHeading">Algorithms</div>
            <div className="f2lAlgBody">
              <div className="f2lAlgDiv border-bottom">
                <div className="f2lAlgCat">FR</div>
                <div className="f2lAlgCatBody">
                  {algorithm.fr.map(Algorithm)}
                </div>
              </div>
              <div className="f2lAlgDiv border-bottom">
                <div className="f2lAlgCat">FL</div>
                <div className="f2lAlgCatBody">
                  {algorithm.fl.map(Algorithm)}
                </div>
              </div>
              <div className="f2lAlgDiv border-bottom">
                <div className="f2lAlgCat">BL</div>
                <div className="f2lAlgCatBody">
                  {algorithm.bl.map(Algorithm)}
                </div>
              </div>
              <div className="f2lAlgDiv">
                <div className="f2lAlgCat">BR</div>
                <div className="f2lAlgCatBody">
                  {algorithm.br.map(Algorithm)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default F2L;
