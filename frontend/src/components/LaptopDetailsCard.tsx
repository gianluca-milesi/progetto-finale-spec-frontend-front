//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
import { Link } from "react-router-dom"
//Types
import { Laptop } from "../types/Laptop.ts"
//Images
import placeholder from "../../public/placeholder.jpg"

type Props = {
    laptop: Laptop,
    index: number
}


function LaptopDetailsCard({ laptop, index }: Props) {

    const context = useContext(GlobalContext)
    if (!context) return null

    const { removeCompare } = context

    const isImageLeft = index % 2 === 0;


    return (
        <Link to={`/laptop/${laptop.id}`}>
            <div className="flex justify-center mb-4">
                <div className={`flex ${isImageLeft ? "flex-row" : "flex-row-reverse"} w-full max-w-[1200px] bg-[var(--color-surface)] hover:bg-[var(--color-bg)] transition`}>
                    <div className="relative flex-shrink-0 w-1/2 h-[300px] overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src={laptop.image || placeholder}
                            alt={laptop.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className={`flex ${isImageLeft ? "items-end" : ""} p-4 flex flex-col justify-between w-1/2 min-h-[300px]`}>
                        <h3 className="text-xl font-bold mb-2">{laptop.title}</h3>
                        <p className="italic text-sm mb-1 text-[var(--color-text-secondary)]">Categoria: <span className="italic text-xs bg-[var(--color-surface-hover)] py-1 px-2 rounded-lg text-white z-10">{laptop.category}</span></p>
                        <p className="text-sm"><span className="font-semibold italic">Brand: </span>{laptop.brand}</p>
                        <p className="text-sm"><span className="font-semibold italic">RAM: </span>{laptop.ram} GB</p>
                        <p className="text-sm"><span className="font-semibold italic">Storage: </span>{laptop.storage}</p>
                        <p className="text-sm"><span className="font-semibold italic">Sistema Operativo: </span>{laptop.os}</p>
                        <p className="text-sm"><span className="font-semibold italic">Anno: </span>{laptop.releaseYear}</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                removeCompare(laptop.id)
                            }}
                            className="w-full cursor-pointer mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Rimuovi dal confronto
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LaptopDetailsCard