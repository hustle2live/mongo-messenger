import { createAsyncThunk } from '@reduxjs/toolkit';

import { ErrorTypes, ActionTypes } from './common';

const fetchChats = createAsyncThunk(
   ActionTypes.FETCH_CHATS,
   async (_payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const response = await fetch();

         if (!response.ok) rejectWithValue(ErrorTypes.FETCH_CHATS);

         const data = await response.json();

         return data;
      } catch (error) {
         rejectWithValue(error);
      }
   }
);

const createChat = createAsyncThunk(
   ActionTypes.CREATE_CHAT,
   async (_payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const response = await fetch();

         if (!response.ok) rejectWithValue(ErrorTypes.CREATE_CHAT);

         const data = await response.json();

         return data;
      } catch (error) {
         rejectWithValue(error);
      }
   }
);

const updateChat = createAsyncThunk(
   ActionTypes.UPDATE_CHAT,
   async (_payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const response = await fetch();

         if (!response.ok) rejectWithValue(ErrorTypes.DELETE_UPDATE);

         const data = await response.json();

         return data;
      } catch (error) {
         rejectWithValue(error);
      }
   }
);

const deleteChat = createAsyncThunk(
   ActionTypes.DELETE_CHAT,
   async (_payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const response = await fetch();

         if (!response.ok) rejectWithValue(ErrorTypes.DELETE_UPDATE);

         const data = await response.json();

         return data;
      } catch (error) {
         rejectWithValue(error);
      }
   }
);

export { fetchChats, createChat, updateChat, deleteChat };
