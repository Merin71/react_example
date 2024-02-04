import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const StateBasics = () => {
    var[Fname,setFname] = useState("Merin");   // state management .if i click change button,i want change name in the welcome...to the name in textfield to welcomw fname 
    var[val,setVal] = useState();
    var changeName = (e) =>{    //event Happen
        console.log(e.target.value);
        setVal(e.target.value);    //if setFname is decided to change,its only happen
    }
    var finalChange = () =>{
        console.log("button clicked");
        setFname(val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {Fname}</Typography>
        <br/>
        <TextField varient='outlined' onChange={changeName}/>
        <br/><br/>
        <Button variant='contained' onClick={finalChange}>CHANGE</Button>
    </div>
  )
}

export default StateBasics