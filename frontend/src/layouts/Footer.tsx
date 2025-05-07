//Hooks
import { Link } from "react-router-dom"
//React Icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"


function Footer() {
    return (
        <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-4 text-sm text-[var(--color-text-secondary)]">
            <div className="container text-center">
                <p>&copy;2025 Comparatore di Laptop. Tutti i diritti riservati.</p>
                <p className="mb-4">Creato con 💻 SPA Electronics</p>
                <div className="flex justify-center gap-6 text-xl">
                    <Link to="https://facebook.com" target="_blank">
                        <FaFacebookF className="hover:text-blue-600 transition-colors" />
                    </Link>
                    <Link to="https://twitter.com" target="_blank">
                        <FaTwitter className="hover:text-sky-500 transition-colors" />
                    </Link>
                    <Link to="https://instagram.com" target="_blank">
                        <FaInstagram className="hover:text-pink-500 transition-colors" />
                    </Link>
                    <Link to="https://linkedin.com" target="_blank">
                        <FaLinkedinIn className="hover:text-blue-700 transition-colors" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer