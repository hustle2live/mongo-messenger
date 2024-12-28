import { SocketActionTypes as ServerAction } from './common';

const socketListener = (socket, dispatch, actions = { income: null, connect: null }) => {
   socket.on(ServerAction.CONNECT, (payload) => {
      actions.connect(payload);
   });
   socket.on(ServerAction.NEW_MESSAGE_INCOME, ({ data }) => {
      actions.income(data);
   });
};

export { socketListener };
