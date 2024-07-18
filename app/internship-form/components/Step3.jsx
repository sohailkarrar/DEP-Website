import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Step3.module.css'; // CSS Modules
import { toast } from 'react-toastify';

const Step3 = ({setStep}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (!data.institute || !data.field || !data.studyYear || !/^\d{4}$/.test(data.studyYear)) {
            toast.warn('Please fill out the form correctly!',{position:'top-right'});
            return;
        }
        setStep(prev=>prev+1);
    };

    return (
        <div className={styles.page3Container}>
            <div className={styles.page3New}>
                <div id={styles.circle1Page3} className={styles.circle}>✔</div>
                <p style={{ padding: '15px 5px 0px' }} >Personal Details</p>
                <div id={styles.circle2Page3} className={styles.circle}>✔</div>
                <p style={{ padding: '15px 5px 0px' }} >Academics Details</p>
                <div id={styles.circle3Page3} className={styles.circle}>3</div>
                <p style={{ padding: '15px 5px 0px' }} >Internship</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.educationInfo}>
                    <label htmlFor="institute">University/College Name</label>
                    <input
                        id="institute"
                        type="text"
                        placeholder="Enter your Institute Name here"
                        {...register('institute', { required: 'Please enter your institute name' })}
                    />
                    {errors.institute && <p>{errors.institute.message}</p>}
                    
                    <label htmlFor="field">Highest Academic Qualification</label>
                    <input
                        id="field"
                        type="text"
                        placeholder="Enter your Degree Name here"
                        {...register('field', { required: 'Please enter your degree name' })}
                    />
                    {errors.field && <p>{errors.field.message}</p>}
                    
                    <label htmlFor="studyYear">Year of Completion</label>
                    <input
                        id="studyYear"
                        type="text"
                        placeholder="Enter Year of Completion"
                        {...register('studyYear', {
                            required: 'Please enter your year of completion',
                            pattern: {
                                value: /^\d{4}$/,
                                message: 'Please enter a valid 4-digit year'
                            }
                        })}
                    />
                    {errors.studyYear && <p>{errors.studyYear.message}</p>}
                </div>
                <div className={styles.page3ForButton}>
                    <button type="submit" className={styles.page3Button}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default Step3;
