import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
   filename: { type: String, required: true },
   key: [String],
   mime_type: { type: String, required: true },
   public_url: String
});

const File = mongoose.model('files', fileSchema);

export default File;
