import {z} from 'zod';

const applicationValidator = z.object({
    applyFor: z.string().min(1, 'ApplyFor is required'),
    fullName: z.string().min(1, 'FullName is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    whatsappNumber: z.string().min(1, 'Whatsapp number is required'),
    gender: z.string().min(1, 'Gender is required'),
    instituteName: z.string().min(1, 'Institute name is required'),
    fieldOfStudy: z.string().min(1, 'Field of study is required'),
    yearOfStudy: z.string().min(1, 'Year of study is required'),
    region: z.string().min(1, 'Region is required'),
    facebookLink: z.string().optional(),
    instagramLink: z.string().optional(),
    linkedinLink: z.string().optional(),
    previousExperiences: z.string().min(1, 'Previous experiences are required'),
    bestSkills: z.array(z.string()).min(1, 'Best skills are required'),
});
export default applicationValidator;
