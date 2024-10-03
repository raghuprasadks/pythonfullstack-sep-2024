import React,{useState} from 'react'

const SimpleInterestCalculator = () => {
    const [principal,setPrincipal]=useState(1000)
    const [roi,setRoi]=useState(6)
    const [time,setTime]=useState(2)
    const [si,setSi]=useState()

    const calculateSI=()=>{
        const simpleInterest=(principal*roi*time)/100
        setSi(simpleInterest)
    }

  return (
    <div>
        <h1>Simple Interest Calculator</h1>
        <label>Enter Principal Amount</label>
        <input type="text" value={principal} onChange={(e)=>setPrincipal(e.target.value)}></input><br/>
        <label>Enter Rate of interest</label>
        <input type="text" value={roi} onChange={(e)=>setRoi(e.target.value)}></input><br/>
        <label>Time in years</label>
        <input type="text"  value={time} onChange={(e)=>setTime(e.target.value)}></input><br/>
        <button onClick={calculateSI}>Calculate</button>        
      <h2>Simple Interest is {si}</h2>
    </div>
  )
}

export default SimpleInterestCalculator