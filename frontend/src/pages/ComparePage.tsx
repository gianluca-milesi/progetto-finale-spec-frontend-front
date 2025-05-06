//React router dom
import { useNavigate } from "react-router-dom"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Components
import LaptopDetailsCard from "../components/LaptopDetailsCard"


function ComparePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { compare } = context

    const navigate = useNavigate()


    return (
        <section className="container py-5">
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
        </section>
    )
}

export default ComparePage