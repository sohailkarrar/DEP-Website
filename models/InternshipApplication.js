import mongoose from "mongoose";

const InternshipApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    country: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: String,
        required: true
    },
    cnicOrPassportNumber: {
        type: String,
        required: true
    },
    picture: {
        type: String, // assuming the picture is stored as a URL
        required: true
    },
    preferredInternshipDomain: {
        type: String,
        required: true
    },
    highestAcademicQualification: {
        type: String,
        required: true
    },
    currentYearOrSemester: {
        type: String,
        required: true
    },
    resume: {
        type: String, // assuming the resume is stored as a URL
        required: true
    },
    whereDidYouHear: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    queryOrSuggestion: {
        type: String,
        required: false
    },
    batchNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const InternshipApplication = mongoose.models.InternshipApplications || mongoose.model('InternshipApplications', InternshipApplicationSchema);

export default InternshipApplication;
