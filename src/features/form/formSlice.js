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

        submitExpenses: (state, action) => {
            state.value.expenses = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {submitForm, submitExpenses} = formSlice.actions

export default formSlice.reducer