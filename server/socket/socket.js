const handleSocketConnections = (io) => {
   io.on('connection', (socket) => {
      console.log('\x1b[36mA New User Connected \u2713 \x1b[0m');

      const { userName, userId } = socket.handshake.query;

      console.log('userName ' + userName, 'userId ' + userId);

      if (!userId) {
         const auth = JSON.stringify({
            success: true,
            auth: socket.id,
            message: 'login success'
         });

         io.to(socket.id).emit('LOGIN', auth);
      }

      socket.on('disconnect', () => {
         console.log('\x1b[33mUser disconnected \u2298 \x1b[0m');
      });
   });
};

export default handleSocketConnections;
