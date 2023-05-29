import React from 'react';
import './App.css';
import img2 from "./assets/img2.png"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './CondicionalRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src = "/img1.png" alt="foto minha"/>
      </div>
      <div>
        <img src ={img2} alt = "foto"/>
      </div>
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
    </div>
  );
}

export default App;
