import React,{useEffect} from 'react';
import './List.css';

const List = ({data}) => {

    return (
        <div className="List" >
              {
                data && data.length > 0 &&
                data.map((item, i) => {
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
    );
}

export default List;
