import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import "./App.css"

function App() {
  return (
    <div >
      <Topbar /> 
      
      <h3 className="h3">Peliculas más populares</h3>
      <Movies />

      <Footer />
    </div>
  );
}

export default App;
