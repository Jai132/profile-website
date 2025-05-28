export default function DecorativeElements() {
  return (
    <>
      {/* Corner decorations */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>

      {/* Side lines */}
      <div className="side-decoration left"></div>
      <div className="side-decoration right"></div>

      {/* Dot patterns */}
      <div className="dot-pattern top-right"></div>
      <div className="dot-pattern bottom-left"></div>
    </>
  )
}
