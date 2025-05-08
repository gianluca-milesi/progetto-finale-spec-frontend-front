//Types
import { Laptop } from "../types/Laptop.ts"

type Props = {
    laptop: Laptop
}


function LaptopDetailInfo({ laptop }: Props) {
    return (
        <div className="bg-[var(--color-bg)] shadow-md rounded-lg p-4">
            <ul>
                <li><strong>Categoria:</strong> {laptop.category}</li>
                <li><strong>Brand:</strong> {laptop.brand}</li>
                <li><strong>RAM:</strong> {laptop.ram} GB</li>
                <li><strong>Storage:</strong> {laptop.storage}</li>
                <li><strong>Sistema operativo:</strong> {laptop.os}</li>
                <li><strong>Anno:</strong> {laptop.releaseYear}</li>
            </ul>
        </div>
    )
}

export default LaptopDetailInfo