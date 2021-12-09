import React, { useEffect, useState } from 'react';
import './App.css';
import API from './api/api';

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    API.getList((resp, err) => {
      console.log(resp);
      if (resp.result)
        setList(resp.data);
    })
  }, []);

  return <div className="App">
            <h2>
              TODO List
            </h2>
            <p />
            <div>
              <input className="FormInput" />
              <button
                type="button"
              >
                ekle
            </button>
              <div className="List" >
              {
                list && list.length > 0 &&
                list.map((item, i) => {
                  return <div
                    className="ListItem"
                    key={i}>
                    <p>
                      {item.name}
                    </p>
                  </div>
                })
              }
              </div>
            </div>
          </div>

}

export default App
