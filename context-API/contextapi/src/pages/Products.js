import { useContext } from "react"
import { CounterContext } from "../components/context/CounterContext"

const Products = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>Produtos</h1>
      <p>Counter value: {counter}</p>
    </div>
  )
}

export default Products