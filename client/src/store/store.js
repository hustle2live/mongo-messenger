import { configureStore } from '@reduxjs/toolkit';

import chatReducer from '@/store/reducers/chat/chat';
import authReducer from '@/store/reducers/auth/auth';

const store = configureStore({
   reducer: {
      auth: authReducer,
      chat: chatReducer
   }
});

export default store;
