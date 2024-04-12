import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Bruce Wayne',
    email: 'bruce@gmail.com',
  },
  {
    id: 2,
    name: 'Tom Hanks',
    email: 'tom@yahoo.com',
  },
  {
    id: 3,
    name: 'Kai Greene',
    email: 'greene@building.com',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { deleteUser } = usersSlice.actions;
