//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
import { NavLink } from "react-router-dom"
//Icons
import { FcElectronics } from "react-icons/fc"


function Navbar() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { compare, favorites } = context


    return (
        <nav className="flex justify-center sm:justify-between items-center">
            <strong className="text-2xl italic flex items-center gap-1 hidden sm:flex"><FcElectronics /> SPA Electronics</strong>
            <ul className="flex justify-end gap-5 text-lg font-bold">
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
                        Compara
                        {compare.length > 0 && (
                            <span className="absolute -top-1 -left-3 bg-indigo-500 text-white text-xs rounded-full px-1.5">
                                {compare.length}
                            </span>
                        )}
                    </NavLink>
                </li>
                <li
                    className="hover:scale-105 duration-100 ease-in"
                >
                    <NavLink
                        to="/favorites"
                        className={`relative ${favorites.length > 0 ? "text-indigo-600 font-bold" : ""}`}
                    >
                        Preferiti
                        {favorites.length > 0 && (
                            <span className="absolute -top-1 -left-3 bg-indigo-500 text-white text-xs rounded-full px-1.5">
                                {favorites.length}
                            </span>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar