import { createAsyncThunk } from '@reduxjs/toolkit';

import { ErrorTypes, ActionTypes } from './common';
import { createURL, endpoints } from 'rest-api/api';

const fetchChats = createAsyncThunk(
   ActionTypes.FETCH_CHATS,
   async (_payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const {
            authReducer: { userId }
         } = getState();

         // console.log('status ', status);
         // console.log('userId ', userId);

         const url = createURL(endpoints.CHATS_CRUD, { userId });

         const response = await fetch(url, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         });

         if (!response.ok) {
            throw Error(ErrorTypes.FETCH_CHATS);
         }

         const data = await response.json();

         if (!data) {
            throw Error(ErrorTypes.FETCH_CHATS);
         }

         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const createChat = createAsyncThunk(
   ActionTypes.CREATE_CHAT,
   async (payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const { firstname, lastname } = payload;
         const {
            authReducer: { userId }
         } = getState();

         const url = createURL(endpoints.CHATS_CRUD, { userId });

         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname })
         });

         if (!response.ok) {
            throw Error(ErrorTypes.CREATE_CHAT);
         }

         const data = await response.json();

         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const updateChat = createAsyncThunk(
   ActionTypes.UPDATE_CHAT,
   async (payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const { firstname, lastname, chatId } = payload;

         const {
            authReducer: { userId }
         } = getState();

         const url = createURL(`${endpoints.CHATS_CRUD}/${chatId}`, { userId });

         const response = await fetch(url, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname })
         });

         if (!response.ok) {
            throw Error(ErrorTypes.DELETE_UPDATE);
         }

         const data = await response.json();

         return data;
      } catch (error) {
         console.log(error);
         return rejectWithValue(error);
      }
   }
);

const deleteChat = createAsyncThunk(
   ActionTypes.DELETE_CHAT,
   async (payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const { chatId } = payload;
         const {
            authReducer: { userId }
         } = getState();

         const url = createURL(`${endpoints.CHATS_CRUD}/${chatId}`, { userId });

         const response = await fetch(url, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json'
            }
         });

         if (!response.ok) {
            throw Error(ErrorTypes.DELETE_UPDATE);
         }
         const data = await response.json();

         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const createMessage = createAsyncThunk(
   ActionTypes.ADD_MESSAGE,
   async (payload, { getState, rejectWithValue, dispatch }) => {
      try {
         const { textMessage, chatId } = payload;
         const {
            authReducer: { userId }
         } = getState();

         const url = createURL(endpoints.MESSAGES_CRUD, { userId, chatId });

         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: textMessage, created_at: Date.now })
         });

         if (!response.ok) {
            throw Error(ErrorTypes.DELETE_UPDATE);
         }
         const data = await response.json();

         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export { fetchChats, createChat, updateChat, deleteChat, createMessage };
