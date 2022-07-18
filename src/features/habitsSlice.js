import { createSlice } from '@reduxjs/toolkit'

const habitsFromStorage = localStorage.getItem('newHabits')
  ? JSON.parse(localStorage.getItem('newHabits'))
  : ''

const details = [
  { day: 'Sat', status: 'none' },
  { day: 'Sun', status: 'none' },
  { day: 'Mon', status: 'none' },
  { day: 'Tue', status: 'none' },
  { day: 'Wed', status: 'none' },
  { day: 'Thu', status: 'none' },
  { day: 'Fri', status: 'none' },
]
console.log(habitsFromStorage)
const initialState = {
  habits: [
    {
      title: 'early bird',
      description: 'wake up at 3:45 am',
      details,
    },
    {
      title: '20 mins read',
      description: 'kill your ignorance daily by reading',
      details,
    },

    // ...habitsFromStorage,
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
      state.habits = state.habits.filter((habit) => habit.title !== action.payload)
    },
    changeStatus: (state, { payload }) => {
      
      // state.habits = [...state.habits, payload]
      state.habits.map((habit) => {
        if (habit.title === payload.title) {
          habit.details.map((detail) => {
            if (detail.day === payload.details[0].day) {
              console.log(detail.day)
              detail.status = payload.details[0].status
              console.log(habit.title, detail.day,detail.status)
            }
          })
        }
      })
    },
  },
})

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions

export default habitsSlice.reducer
