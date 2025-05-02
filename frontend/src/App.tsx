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
import NotFoundPage from "./pages/NotFoundPage.tsx"
//Types
import { Laptop } from "./types/Laptop.ts"


function App() {

  const [laptops, setLaptops] = useState<Laptop[]>([])

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

  useEffect(() => {
    fetchLaptops()
  }, [])


  return (
    <GlobalContext.Provider value={{ laptops }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
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