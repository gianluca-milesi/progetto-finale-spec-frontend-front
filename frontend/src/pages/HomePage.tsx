import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Components
import LaptopCard from "../components/LaptopCard"


function HomePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>

    const { laptops } = context
    if (!laptops || laptops.length === 0) return <div>Nessun laptop disponibile</div>


    return (
        <>
            <section>
                <h2 className="text-2xl text-center mb-2">Cerca</h2>
                <div>Searchbar e Filters</div>
            </section>

            <section>
                <h2 className="text-2xl text-center mb-2">Tutti i prodotti</h2>
                <div className="container">
                    <div className="row">
                        {laptops && laptops.map(l => (
                            <div key={l.id} className="col-4">
                                <LaptopCard laptop={l} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage