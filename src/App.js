import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
import { Originals,Actions, ComedyMovies } from './urls';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Posts url={Originals} title='Originals' />
    <Posts url={Actions} title='Actions' isSmall/>
    <Posts url={ComedyMovies} title='Comedy Movies' isSmall/>
    </div>
  );
}

export default App;
