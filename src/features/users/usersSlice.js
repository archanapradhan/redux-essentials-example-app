import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('fakeApi/users')
  console.log('response in userslice:', response)
  return response.users
})

const usersSlice = createSlice({
  name: 'users1',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload
    },
  },
})

export default usersSlice.reducer

export const selectAllUsers = (state) => {
  console.log('state in users', state)
  return state.users
}

export const selectUserById = (state, userId) => {
  state.users.find((user) => user.id === userId)
}

// function createSlice2(obj) {
//   const keyname = obj.name
//   for (const [key, value] of Object.entries(obj.reducers)) {
//     console.log(`${key}: ${value}`)
//     const actionName = key
//     const reducer = value
//   }
//   const state = obj.initialState
// }
