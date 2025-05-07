//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Hooks
import { useEffect, useState } from "react"
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

  const [laptops, setLaptops] = useState<Laptop[]>([])
  const [favorites, setFavorites] = useState<Laptop[]>([])
  const [compare, setCompare] = useState<Laptop[]>([])

  async function fetchLaptops() {
    try {
      const response = await fetch("http://localhost:3001/laptops")
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati")
      }
      const laptopsData = await response.json()
      setLaptops(laptopsData)
      console.log(laptopsData)
    } catch (err) {
      console.error(err)
    }
  }

  function addFavorite(laptop: Laptop) {
    setFavorites(prev => prev.some(l => l.id === laptop.id)
      ? prev.filter(l => l.id !== laptop.id)
      : [...prev, laptop]
    )
  }
  // console.log(favorites)

  function addCompare(laptop: Laptop) {
    setCompare(prev => {
      const alreadyInCompare = prev.some(l => l.id === laptop.id)
      if (alreadyInCompare) {
        return prev.filter(l => l.id !== laptop.id)
      } else if (prev.length < 2) {
        return [...prev, laptop]
      } else {
        alert("Puoi confrontare solo due elementi alla volta")
        return prev
      }
    })
  }
  // console.log(compare)

  useEffect(() => {
    fetchLaptops()
  }, [])


  return (
    <GlobalContext.Provider value={{ laptops, favorites, addFavorite, compare, addCompare }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/laptop/:id" element={<LaptopDetailPage />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App