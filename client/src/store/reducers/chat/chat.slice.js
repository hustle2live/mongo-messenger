import { createSlice } from '@reduxjs/toolkit';
import { fetchChats, createChat, updateChat, deleteChat } from './actions';
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
      builder.addCase(fetchChats.fulfilled, (state, action) => {});
      builder.addCase(fetchChats.pending, (state, action) => {});
      builder.addCase(fetchChats.rejected, (state, action) => {});
      builder.addCase(createChat.fulfilled, (state, action) => {});
      builder.addCase(createChat.pending, (state, action) => {});
      builder.addCase(createChat.rejected, (state, action) => {});
      builder.addCase(updateChat.fulfilled, (state, action) => {});
      builder.addCase(updateChat.pending, (state, action) => {});
      builder.addCase(updateChat.rejected, (state, action) => {});
      builder.addCase(deleteChat.fulfilled, (state, action) => {});
      builder.addCase(deleteChat.pending, (state, action) => {});
      builder.addCase(deleteChat.rejected, (state, action) => {});
   }
});

export default chatSlice.reducer;
