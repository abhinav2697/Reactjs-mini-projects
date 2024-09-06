import React, { useRef, useState } from 'react';
import UseOutSideClick from "./UseOutSideClick";

const UseOnClickOutSideTest = () => {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutSideClick(ref, () => setShowContent(false));
  return (
      <div>
          <h1>UseOnClickOutSideTest</h1>
          {showContent ? (
              <div ref={ref}>
                  <h1>This is a random content</h1>
                  <p>
                      Please click outside this close this.
                  </p>
              </div>
          ) : (<button style={{width:'100px',height:'100px'}} onClick={()=>setShowContent(true)} >click on button and outside</button>)
          }
      
      </div>
  )
}

export default UseOnClickOutSideTest