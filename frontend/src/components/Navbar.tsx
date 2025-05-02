import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/compare">Compare</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar