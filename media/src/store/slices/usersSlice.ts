import { createSlice, SerializedError } from "@reduxjs/toolkit"
import { fetchUsers } from "../thunks/fetchUsers"
import { addUser } from "../thunks/addUser"
import { deleteUser } from "../thunks/deleteUser"
import { User } from "../../App"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [] as User[],
        isLoading: false,
        error: null as SerializedError | null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: {payload: User[]}) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addUser.fulfilled, (state, action: {payload: User}) => {
            state.isLoading = false
            state.data.push(action.payload)
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action)=> {
            state.isLoading = false
            console.log(action)
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})
export const usersReducer = usersSlice.reducer