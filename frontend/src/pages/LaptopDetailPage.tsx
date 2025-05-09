//Hooks
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
//Pages
import NotFoundPage from "./NotFoundPage.tsx"
//Components
import LaptopDetailInfo from "../components/LaptopDetailInfo.tsx"
import CompareButton from "../components/CompareButton.tsx"
import FavoriteButton from "../components/FavoriteButton.tsx"
//Types
import { Laptop } from "../types/Laptop.ts"


function LaptopDetailPage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [laptop, setLaptop] = useState<Laptop | null>(null)

    async function fetchLaptop(laptopId: number) {
        try {
            const response = await fetch(`http://localhost:3001/laptops/${laptopId}`)
            if (!response.ok) {
                throw new Error("Errore nel recupero dei dati")
            }
            const laptopData = await response.json()
            setLaptop(laptopData.laptop)
        } catch (err) {
            console.error(err)
        }
    }
    // console.log(laptop)

    useEffect(() => {
        if (!id) return
        const numericId = parseInt(id, 10)
        if (isNaN(numericId)) return
        fetchLaptop(numericId)
    }, [id])

    if (!laptop) return <NotFoundPage />


    return (
        <section className="relative">
            <h2 className="text-2xl text-center font-semibold mb-4">Dettaglio Articolo</h2>
            <button className="custom-button absolute top-0 left-8 scale-90 hover:!scale-95" onClick={() => navigate(-1)}>Indietro</button>
            <div className="container !px-60">
                <LaptopDetailInfo laptop={laptop} />
                <div className="flex gap-2 justify-center mt-4">
                    <CompareButton laptop={laptop} />
                    <FavoriteButton laptop={laptop} />
                </div>
            </div>
        </section>
    )
}

export default LaptopDetailPage