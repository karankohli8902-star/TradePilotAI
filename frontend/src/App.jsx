import History from "./pages/History";
import Settings from "./pages/Settings";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";

import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;