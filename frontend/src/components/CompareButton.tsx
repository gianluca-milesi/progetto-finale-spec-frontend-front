//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Components
import { Laptop } from "../types/Laptop.tsx"

type Props = {
    laptop: Laptop
}


function CompareButton({ laptop }: Props) {

    const context = useContext(GlobalContext)
    if (!context) return null
    const { compare, addCompare } = context

    const isCompared = compare.some(l => l.id === laptop.id)

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addCompare(laptop)
            }}
            className="button !py-0.5 !px-2 shadow shadow-indigo-500/50 hover:!scale-115"
        >
            {isCompared ? "✓" : "✚"}
        </button>
    )
}

export default CompareButton