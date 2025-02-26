import React, { useState } from 'react';
import './Checkout.css'

function CheckoutStepper({steps}) {
    const[currentStep, setCurrentStep]= useState(0)
    const nextStep=()=>{
        if(currentStep<steps.length-1){
            setCurrentStep(currentStep+1)
        }
    }
  return (
    <div className='stepper-container'>
        <div className='stepper'>
            {steps.map((step,index)=>(
                <div key={index} className='step'>
                <div className={`circle ${index<=currentStep?"active": ""}`}>
                    {index+1}
                </div>
                <p className={`step-label ${index<= currentStep?"active-text": ""}`}>{step.name}</p>
                </div>
            ))}
        </div>
        <div>{steps[currentStep].Component()}</div>

        <div >
            <button className='next-btn' onClick={nextStep} disabled={currentStep=== steps.length-1}>Next Step</button>
        </div>
    </div>
  )
}

export default CheckoutStepper