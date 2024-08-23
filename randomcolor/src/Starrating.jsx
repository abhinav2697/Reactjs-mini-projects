import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./style.css";
const Starrating = ({noOfStars=5}) => {
    const [rating, setRating] = useState();
    const [hover, setHover] = useState();

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }
    function handleMouseLeave() {
        setHover(rating);
    }
  return (
      <div>{
          [...Array(noOfStars)].map((_, index) => {
              index += 1;
              return (
                  <FaStar
                      key={index}
                      className={index<=(hover||rating)?"active":"inactive"}
                      onClick={() => handleClick(index)}
                      onMouseMove={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      size={40}
                  />
              )
          })
      }</div>
  )
}

export default Starrating