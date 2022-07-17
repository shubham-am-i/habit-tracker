import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from './features/habitsSlice'
const store = configureStore({
  reducer: {
    allHabits: habitsReducer,
  },
})

export default store
