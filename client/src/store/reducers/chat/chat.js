import { fetchChats, createChat, updateChat, deleteChat, createMessage } from './actions';

import { actions } from './chat.slice';

const allActions = {
   ...actions,
   fetchChats,
   createChat,
   updateChat,
   deleteChat,
   createMessage
};

export { allActions as actions };
export { reducer } from './chat.slice';
