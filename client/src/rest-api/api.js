const endpoints = {
   CHATS_CRUD: 'chats', // ? userId= or /:id for PUT, DELETE, GET one
   MESSAGES_CRUD: 'messages', // ? chatId=  & userId=
   USERS_CRUD: 'users',

   CHATS_FETCH_ALL: 'chats/all', // gets all db chats - only for development
   USERS_FETCH_ALL: 'users/all' // gets all db users - only for development
};

const BASE_URL = process.env.SERVER_URL;

const createURL = (endpoint = '', params = null) => {
   //  paramsType : { a: '111', b: 325, c: 'cat' };
   let query = '';
   if (params) {
      for (const [key, value] of Object.entries(params)) {
         const param = `${key}=${value}&`;
         query += param;
      }
      query = '?' + query.slice(0, -1);
   }
   const urlPath = `${BASE_URL}/api/${endpoint}${query}`;
   return urlPath;
};

export { BASE_URL, createURL, endpoints };
