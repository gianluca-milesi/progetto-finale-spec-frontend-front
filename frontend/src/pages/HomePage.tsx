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
    const [sortKey, setSortKey] = useState<"title" | "category">("title")
    const [sortOrder, setSortOrder] = useState<"a-z" | "z-a">("a-z")

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

        data.sort((a, b) => {
            const aValue = a[sortKey].toLowerCase()
            const bValue = b[sortKey].toLowerCase()
            if (sortOrder === "a-z") {
                return aValue.localeCompare(bValue)
            } else {
                return bValue.localeCompare(aValue)
            }
        })

        setFilteredLaptops(data)
    }, [laptops, query, selectedCategory, sortKey, sortOrder])


    return (
        <>
            <section>
                <h2 className="text-2xl text-center mb-2">Cerca</h2>
                <div className="flex justify-center items-center gap-4">
                    <div className="filters">
                        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                            <option value="">Tutte le categorie</option>
                            {categories.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <div className="sort-filters">
                            <select
                                value={sortKey}
                                onChange={e => setSortKey(e.target.value as "title" | "category")}
                            >
                                <option value="title">Titolo</option>
                                <option value="category">Categoria</option>
                            </select>
                            <select
                                value={sortOrder}
                                onChange={e => setSortOrder(e.target.value as "a-z" | "z-a")}
                            >
                                <option value="a-z">A-z</option>
                                <option value="z-a">z-A</option>
                            </select>
                        </div>
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