'use client'
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';

const InternshipForm = () => {
    const { control, handleSubmit, watch } = useForm();
    const [step, setStep] = useState(1);

    const onSubmit = data => {
        console.log(data);
        // handle form submission
    };

    const renderStepOne = () => (
        <>
            <h3>Step 1: Personal Information</h3>
            <Form.Group as={Row} controlId="formFirstName">
                <Form.Label column sm="2">First Name</Form.Label>
                <Col sm="10">
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Form.Control type="text" placeholder="Enter first name" {...field} />}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formLastName">
                <Form.Label column sm="2">Last Name</Form.Label>
                <Col sm="10">
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Form.Control type="text" placeholder="Enter last name" {...field} />}
                    />
                </Col>
            </Form.Group>
            <Button onClick={() => setStep(2)}>Next</Button>
        </>
    );

    const renderStepTwo = () => (
        <>
            <h3>Step 2: Educational Background</h3>
            <Form.Group as={Row} controlId="formUniversity">
                <Form.Label column sm="2">University</Form.Label>
                <Col sm="10">
                    <Controller
                        name="university"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Form.Control type="text" placeholder="Enter university" {...field} />}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formDegree">
                <Form.Label column sm="2">Degree</Form.Label>
                <Col sm="10">
                    <Controller
                        name="degree"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Form.Control type="text" placeholder="Enter degree" {...field} />}
                    />
                </Col>
            </Form.Group>
            <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={() => setStep(3)}>Next</Button>
        </>
    );

    const renderStepThree = () => (
        <>
            <h3>Step 3: Internship Preferences</h3>
            <Form.Group as={Row} controlId="formDepartment">
                <Form.Label column sm="2">Preferred Department</Form.Label>
                <Col sm="10">
                    <Controller
                        name="department"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Form.Control type="text" placeholder="Enter department" {...field} />}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formStartDate">
                <Form.Label column sm="2">Preferred Start Date</Form.Label>
                <Col sm="10">
                    <Controller
                        name="startDate"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Form.Control type="date" {...field} />}
                    />
                </Col>
            </Form.Group>
            <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
            <Button type="submit">Submit</Button>
        </>
    );

    return (
        <Container className={styles.internshipForm}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && renderStepOne()}
                {step === 2 && renderStepTwo()}
                {step === 3 && renderStepThree()}
            </Form>
        </Container>
    );
};

export default InternshipForm;
