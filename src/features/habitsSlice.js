import { createSlice } from '@reduxjs/toolkit'

const habitsFromStorage = localStorage.getItem('newHabits')
  ? JSON.parse(localStorage.getItem('newHabits'))
  : ''

console.log(habitsFromStorage)
const initialState = {
  habits: [
    {
      title: 'early bird',
      description: 'wake up at 3:45 am',
    },
    {
      title: '20 mins read',
      description: 'kill your ignorance daily by reading',
    },
    ...habitsFromStorage,
  ],
}
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits = [...state.habits, action.payload]
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter(habit => habit.title !== action.payload)
    }
  },
})

export const { addHabit, deleteHabit } = habitsSlice.actions

export default habitsSlice.reducer
