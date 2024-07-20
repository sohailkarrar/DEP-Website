import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Step4.module.css'; // Import the CSS module
import { toast } from 'react-toastify';
import axios from 'axios';

const availableOptions = [
    {
        name: "BBA-B2",
        domains: ["Operation Management", "Business Analyst", "Human Resources", "Finance", "Accounting & Book Keeping", "Email Marketing", "SMM (Social Media Marketing)", "Content Marketing"]
    },
    {
        name: "CS & IT",
        domains: ["Web Development", "Frontend Development", "Backend Development", "Wordpress", "Mobile App Development", "Python", "Java", "C++", "Machine Learning", "UI/UX", "Cyber Security", "Cloud Computing", "Copy Writing", "Social Media Optimization"]
    },
    {
        name: "Engineering & Creative Arts",
        domains: ["Graphic Designing", "Video Editing", "Video Content Creation", "Video Content Animation"]
    },
    {
        name: "Health and Social Sciences",
        domains: ["Virtual Assistant", "SEO (Search Engine Optimization)"]
    },
];

const Step4 = ({ setStep, data, setData }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [selectedName, setSelectedName] = useState(availableOptions[0].name);
    const [availableDomains, setAvailableDomains] = useState(availableOptions[0].domains);
    const [resume, setResume] = useState(null);
    const [resumeFileName, setResumeFileName] = useState('');

    const onSubmit = async (newData) => {
        if (!newData.agreement) {
            alert('Please agree to terms and conditions');
            return;
        }
        console.log(newData);
    };

    const uploadResume = async (resume) => {
        try {
            const form = new FormData();
            form.append('file', resume);
            const resp = await axios.post('/api/uploadResume', form);
            if (resp) {
                return resp?.data?.resume?.url ?? '';
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message ?? "Error uploading resume!", { position: 'top-right' });
            return '';
        }
    };

    useEffect(() => {
        const newDomains = availableOptions.find(opt => opt.name === selectedName)?.domains || [];
        setAvailableDomains(newDomains);
    }, [selectedName]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setResume(file);
        setValue('cv', file);
        setResumeFileName(file ? file.name : 'No file chosen');
    };

    return (
        <div className={styles.container}>
            <div className={styles.new}>
                <div id="circle1" className={styles.circle}>✔</div>
                <p>Personal Details</p>
                <div id="circle2" className={styles.circle}>✔</div>
                <p>Academics Details</p>
                <div id="circle3" className={styles.circle}>✔</div>
                <p>Internship</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.domain}>
                    <div className={styles.content}>
                        <h2>Select Field of interest</h2><br />
                        <select className={styles.selectFiled} value={selectedName} {...register('domain_name')} onChange={(e) => { setValue('domain_name', e.target.value); setSelectedName(e.target.value); }}>
                            {availableOptions.map(option => (
                                <option key={option.name} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.domain}>
                    <div className={styles.content}>
                        <h2>Preferred Internship Domain</h2><br />
                        {availableDomains.map((domain, idx) => (
                            <label key={idx}>
                                <input type="radio" value={domain} {...register('domain')} />
                                {domain}
                            </label>
                        ))}
                    </div>
                </div>
                <div className={styles.heard_about}>
                    <div className={styles.content2}>
                        <h3>Where did you hear about Digital Empowerment Pakistan?</h3>
                        {['Social Media (Instagram, Linkedin, etc)', 'Referral (Friends, Colleagues, Relatives, etc)', 'Other'].map((option) =>(option !=='Other')?(
                            <label key={option}>
                                <input type="radio" value={option} {...register('heard')} />
                                {option}
                            </label>
                        ): (
                            <label key={option} htmlFor='rddBtn'>
                                <input type="radio" id='rddBtn' value={option} {...register('heard')} />
                                {option === 'Other' && <input onClick={()=>setValue('heard','Other')} className={styles.otherInput} type="text" placeholder='Other' {...register('heard_other')} />}
                            </label>
                        ))}
                    </div>
                </div>
                <div className={styles.CV}>
                    <div className={styles.content3}>
                        <h3>Upload Your CV:</h3>
                        <label htmlFor="file-upload" className={styles.upload_btn}>
                            <i className="fa fa-cloud-upload-alt"></i> Add File
                            <input
                                type="file"
                                multiple={false}
                                id="file-upload"
                                accept="application/pdf"
                                onChange={handleFileChange}
                            />
                        </label>
                        {resumeFileName && (
                            <div className={styles.file_name}>
                                <h4>Uploaded CV:</h4>
                                <p>{resumeFileName}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.reference}>
                    <div className={styles.content4}>
                        <h3>Reference (IF ANY)</h3>
                        <input type="text" {...register('reference')} placeholder="Your Answer" />
                    </div>
                </div>
                <div className={styles.query}>
                    <div className={styles.content5}>
                        <h3>Any Query or Suggestion?</h3>
                        <input type="text" {...register('query')} placeholder="Your Answer" />
                    </div>
                </div>
                <div className={styles.Agreement}>
                    <div className={styles.content6}>
                        <h3>Acknowledgement</h3>
                        <label>
                            <input type="checkbox" {...register('agreement')} />
                            I have understood the internship details and hereby acknowledge and accept the terms and conditions of the CIP
                        </label>
                    </div>
                </div>
                <div className={styles.for_button}>
                    <button type="submit" className={styles.btton}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Step4;
