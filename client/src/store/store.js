import { configureStore } from '@reduxjs/toolkit';

import { reducer as authReducer } from '@/store/reducers/auth/auth.slice';
import { reducer as chatReducer } from '@/store/reducers/chat/chat.slice';

const store = configureStore({
   reducer: {
      authReducer,
      chatReducer
   }
});

export { store };
