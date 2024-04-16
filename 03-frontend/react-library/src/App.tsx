import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { ExploreTopBook } from './layout/HomePage/ExploreTopBook';
import { Carousel } from './layout/HomePage/Carousel';


function App() {
  return (
    <div>
      <NavBar />
      <ExploreTopBook/>
      <Carousel/>
    </div>
    
  );
}

export default App;
