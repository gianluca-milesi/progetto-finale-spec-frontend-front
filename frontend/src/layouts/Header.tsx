//Components
import Navbar from "../components/Navbar.tsx"


function Header() {
    return (
        <header className="bg-[var(--color-surface)] text-[var(--color-text-primary)] p-4 z-10 shadow-md/10">
            <Navbar />
        </header>
    )
}

export default Header