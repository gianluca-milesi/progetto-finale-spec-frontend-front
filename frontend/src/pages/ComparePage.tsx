//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
//Pages
import NotFoundPage from "./NotFoundPage.tsx"
//Components
import LaptopDetailsCard from "../components/LaptopDetailsCard.tsx"
//Types
import { Laptop } from "../types/Laptop.ts"


function ComparePage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { compare } = context

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


    return (
        <div className="container !px-25">
            <h2 className="text-2xl text-center mb-4">Confronta Laptop</h2>
            <div className="row">
                {[0, 1].map((index) => {
                    const laptop = compare[index]

                    return (
                        <div key={index} className="col-6">
                            <div className="border rounded-xl min-h-[300px] shadow-md flex justify-center items-center mx-2">
                                {laptop ? (
                                    <LaptopDetailsCard laptop={laptop} />
                                ) : (
                                    <button
                                        onClick={() => navigate("/")}
                                        className="custom-button scale-150 hover:!scale-175"
                                    >
                                        ✚
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ComparePage