
export default function Exponent({ baseNumber, exponent }) {
    const handleNumRepeat = (exp) => { //this function will print the factors (base number repeated) of exponentiation
        let repeatedMultiplication = "";
        for (let i = 0; i < exp; i++) {
            repeatedMultiplication += (i < exp - 1) ? `${baseNumber} * ` : `${baseNumber}`;
        }
        return repeatedMultiplication;
    }
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{baseNumber}<sup className="exponent-number">{exponent}</sup></p>
    <p className="exponent-result">{handleNumRepeat(exponent)} = <span className="total">{Math.pow(baseNumber, exponent)}</span></p>
  </div>
  )
}
