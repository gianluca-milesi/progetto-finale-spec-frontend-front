import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext, useEffect, useState } from "react"
//Components
import LaptopCard from "../components/LaptopCard"
//Types
import { Laptop } from "../types/Laptop"


function HomePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>

    const { laptops } = context
    const [query, setQuery] = useState("")
    const [filteredLaptops, setFilteredLaptops] = useState<Laptop[]>([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const categories = [...new Set(laptops.map(l => l.category))]

    useEffect(() => {
        let data = [...laptops]

        if (query.trim()) {
            data = data.filter(l => (
                l.title.toLowerCase().includes(query.toLowerCase())
            ))
        }

        if (selectedCategory) {
            data = data.filter(l => l.category === selectedCategory)
        }

        setFilteredLaptops(data)
    }, [laptops, query])


    return (
        <>
            <section>
                <h2 className="text-2xl text-center mb-2">Cerca</h2>
                <div className="flex justify-center items-center gap-4">
                    <div className="filters">
                        <select>
                            <option value="">Tutte le categorie</option>
                            {categories.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="shadow p-1 rounded justify-self-end"
                        placeholder="Cerca..."
                    />
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-center mb-2">Tutti i prodotti</h2>
                <div className="container">
                    <div className="row">
                        {filteredLaptops.length > 0 ? (
                            filteredLaptops.map(l => (
                                <div key={l.id} className="col-6">
                                    <LaptopCard laptop={l} />
                                </div>
                            ))
                        ) : (
                            <div className="text-center w-full py-4">Nessun risultato trovato.</div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage