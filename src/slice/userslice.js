import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        count: 0,
        userArray: []
    },
    reducers: {
        adduser: (state, action) => {
            console.log(action)
            state.userArray = action.payload
        }
    }
})
export const { adduser } = userSlice.actions
export default userSlice.reducer