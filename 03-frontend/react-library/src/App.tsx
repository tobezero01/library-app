import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { ExploreTopBook } from './layout/HomePage/ExploreTopBook';
import { Carousel } from './layout/HomePage/Carousel';
import { Heros } from './layout/HomePage/Heros';
import { LibraryServices } from './layout/HomePage/LibraryServices';


function App() {
  return (
    <div>
      <NavBar />
      <ExploreTopBook/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
    </div>
    
  );
}

export default App;
