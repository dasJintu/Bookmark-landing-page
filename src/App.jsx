import React from "react";
import Extensions from "./components/Extensions";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StayUpdate from "./components/StayUpdate";

function App() {
  return (
    <div className="font-rubik">
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <FAQ />
      <StayUpdate />
      <Footer />
    </div>
  );
}

export default App;
