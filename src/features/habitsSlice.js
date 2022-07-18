import { createSlice } from '@reduxjs/toolkit'

const details = [
  { day: 'Sat', status: 'done' },
  { day: 'Sun', status: 'none' },
  { day: 'Mon', status: 'done' },
  { day: 'Tue', status: 'done' },
  { day: 'Wed', status: 'fail' },
  { day: 'Thu', status: 'none' },
  { day: 'Fri', status: 'none' },
]

const habitsFromStorage = localStorage.getItem('newHabits')
  ? JSON.parse(localStorage.getItem('newHabits'))
  : { title: 'early bird', description: 'wake up at 3:45am', details }
let habits = [...habitsFromStorage]

console.log(habitsFromStorage)
const initialState = {
  habits: habits,
}
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload]
      habits = [...habits, payload]
      window.localStorage.setItem('newHabits', JSON.stringify(habits))
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter((habit) => habit.title !== action.payload)
      window.localStorage.setItem('newHabits', JSON.stringify(state.habits))
    },
    changeStatus: (state, { payload }) => {
      state.habits.map((habit) => {
        if (habit.title === payload.title) {
          habit.details.map((detail) => {
            if (detail.day === payload.details[0].day) {
              console.log(detail.day)
              detail.status = payload.details[0].status
              console.log(habit.title, detail.day, detail.status)
            }
          })
        }
      })
      window.localStorage.setItem('newHabits', JSON.stringify(state.habits))
    },
  },
})

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions

export default habitsSlice.reducer
