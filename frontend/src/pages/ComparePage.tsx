//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
//Components
import LaptopDetailsCard from "../components/LaptopDetailsCard.tsx"


function ComparePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { compare } = context

    const navigate = useNavigate()

    return (
        <>
            <h2 className="text-2xl text-center font-semibold mb-4">Confronta Laptop</h2>
            <div className="container !px-25">
                <div className="row">
                    {compare.length > 0 ? (
                        compare.map((l) => (
                            <div key={l.id} className="col-6">
                                <LaptopDetailsCard laptop={l} />
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-1 m-auto">
                            <p className="italic">Non ci sono articoli da confrontare...</p>
                            <button
                                onClick={() => navigate("/")}
                                className="custom-button"
                            >
                                Aggiungi al confronto
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ComparePage