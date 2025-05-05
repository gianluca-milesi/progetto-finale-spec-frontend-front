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
            <div className="flex items-center shadow-lg rounded-xl gap-2 m-2 relative hover:scale-102 duration-200 ease-in">
                <figure>
                    <img src={placeholder} className="w-25 rounded-l-xl" />
                </figure>
                <div className="flex-col p-1">
                    <h3 className="text-lg font-medium">{laptop.title}</h3>
                    <p>{laptop.category}</p>
                    <button className="absolute right-4 bottom-2 cursor-pointer flex items-center gap-1">
                        <span className="italic text-sm">Compara</span>
                        <span className="button !py-0.5 !px-2">✚</span>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default LaptopCard