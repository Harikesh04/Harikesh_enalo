import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import CustomProgressBar from "./Component/CustomProgressBar/CustomProgressBar.jsx";

const ProgressBar = () => {

    const [inputVal , setInputVal]= useState(20);

    const handleChange = (e) => {
       
        setInputVal(e.target.value);
    }


    
  return (

    <>

    <CustomProgressBar value={inputVal} />
     <Input placeholder='Enter a number...' type='number' max={100}  onChange={handleChange} />
    
    </>
 
  )
}

export default ProgressBar