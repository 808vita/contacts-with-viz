import React from 'react';

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
