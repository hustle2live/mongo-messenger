import mongoose from 'mongoose';

const avatarSchema = new mongoose.Schema({
   user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' },
   file_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'files' }
});

const Avatar = mongoose.model('avatars', avatarSchema);

export default Avatar;
