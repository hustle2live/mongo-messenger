import { SocketActionTypes as ServerAction } from './common';

const socketListener = (socket, dispatch, actions = { income: null, connect: null }) => {
   socket.on(ServerAction.CONNECT, (payload) => {
      console.log(ServerAction.CONNECT);
      console.log(payload);
      actions.connect();
   });
   socket.on(ServerAction.NEW_MESSAGE_INCOME, ({ data }) => {
      console.log(ServerAction.NEW_MESSAGE_INCOME);
      console.log(data);
      actions.income(data);
   });
};

export { socketListener };
