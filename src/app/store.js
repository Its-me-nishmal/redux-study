import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/counterSlice'
import themeReducer from '../features/theme/changeThemeSlice'

const store = configureStore({
reducer:{
    counter:counterReducer,
    theme:themeReducer
}
})

export default store