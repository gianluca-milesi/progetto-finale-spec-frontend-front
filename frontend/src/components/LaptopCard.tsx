import placeholder from "../../public/laptop-placeholder.jpg"
//React router dom
import { Link } from "react-router-dom"
//Types
import { Laptop } from "../types/Laptop"

type Props = {
    laptop: Laptop
}


function LaptopCard({ laptop }: Props) {
    return (
        <Link to="/">
            <div className="flex items-center shadow-2xl rounded-xl gap-2 m-4 relative hover:scale-103 duration-200 ease-in secondary-color text-white">
                <figure>
                    <img src={placeholder} className="w-25 rounded-l-xl" />
                </figure>
                <div className="flex-col p-1">
                    <h3>{laptop.title}</h3>
                    <p>{laptop.category}</p>
                    <button className="button absolute right-4 bottom-2">Compara</button>
                </div>
            </div>
        </Link>
    )
}

export default LaptopCard