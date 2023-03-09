import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../../App'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users')
    return response.data as User[]
})
export { fetchUsers }