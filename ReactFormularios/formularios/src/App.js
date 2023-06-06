
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulários React</h2>
      <MyForm user={{name: "Jenifer", email: "jeniferkindermann@gmail.com", bio: "Sou programadora", role: "admin"}}/>
    </div>
  );
}

export default App;
