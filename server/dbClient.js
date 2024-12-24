const mongoose = require('mongoose');

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const dbClient = (uri, options = clientOptions) => {
   return {
      connect: async () => {
         try {
            // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
            await mongoose.connect(uri, clientOptions);
            await mongoose.connection.db.admin().command({ ping: 1 });
            console.log('Pinged your deployment. You successfully connected to MongoDB!');
         } catch (error) {
            console.log('- -- - Can not connect to the database - -- -', error);
         }
      }
   };
};

module.exports = dbClient;
