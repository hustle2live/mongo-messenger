import { createSlice } from '@reduxjs/toolkit';
import { socket } from 'socket/socket';

const initialState = {
   userId: 0,
   socketId: 0,
   isConnected: false,
   token: null,
   userEmail: '',
   userPassword: ''
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      createConnection: () => {},
      login: () => {
         socket.connect();
      },
      logout: () => {}
   },
   extraReducers: {}
});

export default authSlice.reducer;
