import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://frontlines-rp-rblx.onrender.com";

export default function UnitsPage() {
  const [units, setUnits] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const loadUnits = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/units`);
        const data = await response.json();

        if (data.success) setUnits(data.units);
        else setMsg(data.msg);
      } catch {
        setMsg("Error loading units.");
      }
    };

    loadUnits();
  }, []);

  return (
    <div>
      <h1>Active Units</h1>

      {msg && <p>{msg}</p>}

      <ul>
        {units.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}
