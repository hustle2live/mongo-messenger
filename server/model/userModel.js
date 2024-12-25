import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'chats' }]
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
