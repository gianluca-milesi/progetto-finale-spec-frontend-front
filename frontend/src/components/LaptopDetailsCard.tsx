//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Types
import { Laptop } from "../types/Laptop"

type Props = {
    laptop: Laptop
}


function LaptopDetailsCard({ laptop }: Props) {

    const context = useContext(GlobalContext)
    if (!context) return null

    const { addCompare } = context


    return (
        <div>
            <h3 className="text-xl font-bold mb-2">{laptop.title}</h3>
            <p className="italic text-sm mb-1">Categoria: {laptop.category}</p>
            {/* Aggiungi altre info: */}
            <p className="text-sm">Brand: {laptop.brand}</p>
            <p className="text-sm">RAM: {laptop.ram} GB</p>
            <p className="text-sm">Storage: {laptop.storage}</p>
            <p className="text-sm">Sistema operativo: {laptop.os}</p>
            <p className="text-sm">Anno: {laptop.releaseYear}</p>
            <button
                onClick={() => addCompare(laptop)}
                className="mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Rimuovi dal confronto
            </button>
        </div>
    )
}

export default LaptopDetailsCard