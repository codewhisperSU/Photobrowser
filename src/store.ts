import { configureStore } from '@reduxjs/toolkit'
import gallerySlice from './redux/reducer/gallerySlice';


const store = configureStore({
    reducer: {gallery: gallerySlice}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;