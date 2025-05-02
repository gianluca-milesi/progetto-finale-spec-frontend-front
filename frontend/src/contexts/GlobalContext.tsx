import { createContext } from "react"
//Types
import { Laptop } from "../types/Laptop"


type GlobalContextType = {
    laptops: Laptop[]
}

const GlobalContext = createContext<GlobalContextType | null>(null)

export default GlobalContext