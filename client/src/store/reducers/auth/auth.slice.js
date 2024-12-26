import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   userId: 0,
   socketId: 0,
   token: null,
   email: ''
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {}
});


export default authSlice.reducer;


