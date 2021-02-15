import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '0',
    name: 'Hair',
  },
  {
    id: '1',
    name: 'Hose',
  },
  {
    id: '2',
    name: 'Hanna',
  },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
