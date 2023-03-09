import { createSlice, nanoid } from '@reduxjs/toolkit'
import { Car } from '../../App'

type NewCar = {
    name: string,
    cost: number
}

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '' as string,
        data: [] as Car[]
    },
    reducers: {
        changeSearchTerm(state, action: {payload: string}){
            state.searchTerm = action.payload
        },
        addCar(state, action: {payload: NewCar}) {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeCar(state, aciton: {payload: string}) {
            const updated = state.data.filter(x => x.id !== aciton.payload)
            state.data = updated
        }
    }
})
export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer