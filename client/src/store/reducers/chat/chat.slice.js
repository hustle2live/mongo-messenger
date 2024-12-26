import { createSlice } from '@reduxjs/toolkit';
import { fetchChats, createChat, updateChat, deleteChat, createMessage } from './actions';
import { ActionStatus as ACTION_STATUS } from '../common';

const initialState = {
   userId: 0,
   socketId: 0,
   chatList: [],
   newMessage: null,
   status: ACTION_STATUS.default,
   success: null,
   error: null
};

// const resetStatus = (state) =>

export const chatSlice = createSlice({
   name: 'chats',
   initialState,
   reducers: {
      setStatus: (state, { payload }) => {
         const newStatus = payload ?? ACTION_STATUS.default;
         state.status = newStatus;
      },
      setError: (state, { payload }) => {
         const isError = Boolean(payload);
         state.error = isError;
      }
   },
   extraReducers(builder) {
      builder.addCase(fetchChats.fulfilled, (state, action) => {
         console.log('response : ', action.payload);
      });
      builder.addCase(fetchChats.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(fetchChats.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(createChat.fulfilled, (state, action) => {
         console.log('response : ', action.payload);
      });
      builder.addCase(createChat.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(createChat.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(updateChat.fulfilled, (state, action) => {
         console.log('response : ', action.payload);
      });
      builder.addCase(updateChat.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(updateChat.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(deleteChat.fulfilled, (state, action) => {
         console.log('response : ', action.payload);
      });
      builder.addCase(deleteChat.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(deleteChat.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(createMessage.fulfilled, (state, action) => {
         console.log('response : ', action.payload);
      });
      builder.addCase(createMessage.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(createMessage.rejected, (state, action) => {
         console.log('rejected...');
      });
   }
});

export const { actions, name, reducer } = chatSlice;

export default chatSlice.reducer;
