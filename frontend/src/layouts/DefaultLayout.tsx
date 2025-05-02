import { Outlet } from "react-router-dom"
//Layouts
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"


function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout