import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobaStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

// ROUTER
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobaStyle />
      <Nav />
      <Routes>
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
