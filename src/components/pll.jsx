const PLL = ({ name, subset, setup, algorithm, image }) => {
  return (
    <>
      <table>
        <tr>
          <td>
            <img src={image} />
          </td>
          <td>
            <h4>
              {name}
              <span className="sub">&nbsp;({subset})</span>{" "}
            </h4>
            <hr />
            <p>
              <span className="set">Stp:</span> {setup}
            </p>
            <hr />
            <p>
              <span className="set">Alg:</span> {algorithm}
            </p>
          </td>
        </tr>
      </table>
      <hr />
    </>
  );
};

export { PLL };
