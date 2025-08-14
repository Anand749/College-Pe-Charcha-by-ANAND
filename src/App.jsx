
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/sections/Home";
import CollegePredictor from "./components/Section2/CollegePredictor";
import { useTheme } from "./context/ThemeContext";
// import FullTeam from "./components/sections/FullTeam";

 
function App() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={`app-container transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<CollegePredictor />} />
          {/* <Route path="/full-team" element={<FullTeam />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
