import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
   text: { type: String, required: true },
   user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
   created_at: { type: Date, default: Date.now },
   updated_at: { type: Date, default: null }
});

const Message = mongoose.model('messages', messageSchema);

export default Message;
