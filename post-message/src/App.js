import './App.css';
import HomePage from './components/HomePage';
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Form from './components/Form';


function App() {
  const [data, setData]=useState([])
  const [text, setText]=useState('')
  const [isLoading, setIsLoading]=useState(false)
  const [error, setError]=useState('')

  

  useEffect(()=>{
    axios.get('http://localhost:2000/')

.then(
!isLoading?res=>{
    console.log(res.data);
    setData(res.data);
    setIsLoading(true);
}:null)
.catch((err)=>{console.log(err)});
})
const submitForm =  (e)=>{
  e.preventDefault();
 text.length<1?
setError('filed with error'):
      axios.post('http://localhost:2000/',{
          message: text,
      })
      .then((res)=>{
        setError('')
        setText('')
        setIsLoading(false)
        
      })
  }
  return (
    <div className="App">
    
      <Form submitForm={submitForm} setText={setText} text={text} data={data}  />
        <HomePage data={data} error={error} />
    
      
    </div>
  );
}

export default App;
