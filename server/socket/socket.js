const socketResponder = (io) => {
   return {
      emit: (message, data) => {
         io.emit(message, data);
      }
   };
};

const socketHandler = (io) => {
   io.on('connection', (socket) => {
      const connectedMessage = '\x1b[36mA New User Connected \u2713 \x1b[0m';
      console.log(connectedMessage, socket.id);

      const auth = JSON.stringify({
         success: true,
         socket_id: socket.id,
         message: 'login success'
      });

      io.to(socket.id).emit('CONNECT', auth);

      socket.on('disconnect', () => {
         console.log('\x1b[33mUser disconnected \u2298 \x1b[0m');
      });
   });
};

export { socketHandler, socketResponder };
