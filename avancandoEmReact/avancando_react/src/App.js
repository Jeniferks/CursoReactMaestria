import React, { useState } from 'react';
import './App.css';
import CondicionalRender from './CondicionalRender';
import img2 from "./assets/img2.png";
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {

  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 1, brand: "KIA", color: "Branco", newCar: false, km: 44440 },
    { id: 1, brand: "Renault", color: "Azul", newCar: false, km: 56890 },
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id:1, name: "Jenifer", age: 31},
    {id:2, name: "Akin", age: 17},
    {id:3, name: "Daiane", age: 31},

  ]

  



  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.png" alt="foto minha" />
      </div>
      <div>
        <img src={img2} alt="foto" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring*/}
      <CarDetails brand="VW" km={1000000} Color="Azul" newCar={false} />
      {/*reaproveitando*/}
      <CarDetails brand="ford" km={0} Color="Azul" newCar={true} />
      <CarDetails brand="fiat" km={554544} Color="Azul" newCar={false} />

      {/*Loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      <Fragment propFragment="teste" />
      {/*children*/}
      <Container>
        <p>este é o conteudo</p>
      </Container>


      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage} />

      {/*state lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/*Desafio 4*/}
      {users.map((user)=> (
        <UserDetails
        key = {user.id}
        name = {user.name}
        job = {user.job}
        age = {user.age}
        />
      ))}


    </div>
  );
}

export default App;
