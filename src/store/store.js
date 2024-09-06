import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/user.slice'

const reducers = combineReducers({
  user: userSlice.reducer,
})

export const store = configureStore({
  reducer: reducers,
})