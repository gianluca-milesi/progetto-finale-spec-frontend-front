//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
import { useParams } from "react-router-dom"
//Pages
import NotFoundPage from "./NotFoundPage.tsx"
//Components
import LaptopDetailInfo from "../components/LaptopDetailInfo.tsx"
import CompareButton from "../components/CompareButton.tsx"
import FavoriteButton from "../components/FavoriteButton.tsx"


function LaptopDetailPage() {
    const { id } = useParams()
    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { laptops } = context

    const laptop = laptops.find(l => l.id === parseInt(id || "", 10))
    if (!laptop) return <NotFoundPage />


    return (
        <div className="container max-w-xl py-6">
            <h2 className="text-2xl font-semibold text-center mb-6">{laptop.title}</h2>
            <LaptopDetailInfo laptop={laptop} />
            <div className="flex gap-4 justify-center mt-6">
                <CompareButton laptop={laptop} />
                <FavoriteButton laptop={laptop} />
            </div>
        </div>
    )
}

export default LaptopDetailPage