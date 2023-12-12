import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[principle,setPrinciple]=useState(0);
  const[rate,setRate]=useState(0);
  const[year,setYear]=useState(0);
  const[result,setResult]=useState(0);
  const[principleis,Setprincipleis]=useState(true);
  const[rateis,Setrateis]=useState(true);
  const[yearis,Setyearis]=useState(true);
  
  const calculateinterest=(e)=>{
    e.preventDefault()
    const result=(principle*rate*year)/100;
    setResult(result)
  }

  const handlereset=()=>{
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setResult(0);
  }

  const validate=(e)=>{
    const { name, value } = e.target
    
    if (name === 'principle') {
      setPrinciple(value)

      let isValid = value === '' || !!value.match(/^[0-9,  ]+$/);
      console.log(isValid)
      if (isValid === true) {
        Setprincipleis(true)
      }
      else {
        Setprincipleis(false)
      }
    }
    else if(name==='rate'){

      setRate(value);
      let res = (!!value.match(/^[0-9,  ]+$/));
      if (res === true) {
        Setrateis(true)
      }
      else {
        Setrateis(false)
      }

    }
    else if(name==='year'){

      setYear(value);
      let res = (!!value.match(/^[0-9,  ]+$/));
      if (res === true) {
        Setyearis(true)
      }
      else {
        Setyearis(false)
      }

    }
  }
  

  return (
    <>
    <div className="d-flex justify-content-center align-items-center w-100 mt-5" style={{height:"90vh"}}>
      <div className='bg-light p-5 rounded' style={{width:"500px",boxShadow:"2px 2px 50px 2px green"}}>
      <h1>Simple interest</h1>
      <p>Calculate you're simple interest easily</p>
      <div style={{height:"150px"}} className='bg-warning mt-3 rounded d-flex justify-content-center align-items-center flex-column'>
        <h2>&#8377; {result} </h2>
        <p>Total simple interest</p>
      </div>
      <form action="" className='mt-3' onSubmit={calculateinterest}>

      <TextField name='principle' id="outlined-basic" label="&#x20B9; Principle amount" variant="outlined" className='w-100' onChange={(e) => validate(e)} value={principle}/>
      {
        !principleis&&
        
        <p style={{color:"red"}}>Invald input</p>
        
      }
      <TextField name='rate' id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined" className='w-100 mt-3' value={rate}
      onChange={(e) => validate(e)}/>
      {
        !rateis&&
        
        <p style={{color:"red"}}>Invald input</p>
        
      }

      <TextField name='year' id="outlined-basic" label="Years (no. of yrs)" variant="outlined" className='w-100 mt-3'
      value={year} onChange={(e) => validate(e)}/>
      {
        !yearis&&
        
        <p style={{color:"red"}}>Invald input</p>
        
      }

    <Stack direction="row" spacing={2} className='mt-3'> 
    <Button disabled={principleis&&rateis&&yearis?false:true} variant="contained" className='bg-success  ' style={{height:'50px',width:'200px'}} type='submit'>Calculate</Button>
    <Button variant="contained"  style={{height:'50px',width:'200px',color:'blue'}} onClick={handlereset}>Reset</Button>
    </Stack>
      </form>
      </div>
    
  </div>
  </>
    
  );
}

export default App;
