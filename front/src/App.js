import React, { useEffect, useState } from 'react';
import InputBox from './InputBox';
import List from './List';
import './App.css';
import API from './api/api';

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    API.getList((resp, err) => {
      if (resp.result)
        setList(resp.data);
    })
  }, []);

  const sendData = (val)=>{
    if(val.trim().length<2)
    {
        alert('Lütfen metin giriniz')
        return;
    }
    
  
    let sendingData ={
      name:val,
      status:1
    };
    API
      .create(
        sendingData,
      (resp, err) => {
      if (resp && resp.result){
        console.log(resp)
        var newList = list;
        newList.push(sendingData)
        
        setList(newList);
      }

      setTimeout(() => {
        console.log(list)
      }, 100);
        
    })
    
  }

  return <div className="App">
            <h2>
              TODO List
            </h2>
            <p />
            <div>
            <InputBox sendData={(val)=>sendData(val)} />
            <List data={list} />
            </div>
          </div>

}

export default App
