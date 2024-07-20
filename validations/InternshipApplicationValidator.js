import { z } from 'zod';

const internshipApplicationSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    gender: z.enum(["Male", "Female", "Other"], "Gender must be Male, Female, or Other"),
    country: z.string().min(1, "Country is required"),
    university: z.string().min(1, "University/College is required"),
    whatsappNumber: z.string().min(1, "WhatsApp number is required"),
    cnicOrPassportNumber: z.string().min(1, "CNIC or Passport Number is required"),
    picture: z.string().url("Invalid URL for picture"),
    preferredInternshipDomain: z.string().min(1, "Preferred Internship Domain is required"),
    highestAcademicQualification: z.string().min(1, "Highest Academic Qualification is required"),
    currentYearOrSemester: z.string().min(1, "Current Year / Semester is required"),
    resume: z.string().url("Invalid URL for resume"),
    whereDidYouHear: z.string().min(1, "This field is required"),
    reference: z.string().min(1, "Reference is required"),
    queryOrSuggestion: z.string().optional(),
    batchNumber: z.string().min(1, "Batch Number is required")
});

export default internshipApplicationSchema;