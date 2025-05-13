//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Hooks
import { useCallback, useEffect, useState } from "react"
//Contexts
import GlobalContext from "./contexts/GlobalContext.tsx"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.tsx"
import BlankLayout from "./layouts/BlankLayout.tsx"
//Pages
import HomePage from "./pages/HomePage.tsx"
import ComparePage from "./pages/ComparePage.tsx"
import FavoritesPage from "./pages/FavoritesPage.tsx"
import LaptopDetailPage from "./pages/LaptopDetailPage.tsx"
import NotFoundPage from "./pages/NotFoundPage.tsx"
//Types
import { Laptop } from "./types/Laptop.ts"


function App() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [laptops, setLaptops] = useState<Laptop[]>([])
  const [favorites, setFavorites] = useState<Laptop[]>(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })
  const [compare, setCompare] = useState<Laptop[]>([])

  async function fetchLaptops() {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:3001/laptops")
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati")
      }
      const laptopsData = await response.json()
      setLaptops(laptopsData)
      // console.log(laptopsData)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const addCompare = useCallback(async (laptopId: number) => {
    if (compare.some(l => l.id === laptopId)) return

    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:3001/laptops/${laptopId}`)
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati")
      }
      const laptopData = await response.json()
      setCompare(prev => [...prev, laptopData.laptop])
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [compare])

  const removeCompare = useCallback((laptopId: number) => {
    setCompare(prev => prev.filter(l => l.id !== laptopId))
  }, [])
  // console.log(compare)

  const addFavorite = useCallback((laptop: Laptop) => {
    setFavorites(prev => prev.some(l => l.id === laptop.id)
      ? prev.filter(l => l.id !== laptop.id)
      : [...prev, laptop]
    )
  }, [])
  // console.log(favorites)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    fetchLaptops()
  }, [])


  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading, laptops, favorites, addFavorite, compare, addCompare, removeCompare }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/laptop/:id" element={<LaptopDetailPage />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App