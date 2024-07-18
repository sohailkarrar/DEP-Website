import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    fileId: String,
    name: String,
    size: Number,
    filePath: String,
    url: String,
    fileType: String,
    thumbnailUrl: String,
},{timestamps:true});

const Image = mongoose.models.Images || mongoose.model('Images',imageSchema);

export default Image;
