//Hooks
import { useEffect, useState, memo } from "react"
import { Link } from "react-router-dom"
//Components
import CompareButton from "./CompareButton.tsx"
import FavoriteButton from "./FavoriteButton.tsx"
//Types
import { Laptop } from "../types/Laptop.ts"
//Images
import placeholder from "../../public/placeholder.jpg"


type Props = {
    laptop: Laptop
}


function LaptopCard({ laptop }: Props) {

    const [laptopImage, setLaptopImage] = useState<string | null>(null)

    async function fetchLaptopImage(laptopId: number) {
        try {
            const response = await fetch(`http://localhost:3001/laptops/${laptopId}`)
            if (!response.ok) {
                throw new Error("Errore nel recupero dei dati")
            }
            const laptopData = await response.json()
            setLaptopImage(laptopData.laptop.image)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchLaptopImage(laptop.id)
    }, [])


    return (
        <Link to={`/laptop/${laptop.id}`}>
            <div className="flex flex-col items-center bg-[var(--color-bg)] shadow-md/50 border-[var(--color-border)] m-2 relative rounded-md hover:scale-102 transition ease-in">
                <div className="relative w-full h-[200px] overflow-hidden flex items-center justify-center bg-white rounded-t-md">
                    <img
                        src={laptopImage || placeholder}
                        alt={laptop.title}
                        className="object-contain w-full h-full"
                    />
                    <span className="absolute top-2 right-2 italic text-xs bg-[var(--color-surface-hover)] py-1 px-2 rounded-lg z-10">
                        {laptop.category}
                    </span>
                </div>
                <div className="flex-col py-2">
                    <h3 className="text-lg font-medium">{laptop.title}</h3>
                    <div className="flex justify-center items-center gap-1">
                        <CompareButton laptop={laptop} />
                        <FavoriteButton laptop={laptop} />
                    </div>
                </div>
            </div >
        </Link >
    )
}

export default memo(LaptopCard)