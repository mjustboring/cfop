import DOMPurify from "dompurify";
import "./algorithm.css";

const Algorithm = (alg) => {
  alg = alg.replaceAll(
    /<.*?>/g,
    (x) => `<span class="algorithmImvClr">${x.match(/(?<=<).*?(?=>)/)}</span>`
  );
  alg = alg.replaceAll(
    /{.*?}/g,
    (x) => `<span class="algorithmAufClr">${x.match(/(?<={).*?(?=})/)}</span>`
  );
  alg = alg.replaceAll(
    /\(|\)/g,
    (x) => `<span class="algorithmBraClr">${x}</span>`
  );
  alg = alg.replaceAll(
    /[xyz]['\d]*/g,
    (x) => `<span class="algorithmRotClr">${x}</span>`
  );
  alg = alg.replaceAll(
    /\|/g,
    (x) => `<span class="algorithmOrClr">${x}</span>`
  );

  return (
    <>
      <div
        className="algorithm"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(alg) }}
      ></div>
    </>
  );
};

const algClean = (alg) => {
  return alg
    .replaceAll(/[^rludfbRLUDFBSEMxyz'\s\d]/g, "")
    .replaceAll(/\s+/g, " ")
    .trim();
};

const algReverse = (alg) => {
  return algClean(alg).split(" ").reverse().join(" ");
};

const algInvert = (alg) => {
  return alg
    .map((i) => i + "'")
    .map((i) => i.replace("''", ""))
    .map((i) => i.replace(/(?<=2)'/, ""))
    .reverse()
    .join(" ");
};

export default Algorithm;
export { algClean, algInvert, algReverse };
