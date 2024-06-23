// pages/ApplicationForm.js
'use client'
import React, { useState } from 'react';
import styles from './page.module.css'; 
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

const skills = [
    'Leadership',
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Creativity',
    'Time Management',
];

function ApplicationForm() {
    const [loading,setLoading] = useState(false);
    const [formData, setFormData] = useState({
        applyFor: '',
        name: '',
        email: '',
        whatsapp: '',
        gender: '',
        institute: '',
        field: '',
        year: '',
        region: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        experience: '',
        skills: []
    });
    const router = useRouter();

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const updatedSkills = checked
                ? [...formData.skills, value]
                : formData.skills.filter(skill => skill !== value);
            setFormData(prevState => ({
                ...prevState,
                skills: updatedSkills
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = {
                applyFor:formData.applyFor,
                fullName:formData.name,
                email:formData.email,
                whatsappNumber:formData.whatsapp,
                gender:formData.gender,
                instituteName:formData.institute,
                fieldOfStudy:formData.field,
                yearOfStudy:formData.year,
                region:formData.region,
                facebookLink:formData.facebook,
                instagramLink:formData.instagram,
                linkedinLink:formData.linkedin,
                previousExperiences:formData.experience,
                bestSkills:formData.skills
            }
            submitApplication(data);
        } else {
            toast.error("Please Fill All Fields Accurately.",{position:'bottom-right'});
        }
    };

    const submitApplication = async(data)=>{
        setLoading(true);
        try {
            const resp = await axios.post('/api/applicants',data);
            if(resp){
                setLoading(false);
                router.push('/thanks-app');
            }
        } catch (error) {
            setLoading(false);
            console.log('Error',error)
            toast.error(error.response.data.message,{position:'bottom-right'});
        }
    }

    const validateForm = () => {
        const errors = {};
        if (!formData.applyFor) {
            errors.applyFor = 'Apply For field is required';
        }
        if (!formData.name) {
            errors.name = 'Name field is required';
        }
        if (!formData.email) {
            errors.email = 'Email field is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.whatsapp) {
            errors.whatsapp = 'WhatsApp Number field is required';
        } else if (!/^\d{11}$/.test(formData.whatsapp)) {
            errors.whatsapp = 'WhatsApp Number must be a valid 11-digit number';
        }
        if (!formData.gender) {
            errors.gender = 'Gender field is required';
        }
        if (!formData.institute) {
            errors.institute = 'Institute Name field is required';
        }
        if (!formData.field) {
            errors.field = 'Field of Study field is required';
        }
        if (!formData.year) {
            errors.year = 'Year of Study field is required';
        }
        if (!formData.region) {
            errors.region = 'Region field is required';
        }
        if (formData.skills.length === 0) {
            errors.skills = 'Select at least one skill';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className={styles.container}>
            <ToastContainer />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.section}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Apply For</label>
                        <div className={styles.radioGroup}>
                            <input
                                className={styles.radioInput}
                                type="radio"
                                name="applyFor"
                                id="director"
                                value="Director"
                                onChange={handleInputChange}
                            />
                            <label className={styles.radioLabel} htmlFor="director">Director</label>
                            <input
                                className={styles.radioInput}
                                type="radio"
                                name="applyFor"
                                id="ambassador"
                                value="Ambassador"
                                onChange={handleInputChange}
                            />
                            <label className={styles.radioLabel} htmlFor="ambassador">Ambassador</label>
                        </div>
                        {formErrors.applyFor && <p className={styles.error}>{formErrors.applyFor}</p>}
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            className={`${styles.input} ${formErrors.name && styles.errorInput}`}
                            id="name"
                            name="name"
                            placeholder="Enter Your Name Here"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            className={`${styles.input} ${formErrors.email && styles.errorInput}`}
                            id="email"
                            name="email"
                            placeholder="Enter Your Email Here"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="whatsapp" className={styles.label}>WhatsApp Number</label>
                        <input
                            type="text"
                            className={`${styles.input} ${formErrors.whatsapp && styles.errorInput}`}
                            id="whatsapp"
                            name="whatsapp"
                            placeholder="Enter Your WhatsApp Number Here"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                        />
                        {formErrors.whatsapp && <p className={styles.error}>{formErrors.whatsapp}</p>}
                    </div>

                    <label className={styles.label}>Gender</label>
                    <div className={styles.radioGroup}>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleInputChange}
                        />
                        <label className={styles.radioLabel} htmlFor="male">Male</label>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleInputChange}
                        />
                        <label className={styles.radioLabel} htmlFor="female">Female</label>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            name="gender"
                            id="others"
                            value="Others"
                            checked={formData.gender === 'Others'}
                            onChange={handleInputChange}
                        />
                        <label className={styles.radioLabel} htmlFor="others">Others</label>
                    </div>
                    {formErrors.gender && <p className={styles.error}>{formErrors.gender}</p>}
                </div>

                <div className={styles.section}>
                    <div className={styles.formGroup}>
                        <label htmlFor="institute" className={styles.label}>Institute Name</label>
                        <input
                            type="text"
                            className={`${styles.input} ${formErrors.institute && styles.errorInput}`}
                            id="institute"
                            name="institute"
                            placeholder="Enter Your Institute Name Here"
                            value={formData.institute}
                            onChange={handleInputChange}
                        />
                        {formErrors.institute && <p className={styles.error}>{formErrors.institute}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="field" className={styles.label}>Field of Study</label>
                        <input
                            type="text"
                            className={`${styles.input} ${formErrors.field && styles.errorInput}`}
                            id="field"
                            name="field"
                            placeholder="Enter Your Degree Name Here"
                            value={formData.field}
                            onChange={handleInputChange}
                        />
                        {formErrors.field && <p className={styles.error}>{formErrors.field}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="year" className={styles.label}>Year of Study</label>
                        <input
                            type="text"
                            className={`${styles.input} ${formErrors.year && styles.errorInput}`}
                            id="year"
                            name="year"
                            placeholder="Enter Your Passing Year Here"
                            value={formData.year}
                            onChange={handleInputChange}
                        />
                        {formErrors.year && <p className={styles.error}>{formErrors.year}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="region" className={styles.label}>Choose Region</label>
                        <input
                            type="text"
                            className={`${styles.input} ${formErrors.region && styles.errorInput}`}
                            id="region"
                            name="region"
                            value={formData.region}
                            onChange={handleInputChange}
                        />
                        {formErrors.region && <p className={styles.error}>{formErrors.region}</p>}
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.formGroup}>
                        <label htmlFor="facebook" className={styles.label}>Facebook Link</label>
                        <input
                            type="url"
                            className={styles.input}
                            id="facebook"
                            name="facebook"
                            placeholder="Optional"
                            value={formData.facebook}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="instagram" className={styles.label}>Instagram Link</label>
                        <input
                            type="url"
                            className={styles.input}
                            id="instagram"
                            name="instagram"
                            placeholder="Optional"
                            value={formData.instagram}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="linkedin" className={styles.label}>LinkedIn Link</label>
                        <input
                            type="url"
                            className={styles.input}
                            id="linkedin"
                            name="linkedin"
                            placeholder="Optional"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.formGroup}>
                        <label htmlFor="experience" className={styles.label}>Explain your previous experiences</label>
                        <textarea
                            className={`${styles.textarea} ${formErrors.experience && styles.errorInput}`}
                            id="experience"
                            name="experience"
                            rows="4"
                            value={formData.experience}
                            onChange={handleInputChange}
                        ></textarea>
                        {formErrors.experience && <p className={styles.error}>{formErrors.experience}</p>}
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Select Your Best Skills</label>
                        <div className={styles.checkboxGroup}>
                            {skills.map((skill, index) => (
                                <div className={styles.checkboxItem} key={index} >
                                    <input
                                        className={styles.checkboxInput}
                                        type="checkbox"
                                        name="skills"
                                        id={skill.split(' ').join('_')}
                                        value={skill}
                                        checked={formData.skills.includes(skill)}
                                        onChange={handleInputChange}
                                    />
                                    <label className={styles.checkboxLabel} htmlFor={skill.split(' ').join('_')}>{skill}</label>
                                </div>
                            ))}
                        </div>
                        {formErrors.skills && <p className={styles.error}>{formErrors.skills}</p>}
                    </div>
                </div>

                <button type="submit" disabled={loading} style={{backgroundColor:(loading ? 'green' : '')}} className={styles.submitButton}>{loading ? 'Applying....' :'Apply Now'}</button>
            </form>
        </div>
    );
}

export default ApplicationForm;
