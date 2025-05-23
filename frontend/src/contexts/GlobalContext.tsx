//Hooks
import { createContext } from "react"
//Types
import { Laptop } from "../types/Laptop"


type GlobalContextType = {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    laptops: Laptop[],
    favorites: Laptop[],
    addFavorite: (laptop: Laptop) => void,
    compare: Laptop[],
    addCompare: (laptopId: number) => void,
    removeCompare: (laptopId: number) => void
}

const GlobalContext = createContext<GlobalContextType | null>(null)

export default GlobalContext