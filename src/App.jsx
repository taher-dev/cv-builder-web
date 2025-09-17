import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BuilderPage from "./pages/BuilderPage";

function App() {
  // State is now managed here, in the common parent component.
  const [language, setLanguage] = useState("EN");

  return (
    <BrowserRouter>
      <Routes>
        {/* Pass state and the function to update it down to the pages as props */}
        <Route
          path="/"
          element={
            <LandingPage language={language} setLanguage={setLanguage} />
          }
        />
        <Route
          path="/builder"
          element={
            <BuilderPage language={language} setLanguage={setLanguage} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
