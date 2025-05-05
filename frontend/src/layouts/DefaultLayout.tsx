import { Outlet } from "react-router-dom"
//Layouts
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"


function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="primary-color py-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout