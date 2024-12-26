const ActionTypes = {
   FETCH_CHATS: 'chats/fetch',
   CREATE_CHAT: 'chats/create',
   UPDATE_CHAT: 'chats/update',
   DELETE_CHAT: 'chats/delete'
};

const ErrorTypes = {
   FETCH_CHATS: 'Error while getting a list of chats.',
   CREATE_CHAT: 'Error while register a new chat.',
   DELETE_UPDATE: 'Error while updating a chat.',
   UNKNOWN: 'Error. Something went wrong.'
};

export { ActionTypes, ErrorTypes };
