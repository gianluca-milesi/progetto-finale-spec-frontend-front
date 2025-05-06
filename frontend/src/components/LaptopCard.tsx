import placeholder from "../../public/placeholder.jpg"
import laptopPlaceholder from "../../public/laptop-placeholder.jpg"
//React router dom
import { Link } from "react-router-dom"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Types
import { Laptop } from "../types/Laptop"

type Props = {
    laptop: Laptop
}


function LaptopCard({ laptop }: Props) {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { favorites, addFavorite, compare, addCompare } = context

    const isFavorite = favorites.some(l => l.id === laptop.id)
    const isCompared = compare.some(l => l.id === laptop.id)


    return (
        <Link to="/">
            <div className="flex items-center shadow-md/20 rounded-xl gap-2 m-2 relative hover:scale-102 duration-200 ease-in">
                <figure>
                    <img src={laptop.category === "laptop" ? laptopPlaceholder : placeholder} className="w-25 rounded-l-xl" />
                </figure>
                <div className="flex-col p-1">
                    <h3 className="text-lg font-medium">{laptop.title}</h3>
                    <p className="italic">{laptop.category}</p>
                    <div className="flex gap-0.5 items-center absolute bottom-2 right-2">
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addCompare(laptop)
                            }}
                            className="button !py-0.5 !px-2 shadow shadow-indigo-500/50 hover:!scale-115">
                            {isCompared ? "✓" : "✚"}
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addFavorite(laptop)
                            }}
                            className="button !py-0.5 !px-2 shadow shadow-indigo-500/50 hover:!scale-115">
                            {isFavorite ? "❤️" : "♡"}
                        </button>
                    </div>
                </div>
            </div >
        </Link >
    )
}

export default LaptopCard