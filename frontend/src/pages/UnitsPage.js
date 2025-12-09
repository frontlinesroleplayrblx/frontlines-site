// src/pages/UnitsPage.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function UnitsPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; // redirect if not logged in
  }

  return (
    <div>
      <h1>CAD Dashboard</h1>
      <p>Units dashboard for {user.username}</p>
    </div>
  );
}
