'use client'

import React, { useEffect, useState } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'


const InternshipForm = () => {
    const [step,setStep] = useState(1);
    const [data,setData] = useState({});

    useEffect(()=>{
        window.scrollTo(0,0);
    },[step])

    return (
        <div style={{marginTop:'100px'}}>
            {step === 1 && <Step1 setStep={setStep} data={data} setData={setData} />}
            {step === 2 && <Step2 setStep={setStep} data={data} setData={setData} />}
            {step === 3 && <Step3 setStep={setStep} data={data} setData={setData} />}
            {step === 4 && <Step4 setStep={setStep} data={data} setData={setData} />}
        </div>
    )
}

export default InternshipForm
