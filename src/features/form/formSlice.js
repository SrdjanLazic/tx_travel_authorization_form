import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'favourites',
    initialState: {
        value: {},
    },
    reducers: {
        addToFavourites: (state, action) => {
            state.value.push(action.payload)
        },
        removeFromFavourites: (state, action) => {
            alert("HERE")
        },
    },
})

// Action creators are generated for each case reducer function
export const { submitForm} = formSlice.actions

export default formSlice.reducer