//React router dom
import { useNavigate } from "react-router-dom"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Components
import LaptopCard from "../components/LaptopCard"


function FavoritesPage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { favorites } = context

    const navigate = useNavigate()


    return (
        <>
            <h1 className="text-2xl text-center font-semibold mb-4">Preferiti</h1>
            <div className="container">
                <div className="row">
                    {favorites.length > 0 ? (
                        favorites.map((l) => (
                            <div key={l.id} className="col-6">
                                <LaptopCard laptop={l} />
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-1 m-auto">
                            <p className="italic">Non ci sono preferiti...</p>
                            <button
                                onClick={() => navigate("/")}
                                className="button"
                            >
                                Aggiungi dei preferiti
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FavoritesPage