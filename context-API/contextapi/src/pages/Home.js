// import { useContext } from "react"
// import {CounterContext} from "../components/context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    const { counter} = useCounterContext()

    const { color, dispatch } = useTitleColorContext()
    // const { counter } = useContext(CounterContext);
    const setTitleColor = (color) => {
        dispatch({ type: color})
    }
    return (
        <div>
            <h1 style={{color: color}}>Página Inicial</h1>
            <p>Valor do Contador: {counter}</p>
            <ChangeCounter/>
            <div>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>     
            </div>
        </div>
    )
}

export default Home