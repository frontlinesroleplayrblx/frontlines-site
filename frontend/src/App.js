import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UnitsPage from "./pages/UnitsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/units" element={<UnitsPage />} />
      </Routes>
    </Router>
  );
}
