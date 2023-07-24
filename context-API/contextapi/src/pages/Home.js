import { useContext } from "react"
import {CounterContext} from "../components/context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {

    const { counter } = useContext(CounterContext);

    return (
        <div>
            <h1>Página Inicial</h1>
            <p>Valor do Contador: {counter}</p>
            <ChangeCounter/>
        </div>
    )
}

export default Home