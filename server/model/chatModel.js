import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
   messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'messages' }]
});

const Chat = mongoose.model('chats', chatSchema);

export default Chat;
