import { useSelector } from "react-redux"
import { Car } from "../App"
import { RootState } from "../store/store"

const CarValue: React.FC = () => {
    const totalCost = useSelector((state: typeof RootState) => {
        return state.cars.data.filter((x: Car) => {
            return x.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
        }).reduce((total: number, car: Car) => total + car.cost, 0)
    })

    const value = `Total Cost: $${totalCost}`

    return (
        <div className="car-value">
            {value}
        </div>
    )
}
export default CarValue