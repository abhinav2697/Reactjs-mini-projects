import React, { useState } from 'react';
import data from './data';
import './style.css';
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId===selected?null:getCurrentId);
  }

    return (
      
      <div className="wrapper">
        <button>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
                  <div onClick={()=>handleSingleSelection(dataItem.id) } className="title">
                <h3>{dataItem.title}</h3>
                <span>+</span>
                  </div>
                  {
                      selected === dataItem.id ? 
                          <div className='content'>{dataItem.content}</div>: null
                  }
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
     
    </div>
  );
};

export default Accordian;
