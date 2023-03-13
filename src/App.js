import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
import { Originals,Actions, ComedyMovies,HorrorMovies,RomanceMovies } from './urls';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Posts url={Originals} title='Originals' />
    <Posts url={Actions} title='Action Movies' isSmall/>
    <Posts url={ComedyMovies} title='Comedy Movies' isSmall/>
    <Posts url={HorrorMovies} title='Horror Movies' isSmall/>
    <Posts url={RomanceMovies} title='Romantic Movies' isSmall/>

     </div>
  );
}

export default App;
