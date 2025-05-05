import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav>
            <ul className="flex justify-end gap-5">
                <li
                    className="hover:scale-105 duration-100 ease-in"
                >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li
                    className="hover:scale-105 duration-100 ease-in"
                >
                    <NavLink to="/compare">Compare</NavLink>
                </li>
                <li
                    className="hover:scale-105 duration-100 ease-in"
                >
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar