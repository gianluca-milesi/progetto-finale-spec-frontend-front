//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext, memo } from "react"
//Components
import { Laptop } from "../types/Laptop.tsx"

type Props = {
    laptop: Laptop
}


function FavoriteButton({ laptop }: Props) {

    const context = useContext(GlobalContext)
    if (!context) return null
    const { favorites, addFavorite } = context

    const isFavorite = favorites.some(l => l.id === laptop.id)

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addFavorite(laptop)
            }}
            className="custom-button !py-0.5 !px-2 text-lg hover:!scale-115"
        >
            {isFavorite ? "❤️" : "🤍"}
        </button>
    )
}

export default memo(FavoriteButton)