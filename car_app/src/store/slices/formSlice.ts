import { createSlice } from "@reduxjs/toolkit"
import { addCar } from "./carsSlice"

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '' as string,
        cost: 0 as number
    },
    reducers: {
        changeName(state, action: {payload: string}) {
            state.name = action.payload
        },
        changeCost(state, action: {payload: number}) {
            state.cost = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = ''
            state.cost = 0
        })
    }
})
export const { changeName, changeCost } = formSlice.actions
export const formReducer = formSlice.reducer