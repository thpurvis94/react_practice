import { ChangeEvent, FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "../store/store"
import { RootState } from "../store/store"

const CarForm: React.FC = () => {

    const dispatch = useDispatch()

    const {name, cost} = useSelector((state: typeof RootState) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(changeCost(Number.parseInt(event.target.value)))
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch(addCar({ name, cost }))
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                            />
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Cost</label>
                        <input className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            />
                    </div>
                </div>
                <button className="button is-link">Submit</button>
            </form>
        </div>
    )
}
export default CarForm