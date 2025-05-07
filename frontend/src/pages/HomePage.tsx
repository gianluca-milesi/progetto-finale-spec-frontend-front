//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext, useEffect, useState } from "react"
//Components
import LaptopCard from "../components/LaptopCard.tsx"
//Types
import { Laptop } from "../types/Laptop.ts"


function HomePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { laptops } = context

    const [query, setQuery] = useState<string>("")
    const [filteredLaptops, setFilteredLaptops] = useState<Laptop[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const categories: string[] = [...new Set(laptops.map(l => l.category))]
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
                <div className="container">
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-8">
                            <div>
                                <label className="flex gap-1">
                                    <span className="italic">Categorie:</span>
                                    <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                        <option value="">Tutte le categorie</option>
                                        {categories.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="flex gap-1">
                                    <span className="italic">Ordina per:</span>
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
                                </label>
                            </div>
                        </div>

                        <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="shadow-sm/50 py-1 px-2 rounded justify-self-end"
                            placeholder="Cerca..."
                        />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-center font-semibold mb-4">Tutti i prodotti</h2>
                <div className="container">
                    <div className="row">
                        {filteredLaptops.length > 0 ? (
                            filteredLaptops.map(l => (
                                <div key={l.id} className="w-1/2 lg:w-1/3 px-2">
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