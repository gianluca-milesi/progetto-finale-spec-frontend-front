//Hooks
import { Link } from "react-router-dom"
//Components
import CompareButton from "./CompareButton.tsx"
import FavoriteButton from "./FavoriteButton.tsx"
//Types
import { Laptop } from "../types/Laptop.ts"
//Images
import placeholder from "../../public/placeholder.jpg"
import laptopPlaceholder from "../../public/laptop-placeholder.jpg"

type Props = {
    laptop: Laptop
}


function LaptopCard({ laptop }: Props) {
    return (
        <Link to={`/laptop/${laptop.id}`}>
            <div className="flex items-center bg-[var(--color-bg)] shadow-md/50 border border-[var(--color-border)] gap-2 m-2 relative rounded-md hover:scale-102 transition ease-in">
                <figure>
                    <img src={laptop.category === "laptop" ? laptopPlaceholder : placeholder} className="w-30 rounded-l-md" />
                </figure>
                <div className="flex-col p-1">
                    <h3 className="text-lg font-medium">{laptop.title}</h3>
                    <span
                        className="italic text-xs absolute top-2 right-2 bg-[var(--color-surface-hover)] py-1 px-2 rounded-lg"
                    >
                        {laptop.category}
                    </span>
                    <div className="flex gap-1 items-center absolute bottom-2 right-2">
                        <CompareButton laptop={laptop} />
                        <FavoriteButton laptop={laptop} />
                    </div>
                </div>
            </div >
        </Link >
    )
}

export default LaptopCard