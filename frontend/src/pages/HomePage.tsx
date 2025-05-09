//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useCallback, useContext, useEffect, useState } from "react"
//Components
import LaptopCard from "../components/LaptopCard.tsx"
//Types
import { Laptop } from "../types/Laptop.ts"
//Icons
import { IoSearchOutline } from "react-icons/io5";


function HomePage() {

    const context = useContext(GlobalContext)
    if (!context) return <div>Caricamento...</div>
    const { isLoading, setIsLoading, laptops } = context

    const [query, setQuery] = useState<string>("")
    const debounceSetQuery = useCallback(debounce(setQuery, 500), [])
    const [filteredLaptops, setFilteredLaptops] = useState<Laptop[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const categories: string[] = [...new Set(laptops.map(l => l.category))]
    const [sortKey, setSortKey] = useState<"title" | "category">("title")
    const [sortOrder, setSortOrder] = useState<"a-z" | "z-a">("a-z")

    function debounce<T extends (...args: any[]) => void>(
        callback: T,
        delay: number
    ): (...args: Parameters<T>) => void {
        let timer: ReturnType<typeof setTimeout>
        return (...args: Parameters<T>) => {
            setIsLoading(true)
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(...args)
                setIsLoading(false)
            }, delay)
        }
    }

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
            <div>
                <div className="container">
                    <div className="flex justify-between items-center pb-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-text-secondary)] italic">Categorie:</span>
                                <select
                                    value={selectedCategory}
                                    onChange={e => setSelectedCategory(e.target.value)}
                                    className="custom-select"
                                >
                                    <option value="">Tutte le categorie</option>
                                    {categories.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-text-secondary)] italic">Ordina per:</span>
                                <div className="flex items-center gap-1">
                                    <select
                                        value={sortKey}
                                        onChange={e => setSortKey(e.target.value as "title" | "category")}
                                        className="custom-select"
                                    >
                                        <option value="title">Titolo</option>
                                        <option value="category">Categoria</option>
                                    </select>
                                    <select
                                        value={sortOrder}
                                        onChange={e => setSortOrder(e.target.value as "a-z" | "z-a")}
                                        className="custom-select !py-1 !px-2"
                                    >
                                        <option value="a-z">A-z</option>
                                        <option value="z-a">z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoSearchOutline className="text-xl" />
                            <input
                                type="text"
                                onChange={e => debounceSetQuery(e.target.value)}
                                className=" bg-[var(--color-bg)] border border-[var(--color-border)] rounded shadow-sm/50 py-1 px-2 hover:bg-[var(--color-surface-hover)] transition justify-self-end"
                                placeholder="Cerca..."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        {filteredLaptops.length > 0 ? (
                            filteredLaptops.map(l => (
                                <div key={l.id} className="col-4 lg:col-12">
                                    <LaptopCard laptop={l} />
                                </div>
                            ))
                        ) : (
                            <div className="text-center w-full py-4">Nessun risultato trovato...</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage