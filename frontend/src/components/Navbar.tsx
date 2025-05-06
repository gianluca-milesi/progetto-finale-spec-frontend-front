//React router dom
import { NavLink } from "react-router-dom"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"


function Navbar() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { compare } = context


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
                    <NavLink
                        to="/compare"
                        className={`relative ${compare.length > 0 ? "text-indigo-600 font-bold" : ""}`}
                    >
                        Compare
                        {compare.length > 0 && (
                            <span className="absolute -top-1 -right-3 bg-indigo-500 text-white text-xs rounded-full px-1.5">
                                {compare.length}
                            </span>
                        )}
                    </NavLink>
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