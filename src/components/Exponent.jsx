export default function Exponent({num}) {
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{num}^ ²</p>
    <p className="exponent-result">{num} * {num} = <span className="total">{num * num} </span></p>
  </div>
  )
}
