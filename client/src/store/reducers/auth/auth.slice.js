import { createSlice } from '@reduxjs/toolkit';

import { createURL, endpoints } from 'rest-api/api';

const initialState = {
   userId: '676abff495deb53ad300d42a',
   socketId: 0,
   isConnected: false,
   autoResponse: false,
   token: null,
   userEmail: '',
   userPassword: ''
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      createConnection: () => {},
      login: (state, { payload }) => {
         const { socket_id } = JSON.parse(payload);
         return { ...state, socketId: socket_id };
      },
      logout: () => {},
      toggleAutoResponse: (state) => {
         const toggle = !state.autoResponse;
         const url = createURL(endpoints.AUTO_MODE, { autoMode: toggle, userId: state.userId });
         fetch(url, { method: 'GET' });
         state.autoResponse = toggle;
      }
   },
   extraReducers(builder) {}
});

export const { actions, name, reducer } = authSlice;
