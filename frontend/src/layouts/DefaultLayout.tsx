import { Outlet } from "react-router-dom"
//Layouts
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"


function DefaultLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="primary-color py-4 flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout