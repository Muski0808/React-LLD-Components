import React from 'react';
import "./App.css";
import CheckoutStepper from './CheckoutStepper';

const CHECKOUT_STEPS =[
  {
    name: "Customer info",
    Component:()=> <div>Provide your contact details</div>
  },
  {
    name: "Shipping info",
    Component:()=> <div>Enter your shipping Address</div>
  },
  {
    name: "Payment",
    Component:()=> <div>Complete payment for your order</div>
  },
  {
    name: "Delivered",
    Component:()=> <div>Your order has been delivered</div>
  }
]

function App() {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper  steps={CHECKOUT_STEPS}/>
    </div>
  )
}

export default App