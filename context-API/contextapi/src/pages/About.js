import { useContext } from "react"
import { CounterContext } from "../components/context/CounterContext"
 //hook foi refatorado em home, mesmo resultado mas nao precisa importa usecontext e counter context
const About = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About