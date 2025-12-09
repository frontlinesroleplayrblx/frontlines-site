import React from "react";

function UnitCard({ unit }) {
  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "5px",
      margin: "5px",
      padding: "10px",
      width: "150px",
      textAlign: "center"
    }}>
      <h3>{unit.name}</h3>
      <p>Status: {unit.status}</p>
    </div>
  );
}

export default UnitCard;
