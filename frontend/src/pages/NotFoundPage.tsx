import { useNavigate } from "react-router-dom"


function NotFoundPage() {

    const navigate = useNavigate()

    return (
        <div className="container flex flex-col justify-center items-center mb-1">
            <p>404</p>
            <p>Pagina non trovata...</p>
            <button onClick={()=> navigate("/")} className="custom-button">Torna alla Home</button>
        </div>
    )
}

export default NotFoundPage