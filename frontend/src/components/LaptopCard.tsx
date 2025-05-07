//React router dom
import { Link } from "react-router-dom"
//Components
import CompareButton from "./CompareButton"
import FavoriteButton from "./FavoriteButton"
//Types
import { Laptop } from "../types/Laptop"
//Images
import placeholder from "../../public/placeholder.jpg"
import laptopPlaceholder from "../../public/laptop-placeholder.jpg"

type Props = {
    laptop: Laptop
}


function LaptopCard({ laptop }: Props) {
    return (
        <Link to={`/laptops/${laptop.id}`}>
            <div className="flex items-center shadow-md/20 rounded-xl gap-2 m-2 relative hover:scale-102 duration-200 ease-in">
                <figure>
                    <img src={laptop.category === "laptop" ? laptopPlaceholder : placeholder} className="w-25 rounded-l-xl" />
                </figure>
                <div className="flex-col p-1">
                    <h3 className="text-lg font-medium">{laptop.title}</h3>
                    <p className="italic">{laptop.category}</p>
                    <div className="flex gap-0.5 items-center absolute bottom-2 right-2">
                        <CompareButton laptop={laptop} />
                        <FavoriteButton laptop={laptop} />
                    </div>
                </div>
            </div >
        </Link >
    )
}

export default LaptopCard