/*
import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

export default function StartPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontlines Roleplay</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
*/

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function StartPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <Marketplace />
      <CTA />
      <Footer />
    </div>
  );
}


