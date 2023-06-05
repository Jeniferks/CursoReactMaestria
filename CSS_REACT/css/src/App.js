
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = true;
  return (
    <div className="App">
      {/*css global*/}
      <h1>React com CSS</h1>
      {/*css de componente*/}
      <MyComponent />
      <p> este parágrafo é do App.js</p>
      {/*Inline Css*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/*CSS Inline dinâmico*/}
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      {/*Classe dinamica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinâmica</h2>
      {/*CSS modules*/}
    <Title/>




    </div>
  );
}

export default App;
