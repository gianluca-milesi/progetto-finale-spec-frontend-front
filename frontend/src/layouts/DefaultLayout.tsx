//Contexts
import GlobalContext from "../contexts/GlobalContext.tsx"
//Hooks
import { useContext } from "react"
import { Outlet } from "react-router-dom"
//Layouts
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
//Components
import Loader from "../components/Loader/Loader.tsx"


function DefaultLayout() {

    const context = useContext(GlobalContext)
    if (!context) return null
    const { isLoading } = context

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="bg-[var(--color-bg)] text-[var(--color-text-primary)] py-4 flex-grow">
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </div>
    )
}

export default DefaultLayout