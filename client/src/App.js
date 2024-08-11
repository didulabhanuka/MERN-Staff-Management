import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

//staff management
import StaffDashboard from './pages/staffManagement/StaffDashboard';

function App() {
  return (
    <Router>
      <div>

      <Routes>

        <Route path="/" element={<StaffDashboard/>} />
        
      </Routes>

      </div>
    </Router>
    
  );
}

export default App;
