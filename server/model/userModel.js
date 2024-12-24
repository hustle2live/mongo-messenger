const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true }
});

const messageSchema = new mongoose.Schema({
   text: { type: String, required: true },
   user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
   created_at: { type: Date, default: Date.now },
   updated_at: { type: Date, default: null }
});

const chatSchema = new mongoose.Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

const fileSchema = new mongoose.Schema({
   filename: { type: String, required: true },
   key: [String],
   mime_type: { type: String, required: true },
   public_url: String
});

const avatarSchema = new mongoose.Schema({
   user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
   file_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'File' }
});

export const User = mongoose.model('User', userSchema);
export const Message = mongoose.model('Message', messageSchema);
export const Chat = mongoose.model('Chat', chatSchema);
export const File = mongoose.model('File', fileSchema);
export const Avatar = mongoose.model('Avatar', avatarSchema);
