//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
//Components
import LaptopDetailsCard from "../components/LaptopDetailsCard.tsx"


function ComparePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { compare } = context

    const navigate = useNavigate()


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
                                        className="button"
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