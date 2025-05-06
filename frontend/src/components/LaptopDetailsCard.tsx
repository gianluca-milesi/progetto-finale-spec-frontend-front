import { Laptop } from "../types/Laptop"

type Props = {
    laptop: Laptop
}


function LaptopDetailsCard({ laptop }: Props) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">{laptop.title}</h3>
            <p className="italic text-sm mb-1">Categoria: {laptop.category}</p>
            {/* Aggiungi altre info: */}
            <p className="text-sm">Brand: {laptop.brand}</p>
            <p className="text-sm">RAM: {laptop.ram} GB</p>
            <p className="text-sm">Storage: {laptop.storage}</p>
            <p className="text-sm">Sistema operativo: {laptop.os}</p>
            <p className="text-sm">Anno: {laptop.releaseYear}</p>
        </div>
    )
}

export default LaptopDetailsCard