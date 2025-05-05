//Types
import { Laptop } from "../types/Laptop"

type Props = {
    laptop: Laptop
}


function LaptopCard({ laptop }: Props) {
    return (
        <div>
            <h3>{laptop.title}</h3>
            <p>{laptop.brand} - {laptop.category}</p>
            <ul>
                <li><strong>RAM:</strong> {laptop.ram} GB</li>
                <li><strong>Storage:</strong> {laptop.storage} GB</li>
                <li><strong>OS:</strong> {laptop.os}</li>
                <li><strong>Anno:</strong> {laptop.releaseYear}</li>
            </ul>
        </div>
    )
}

export default LaptopCard