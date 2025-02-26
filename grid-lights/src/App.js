import React, { useState } from 'react';
import './App.css'




// Build a 3*3 of light cells where u can click on them to activate(turning green), wen all the cells are activaled
// they will be deactivated one by one in the reverse order they were activated with the interval of 300ms
function Cell({filled, onClick, isDisabled}) {
  return (
    <button type='button' disabled={isDisabled} onClick={onClick} className={filled?"cell cell-activated":"cell"}>
  
    </button>
  )
}


function App() {
  const[order,setOrder]= useState([])
  const[isDeactivated, setIsDeactivated]= useState(false)

  const config=[
    [1,1,1],
    [1,1,1],
    [1,1,1]
  ]
  const deactivateCells=()=>{
    setIsDeactivated(true)
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        if (originalOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivated(false);
          return []; // Ensure the order is empty
        }
        
        // Remove the last activated cell (LIFO order)
        return originalOrder.slice(0, -1);
        
      })
    },300)
  }

  const activateCells=(index)=>{
    const newOrder= [...order, index]
    setOrder(newOrder)
    console.log(newOrder)

    // deactivate
    if(newOrder.length=== config.flat(1).filter(Boolean).length){
      deactivateCells()
    }
  }

  return (
    <div className='wrapper'>
      <div className='grid' style={{
        gridTemplateColumns: `repeat(${config[0].length}, 1fr)` 
      }}>
        {config.flat(1).map((value, index)=>{
          return value? 
          <Cell 
          key={index} 
          filled={order.includes(index)} 
          onClick={()=> activateCells(index)} 
          isDisabled={order.includes(index)||isDeactivated}/>:<span/>
        })}</div></div>
  )
}

export default App