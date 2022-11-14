import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        value: {},
    },
    reducers: {
        submitForm: (state, action) => {
            state.value = action.payload;
        },
        // removeFromFavourites: (state, action) => {
        //     alert("HERE")
        // },
    },
})

// Action creators are generated for each case reducer function
export const {submitForm} = formSlice.actions

export default formSlice.reducer