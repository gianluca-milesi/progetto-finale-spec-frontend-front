//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.tsx"
import BlankLayout from "./layouts/BlankLayout.tsx"
//Pages
import HomePage from "./pages/HomePage.tsx"
import ComparePage from "./pages/ComparePage.tsx"
import FavoritesPage from "./pages/FavoritesPage.tsx"
import NotFoundPage from "./pages/NotFoundPage.tsx"


function App() {

  return (
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
  )
}

export default App