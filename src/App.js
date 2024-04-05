import { useState } from 'react';
import './App.css';
function App(){
  const [height,setheight]=useState("");
  const [weight,setweight]=useState("");
  const [bmi,setbmi]=useState(null);
  const [bmistatus,setbmistatus]=useState("");
  const [errormessage,seterrormessage]=useState("");
  const calculateBmi=()=>{
    const isValidHeigth =/^\d+$/.test(height);
    const isValidWeigth =/^\d+$/.test(weight);
    if(isValidHeigth && isValidWeigth){
      const heightInMeters=height/100;
      const bmiValue=weight/(heightInMeters*heightInMeters);
      setbmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setbmistatus("underweight");
      }
      else if(bmiValue>=18.5 && bmiValue<24.9)
      {
        setbmistatus("Normal weight");
      }
      else if(bmiValue>=25 && bmiValue<29.9){
        setbmistatus("Overweight");
      }
      else{
        setbmistatus("Obese");
      }
      seterrormessage("");
    }
    else{
      setbmi(null);
      setbmistatus("");
      seterrormessage("please enter valid numeric values for heigth and weight");
    }
  };
  const clearall=()=>{
    setheight("");
    setweight("");
    setbmi("");
    setbmistatus("");
  }
  return(<>
   <div className='bmi-calculator'>
    <div className='box'></div>
    <div className='data'>
      {errormessage &&
      <p className='error'>{errormessage}</p>}
      <h1>BMI CALCULATOR</h1>
      <div className='input-container'>
        <label htmlFor='height'>Height (cm):</label>
        <input type='text' value={height} id="height" onChange={(e)=>setheight(e.target.value)} />
      </div>
      <div className='input-container'>
        <label htmlFor='weight'>Weight (kg):</label>
        <input type='text' value={weight} id="weight" onChange={(e)=>setweight(e.target.value)} />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      <button onClick={clearall}>Clear</button>
      {bmi !==null &&(
      <div className='result'>
        <p>Your BMI is:{bmi}</p>
        <p>Status:{bmistatus}</p>
      </div>)}
    </div>
   </div>
  </>
  );
} 

export default App;