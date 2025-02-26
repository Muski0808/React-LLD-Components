import React,{useState, useEffect} from 'react'

function App() {

  const[time, setTime]= useState("")
  const[is24HourFormat,setIs24HourFormat]= useState(false)

  const formatTime=(hours, minutes, seconds)=>{
    let period= 'AM'
    if(!is24HourFormat){
    if(hours>=12){
      period='PM'
      if(hours>12) hours-=12;
    }else if(hours===0){
      hours=12;
    }
  }

    minutes= minutes<10? `0${minutes}`: minutes;
    seconds= seconds<10?`0${seconds}`: seconds;

    return is24HourFormat?
    `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`:`${hours}:${minutes}:${seconds} ${period}`
  }

  useEffect(()=>{
    const intervalId= setInterval(()=>{
      const now= new Date();
      setTime(formatTime(now.getHours(),now.getMinutes(),now.getSeconds()))
    }, 1000)

    return ()=> clearInterval(intervalId)
  },[is24HourFormat])
  return (
    <div>
      <h1>App</h1>
      <p>{time}</p>
      <button onClick={()=> setIs24HourFormat((prev)=> !prev)}>
        Switch to {is24HourFormat?"12-Hour":"24-Hour"} Format
      </button>
      </div>


  )
}

export default App