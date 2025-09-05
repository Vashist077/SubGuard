import React, { useState } from 'react';    
import Login from './login';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
    </Router>
  );
}

export default App;