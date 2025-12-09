import React from "react";

export default function UnitCard({ unit }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
      <p>{unit.name}</p>
      <p>Status: {unit.status}</p>
    </div>
  );
}
