import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import ExerciseDetails from './pages/ExerciseDetails.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <Router>
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetails />}></Route>
      </Routes>
      <Footer />
    </Box>
    </Router>
  );
}

export default App;
