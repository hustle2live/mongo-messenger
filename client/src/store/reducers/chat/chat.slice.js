import { createSlice } from '@reduxjs/toolkit';
import { fetchChats, createChat, updateChat, deleteChat, createMessage } from './actions';
import { ActionStatus as ACTION_STATUS } from '../common';

const initialState = {
   isOpened: null,
   chatList: [],
   newMessage: null,
   status: ACTION_STATUS.default,
   success: null,
   error: null
};

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
      },
      setOpened: (state, { payload }) => {
         state.isOpened = payload ?? null;
      },
      setChats: (state, action) => {
         const chats = action?.payload ?? [];
         return { ...state, chatList: chats };
      }
   },
   extraReducers(builder) {
      builder.addCase(fetchChats.fulfilled, (state, { payload }) => {
         return { ...state, chatList: payload };
      });
      builder.addCase(fetchChats.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(fetchChats.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(createChat.fulfilled, (state, { payload }) => {
         const updatedChat = [...state.chatList, payload];
         return { ...state, chatList: updatedChat };
      });
      builder.addCase(createChat.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(createChat.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(updateChat.fulfilled, (state, { payload }) => {
         const updated = state.chatList.map((chat) => (chat._id === payload._id ? payload : chat));
         return { ...state, chatList: updated };
      });
      builder.addCase(updateChat.pending, (state, { payload }) => {
         console.log('response : ', payload);
      });
      builder.addCase(updateChat.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(deleteChat.fulfilled, (state, { payload }) => {
         const { _id } = payload;
         const updated = state.chatList.filter((chat) => chat._id !== _id);
         return { ...state, chatList: updated };
      });
      builder.addCase(deleteChat.pending, (state, action) => {
         console.log('pending...');
      });
      builder.addCase(deleteChat.rejected, (state, action) => {
         console.log('rejected...');
      });

      builder.addCase(createMessage.fulfilled, (state, { payload }) => {
         const updated = state.chatList.map((chat) => (chat._id === payload._id ? payload : chat));
         return { ...state, chatList: updated };
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
