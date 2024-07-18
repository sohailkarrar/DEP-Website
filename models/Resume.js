import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    asset_id:String,
    public_id:String,
    created_at:Date,
    pages: Number,
    bytes: Number,
    url: String,
    secure_url: String,
    original_filename: String,
});

const Resume = mongoose.models.Resumes || mongoose.model('Resumes',resumeSchema);


export default Resume;

