import { SocketActionTypes as ServerAction } from './common';

const socketListener = (socket) => {
   socket.on(ServerAction.CONNECT, ({ socketId }) => {});
//    socket.on(ServerAction.CHAT_DELETE, ({ chatId }) => {});
//    socket.on(ServerAction.CHAT_UPDATE, ({ chatId, chatData }) => {});
   socket.on(ServerAction.NEW_MESSAGE_INCOME, ({ chatId, messageData }) => {});
//    socket.on(ServerAction.MESSAGE_UPDATE, ({ chatId, messageData }) => {});
//    socket.on(ServerAction.MESSAGE_DELETE, ({ chatId, messageId }) => {});
};

export { socketListener };
