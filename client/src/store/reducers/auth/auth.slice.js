import { createSlice } from '@reduxjs/toolkit';
import { socket } from 'socket/socket';

const initialState = {
   userId: '676abffe95deb53ad300d42c',
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
   extraReducers(builder) {
      // builder.addCase(fetchChats.fulfilled, (state, action) => {
      //    console.log('response : ', action.payload);
      // });
      // builder.addCase(fetchChats.pending, (state, action) => {
      //    console.log('pending...');
      // });
      // builder.addCase(fetchChats.rejected, (state, action) => {
      //    console.log('rejected...');
      // });
   }
});

export const { actions, name, reducer } = authSlice;

// export default authSlice.reducer;
