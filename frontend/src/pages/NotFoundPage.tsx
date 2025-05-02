import { Link } from "react-router-dom"


function NotFoundPage() {
    return (
        <div>
            <p>404</p>
            <p>Pagina non trovata</p>
            <Link to="/">Torna alla Home</Link>
        </div>
    )
}

export default NotFoundPage