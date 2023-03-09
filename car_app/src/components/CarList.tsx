import { useDispatch, useSelector } from "react-redux"
import { Car } from "../App"
import { RootState, removeCar } from "../store/store"

const CarList: React.FC = () => {

    const dispatch = useDispatch()

    const {cars, name} = useSelector((state: typeof RootState) => {
        const {searchTerm, data} = state.cars
        if (!searchTerm){
            return {
                cars: data,
                name: state.form.name
            }
        }
        const filteredCars = data.filter((car: Car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        return {
            cars: filteredCars,
            name: state.form.name
        }
    })

    const handleCarDelete = (car: Car): void => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car: Car) => {
        const isBold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={car.id} className={`panel ${isBold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                    >
                        Delete
                    </button>
            </div>
        )
    })

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
}
export default CarList