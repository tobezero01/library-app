import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { ExploreTopBook } from './layout/HomePage/ExploreTopBook';


function App() {
  return (
    <div>
      <NavBar />
      <ExploreTopBook/>
    </div>
    
  );
}

export default App;
