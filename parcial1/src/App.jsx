import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import './App.css';

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipe />}/>
        </Routes>
      </Router>
  );
}

export default App;
