import mongoose from 'mongoose';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const dbClient = (uri, options = clientOptions) => {
   return {
      connect: async () => {
         try {
            await mongoose.connect(uri, clientOptions);
            await mongoose.connection.db.admin().command({ ping: 1 });
            console.log('Pinged your deployment. You successfully connected to MongoDB!');
         } catch (error) {
            console.log('Error! Can not connect to the database ', error);
         }
      },
      disconnect: async () => {
         await mongoose.disconnect();
         console.log('db disconected');
      }
   };
};

export default dbClient;
