import React, { useState, useEffect } from "react";

function CADPage() {
  const [units, setUnits] = useState([]);

  const fetchUnits = async () => {
    try {
      const res = await fetch("https://frontlines-rp-rblx.onrender.com/units");
      const data = await res.json();
      setUnits(data);
    } catch (err) {
      console.error("Error fetching units", err);
    }
  };

  useEffect(() => {
    fetchUnits();
    const interval = setInterval(fetchUnits, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CAD Dashboard</h1>

      {units.map((unit) => (
        <div
          key={unit.id}
          style={{
            border: "1px solid #999",
            padding: "10px",
            margin: "10px",
            width: "200px",
            display: "inline-block"
          }}
        >
          <h3>{unit.name}</h3>
          <p>Status: {unit.status}</p>
        </div>
      ))}
    </div>
  );
}

export default CADPage;
