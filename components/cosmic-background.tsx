export default function CosmicBackground() {
  return (
    <>
      {/* Nebula effects */}
      <div className="nebula-bg nebula-purple" style={{ top: "10%", left: "80%" }} />
      <div className="nebula-bg nebula-blue" style={{ top: "60%", left: "10%" }} />
      <div className="nebula-bg nebula-purple" style={{ top: "80%", right: "20%" }} />

      {/* Constellation lines */}
      <div
        className="constellation-line"
        style={{ top: "25%", left: "20%", width: "200px", transform: "rotate(45deg)" }}
      />
      <div
        className="constellation-line"
        style={{ top: "70%", right: "15%", width: "150px", transform: "rotate(-30deg)" }}
      />
      <div
        className="constellation-line"
        style={{ bottom: "20%", left: "40%", width: "180px", transform: "rotate(15deg)" }}
      />
    </>
  )
}
