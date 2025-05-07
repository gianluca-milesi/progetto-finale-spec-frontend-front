//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
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

    const navigate = useNavigate()


    return (
        <div className="container">
            <div className="relative flex justify-center items-center mb-4">
                <button className="custom-button absolute left-0 scale-90" onClick={() => navigate(-1)}>Indietro</button>
                <h2 className="text-2xl text-center font-semibold">{laptop.title}</h2>
            </div>
            <LaptopDetailInfo laptop={laptop} />
            <div className="flex gap-2 justify-center mt-4">
                <CompareButton laptop={laptop} />
                <FavoriteButton laptop={laptop} />
            </div>
        </div>
    )
}

export default LaptopDetailPage