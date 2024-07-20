import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './Step2.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';

const Step2 = ({ setStep,data,setData }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const [image,setImage] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const onSubmit = async(data) => {
        try {
            setIsLoading(true);
            const img  = await uploadImage(image);
            const finalData = {
                fullName:data.name,
                email:data.email,
                gender:data.gender,
                cnicOrPassportNumber:data.cnic,
                whatsappNumber:data.contact,
                picture:img,
                country:data.nationality
            }
            setData(finalData);
            setStep(prev => prev + 1);
        } catch (error) {
            console.log(error);
            toast.error('Error taking in data',{position:'top-right'});
        } finally {
            setIsLoading(false);
        }
    };

    const uploadImage = async(image)=>{
        if(!image){
            toast.warn('Please enter an image!',{position:'top-right'});
            return;
        }
        const formData = new FormData();
        formData.append('image',image);
        try {
            const resp = await axios.post('/api/uploadImage',formData);
            if(resp){
                return resp?.data?.image?.url ?? '';
            }
        } catch (error) {
            toast.error(error?.response?.data?.message ?? "Error uploading image",{position:'top-right'});
            console.log(error);
            return '';
        }
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.page2Container}>
            <div className={styles.page2New}>
                <div id={styles.page2Circle1} className={styles.page2Circle}>✔</div>
                <p style={{ padding: '15px 5px 0px' }}>Personal Details</p>
                <div id={styles.page2Circle2} className={styles.page2Circle}>2</div>
                <p style={{ padding: '15px 5px 0px' }}>Academics Details</p>
                <div id={styles.page2Circle3} className={styles.page2Circle}>3</div>
                <p style={{ padding: '15px 5px 0px' }}>Internship</p>
            </div>
            <form className={styles.page2Form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.page2PersonalInfo}>
                    <label>Full Name</label>
                    <input 
                        className="Full-Name" 
                        type="text" 
                        placeholder="Enter Full Name" 
                        {...register('name', { required: 'Please enter your name' })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label>Email</label>
                    <input 
                        className="Email" 
                        type="text" 
                        placeholder="abc@gmail.com" 
                        {...register('email', {
                            required: 'Please enter your email',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Please enter a valid email'
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label>WhatsApp Number</label>
                    <PhoneInput
                        international
                        defaultCountry="PK"
                        className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                        {...register('contact', { required: 'Please enter your WhatsApp number' })}
                        onChange={(value) => setValue('contact', value)}
                    />
                    {errors.contact && <p>{errors.contact.message}</p>}

                    <label>CNIC or Passport Number</label>
                    <input 
                        className="CNIC" 
                        type="text" 
                        placeholder="Enter your CNIC or Passport number" 
                        {...register('cnic', {
                            required: 'Please enter your CNIC or Passport number',
                            pattern: {
                                value: /^[0-9]{5}-[0-9]{7}-[0-9]$|^[a-zA-Z0-9]{6,9}$/,
                                message: 'Please enter a valid CNIC in the format 12345-1234567-1 or Passport number'
                            }
                        })}
                    />
                    {errors.cnic && <p>{errors.cnic.message}</p>}

                    <div className={styles.page2Row}>
                        <label>Gender:</label>
                        <input 
                            className={styles.page2Option} 
                            type="radio" 
                            name="Gender" 
                            value="Male" 
                            defaultChecked 
                            {...register('gender')}
                        /><label>Male</label>
                        <input 
                            className={styles.page2Option} 
                            type="radio" 
                            name="Gender" 
                            value="Female" 
                            {...register('gender')}
                        /><label>Female</label>
                        <input 
                            className={styles.page2Option} 
                            type="radio" 
                            name="Gender" 
                            value="Others" 
                            {...register('gender')}
                        /><label>Others</label>
                    </div>
                    <div className={styles.page2Row}>
                        <label>Country:</label>
                        <input 
                            className={styles.page2Option} 
                            type="radio" 
                            name="Nationality" 
                            value="Pakistani" 
                            defaultChecked 
                            {...register('nationality')}
                        /><label>Pakistani</label>
                        <input 
                            className={styles.page2Option} 
                            type="radio" 
                            name="Nationality" 
                            value="International" 
                            {...register('nationality')}
                        /><label>International</label>
                    </div>
                </div>
                <div className={styles.page2File}>
                    <h3>Formal Picture</h3>
                    <div className={styles.page2Takephoto}>
                        <label htmlFor="page2Myfile" id={styles.page2File}>
                            <FontAwesomeIcon icon={faUpload} /> Add File
                        </label>
                        <input 
                            type="file" 
                            id="page2Myfile" 
                            name="myfile" 
                            style={{ display: 'none' }} 
                            {...register('file', { required: 'Please upload a formal picture' })}
                            onChange={handleImageChange}
                        />
                        {errors.file && <p>{errors.file.message}</p>}
                    </div>
                    {imagePreview && (
                        <div className={styles.imagePreview}>
                            <img src={imagePreview} alt="Selected"  style={{margin:'10px auto 40px', padding:'10px',maxWidth:'200px',display:'block'}} />
                        </div>
                    )}
                </div>
                <div className={styles.page2ForButton}>
                    <button type="submit" disabled={isLoading} style={{backgroundColor:(isLoading ? 'green' : '')}} className={styles.page2Button}>{isLoading ? 'Loading...' : "Next"}</button>
                </div>
            </form>
        </div>
    );
};

export default Step2;
