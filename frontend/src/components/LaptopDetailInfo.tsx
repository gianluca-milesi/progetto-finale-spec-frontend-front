//Types
import { Laptop } from "../types/Laptop.ts"
//Images
import placeholder from "../../public/placeholder.jpg"

type Props = {
    laptop: Laptop
}


function LaptopDetailInfo({ laptop }: Props) {
    return (
        <div className="flex justify-center">
            <div className="relative flex bg-[var(--color-bg)] shadow-lg/50 rounded-lg w-full">
                <div className="relative flex-shrink-0 w-1/2 h-[300px] overflow-hidden flex items-center justify-center bg-white rounded-l-lg">
                    <img
                        src={laptop.image || placeholder}
                        alt={laptop.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <h3 className="text-xl font-bold mb-2">{laptop.title}</h3>
                    <span className="absolute top-2 right-2 italic text-xs bg-[var(--color-surface-hover)] py-1 px-2 rounded-lg text-white z-10">{laptop.category}</span>
                    <p className="text-sm"><span className="font-semibold">Brand: </span>{laptop.brand}</p>
                    <p className="text-sm"><span className="font-semibold">RAM: </span>{laptop.ram} GB</p>
                    <p className="text-sm"><span className="font-semibold">Storage: </span>{laptop.storage}</p>
                    <p className="text-sm"><span className="font-semibold">Sistema Operativo: </span>{laptop.os}</p>
                    <p className="text-sm"><span className="font-semibold">Anno: </span>{laptop.releaseYear}</p>
                </div>
            </div>
        </div >
    )
}

export default LaptopDetailInfo