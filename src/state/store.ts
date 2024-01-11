import { configureStore } from "@reduxjs/toolkit"
import quizReducer from './slices/selectedOptionSlice'

export const createStore = () => 
    configureStore({
        reducer: {
            quiz: quizReducer,
        },
    }); 


export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;