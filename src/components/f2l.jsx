import "./f2l.css";

const F2L = ({ name, subset, setup, algorithm, image }) => {
  const Alg = (alg) => {
    return (
      <>
        <div className="alg">{alg}</div>
      </>
    );
  };
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
          <div className="setupContainer">
            <div className="setupHeading">Setup</div>
            <div className="setupDiv">
              {Alg(setup)}
            </div>
          </div>
          <hr />
          <div className="algContainer">
            <div className="algHeading">Algorithms</div>
            <div className="algBody">
              <div className="algDiv">
                <div className="algCat">FR</div>
                <div className="algCatBody">{algorithm.fr.map(Alg)}</div>
              </div>
              <hr />
              <div className="algDiv">
                <div className="algCat">FL</div>
                <div className="algCatBody">{algorithm.fl.map(Alg)}</div>
              </div>
              <hr />
              <div className="algDiv">
                <div className="algCat">BL</div>
                <div className="algCatBody">{algorithm.bl.map(Alg)}</div>
              </div>
              <hr />
              <div className="algDiv">
                <div className="algCat">BR</div>
                <div className="algCatBody">{algorithm.br.map(Alg)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export { F2L };
