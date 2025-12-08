import React from "react";

function UnitCard({ unit }) {
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <h3>{unit.name}</h3>
      <p>Status: {unit.status}</p>
    </div>
  );
}

export default UnitCard;
