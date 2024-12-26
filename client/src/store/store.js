import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@/store/reducers/auth/auth.slice';
import chatReducer from '@/store/reducers/chat/chat.slice';

const store = configureStore({
   reducer: {
      auth: authReducer,
      chat: chatReducer
   }
});

export default store;
