import { createSlice } from '@reduxjs/toolkit'

interface Answers {
    [key: number]: number | null; 
}

const answers: Answers = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null
}

const initialState = {
    answers: answers 
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
        const { question, answer } = action.payload;
        state.answers[question] = answer;
        }
    }
});

export const { setAnswer } = quizSlice.actions;
export default quizSlice.reducer;
