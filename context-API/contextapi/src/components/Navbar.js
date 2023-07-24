import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Página Inicial</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/products">Produtos</NavLink>
        </nav>
    )
}

export default Navbar