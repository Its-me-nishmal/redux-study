import { createSlice } from "@reduxjs/toolkit";

const changeThemeSlice = createSlice({
    name:'changeThemeSlice',
    initialState:{value:'defualt'},
    reducers:{
        changeRandom: (state) => {
            const colors = ['red','yellow','green','orange','black']
            const randomIndex = Math.random() * 6
            state.value = colors[randomIndex]
        }
    }
})

export const {changeRandom} = changeThemeSlice.actions
export default changeThemeSlice.reducer;