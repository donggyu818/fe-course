import { configureStore } from '@reduxjs/toolkit'
import likeSlice from '../features/likeSlice.js'
import skillsSlice from '../features/skillsSlice.js'

export const store = configureStore({
    reducer: {
        // slice 진열
        like : likeSlice,
        skills:skillsSlice
    },
})