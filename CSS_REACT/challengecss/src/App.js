
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const myCars = [
    {name: "Kia", Km:100 , color: "Branca"},
    {name: "Fusca", Km:32000 , color: "Cinza"},
    {name: "Gol", Km: 0, color: "Vermelho"}
];

  return (
    <div className="App">
      <h1>Challenge CSS</h1>
      
      <div className='car-container'>
        {myCars.map((car) => (
          <CarDetails car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
