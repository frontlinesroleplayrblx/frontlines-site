import React, { useState, useEffect } from "react";
import UnitCard from "../components/UnitCard";

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
    const interval = setInterval(fetchUnits, 5000); // Poll every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CAD Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}

export default CADPage;
