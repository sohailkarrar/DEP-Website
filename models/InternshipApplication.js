import mongoose from "mongoose";

const InternshipApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
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
        enum: ['Male', 'Female', 'Other']
    },
    country: {
        type: String,
    },
    university: {
        type: String,
    },
    whatsappNumber: {
        type: String,
    },
    cnicOrPassportNumber: {
        type: String,
    },
    picture: {
        type: String, // assuming the picture is stored as a URL
        required: true
    },
    preferredInternshipDomain: {
        type: String,
    },
    highestAcademicQualification: {
        type: String,
    },
    currentYearOrSemester: {
        type: String,
    },
    resume: {
        type: String, // assuming the resume is stored as a URL
        required: true
    },
    whereDidYouHear: {
        type: String,
    },
    reference: {
        type: String,
    },
    queryOrSuggestion: {
        type: String,
    },
    batchNumber: {
        type: String,
    }
}, {
    timestamps: true
});

const InternshipApplication = mongoose.models.InternshipApplications || mongoose.model('InternshipApplications', InternshipApplicationSchema);

export default InternshipApplication;
